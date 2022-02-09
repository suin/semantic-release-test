/**
 * A configuration file for semantic-release
 *
 * @see {@link https://semantic-release.gitbook.io/semantic-release/} for about semantic-release.
 * @see {@link https://semantic-release.gitbook.io/semantic-release/usage/configuration} for configuration details.
 * @see {@link https://github.com/semantic-release/semantic-release/blob/971a5e0d16f1a32e117e9ce382a1618c8256d0d9/lib/get-config.js#L56} for about default config.
 */
const defineConfig = require("../semantic-release/semanticRelease.js");
module.exports = defineConfig({
  branches: [
    { name: "1.x", range: "1.x.x", channel: "1.x" }, // Only after the `1.x` is created in the repo
    { name: "2.x", range: "2.x", channel: "2.x" }, // Only after the `2.x` is created in the repo
    { name: "main" },
    { name: "next", channel: "next" }, // Only after the `next` is created in the repo
  ],
  plugins: [["@suin/semantic-release-yarn"]],
});
