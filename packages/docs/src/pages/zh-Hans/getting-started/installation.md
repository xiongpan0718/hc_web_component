---
meta:
  nav: 安装
  title: 开始使用 Vuetify 3
  description: V3 版本的详细信息——常见问题解答、变动日志和升级指南。
  keywords: 迁移, 发布, 升级 vuetify, beta, v3
related:
  - /getting-started/contributing/
  - /introduction/roadmap/
  - /getting-started/release-notes/
---

<script setup>
  import { version } from 'vuetify'
</script>

# 开始使用 Vuetify 3

让我们从 Vuetify 开始吧，这是世界上最流行的 Vue.js 框架，用于构建功能丰富、快速的应用程序。

<PageFeatures />

<VoPromotionsCardHighlight slug="vuemastery-getting-started" />

## 安装

Vuetify 支持多个不同的安装方式，最常用的脚手架工具是 [create-vuetify](https://github.com/vuetifyjs/create-vuetify)

要了解更多关于支持的包管理器的信息，请访问他们的官方网站：

* [pnpm](https://pnpm.io/)
* [yarn](https://yarnpkg.com/)
* [npm](https://npmjs.org/)
* [bun](https://bun.sh/package-manager)

## 使用 Vite

要开始使用 Vuetify 3，只需将以下代码粘贴到你的终端：

::: tabs

```bash [pnpm]
pnpm create vuetify
```

```bash [yarn]
yarn create vuetify
```

```bash [npm]
npm create vuetify@latest
```

```bash [bun]
bun create vuetify
```

:::

此命令在使用脚手架生成您的 Vue / Vuetify 3 项目之前会提示您有几个配置选项。

```bash
success Installed "create-vuetify@x.x.x" with binaries:
    - create-vuetify

? Project name (项目名): ❯ vuetify-project //生成应用程序的文件夹
? Use TypeScript (使用 TypeScript)?: ❯ No / Yes
? Would you like to install dependencies with yarn, npm, or pnpm?:
  ❯ yarn
    npm
    pnpm
    bun
    none
```

在进行选择后， [create-vuetify](https://github.com/vuetifyjs/create-vuetify) 将生成您新应用程序的结构。

使用脚手架搭建完成后，通过运行以下命令启动 vite 开发服务器：

```bash
cd vuetify-project
pnpm dev
```

<VoPromotionsCardVuetify slug="vuetify-one" />

## 使用 Nuxt 3

[Nuxt](https://nuxt.com/) 是一个开源框架，它有许多可以使您开发全栈 Vue 应用程序更加快速的特性：基于文件的路由、SSR 和组件的自动导入。

### 手动安装

Nuxt 由 Vite 驱动，因此让 Vuetify 在 Nuxt 3 中工作的方法与 [下面描述的手动步骤](#existing-projects) 非常相似。

执行下列命令以创建一个 Nuxt 实例：

::: tabs

```bash [pnpm]
pnpx nuxi@latest init <project-name>
cd <project-name>
# Create a .npmrc file with shamefully-hoist=true
pnpm install
```

```bash [yarn]
npx nuxi@latest init <project-name>
cd <project-name>
yarn
```

```bash [npm]
npx nuxi@latest init <project-name>
cd <project-name>
npm install
```

```bash [bun]
bunx nuxi@latest init <project-name>
cd <project-name>
bun install
```

:::

然后安装所需的 Vuefity 模块作为依赖：

::: tabs

```bash [pnpm]
pnpm i -D vuetify vite-plugin-vuetify
pnpm i @mdi/font
```

```bash [yarn]
yarn add -D vuetify vite-plugin-vuetify
yarn add @mdi/font
```

```bash [npm]
npm i -D vuetify vite-plugin-vuetify
npm i @mdi/font
```

```bash [bun]
bun add -d vuetify vite-plugin-vuetify
bun add @mdi/font
```

:::

接下来，将以下条目整合到您的 `nuxt.config.ts` 文件：

```ts { data-resource="nuxt.config.ts" }
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
```

Nuxt 允许您通过使用其内置的钩子 `vite:extendConfig` 更改其 Vite 配置。在回调函数中，将 Vuetify 插件添加到 Vite 插件数组。要解决传递到 Vuetify 组件的相对素材 URL，例如 `VImg` （例如 `~/assets/img/some`）。`transformAssetUrls` 函数需要添加到 `vite` 条目。

在下一步中，初始化 Vuetify 并将其添加到 Vue 应用程序实例。 这可以在 `plugins` 文件夹中完成，因为放在此文件夹中的任何插件都会被 Nuxt 在启动时自动加载。

```ts { data-resource="~/plugins/vuetify.ts" }
// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
```

最后，在 `~/app.vue` 或 `~/layouts/default.vue` 中添加 Vuetify 的 `VApp` 组件，例如：

```html { data-resource="app.vue" }
<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>
```

或者

```html { data-resource="~/layouts/default.vue" }
<template>
  <v-app>
    <!-- .... -->
  </v-app>
</template>
```

您现在应该可以访问 Nuxt 应用中的所有 Vuetify 组件和工具。

### vuetify-nuxt-module

或者，您可以使用 [vuetify-nuxt-module](https://github.com/userquin/vuetify-nuxt-module)（仅与 Vite 兼容）。该模块具有强烈的主观性，并具有内置的默认配置。您可以无需任何配置即可使用它，它将适用于大多数用例。

查看 [文档](https://vuetify-nuxt-module.netlify.app/) 了解如何使用该文档的更多信息。

## 使用 Laravel Mix

```js
import { createApp } from 'vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives
})

createApp(App).use(vuetify).mount('#app')
```

要导入字体，您需要将其添加到 webpack.mix.js：

```js
mix.copy('node_modules/@mdi/font/fonts/', 'dist/fonts/')
```

## 使用 CDN

我们建议使用在 [jsdelivr](https://www.jsdelivr.com/) 上最新版本的 Vuetify 3。所有组件和样式都被包含在内。

`https://cdn.jsdelivr.net/npm/vuetify@{{ version }}/dist/vuetify.min.css` { .text-truncate }

`https://cdn.jsdelivr.net/npm/vuetify@{{ version }}/dist/vuetify.min.js` { .text-truncate }

```js
const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

const app = createApp()
app.use(vuetify).mount('#app')
```

## 使用Vitepress

你可以在你的Vitepress静态站点中使用Vuetify组件。

在初始化您的 Vitepress 项目后，将 Vuetify 添加到依赖项中。

::: tabs

```bash [pnpm]
pnpm i vuetify
```

```bash [yarn]
yarn add vuetify
```

```bash [npm]
npm i vuetify
```

```bash [bun]
bun add vuetify
```

:::

然后，在你的 `.vitepress/theme/index.ts` 中

```ts
import DefaultTheme from 'vitepress/theme'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({ components, directives })

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuetify)
  },
}
```

## 现有项目

如果您想要 Vuetify 添加到现有的项目，或者不想使用脚手架工具，请按照这些步骤操作。

::: tabs

```bash [pnpm]
pnpm i vuetify
```

```bash [yarn]
yarn add vuetify
```

```bash [npm]
npm i vuetify
```

```bash [bun]
bun add vuetify
```

:::

::: tip

如果您正在从早期版本的 Vuetify 升级，请务必查看我们的 [升级指南](/getting-started/upgrade-guide/)

:::

在您创建 Vue 应用程序的文件中，添加以下代码：

```js
import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')
```

这将包括所有组件和指令，不管您是否在使用它们。 如果你只想包含使用过的组件， 查看 [Vite](https://npmjs.com/package/vite-plugin-vuetify) 或 [Webpack](https://npmjs.com/package/webpack-plugin-vuetify) 插件，这取决于您的设置。 插件还可以自定义 SCSS 变量。

最后，不要忘记安装[图标](/features/icon-fonts/)。

## SSR 语句

Vue 3 无法自动检测是否使用了 SSR，因此，Nuxt、Gridsome，以及其它 SSR 框架必须手动将 `ssr` 选项设置为 `true` 才能正确渲染应用程序。

```js { data-resource="src/plugins/vuetify.js" }
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const vuetify = createVuetify({
  ssr: true,
})
```

## 公开导出

Vuetify 框架存在以下导出路径：

### JS / TS

| 名称                                     | 描述                                                                                           |
| -------------------------------------- | -------------------------------------------------------------------------------------------- |
| `vuetify`                              | 主要入口。包含 `createVuetify()` 和公共组合式函数。                                                          |
| `vuetify/styles`                       | 预编译的全局 CSS（reset、utilities 等)，没有组件样式。如果在 vite 或webpack 中设置 `styles.configFile`，将会被重定向到 SASS。 |
| `vuetify/components`                   | 所有组件。不推荐，因为它将包含开发过程中的所有组件，从而减慢您的构建速度。                                                        |
| `vuetify/components/<name>`      | 单个组件，按顶层名称分组，如 VListItem、VListGroup 和 VListItemTitle 都在 `vuetif/components/VList` 中。         |
| `vuetify/directives`                   | 所有指令。                                                                                        |
| `vuetify/directives/<name>`      | 单个指令。                                                                                        |
| `vuetify/blueprints/<name>`      | Prop 默认值的预设集合。                                                                               |
| `vuetify/locale`                       | Vuetify 组件中字符串的翻译。每种语言都是已命名的输出语言。                                                            |
| `vuetify/locale/adapters/<name>` | 用于从其他库（例如 vue-i18n）中提取翻译的适配器。                                                                |
| `vuetify/iconsets/<name>`        | 图标预设，具体查看[图标字体](/features/icon-fonts/)页面。                                                    |

### SASS

查看 [SASS 变量](/features/sass-variables/) 了解更多信息。

| 名称                 | 描述                                                  |
| ------------------ | --------------------------------------------------- |
| `vuetify`          | 全局 CSS（重置、实用程序等），没有组件样式。相当于 JS 中的 `vuetify/styles`。 |
| `vuetify/settings` | 所有 SASS 变量，包括组件变量。                                  |
| `vuetify/tools`    | Mixin 和函数。                                          |

## 每日构建

下列的三个开发分支（`master`、`dev` 以及 `next`）会自动在UTC 12: 00推送到npm的 [`@vuetify/nightly`](https://www.npmjs.com/package/@vuetify/nightly?activeTab=versions) 命名空间下。这些分支可能是过时和有bug的，因为它们只是为了进行测试而构建的非官方分发。当然你也可以用 [package alias](https://docs.npmjs.com/cli/v8/commands/npm-install#:~:text=Install%20a%20package%20under%20a%20custom%20alias) 来安装它们。

| 分支名称     | 用途    | package.json 条目                            | 变更日志                                                           |
| -------- | ----- | ------------------------------------------ | -------------------------------------------------------------- |
| `master` | Bug修复 | `"vuetify": "npm:@vuetify/nightly@latest"` | [变更日志](https://unpkg.com/@vuetify/nightly@latest/CHANGELOG.md) |
| `dev`    | 新功能   | `"vuetify": "npm:@vuetify/nightly@dev"`    | [变更日志](https://unpkg.com/@vuetify/nightly@dev/CHANGELOG.md)    |
| `next`   | 不兼容更新 | `"vuetify": "npm:@vuetify/nightly@next"`   | [变更日志](https://unpkg.com/@vuetify/nightly@next/CHANGELOG.md)   |

```diff
 "devDependencies": {
-  "vuetify": "^3.3.0"
+  "vuetify": "npm:@vuetify/nightly@3.3.0-master.2023-05-21"
 }
```

## 疑问

在我们的 [Discord 社区](https://community.vuetifyjs.com/) 告诉我们或在我们的 [Issue 生成器](https://issues.vuetifyjs.com/) 上创建一个请求。

<PromotedPromoted slug="vuetify-discord" />
