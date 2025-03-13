---
meta:
  nav: 悬浮操作按钮 (Floating Action Buttons)
  title: FAB 浮动按钮
  description: 浮动动作按钮（或 FAB）组件是一个被提升的动作，它被提升到 UI 的上方或附加到卡片等元素上。
  keywords: 浮动动作按钮, fab, vuetify fab 组件, vue fab 组件
related:
  - /components/buttons/
  - /components/icons/
  - /styles/transitions/
features:
  report: true
  label: 'C: VFab'
  github: /components/VFab/
  spec: https://m2.material.io/components/buttons-floating-action-button
---

# 悬浮操作按钮 (Floating Action Buttons)

`v-fab` 组件可以用作悬浮操作按钮。它提供了一个主要操作入口。

<PageFeatures />

::: success

此特性自 [v3.6.0](/getting-started/release-notes/?version=v3.6.0) 版本引入。

:::

## 使用

浮动操作按钮可以附加到材料上，以表示应用程序中的重要操作。在大多数情况下将使用默认大小，而 `small` 变体可用于与类似大小的元素保持连续性。

<ExamplesUsage name="v-fab" />

<PromotedEntry />

## API

| 组件                   | 描述   |
| -------------------- | ---- |
| [v-fab](/api/v-fab/) | 主要组件 |

<ApiInline hide-links />


<!-- ## Guide

The `v-fab` component is used to indicate a promoted action in your application. It can be used in a variety of contexts, such as a page with no content, a list of items, or a search results page.

### Props

The `v-fab` component has a multitude of props that allow you to customize its appearance and behavior. -->

## 示例

下面的例子用于展示 `v-fab` 组件更为高级和更为贴近实际情况的用法。

### 显示动画

当第一次显示该组件时，使用动画效果来展示。因此例子中我们使用了 `v-fab-transition` 和 v-show。当然你可以使用 Vuetify 提供的任何的效果或者你自定义的效果。

<ExamplesExample file="v-fab/misc-display-animation" />

### 横向屏幕切换

当按钮的默认操作发生了更改时，推荐使用过渡效果来表现它的变化。例子中通过绑定 `key` 属性到一些数据上，并通过 Vue 的过渡系统来发送改变的信号。

<ExamplesExample file="v-fab/misc-lateral-screens" />

### 小型按钮

为了达到更好的视觉效果，我们可以使用小型按钮以适配列表的头像。

<ExamplesExample file="v-fab/misc-small" />
