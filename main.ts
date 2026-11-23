// Six Words, One Story — make.fun entry
// Writes one complete six-word story to /output/entry.txt
//
// The story: a deadline-night tragedy in six words. The Wi-Fi dies, the
// deadline (cruelly) survives, and the narrator is left to cry — a whole
// arc (setup, turn, punchline) in one breath, with the reader left to
// imagine everything in between.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const STORY = "Wi-Fi died. Deadline lived. I cried.";

// Guard: the sealed scorer only accepts 1–60 chars of non-blank UTF-8 text,
// and the judge only scores a story told in exactly six words. Refuse to
// write anything that breaks either rule instead of submitting a bad entry.
const words = STORY.trim().split(/\s+/).filter(Boolean);
if (words.length !== 6) {
  throw new Error(`Story must be exactly six words, got ${words.length}: ${STORY}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`Story must be 1–60 chars, got ${STORY.length}: ${STORY}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY + "\n", "utf8");
console.log(`Wrote ${STORY.length} chars (${words.length} words) to ${join(outDir, "entry.txt")}`);
