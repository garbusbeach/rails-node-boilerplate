import esbuild from 'esbuild';

import vuePlugin from 'esbuild-vue';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';


esbuild.build({
  entryPoints: ['./src/main.js'],
  bundle: true,
  minify: true,
  logLevel: 'info',
  outfile: './../app/assets/builds/random-code.js',
  plugins: [
    vuePlugin(),
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
        return css;
      }
    })
  ],
  loader: {
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
    '.ttf': 'dataurl'
  },
  define: {
    // here add your globals
  },
});
