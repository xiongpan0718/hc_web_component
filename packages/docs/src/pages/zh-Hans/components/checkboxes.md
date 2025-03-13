---
meta:
  nav: 复选框 (Checkboxes)
  title: Checkbox 复选框
  description: 复选框组件允许用户在两个值之间进行选择。
  keywords: 复选框，复选框组件，vuetify 复选框组件，vue 复选框组件
related:
  - /components/switches
  - /components/forms
  - /components/text-fields
features:
  label: 'C: VCheckbox'
  report: true
  github: /components/VCheckbox/
  spec: https://m2.material.io/components/checkboxes
---

# 复选框 (Checkboxes)

The `v-checkbox` component provides users the ability to choose between two distinct values. These are very similar to a switch and can be used in complex forms and checklists.

<PageFeatures />

## 使用

最简单形式的 `v-checbox` 提供了两个值之间的切换。

<ExamplesUsage name="v-checkbox" />

<PromotedEntry />

::: tip

A simpler version, [`v-checkbox-btn`](/components/data-tables/basics/#simple-checkbox) is used primarily as a lightweight alternative in data-table components to select rows or display inline boolean data.

:::

## API

| 组件                             | 描述   |
| ------------------------------ | ---- |
| [v-checkbox](/api/v-checkbox/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 颜色

复选框可以设置颜色通过使用 **color**属性，颜色可以是任何内置的颜色或者其上下文名称。

<ExamplesExample file="v-checkbox/prop-colors" />

#### 数组模型

多个 `v-checbox`可以通过数组分享相同的 **v-model**

<ExamplesExample file="v-checkbox/prop-model-as-array" />

#### 布尔模型

单个 `v-checbox` 将有一个布尔值作为其 **value**。

<ExamplesExample file="v-checkbox/prop-model-as-boolean" />

#### 状态

`v-checbox` 可能有不同的状态，如 **默认(default)**, **禁用(disabled)**, 和 **未确定(indeterminate)**。

<ExamplesExample file="v-checkbox/prop-states" />

### 插槽

#### Label

文本字段标签可以在`label`插槽中定义 - 允许使用 HTML 内容.

<ExamplesExample file="v-checkbox/slot-label" />

### 其他

#### 内联输入文本

If you need to place checkboxes in line with other components, you can use the `v-checkbox-btn` component.

This component renders just checkbox, without the trapping of a form input such as validation, a label, and messages.

<ExamplesExample file="v-checkbox/misc-inline-textfield" />
