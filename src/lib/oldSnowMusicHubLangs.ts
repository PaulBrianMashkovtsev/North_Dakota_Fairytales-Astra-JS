/**
 * Locales that get /[lang]/old-snow-music/* routes and the Winter Magic → Winter Music link.
 * Song markdown and YouTube variants remain en|es|fr|ar; UI falls back via oldSnowContentLang().
 */
export const OLD_SNOW_MUSIC_HUB_LANGS = [
    "en",
    "es",
    "fr",
    "ar",
    "ru",
    "ur",
    "hi",
    "bn",
    "fa",
    "pt",
    "ms",
    "id",
    "de",
    "ca",
    "az",
    "hy",
    "haw",
    "tt",
] as const;

export type OldSnowMusicHubLang = (typeof OLD_SNOW_MUSIC_HUB_LANGS)[number];

export const OLD_SNOW_MUSIC_CONTENT_LANGS = ["en", "es", "fr", "ar"] as const;
export type OldSnowMusicContentLang = (typeof OLD_SNOW_MUSIC_CONTENT_LANGS)[number];

export function oldSnowContentLang(lang: string | undefined): OldSnowMusicContentLang {
    const l = lang ?? "en";
    return (OLD_SNOW_MUSIC_CONTENT_LANGS as readonly string[]).includes(l)
        ? (l as OldSnowMusicContentLang)
        : "en";
}

/** en/es/fr/ar: кнопка Snowy Music → search, тексты песен, маршруты songs/* и три search_* страницы. */
export function oldSnowHasFullSongHub(lang: string | undefined): boolean {
    return (OLD_SNOW_MUSIC_CONTENT_LANGS as readonly string[]).includes(lang ?? "");
}

/** Статические пути только для главной /[lang]/old-snow-music/ (все языки хаба). */
export function oldSnowHubStaticPaths(): { params: { lang: string } }[] {
    return OLD_SNOW_MUSIC_HUB_LANGS.map((lang) => ({ params: { lang } }));
}

/** Статические пути только для search_index / search_animals / search_famous — en/es/fr/ar. */
export function oldSnowSearchPagesStaticPaths(): { params: { lang: string } }[] {
    return OLD_SNOW_MUSIC_CONTENT_LANGS.map((lang) => ({ params: { lang } }));
}

/** @deprecated Используйте oldSnowSearchPagesStaticPaths */
export const oldSnowFullHubStaticPaths = oldSnowSearchPagesStaticPaths;

const OLD_SNOW_HREFLANG_CONTENT_LANGS_ONLY = [
    "search_index",
    "search_animals",
    "search_famous",
    "songs",
] as const;

/**
 * Для hreflang: search_* и songs/* — только en|es|fr|ar; остальные пути хаба — все языки.
 */
export function oldSnowHubHreflangLangs(pathSuffix: string): readonly string[] {
    const trimmed = pathSuffix.replace(/^\//, "").replace(/\/+$/, "");
    if (!trimmed) return OLD_SNOW_MUSIC_HUB_LANGS;
    const seg = trimmed.split("/")[0] ?? "";
    return (OLD_SNOW_HREFLANG_CONTENT_LANGS_ONLY as readonly string[]).includes(seg)
        ? OLD_SNOW_MUSIC_CONTENT_LANGS
        : OLD_SNOW_MUSIC_HUB_LANGS;
}

/** For RegExp: ^/(${OLD_SNOW_HUB_LANGS_REGEX})/old-snow-music... */
export const OLD_SNOW_HUB_LANGS_REGEX = OLD_SNOW_MUSIC_HUB_LANGS.join("|");

/** BCP-47 tags for JSON-LD `inLanguage` (Brazilian Portuguese uses pt-BR; URL stays /pt/). */
export function oldSnowHubJsonLdInLanguages(): string[] {
    return OLD_SNOW_MUSIC_HUB_LANGS.map((code) => (code === "pt" ? "pt-BR" : code));
}

const OLD_SNOW_SITE = "https://northdakotafairytales.org";

/** Shared JSON-LD for winter hub story pages (animals, famous places, etc.). */
export function oldSnowWinterProgramJsonLd(): Record<string, unknown> {
    return {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        name: "North Dakota Fairytales",
        description:
            "Quiet winter stories and natural magic for children across the globe.",
        provider: {
            "@type": "Organization",
            name: "North Dakota Fairytales",
            url: OLD_SNOW_SITE,
        },
        hasPart: [
            {
                "@type": "CreativeWork",
                name: "The Great Bison",
                audience: "Children",
            },
            {
                "@type": "CreativeWork",
                name: "Sky Dancers (Northern Lights)",
                audience: "Children",
            },
        ],
        inLanguage: oldSnowHubJsonLdInLanguages(),
    };
}
