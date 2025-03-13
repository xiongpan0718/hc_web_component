---
meta:
  nav: 组合选择框 (Combobox)
  title: Combobox 组合框
  description: 组合框组件提供了类型前自动完成功能，并允许用户在提供的选项列表之外提供一个自定义值。
  keywords: combobox, vuetify combobox组件, vue combobox组件
related:
  - /components/autocompletes/
  - /components/forms/
  - /components/selects/
features:
  figma: true
  label: 'C: VCombobox'
  report: true
  github: /components/VCombobox/
  spec: https://m2.material.io/components/text-fields
---

# 组合选择框 (Combobox)

`v-combobox` 组件本质上是 [v-text-field](/components/text-fields) 组件，允许填入 **items** 数组里的值，或者自定义的值。选择的值会以字符串形式返回。

<PageFeatures />

## 使用

使用组合框，您可以允许用户创建可能不在提供的项列表中显示的新值。

<ExamplesUsage name="v-combobox" />

<PromotedEntry />

## API

| 组件                                     | 描述                                                    |
| -------------------------------------- | ----------------------------------------------------- |
| [v-combobox](/api/v-combobox/)         | 主要组件                                                  |
| [v-autocomplete](/api/v-autocomplete/) | A select component that allows for advanced filtering |
| [v-select](/api/v-select/)             | A replacement for the HTML <select></select>          |

<ApiInline hide-links />

## 注意

::: error
As the Combobox allows user input, it **always** returns the full value provided to it (for example a list of Objects will always return an Object when selected). This is because there's no way to tell if a value is supposed to be user input or an object lookup [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479)

  This also means that a typed string will not select an item the same way clicking on it would, you may want to set `auto-select-first="exact"` when using object items.
:::

## 示例

### 属性

#### 间距

You can use `density` prop to adjust vertical spacing within the component.

<ExamplesExample file="v-combobox/prop-density" />

#### 多个组合框

Previously known as **tags** - user is allowed to enter more than one value.

<ExamplesExample file="v-combobox/prop-multiple" />

### 插槽

#### No data with chips (无内容的插槽)

在本例中，我们使用一个自定义的 **no-data** 插槽在 搜索/创建 项时为用户提供上下文。

<ExamplesExample file="v-combobox/slot-no-data" />
