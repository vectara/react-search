module.exports = {
  config: {
    bundle: true,
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    },
    entryPoints: ["dev/index.tsx"],
    outfile: "dev/public/script.js",
    sourcemap: true,
  },
};
