// The Dog Reviews the Mailman — one-line dog review, under 200 characters.
// Writes the entry text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "House rule one, mailman: the gate is mine. You knocked twice, I barked " +
  "once, and you still left the brown box on the step — so I dragged it to " +
  "the rose bed and buried it next to the squeaky duck.";

const MAX_CHARS = 200;
const MIN_CHARS = 1;

// The gate: entry must be 1-200 characters, not only whitespace, one line.
if (REVIEW.length < MIN_CHARS || REVIEW.length > MAX_CHARS) {
  throw new Error(`review is ${REVIEW.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`);
}
if (REVIEW.trim().length === 0) {
  throw new Error("review must not be only whitespace");
}
if (REVIEW.includes("\n")) {
  throw new Error("review must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
console.log(`wrote ${REVIEW.length} chars to ${join(outDir, "entry.txt")}`);
