/**
 * Astro `trailingSlash: "always"` — HTML routes must use a trailing `/` or static hosts may 404.
 */
export function withTrailingSlash(path: string): string {
    const p = path.trim();
    if (!p || p === "/") return "/";
    return p.endsWith("/") ? p : `${p}/`;
}

/**
 * Canonical URLs for song pages (content collection + recommendations under Old Snow Music).
 */
export function oldSnowSongHref(lang: string, slug: string): string {
    return withTrailingSlash(`/${lang}/old-snow-music/songs/${slug}`);
}
