import * as esbuild from "esbuild";

const build = async (config) => {
  await esbuild.build(config);
};

const watch = async (config) => {
  const context = await esbuild.context(config);
  await context.watch();
  console.log("Watching...");
};

const createConfig = () => {
  const isProduction = process.env.NODE_ENV === "production";
  return {
    entryPoints: ["src/handlers/**/*.ts"],
    outdir: "dist",
    outbase: "src/handlers",
    format: "esm",
    outExtension: { ".js": ".mjs" },
    platform: "node",
    bundle: true,
    minify: isProduction,
    sourcemap: !isProduction,
    plugins: [
      {
        name: "onBuildComplete",
        setup(build) {
          build.onEnd(() => {
            console.log(`Build completed. ${new Date().toTimeString()}`);
          });
        },
      },
    ],
    banner: {
      // commonjs用ライブラリをESMプロジェクトでbundleする際に生じることのある問題への対策
      // https://zenn.dev/junkor/articles/2bcd22ca08d21d#esbuild%E3%81%AE%E3%83%93%E3%83%AB%E3%83%89%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3
      js: 'import { createRequire } from "module"; import url from "url"; const require = createRequire(import.meta.url); const __filename = url.fileURLToPath(import.meta.url); const __dirname = url.fileURLToPath(new URL(".", import.meta.url));',
    },
  };
};

const config = createConfig();
if (process.argv.includes("--build")) {
  await build(config);
} else if (process.argv.includes("--watch")) {
  await watch(config);
}
