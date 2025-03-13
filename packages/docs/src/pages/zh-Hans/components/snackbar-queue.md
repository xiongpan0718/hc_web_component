---
meta:
  nav: 消息条队列（Snackbar Queue）
  title: 消息条队列组件
  description: test
  keywords: test
related:
  - /components/buttons/
  - /components/snackbars/
  - /components/defaults-providers/
features:
  github: /labs/VSnackbarQueue/
  label: "C: VSnackbarQueue"
  report: true
  spec: https://m2.material.io/components/snackbars
---

# 消息条队列组件

`v-snackbar-queue` 组件用于将多个 Snackbar 消息排队显示给用户。Snackbars 支持定位、移除延迟和回调。

<PageFeatures />

::: warning

该功能需要 [v3.6.0](/getting-started/release-notes/?version=v3.6.0)

:::

## 安装

实验室组件需要手动导入和安装该组件。

```js { resource="src/plugins/vuetify.js" }
import { VSnackbarQueue } from 'vuetify/labs/VSnackbarQueue'

export default createVuetify({
  components: {
    VSnackbarQueue,
  },
})
```

## 使用

<ExamplesUsage name="v-snackbar-queue" />

<PromotedEntry />

## API

| 组件                                         | 描述              |
| ------------------------------------------ | --------------- |
| [v-snackbar-queue](/api/v-snackbar-queue/) | 主要组件            |
| [v-snackbar](/api/v-snackbar/)             | 实际的 Snackbar 组件 |

<ApiInline hide-links />
