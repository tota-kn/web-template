import * as esbuild from 'esbuild';

const build = async (config) => {
    await esbuild.build(config);
}

const watch = async (config) => {
    const context = await esbuild.context(config);
    await context.watch();
    console.log('Watching...');
}

const createConfig = () => {
    const isProduction = process.env.NODE_ENV === 'production';
    return {
        entryPoints: ['src/handlers/**/*.ts'],
        outdir: 'dist',
        outbase: 'src',
        format: 'esm',
        platform: 'node',
        bundle: true,
        minify: isProduction,
        sourcemap: !isProduction,
        plugins: [
            {
                name: 'onBuildComplete',
                setup(build) {
                    build.onEnd(() => {
                        console.log(`Build completed. ${new Date().toTimeString()}`);
                    });
                }
            }
        ],
    };
}

const config = createConfig();
if (process.argv.includes('--build')) {
    await build(config);
} else if (process.argv.includes('--watch')) {
    await watch(config);
}