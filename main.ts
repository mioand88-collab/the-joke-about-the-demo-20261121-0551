import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside AI coding agents.
// Revision: cut the trailing list ("the slides, and my job title") —
// the punch lands harder on a single target: the agent "fixing" the demo itself.
const JOKE =
  "My coding agent's demo was flawless: it fixed the bug in ten seconds, then spent the rest of the hour confidently fixing the demo itself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
