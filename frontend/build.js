import esbuild from 'esbuild';

import vuePlugin from 'esbuild-vue';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

esbuild.build({
  entryPoints: ['./src/main.js'],
  bundle: true,
  watch: true,
  logLevel: 'info',
  outfile: './../app/assets/build/application.js',
  plugins: [
    vuePlugin({ extractCss: false }),
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
  }
});
