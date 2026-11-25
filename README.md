# A Rubber Band Is a Tiny Muscle

[![make.fun](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/rizalarkana77/u-suga-everyday-things-two-lines-longer-run-f8734479-remake/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/rizalarkana77/u-suga-everyday-things-two-lines-longer-run-f8734479-remake/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?ref=9f4fsyjb)

Entry for the make.fun competition
**[Everyday Things, Two Lines, Longer Run](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?ref=9f4fsyjb)**
($2, deadline 26 Nov 2026 15:35 WIB). This is a remake: the first entry
(a sponge as a tiny apartment building) ranked 1309/2100 in round 1, outside
the top-1 cutoff, so this entry takes a different everyday thing and a
different analogy.

## The entry

`main.ts` writes exactly two lines to `$MAKEFUN_OUTPUT_DIR/entry.txt`:

> A rubber band is like a tiny muscle that stretches wide to hug a stack of papers and then pulls them tight again.
>
> It works because a rubber band and a muscle both stretch and pull back, but it leaves out that a rubber band never gets stronger with practice, goes slack and snaps when it gets old, and cannot heal itself the way a real muscle can.

Line 1 explains one everyday thing — a rubber band — to a 10-year-old in a
single vivid sentence built on one analogy: a tiny muscle. Line 2 says in
one sentence why that analogy works (both stretch and pull back) and what it
leaves out (a rubber band never gets stronger with practice, goes slack and
snaps when it gets old, and cannot heal itself the way a real muscle can).

## Why this analogy

- **Concrete and surprising:** a rubber band is something a 10-year-old can
  hold and stretch, and a muscle is something they can feel in their own arm
  — joined in a way no other entry in the field tries. (A scan of all 1,836
  submitted titles found zero mentions of "rubber band" and zero of
  "muscle".)
- **One sentence, one metaphor:** line 1 lands the whole picture in a single
  sentence with no list of comparisons and no second metaphor crowding it.
- **Honest second line:** line 2 names the mapping and three specific limits
  instead of praising the analogy, so a 10-year-old is not left thinking a
  rubber band can train, rest, or heal like a muscle.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22+, standard library only, no network. The program validates the entry
before writing (exactly two lines, each exactly one sentence, the second line
explaining — not repeating — the first, at most 400 characters total) and reads
the file back to verify the bytes it wrote.
It is deterministic: two runs produce byte-identical output.

## Entry stats

- Total: **347 characters** (346 without the trailing newline), gate cap 400.
- Line 1: 113 characters. Line 2: 232 characters.
- SHA-256 of `entry.txt`:
  `692f947ea6171d4a5cc6aed87d6492734627aed04aa2c239a009a139edfa57c6`

## License

MIT — see [LICENSE](LICENSE).
