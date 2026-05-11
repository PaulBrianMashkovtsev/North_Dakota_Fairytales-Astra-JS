import { songs, songIsPublishedInLang, SUPPORTED_LANGS } from "../data/songs.js";

export const SEO_SONG_LANGS = SUPPORTED_LANGS as readonly ("en" | "es" | "fr" | "ar")[];

const TRAILING_SLASH = /\/+$/;

/**
 * Absolute URL with trailing slash (matches `trailingSlash: "always"` and `@astrojs/sitemap`).
 */
export function absoluteUrlWithTrailingSlash(siteOrigin: string, pathname: string): string {
    const base = siteOrigin.replace(TRAILING_SLASH, "");
    if (!pathname || pathname === "/") return `${base}/`;
    const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
    const noTrail = path.replace(TRAILING_SLASH, "");
    return `${base}${noTrail}/`;
}

/**
 * Normalizes pathname (strip trailing slash except root).
 */
export function normalizePathname(pathname: string): string {
    if (!pathname || pathname === "/") return "/";
    return pathname.replace(TRAILING_SLASH, "") || "/";
}

/**
 * Match new or legacy song URL. Returns language and slug for canonical / hreflang.
 */
export function parseSongPagePath(pathname: string): { lang: string; slug: string } | null {
    const p = normalizePathname(pathname);
    const newFmt = p.match(
        /^\/(en|es|fr|ar)\/old-snow-music\/songs\/([^/]+)$/,
    );
    if (newFmt) {
        return { lang: newFmt[1], slug: newFmt[2] };
    }
    const legacy = p.match(/^\/(en|es|fr|ar)\/song\/([^/]+)$/);
    if (legacy) {
        return { lang: legacy[1], slug: legacy[2] };
    }
    return null;
}

export function oldSnowSongAbsoluteUrl(
    origin: string,
    lang: string,
    slug: string,
): string {
    const base = origin.replace(TRAILING_SLASH, "");
    return `${base}/${lang}/old-snow-music/songs/${slug}/`;
}

/**
 * If the path is a song page (new or legacy), returns canonical (always new URL shape),
 * x-default (en), and hreflang alternates filtered by songIsPublishedInLang.
 * Returns null if the path is not a song page.
 */
export function resolveSongPageSeo(
    pathname: string,
    siteOrigin: string,
): {
    canonicalHref: string;
    xDefaultHref: string;
    hreflangAlternates: { hreflang: string; href: string }[];
} | null {
    const parsed = parseSongPagePath(pathname);
    if (!parsed) return null;

    const origin = siteOrigin.replace(TRAILING_SLASH, "");
    const { lang: currentLang, slug } = parsed;

    const song = songs.find((s) => s.slug === slug);

    const canonicalHref = oldSnowSongAbsoluteUrl(origin, currentLang, slug);
    const xDefaultHref = oldSnowSongAbsoluteUrl(origin, "en", slug);

    const hreflangAlternates: { hreflang: string; href: string }[] = [];
    for (const l of SEO_SONG_LANGS) {
        if (song && !songIsPublishedInLang(song, l)) continue;
        hreflangAlternates.push({
            hreflang: l,
            href: oldSnowSongAbsoluteUrl(origin, l, slug),
        });
    }

    return { canonicalHref, xDefaultHref, hreflangAlternates };
}
