const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const cssPlugin = require("esbuild-css-modules-plugin");
const { peerDependencies } = require("./package.json");
const entryFile = "src/index.tsx";

const sharedConfig = {
  bundle: true,
  entryPoints: [entryFile],
  logLevel: "info",
  minify: true,
  sourcemap: true,
  external: Object.keys(peerDependencies),
};

/*build({
  ...sharedConfig,
  format: "esm",
  outfile: "./dist/index.esm.js",
  target: ["esnext", "node12.22.0"],
  plugins: [cssPlugin(), sassPlugin({ type: "style" })],
});*/

build({
  ...sharedConfig,
  format: "esm",
  outfile: "./dist/index.esm.js",
  target: ["esnext", "node12.22.0"],
  plugins: [cssPlugin(), sassPlugin({ type: "style" })],
});

build({
  ...sharedConfig,
  format: "cjs",
  outfile: "./dist/index.cjs.js",
  target: ["esnext", "node12.22.0"],
  plugins: [cssPlugin(), sassPlugin({ type: "style" })],
});
