// The Best Advice I Ever Got — make.fun entry.
// Writes one sentence (the best advice I ever received) to /output/entry.txt.
// The gate requires UTF-8 text of 1-200 characters, a single sentence.

import { mkdirSync, writeFileSync } from "node:fs";

const ADVICE =
  "The night I failed my driving test, my grandfather slid his keys across the table and said: never borrow trouble from tomorrow, because today already charges enough interest.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ADVICE, "utf8");
