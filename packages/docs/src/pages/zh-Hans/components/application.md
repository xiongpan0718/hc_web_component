---
meta:
  title: 应用程序 (Application)
  description: Vuetify 配备了一个默认的标记，使得它很容易为任何 Vue 应用创建布局（模板）。
  keywords: 默认布局，vuetify 默认标记，vuetify 默认布局
related:
  - /features/theme/
  - /components/app-bars/
  - /components/navigation-drawers/
features:
  report: true
---

# Application (应用程序)

`v-app` 组件是一个可选的组件。它可以用作为从最上层以一种简单的方式控制主题的根组件。

<PageFeatures />

<PromotedEntry />

## API

| 组件                     | 描述   |
| ---------------------- | ---- |
| [v-app](/api/v-app/)   | 主要组件 |
| [v-main](/api/v-main/) | 内容部分 |

<ApiInline hide-links />

## 指南

In Vuetify, the `v-app` component is a convenient way to dynamically modify your application's current theme and provide an entry point for your layouts. When an application is mounted, each layout child registers itself with the closest layout parent and is then automatically placed in your window.

::: info
关于如何和根节点交互调整大小和样式的部分，请参考 [应用](/features/application-layout/) 页面。
:::

When placing your application level components, the order matters. Elements are stacked based on when they register and are rendered in the DOM after the first **nextTick** (to account for suspense). Layouts utilize [suspense](https://vuejs.org/guide/built-ins/suspense) to allow all layout components to register before rendering the initial layout.

The following example demonstrates how the `v-app-bar` component takes priority over `v-navigation-drawer` because of its rendering order:

<ExamplesExample file="application/app-bar-drawer" open preview  />

如果我们交换 `v-app-bar` 和 `v-navigation-drawer` 的位置，则他们的位置会因排版系统的原因发生些许改变。

<ExamplesExample file="application/drawer-app-bar" open preview  />

## 主题

`v-app` 组件使其应用定义好的主题变得非常简单。默认的情况下 Vuetify 有两种主题，**light（明亮）** 和 **dark（黑暗）**。每种主题都有很多组件有对应的颜色和样式。因为 `v-app` 扮演了一个调整 [theme（主题）](/features/theme/) 的接口的角色，于是你就可以动态地调整你的模板的主题。

下面的主题展示了如何使用 **theme** 属性来切换明暗的主题。

<ExamplesExample file="application/theme" open preview />
