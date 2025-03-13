---
meta:
  title: 常见问题
  description: 遇到问题时手忙脚乱？看看 Vuetify 社区最常问的问题。
  keywords: 常见问题，解答
related:
  - /introduction/why-vuetify/
  - /getting-started/contributing/
  - /getting-started/installation/
---

# 常见问题

卡在一个特殊问题？在创建问题表前，请先检查一些常见的问题。如果您仍然无法找到要查找的内容，请在 Github 上提交一个 [issue](https://issues.vuetifyjs.com/) 或者在 [Discord](https://community.vuetifyjs.com/) 上向社区提问。

<PageFeatures />

<VoPromotionsCardHighlight slug="vuetify-discord-subscriber-help" />

## 问题专区

以下回答是 Vuetify 社区提出的常见问题的集合。

* **什么是 Vuetify？** { #what-is-vuetify }

  Vuetify 是一个有助于创建漂亮和响应式用户界面的 Vue.js 框架。它包括用于构建现代应用程序的各种可定制和可重用的组件。

* **Vuetify 是否提供支持？** { #does-vuetify-provide-support }

  Vuetify 是一个以 [MIT 许可](http://opensource.org/licenses/MIT)发布的免费开源项目。有以下几种方式可以获得 Vuetify 支持：

  * 加入我们的 [Discord 社区](https://community.vuetifyjs.com/) - (免费/付费)
  * 在 [GitHub 讨论中提问](https://discussions.vuetifyjs.com/) - (免费)
  * 从 Vuetify 获取 [直接支持](/introduction/enterprise-support/) - (付费)

* **Vuetify 和 Vue 之间有什么区别？** { #what-is-the-difference-between-vuetify-and-vue }

  Vuetify 是一个构建在 Vue.js 顶层的框架。它是一个可以用于构建应用程序的组件集合。Vue.js 是一个用于构建用户界面的 JavaScript 框架。

* **Vue.js 的哪个版本与 Vuetify 兼容？** { #what-versions-of-vuejs-are-compatible-with-vuetify }

  Vuetify 与 Vue.js 3.0.0 及以上兼容。

* **我可以和其他 CSS 框架一起使用 Vuetify 吗？** { #can-i-use-vuetify-with-other-css-frameworks }

  是的，您可以同时使用 Vuetify 和其他 CSS 框架，但通常不推荐。如果您正在将 Vuetify 整合到一个使用另一个 CSS 框架的现有应用程序，您可能需要禁用默认颜色和工具生成。更多信息请访问 [SASS 变量](/features/sass-variables/) 页面。

* **我可以自定义 Vuetify 组件的样式吗？** { #can-i-customize-the-styling-of-vuetify-components}

  是的，您可以使用 [全局配置](/features/global-configuration/)自定义 Vuetify 组件的样式。Vuetify 也提供[SASS 变量](/features/sass-variables/)，可以覆盖这些变量来更改组件的外观和感觉。

* **我可以从哪里获得帮助？** { #where-can-i-get-help-with-vuetify }

  如果您需要帮助，请使用我们的一个帮助渠道：

  * [Vuetify 企业支持](/introduction/enterprise-support/)
  * [Discord 社区](https://community.vuetifyjs.com/)
  * [热门讨论](https://discussions.vuetifyjs.com/)

* **我可以为 Vuetify 做贡献吗？** { #can-i-contribute-to-vuetify }

  可以，我们欢迎所有贡献者。请查看[贡献指南](/getting-started/contributing/)以了解更多信息。

* **我可以在 Vuetify 使用服务器端渲染吗？** { #can-i-use-vuetify-with-server-side-rendering }

  可以，Vuetify 支持服务器端渲染。在您的 `vuetify` 配置对象中将 `ssr` 属性设置为 `true`。

  ```js { resource="src/plugins/vuetify.js" }
  import { createVuetify } from 'vuetify'

  export default createVuetify({
    ssr: true,
  })
  ```

* **Vuetify 3 支持 IE11 吗？** { #is-there-still-support-for-ie11-in-vuetify-3 }

  不支持。如果您需要支持 IE11，请使用 [Vuetify 2](https://v2.vuetifyjs.com/)。

* **是否支持 Nuxt 3？** { #is-there-support-for-nuxt-3 }

  支持，Vuetify 3 与 Nuxt 3 兼容，但目前没有一个社区 Nuxt 模块。

* **Vuetify 实验室是什么？** { #what-is-vuetify-labs }

  Vuetify 实验室是一组仍在开发中的组件。它们不被认为是稳定的，可能随时改变。它们没有包含在默认的 Vuetify 安装中，必须单独导入。请参阅[实验室](/labs/introduction/)页面获取更多信息。

* **Vuetify 是否有每日构建？** { #does-vuetify-have-nightly-builds }

  是的，Vuetify 有每日构建。查看 [每日构建](/getting-started/installation/#nightly-builds) 页面以获取更多信息。

* **我发现了一个 bug，我应该怎么办？** { #i-found-a-bug-what-should-i-do }

  请使用我们的问题生成器创建一个新的[议题](https://issues.vuetifyjs.com/)。在创建新议题之前，请务必检查现有问题。

* **为什么 Vuetify 3 将 `value` 更改为 `model-value`？**

  `value` prop 在 Vue 3 中进行了更改，以支持新的 `v-model` 语法。请在 Vue 官方文档中查看有关 [组件 v-model](https://vuejs.org/guide/components/v-model.html) 的详细信息。

* **Vuetify 3 是否与 `@vue/compat` 兼容？**

  不是直接设置，您必须全局设置 `configureCompat({ MODE: 3 })` 并在要运行兼容模式的每个组件中设置 `MODE: 2`。仍然会有一些可以忽略的错误警告，可以使用 devtools 中的 `-ATTR_FALSE_VALUE` 过滤器来忽略它们。

* **为什么DOM中还没有元素在 `onMounted()`?** ([#19736](https://github.com/vuetifyjs/vuetify/issues/19736))

  一些 Vuetify 组件是异步的，因此不能保证它们的子组件会立即挂载。您可以等待目标元素本身使用 `v-on:vue:mounted` 挂载，或者在一个单独的组件中使用 `onMounted`，该组件在 `<template>` 和您的目标元素之间只有普通元素。

<PromotedPromoted type="theme" />
