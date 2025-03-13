---
meta:
  title: 摇树 (Treeshaking)
  description: Vuetify provides automatic treeshaking via the vuetify-loader. Use only the features that you need and drastically reduce your package bundle size.
  keywords: 点菜系统, a-la-carte, 按需引入, vuetify 导入, 导入组件, 缩小 vuetify 大小, 树摇
related:
  - /features/sass-variables/
  - /features/blueprints/
  - /introduction/why-vuetify/
features:
  report: true
---

# 摇树（Treeshaking）

作为一个组件框架，Vuetify 总是水平增长。根据您的项目，要求可能是打包体积尽量小。

<PageFeatures />

<PromotedEntry />

## 自动摇树

摇树（Treeshaking）使你可以通过只包含使用的组件，从而显著地降低打包大小。Vuetify 使用插件来实现 [Webpack](https://webpack.js.org/) 或者 [vite](https://vitejs.dev/) 的自动摇树算法。

安装 [`webpack-plugin-vuetify`](https://www.npmjs.com/package/webpack-plugin-vuetify) 或者 [`vite-plugin-vuetify`](https://www.npmjs.com/package/vite-plugin-vuetify)，并在打包配置中启用它。注意 Vuetify 插件需要在 Vue 插件后，否则有可能工作不正常。

::: tabs

```js [Vite] { resource="vite.config.js" }
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default {
  plugins: [
    vue(),
    vuetify(),
  ],
}
```

```js [Webpack] { resource="webpack.config.js" }
const { VueLoaderPlugin } = require('vue-loader')
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = {
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyPlugin(),
  ],
}
```

```js [Vue CLI] { resource="vue.config.js" }
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = {
  plugins: [
    new VuetifyPlugin(),
  ],
}
```

::: tab Nuxt
<p class="ma-4">Nuxt 也使用 vite 插件，但需要一些额外配置才能以正确顺序加载：</p>

```js { resource="nuxt.config.js" }
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },
  ],
})
```

:::

就是这样！无论在哪里使用，Vuetify 组件和指令都会被自动地导入到您的应用中。如果您在之前使用了通配符来导入，现在就可以移除掉它们。

```diff { resource="src/main.js" }
  import 'vuetify/styles'
  import { createVuetify } from 'vuetify'
- import * as components from 'vuetify/components'
- import * as directives from 'vuetify/directives'
```

<PromotedPromoted />

## 手动导入

不使用加载器插件时，可手动导入组件。

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { VCard } from 'vuetify/components/VCard'
import { VRating } from 'vuetify/components/VRating'
import { VToolbar } from 'vuetify/components/VToolbar'
import { Ripple } from 'vuetify/directives'

const vuetify = createVuetify({
  components: {
    VCard,
    VRating,
    VToolbar,
  },
  directives: {
    Ripple,
  },
})

export default vuetify
```

您还可以在 .vue 文件中就地导入组件，如下所示。

```html { resource="Component.vue" }
<template>
  <v-card>
    <v-card-title>...</v-card-title>
    <v-card-text>...</v-card-text>
  </v-card>
</template>

<script setup>
  import { VCard, VCardText, VCardTitle } from 'vuetify/components/VCard'
</script>
```

## 局限性

使用加载器插件时，有几种情况需要手动导入组件。

### 动态组件

When using dynamic components the plugin is unable to parse which vuetify components are being rendered. This commonly occurs when using the built-in Vue `<component>`. More information about dynamic components can be found in the official Vue [documentation](https://vuejs.org/guide/essentials/component-basics.html#dynamic-components).


<!--
`v-data-iterator` can use any component via the content-tag prop. This component must be registered [globally](#markup-js-a-la-carte-manual):

```html
<template>
  <v-data-iterator content-tag="v-layout">
    ...
  </v-data-iterator>
</template>
```

```js
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: { VLayout },
})

const opts = {}

export default new Vuetify(opts)
```
-->

Dynamic components using `<component>` can be registered locally:

```html { resource="Component.vue" }
<template>
  <component :is="button ? 'v-btn' : 'v-chip'" />
</template>

<script setup>
  import { VBtn } from 'vuetify/components/VBtn'
  import { VChip } from 'vuetify/components/VChip'
  import { shallowRef } from 'vue'

  const button = shallowRef(false)
</script>
```

### 分组件导入

All components are available at both `vuetify/components` and `vuetify/components/<group>`. Use of the latter is preferred however as it only loads files that are needed. Treeshaking will still work in production builds if you use `vuetify/components`, but during development it will cause a performance hit by loading styles even for components you aren't using.
