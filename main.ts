import { mkdirSync, writeFileSync } from "node:fs";

// Output location for the harness: a single entry file under /output.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

const LINE = "I meditate every morning to quiet my mind, but now the voice in my head narrates my grocery list in a calmer tone.";

// Gate: the entry must be one non-blank line of 1-280 chars — fail loudly, don't write a bad entry.
if (LINE.length < 1 || LINE.length > 280 || LINE.includes("\n") || LINE.includes("\r") || LINE.trim().length === 0) {
  throw new Error("LINE must be 1-280 chars, single line, not only whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
