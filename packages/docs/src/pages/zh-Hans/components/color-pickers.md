---
meta:
  nav: 颜色选择器 (Color pickers)
  title: Color picker 颜色选择器
  description: 颜色选择器组件允许用户使用各种不同的输入和格式从预定义或自定义的颜色中选择。
  keywords: 颜色选择器，vuetify 颜色选择器组件，vue 颜色选择器组件
related:
  - /components/menus/
  - /styles/colors/
  - /features/theme/
features:
  github: /components/VColorPicker/
  label: 'C: VColorPicker'
  report: true
---

# 颜色选择器 (Color pickers)

`v-color-picker` 允许你使用各种方法来选择颜色。

<PageFeatures />

## 使用

<ExamplesUsage name="v-color-picker" />

<PromotedEntry />

## API

| 组件                                     | 描述   |
| -------------------------------------- | ---- |
| [v-color-picker](/api/v-color-picker/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 自定义颜色选择器外观

大量的可用属性用于自定义此组件，显示或隐藏颜色选择器的特定部分。你可以隐藏调色盘，颜色滑块，或者输入框。甚至可以添加某些预置色板。

<ExamplesExample file="v-color-picker/prop-canvas" />

#### 强调效果 (Elevation)

可以通过修改 `v-color-picker` 组件的 **elevation** 或者 **flat** 属性调整强调效果。**flat** 等同于把 **elevation** 设置为 0。

<ExamplesExample file="v-color-picker/prop-elevation" />

#### 颜色模式

你可以使用 `modes` 属性决定用户如何键入颜色值。如果你只设定一种颜色模式，那么会隐藏颜色模式选择框。你也可以使用 `mode` 的 v-model 来控制当前的颜色模式。

<ExamplesExample file="v-color-picker/prop-mode" />

#### 颜色模型

`v-color-picker` 使用 `v-model` 属性来控制显示的颜色。它支持十六进制字符串，如 **#FF00FF** 和 **#FF00FF00**，以及表示 **RGBA**、**HSLA** 和 **HSVA** 值的对象。组件将尝试以提供的格式发出颜色。如果值为 null，则 `v-color-picker` 将默认发出十六进制颜色。

<ExamplesExample file="v-color-picker/prop-model" />

#### 色板

Using the `show-swatches` prop you can display an array of color swatches that users can pick from. It is also possible to customize what colors are shown using the `swatches` prop. This prop accepts a two-dimensional array, where the first dimension defines a column, and second dimension defines the swatches from top to bottom by providing rgba hex strings. You can also set the max height of the swatches section with the `swatches-max-height` prop.

<ExamplesExample file="v-color-picker/prop-swatches" />
