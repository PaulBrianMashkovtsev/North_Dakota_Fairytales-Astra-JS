/**
 * Google Search Console / VideoObject: uploadDate must be ISO 8601 with timezone.
 * Example: 2024-01-01T08:00:00+00:00
 */
const FALLBACK = "2024-01-01T00:00:00+00:00";

export function normalizeVideoUploadDate(
    input: string | null | undefined,
): string {
    const raw = (input ?? "").trim();
    if (!raw) return FALLBACK;

    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
        return `${raw}T00:00:00+00:00`;
    }

    if (raw.includes("T") && raw.endsWith("Z")) {
        return raw.replace(/Z$/, "+00:00");
    }

    if (/[+-]\d{2}:\d{2}$/.test(raw)) {
        return raw;
    }

    const noMs = raw.replace(/\.\d{3,}$/, "");
    const m = noMs.match(
        /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})([+-]\d{2}:\d{2})?$/,
    );
    if (m) {
        if (m[2]) return noMs;
        return `${m[1]}+00:00`;
    }

    return FALLBACK;
}
