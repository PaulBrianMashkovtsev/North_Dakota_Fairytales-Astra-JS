export const SUPPORTED_LANGS = [
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

export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

const ensureTrailingSlash = (path: string) => {
  if (!path.startsWith("/")) path = `/${path}`;
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
};

const SITE_FALLBACK = "https://northdakotafairytales.org";

const normalizeSite = (site: unknown) => {
  // In Astro, `Astro.site` is typically a string, but it may not be in all contexts.
  const siteStr = site == null ? "" : typeof site === "string" ? site : String(site);
  const finalSite = siteStr || SITE_FALLBACK;
  return finalSite.endsWith("/") ? finalSite.slice(0, -1) : finalSite;
};

/**
 * Removes the leading `/{lang}/` segment when the first path segment is a supported language code.
 * Examples:
 * - `/en/faq/` -> `/faq/`
 * - `/es/` -> `/`
 * - `/` -> `/`
 * - `/index1/` -> `/` (no lang prefix => fall back to homepage equivalents)
 */
export const getPathWithoutLangPrefix = (pathname: string) => {
  const p = ensureTrailingSlash(pathname);

  const firstSegment = p.split("/")[1]; // split keeps first empty segment due to leading '/'
  if (SUPPORTED_LANGS.includes(firstSegment as SupportedLang)) {
    // Remove `/<firstSegment>` prefix, keep the rest (which starts with '/' or is '/').
    return p.slice(firstSegment.length + 1);
  }

  return "/";
};

export const buildHreflangNetwork = (site: unknown, pathname: string) => {
  const normalizedSite = normalizeSite(site);
  const relPath = getPathWithoutLangPrefix(pathname); // '/' or '/some_route/'

  const alternates = SUPPORTED_LANGS.map((lang) => {
    const href =
      relPath === "/"
        ? `${normalizedSite}/${lang}/`
        : `${normalizedSite}/${lang}${ensureTrailingSlash(relPath)}`;

    return { hreflang: lang, href };
  });

  return {
    xDefault: `${normalizedSite}/`,
    alternates,
  };
};

