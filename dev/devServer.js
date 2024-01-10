const esbuild = require("esbuild");
const chokidar = require("chokidar");
const liveServer = require("live-server");
const { esm } = require("../buildConfigs");

(async () => {
  // Builder for the react-search package
  const pkgBuilder = await esbuild.context(esm);

  // Builder for the development page
  const devPageBuilder = await esbuild.context({
    bundle: true,
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    },
    entryPoints: ["dev/index.tsx"],
    minify: process.env.NODE_ENV === "production",
    outfile: "dev/public/script.js",
    sourcemap: true,
    logLevel: "silent",
  });

  chokidar
    // Watch for changes to dev env code or react-search build
    .watch(["dev/**/*.{ts,tsx,css}", "dist/*.js"], {
      interval: 0, // No delay
    })
    .on("all", () => {
      devPageBuilder.rebuild();
    });

  chokidar
    // Watch for changes to the react-search component
    .watch("src/**/*.{ts,tsx,scss}", {
      interval: 0, // No delay
    })
    .on("all", () => {
      pkgBuilder.rebuild();
    });

  // `liveServer` local server for hot reload.
  liveServer.start({
    open: true,
    port: +process.env.PORT || 8080,
    root: "dev/public",
  });
})();
