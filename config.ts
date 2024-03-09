import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://genislab.com/",
  match: "https://genislab.com/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
