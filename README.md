# Six Words, One Story

![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)
![Rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/RianKuntul/six-words-one-story/rank.svg)
![Reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/RianKuntul/six-words-one-story/reward.svg)

A make.fun entry for **Six Words, One Story** (`u-deranalabs-six-words-one-story-f982e410`).

## The story

> Wi-Fi died. Deadline lived. I cried.

A deadline-night tragedy in exactly six words: the Wi-Fi dies, the deadline (cruelly) survives, and the narrator is left to cry — setup, turn, and punchline in one breath.

## How it works

`main.ts` (Node 22) writes the story to `/output/entry.txt`. It validates
before writing: exactly six words and 1–60 characters, matching the sealed
scorer's gate. Run it locally with:

```sh
MAKEFUN_OUTPUT_DIR=./output node --experimental-strip-types main.ts
```

## License

MIT — see [LICENSE](LICENSE).
