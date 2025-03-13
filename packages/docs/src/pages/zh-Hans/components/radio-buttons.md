---
meta:
  nav: 单选按钮 (Radio buttons)
  title: Radio button 单选按钮
  description: 使用单选按钮组，只允许用户选择一组选项中的一个。
  keywords: radio groups, radio buttons, vuetify radio group 组件, vuetify radio 组件, vue radio 组件, vue radio group 组件
related:
  - /组件/button-groups(按钮组)/
  - /components/forms/
  - /components/checkboxes/
features:
  label: 'C: VRadio'
  report: true
  github: /components/VRadio/
  spec: https://m2.material.io/components/radio-buttons
---

# 单选按钮 (Radio buttons)

The `v-radio` component is a simple radio button. When combined with  the `v-radio-group` component you can provide grouping functionality to allow users to select from a predefined set of options.

<PageFeatures />

## 使用

虽然 `v-radio` 可以单独使用，但它最好与 `v-radio-group` 一起使用。

<ExamplesUsage name="v-radio-group" />

<PromotedEntry />

## API

| 组件                                   | 描述                           |
| ------------------------------------ | ---------------------------- |
| [v-radio-group](/api/v-radio-group/) | 主要组件                         |
| [v-radio](/api/v-radio/)             | 用于修改 `v-radio-group` 的状态的子组件 |

<ApiInline hide-links />

## 示例

### 属性

#### Model (group)

Using the **v-model** (or **model-value**) you can access and control the selected radio button defined by the set **value** on the child `v-radio` components.

<ExamplesExample file="v-radio-group/prop-model-group" />

::: info
If you are using integer values with **model-value**, you will need to use `:value` to set the value of the child `v-radio` otherwise it will be evaluated as a string.
:::

#### Model (radio)

The **v-model** (or **model-value**) you can access and control the value of a single radio button. The `true`/`false` values can be independently defined using the **true-value** and **false-value** props.

<ExamplesExample file="v-radio-group/prop-model-radio" />

#### 颜色

单选按钮可以使用 **color** 属性设置颜色，颜色可以是内置颜色和或其他颜色辅助类。

<ExamplesExample file="v-radio-group/prop-colors" />

#### 布局

单选按钮组组件可以使用 respective 属性，选择按行或者按列排布单选按钮。默认是按列。

<ExamplesExample file="v-radio-group/prop-direction" />

### 插槽

#### 标签

单选组标签可以在 `label` 中定义，允许使用 HTML 内容。

<ExamplesExample file="v-radio-group/slot-label" />
