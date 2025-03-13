---
meta:
  nav: 工作区 (Sheets)
  title: Sheet 工作表
  description: 工作表组件是Vuetify中使用的许多Material Design实现的基础。
  keywords: 工作表, vuetify 工作表组件, vue 工作表组件
related:
  - /components/cards
  - /components/grids
  - /styles/elevation
features:
  github: /components/VSheet/
  label: 'C: VSheet'
  report: true
---

# 工作区 (Sheets)

`v-sheet` 组件是一块可改变的 _paper_ ，它支持 Vuetify 组件的一些基本特性。

![工作表标题](https://cdn.vuetifyjs.com/docs/images/components/v-sheet/v-sheet-entry.png)

<PageFeatures />

## 使用

工作区组件支持强调效果，圆角，自定义颜色等功能。它既可以作为其他组件的容器也可以单独使用。

<ExamplesUsage name="v-sheet" />

<PromotedEntry />

## API

| 组件                       | 描述   |
| ------------------------ | ---- |
| [v-sheet](/api/v-sheet/) | 主要组件 |

<ApiInline hide-links />

## 组件结构

`v-sheet` 组件只有一个默认插槽。

![工作表解释性说明](https://cdn.vuetifyjs.com/docs/images/components/v-sheet/v-sheet-anatomy.png)

| 元素 / 区域 | 描述     |
| ------- | ------ |
| 1. 容器   | 主要内容区域 |

## 指南

在构建用户界面时，可以创建组件容器来包含其他的组件。其中 `v-sheet` 组件就是一个很好的选择。它提供了最基础的强调效果，圆角和背景颜色修改。

### 属性 (Props)

下面列举了 `v-sheet` 组件能够使用的标准属性。

#### 强调效果 (Elevation)

`v-sheet` 组件接受一个从 **0** 到 **24** （其中 0 为默认值）的强调效果。_elevation_ 属性的值修改了 CSS 的 `box-shadow` 属性。更多信息可以参考 Material Design 的 [强调效果设计规范](https://material.io/design/environment/elevation.html)。

<ExamplesExample file="v-sheet/prop-elevation" />

#### 圆角 (Rounded)

**rounded** 属性默认会加上一个 _4px_ 的 `border-radius`。默认情况下，`v-sheet` 组件没有圆角效果。可以通过改变 rounded 的值，提供圆角半径和位置的信息。例如，_tr-xl l-pill_ 等同于 _rounded-tr-xl rounded-l-pill_。详细的缩写参考可以访问 [Border Radius](/styles/border-radius/) 页面。

<ExamplesExample file="v-sheet/prop-rounded" />

#### 颜色

工作区和它包含的部件可以有不同的尺寸和颜色。

`v-sheet` 组件可以使用自定义的，诸如 `warning`，`amber darken-3` 和 `deep-purple accent` 这样的 [Material Design 颜色](/styles/colors/)。同样也可以使用 _rgb_， _rgba_ 和 _hexadecimal_ 这样的值。

<ExamplesExample file="v-sheet/prop-color" />

## 示例

下面展示了一些 `v-sheet` 组件更为高级的用法和实际项目中的例子。

### 祝贺页面

这个例子展示了使用工作区组件创建一个祝贺加入 Vuetify 社区的横幅。

<ExamplesExample file="v-sheet/misc-congratulations" />

### 核对通知

例子中使用了工作区组件来创建了一个横幅，告诉用户账户账单已经核对。

<ExamplesExample file="v-sheet/misc-reconcile" />

### 隐私政策

创建一个隐私政策的通知，这是一个 `v-sheet` 组件的非常不错的应用。

<ExamplesExample file="v-sheet/misc-privacy-policy" />

### 推荐程序

即使对应于简单的使用情况，`v-sheet` 组件也可以轻松地包含内容和其他组件。

<ExamplesExample file="v-sheet/misc-referral-program" />
