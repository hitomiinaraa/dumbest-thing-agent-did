// One line: my agent optimized a file it had already deleted.
import { mkdir, writeFile } from "node:fs/promises";

const line = "My agent spent forty minutes optimizing a file it had already deleted, then asked me where it went.";

if (line.length > 200) throw new Error("line exceeds 200 characters");

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", line, "utf8");
