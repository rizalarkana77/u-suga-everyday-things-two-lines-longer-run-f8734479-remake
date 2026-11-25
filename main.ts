// SPDX-License-Identifier: MIT
// A Rubber Band Is a Tiny Muscle
// make.fun — Everyday Things, Two Lines, Longer Run
// (u-suga-everyday-things-two-lines-longer-run-f8734479)
// REMAKE of the sponge entry: a new everyday thing, a new analogy.
//
// What this program does: it prints exactly two lines into
// $MAKEFUN_OUTPUT_DIR/entry.txt.
//   First line  — one vivid sentence that explains a rubber band to a
//                 10-year-old, through a single analogy (a tiny muscle).
//   Second line — one sentence on why that analogy holds: which parts of
//                 a rubber band it covers, and which parts it leaves out.
// Plain Node, standard library only, no network. The output is the same
// bytes on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = {
  first:
    "A rubber band is like a tiny muscle that stretches wide to hug a stack of papers and then pulls them tight again.",
  second:
    "It works because a rubber band and a muscle both stretch and pull back, but it leaves out that a rubber band never gets stronger with practice, goes slack and snaps when it gets old, and cannot heal itself the way a real muscle can.",
};

const CHAR_LIMIT = 400;

function assertSingleSentence(line: string, label: string): void {
  const clean = line.trim();
  if (clean.length === 0) {
    throw new Error(`${label} must not be empty`);
  }
  if (line !== clean) {
    throw new Error(`${label} must not have leading or trailing whitespace`);
  }
  const stops = [...clean].filter((ch) => ch === ".").length;
  if (stops !== 1 || !clean.endsWith(".")) {
    throw new Error(`${label} must be exactly one sentence`);
  }
}

function buildEntryText(): string {
  assertSingleSentence(ENTRY.first, "line 1");
  assertSingleSentence(ENTRY.second, "line 2");
  if (ENTRY.first.trim() === ENTRY.second.trim()) {
    throw new Error("line 2 must explain line 1, not repeat it");
  }
  const text = `${ENTRY.first}\n${ENTRY.second}\n`;
  if (text.length > CHAR_LIMIT) {
    throw new Error(`entry is ${text.length} chars, over the ${CHAR_LIMIT} cap`);
  }
  if (!/^[\x20-\x7E\n]+$/.test(text)) {
    throw new Error("entry must be plain printable ASCII");
  }
  return text;
}

function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  const text = buildEntryText();
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, text, "utf8");

  // Prove the write landed exactly as intended.
  const roundTrip = readFileSync(target, "utf8");
  if (roundTrip !== text) {
    throw new Error("read-back mismatch: entry.txt differs from the intended text");
  }
  console.log(`wrote ${target} (${text.length} chars, 2 lines)`);
}

run();
