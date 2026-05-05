// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { getSitemapI18nLocales } from "./src/lib/hreflang";

/** Production origin; replace if the deploy URL changes. */
const SITE = "https://northdakotafairytales.org";

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: getSitemapI18nLocales(),
      },
      filter: (page) => {
        if (page.includes("/index1") || page.includes("/404")) return false;
        try {
          const u = new URL(page);
          // Root is the language hub, not `en` content — omit so it is not i18n-grouped with `/en/`.
          if (u.pathname === "/" || u.pathname === "") return false;
        } catch {
          return false;
        }
        return true;
      },
    }),
  ],
});
