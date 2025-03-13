---
meta:
  title: 单元测试
  description: 学习如何在您的 Vue 应用程序中使用 vue-test-utils 和 Vuetify 组件创建单元测试。
  keywords: vuetify 单元测试，vuetify 测试，vuetify 测试标准
related:
  - /getting-started/frequently-asked-questions/
  - /getting-started/contributing/
  - /components/text-fields/
---

# 单元测试

为你的 Vuetify 应用添加单元测试来进行回归保护

<PageFeatures />

<VoPromotionsCardVuetify />

## 使用

单元测试（有时会被忽略）是应用开发的重要组成部分。它能够帮助我们保障程序或者工作流的安全，在开发种保证最重要的部分远离突发情况或者疏忽错误。

因此，Vue 有自己的测试框架，被称为 [vue-test-utils](https://test-utils.vuejs.org/)。它不仅提供了和 Vue 组件交互的能力，还能搭配许多流行的测试工具。

## 使用 Vite

[Vite](https://vitejs.dev/) 是一个快速的，自洽的前端构建工具。它可以在开发模式下把代码通过原生的 ES 模块模式导入，也可以在生产模式下使用 Rollup 进行打包。使用它的开发体验是非常棒的，因为成为了 Vuetify 应用的推荐构建工具。

首先，更新你的 **vite.config.js** 文件，加入以下的 `vuetify` 依赖：

```js { resource="vite.config.js" }
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
})
```

### 安装 Vitest

[Vitest](https://vitest.dev/) 是一个流行的测试工具。它提供了良好的开发体验，速度很快，简单易用，以及提供了很多例如快照测试的特性。要使用这个工具，运行下面的命令安装它们：

::: tabs

```bash [pnpm]
pnpm add @vue/test-utils vitest resize-observer-polyfill --save-dev
```

```bash [yarn]
yarn add @vue/test-utils vitest resize-observer-polyfill --dev
```

```bash [npm]
npm install @vue/test-utils vitest resize-observer-polyfill --save-dev
```

```bash [bun]
bun add @vue/test-utils vitest resize-observer-polyfill --dev
```

:::

安装成功后，在你的应用的根目录下创建 **tests/spec** 文件夹，然后添加新文件 **HelloWorld.spec.js**。下面的例子展示了如何测试一个 Vuetify 组件：

```js { resource="tests/spec/HelloWorld.spec.js" }
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import HelloWorld from '../../src/components/HelloWorld.vue'

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('displays message', () => {
  const wrapper = mount({
    template: '<v-layout><hello-world></hello-world></v-layout>'
  }, {
    props: {},
    global: {
      components: {
        HelloWorld,
      },
      plugins: [vuetify],
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Components')
})
```
