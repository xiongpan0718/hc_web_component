---
meta:
  nav: 窗格 (Windows)
  title: Window 窗口
  description: The window component is a wrapper container that allows transitioning between content. It serves as the baseline for tabs and carousels.
  keywords: 窗口，vuetify 窗口组件，vue 窗口组件
related:
  - /components/carousels/
  - /components/sheets/
  - /components/tabs/
features:
  github: /components/VWindow/
  label: 'C: VWindow'
  report: true
---

# 窗格 (Windows)

`v-window` 组件提供了从一个面板变换至另一个面板的基本功能。其他的例如 `v-tabs`，`v-carousel` 和 `v-stepper` 组件都是以它为基础构建的。

<PageFeatures />

## 使用

`v-window` 被设计为可以简单地循环其中的内容，提供简单的接口以用于创建自定义的实现。

<ExamplesExample file="v-window/usage" />

<PromotedEntry />

## API

| 组件                                   | 描述           |
| ------------------------------------ | ------------ |
| [v-window](/api/v-window/)           | 主要组件         |
| [v-window-item](/api/v-window-item/) | 用于显示单独窗格的子组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 显示箭头

By default no arrows are displayed. You can change this by adding the **show-arrows** prop. If you set the prop value to `"hover"`, they will only show when you mouse over the window.

<ExamplesExample file="v-window/prop-show-arrows" />

#### 反转

The **reverse** prop will reverse the transitions

<ExamplesExample file="v-window/prop-reverse" />

#### 布局

You can change the transition to vertical using the **direction** prop

<ExamplesExample file="v-window/prop-direction" />

#### 自定义箭头按钮

可以用 **prev** 和 **next** 槽来自定义窗口中的箭头部分。

<ExamplesExample file="v-window/slots-next-prev" />

### 其他

#### 创建账户

Create rich forms with smooth animations. `v-window` automatically tracks the current selection index to change the transition direction.

<ExamplesExample file="v-window/misc-account-creation" />

#### 新手教学

`v-window` makes it easy to create custom components such as a differently styled stepper.

<ExamplesExample file="v-window/misc-onboarding" />
