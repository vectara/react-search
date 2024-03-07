const esbuild = require("esbuild");
const chokidar = require("chokidar");
const liveServer = require("live-server");
const { config: devScriptBuildConfig } = require("./buildConfigs");
const { esm: packageBuildConfig } = require("../buildConfigs");

const normalizedPackageBuildConfig = {
  ...packageBuildConfig,
  entryPoints: ["../src/index.tsx", "../src/useSearch.ts", "../src/ReactSearchNext.tsx"],
  sourcemap: true,
  outdir: "../lib",
  outbase: "../src"
};

(async () => {
  // Builder for the component package
  const packageBuilder = await esbuild.context(normalizedPackageBuildConfig);

  // Builder for the development page
  const devPageBuilder = await esbuild.context(devScriptBuildConfig);

  chokidar
    // Watch for changes to dev env code or react-search src
    .watch(["src/*.{ts,tsx,scss}", "src/**/*.{ts,tsx,scss}", "../src/**/*.{ts,tsx,scss}"], {
      interval: 0 // No delay
    })
    .on("all", async () => {
      await packageBuilder.rebuild();
      devPageBuilder.rebuild();
    });

  // `liveServer` local server for hot reload.
  liveServer.start({
    open: true,
    port: +process.env.PORT || 8080,
    root: "public"
  });
})();
