import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import vue from 'rollup-plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import json from '@rollup/plugin-json'
import { fileURLToPath } from 'url'
import copy from 'rollup-plugin-copy'
import url from '@rollup/plugin-url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// Get paths for each package
const hcComponentDir = resolve(__dirname, '..')
const hcComponentSrcDir = resolve(hcComponentDir, 'src')

// Read hc-component's package.json
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * Released under the ${pkg.license} License.
 */`

export default defineConfig({
  input: resolve(hcComponentSrcDir, 'index.ts'),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      banner,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      banner,
    },
  ],
  external: [
    'vue',
    'vuetify',
    'vuetify-src',
    '@vue/runtime-core',
    '@vue/shared',
  ],
  plugins: [
    json(),
    url({
      include: ['**/*.svg'],
      limit: 0,
      fileName: '[name][extname]',
      publicPath: '/node_modules/@michelin/hc-component/dist/assets/icons/',
      emitFiles: false
    }),
    copy({
      targets: [
        { 
          src: 'src/assets/fonts/*.woff2',
          dest: 'dist/assets/fonts',
          flatten: true,
          transform: (contents, filename) => contents
        },
        {
          src: 'src/styles/**/*.{svg,png,jpg,gif,webp}',
          dest: 'dist/assets/images',
          flatten: false
        },
        {
          src: ['src/assets/icons/*.svg', 'src/components/**/icons/*.svg'],
          dest: 'dist/assets/icons',
          flatten: false
        }
      ],
      hook: 'writeBundle',
      copyOnce: true
    }),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      mainFields: ['module', 'main'],
      modulesOnly: true
    }),
    commonjs({
      include: [/node_modules/],
      transformMixedEsModules: true
    }),
    vue(),
    vueJsx(),
    typescript({
      tsconfig: resolve(hcComponentDir, 'tsconfig.json'),
      sourceMap: true,
      declaration: true,
      declarationDir: 'dist/types',
      noEmit: true,
      emitDeclarationOnly: true,
      include: ['src/**/*']
    }),
    postcss({
      extract: 'styles/index.css',
      minimize: true,
      sourceMap: true,
      use: {
        sass: {
          includePaths: ['src/styles'],
          outputStyle: 'compressed'
        }
      },
      plugins: [
        postcssImport({
          path: ['src/styles']
        }),
        autoprefixer({
          grid: true
        })
      ],
      url: {
        url: 'inline',
        maxSize: 8,
        fallback: 'copy',
        basePath: 'src/styles',
        destPath: 'assets'
      }
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: false
    }),
    terser({
      compress: {
        dead_code: true,
        drop_console: true,
        drop_debugger: true
      },
      mangle: true,
      format: {
        comments: false
      }
    }),
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false
  }
}) 