/**
 * Generates Markdown entries under src/content/blog/{lang}/old-snow-music/songs/
 * from src/data/songs.js (single write path for SEO / old-snow-music routes).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const songsModuleUrl = pathToFileURL(path.join(root, "src/data/songs.js")).href;
const { songs, songIsPublishedInLang, SUPPORTED_LANGS } = await import(songsModuleUrl);

const LANG_ICON_CATS = new Set([
    "farm",
    "guests",
    "holiday",
    "nd",
    "northern_lights",
    "roosevelt",
]);

/** First category → icons_search_buttons/*.png filename */
function iconFileForSong(song, lang) {
    const cat = song.categories?.[0] ?? "nd";
    if (LANG_ICON_CATS.has(cat)) {
        return `${cat}_${lang}.png`;
    }
    if (cat === "buffalo") {
        return "buffolo.png";
    }
    return `${cat}.png`;
}

function frontmatter(obj) {
    const lines = ["---"];
    for (const [k, v] of Object.entries(obj)) {
        lines.push(`${k}: ${JSON.stringify(v)}`);
    }
    lines.push("---", "");
    return lines.join("\n");
}

let written = 0;
for (const song of songs) {
    for (const lang of SUPPORTED_LANGS) {
        if (!songIsPublishedInLang(song, lang)) continue;

        const dir = path.join(
            root,
            "src/content/blog",
            lang,
            "old-snow-music/songs",
        );
        fs.mkdirSync(dir, { recursive: true });

        const title =
            song.translations?.[lang]?.title?.trim() ||
            song.translations?.en?.title ||
            song.slug;

        const fmObj = {
            title,
            songSlug: song.slug,
            icon: iconFileForSong(song, lang),
        };

        const outPath = path.join(dir, `${song.slug}.md`);
        fs.writeFileSync(outPath, frontmatter(fmObj), "utf8");
        written++;
    }
}

console.log(`generate-blog-songs: wrote ${written} markdown files.`);
