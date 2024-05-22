import { defaultConfig } from "../config.js";
import { genisCrawl, write } from "./core.js";

await genisCrawl(defaultConfig);
await write(defaultConfig);
