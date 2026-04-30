/**
 * Astro content `entry.id` may use backslashes on Windows; normalize for regex/prefix checks.
 */
export function normalizeContentEntryId(id: string): string {
    return id.replace(/\\/g, "/");
}
