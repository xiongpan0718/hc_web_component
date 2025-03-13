---
emphasized: true
meta:
  title: 下拉刷新（Pull To Refresh）
  description: The PullToRefresh allows users to update content with a simple downward swipe on their screen.
  keywords: Pull to refresh, vuetify Pull to refresh component, vue pull to refresh component
features:
  label: "C: VPullToRefresh"
  github: /components/VPullToRefresh/
  report: true
---

# 下拉刷新（Pull To Refresh）

The PullToRefresh allows users to update content with a simple downward swipe on their screen. Works for Mobile and Desktop.

<PageFeatures />

::: warning

该功能需要 [v3.6.0](/getting-started/release-notes/?version=v3.6.0)

:::

## 安装

实验室组件需要手动导入和安装该组件。

```js { resource="src/plugins/vuetify.js" }
import { VPullToRefresh } from 'vuetify/labs/VPullToRefresh'

export default createVuetify({
  components: {
    VPullToRefresh,
  },
})
```

## 使用

Drag the list downward to activate the pull-to-refresh feature.

<ExamplesExample file="v-pull-to-refresh/usage" />

::: tip

Pull down functionality is available as soon as its immediate scrollable parent has scrolled to the top.

:::

<PromotedEntry />

## API

| 组件                                           | 描述   |
| -------------------------------------------- | ---- |
| [v-pull-to-refresh](/api/v-pull-to-refresh/) | 主要组件 |

<ApiInline hide-links />
