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
  target: ["esnext", "node12.22.0"],
  plugins: [cssPlugin(), sassPlugin({ type: "style" })],
};

module.exports = {
  esm: {
    ...sharedConfig,
    format: "esm",
    outfile: "./dist/index.esm.js",
  },
  cjs: {
    ...sharedConfig,
    format: "cjs",
    outfile: "./dist/index.cjs.js",
  },
};
