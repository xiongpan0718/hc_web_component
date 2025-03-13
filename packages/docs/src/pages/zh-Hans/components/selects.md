---
meta:
  nav: 下拉选择框 (Selects)
  title: Select 下拉框
  description: 选择组件提供了用户可以从中选择的选项列表。
  keywords: 选择, vuetify 选择组件, vue 选择组件
related:
  - /components/autocompletes/
  - /components/combobox/
  - /components/forms/
features:
  label: 'C: VSelect'
  report: true
  github: /components/VSelect/
  spec: https://m2.material.io/components/text-fields
---

# 下拉选择框 (Selects)

选择器组件用于从选项列表中收集用户提供的信息。

<PageFeatures />

## 使用

<ExamplesUsage name="v-select" />

<PromotedEntry />

## API

| 组件                                     | 描述                                                             |
| -------------------------------------- | -------------------------------------------------------------- |
| [v-select](/api/v-select/)             | 主要组件                                                           |
| [v-autocomplete](/api/v-autocomplete/) | A select component that allows for advanced filtering          |
| [v-combobox](/api/v-combobox/)         | A select component that allows for filtering and custom values |

<ApiInline hide-links />

## 注意

::: error

When using objects for the **items** prop, you must associate **item-title** and **item-value** with existing properties on your objects. These values are defaulted to **title** and **value** and can be changed.

:::

## 指南

`v-select` 组件目的在于替代标准的 `<select>` 元素。它常常和 [v-form](/components/forms/) 以及其他输入控制组件一起使用。

### 属性

所有的表单输入都有大量的 API，可定制性非常强。

#### 间距

You can use **density** prop to adjust vertical spacing within the component.

<ExamplesExample file="v-select/prop-dense" />

#### 多选

**multiple** 属性允许多个选择。

<ExamplesExample file="v-select/prop-multiple" />

#### 纸片 (Chip)

使用 **chips** 属性，将选择的内容显示成纸片

<ExamplesExample file="v-select/prop-chips" />

#### 只读

可以在 `v-select` 上使用 **readonly** 属性，避免用户修改它的值。

<ExamplesExample file="v-select/prop-readonly" />

#### 禁用

将 **disabled** 属性应用于 `v-select` 将阻止用户与组件交互。

<ExamplesExample file="v-select/prop-disabled" />

#### 自定义显示值 (title) 和实际值 (value)

你可以自定义选项数组中的显示值和实际值对应的字段。默认情况下是 **title** 和 **value**。下面的例子除了使用了自定义显示值和实际值外，还使用了 **return-object** 属性，可以返回选择项的整个对象。

<ExamplesExample file="v-select/prop-custom-title-and-value" />


<!-- #### Menu props

Custom props can be passed directly to `v-menu` using **menuProps** prop. In this example menu is force directed to top and shifted to top.

<ExamplesExample file="v-select/prop-menu-props" /> -->

#### Custom item props

`item-title` and `item-value` are provided for convenience, and additional props can be passed to list items either through the **item** slot (see below) or with the **itemProps** prop. Similar to title and value, it has a default value of `"props"`, which will pass everything in the `props` key of each item object to the list item.

```js
const items = [
  {
    title: 'John',
    props: { subtitle: 'Engineering' },
  },
]
```

`:item-props="true"` will use the entire item object as props. This overrides `item-title` and `item-value`.

```js
const items = [
  {
    title: 'John',
    subtitle: 'Engineering',
  },
]
```

Or a custom transform function can be passed to `itemProps` to generate the props for each item.

<ExamplesExample file="v-select/prop-item-props" />

See the [VListItem API](/api/v-list-item/) for a list of available props.

### 插槽

`v-select` 组件提供了可以轻松自定义组件的插槽。包括 **prepend** 和 **append** 插槽，以及 **selection** 和 **no-data** 插槽。

#### 项目

The item slot is used to change how items are rendered in the list. It provides `item`, an [InternalItem](/api/v-select/#slots-item) object containing the transformed item-title and item-value; and `props`, an object containing the props and events that would normally be bound to the list item.

<ExamplesExample file="v-select/slot-item" />

#### 额外选项

The `v-select` component can be optionally expanded with prepended and appended items. This is perfect for customized **select-all** functionality.

<ExamplesExample file="v-select/slot-append-and-prepend-item" />

#### 选择

**selection** 插槽可以自定义选择的值如何在输入框内显示。如果你不想输入框因为内容太多变成多行，那这是很好的解决方案。

<ExamplesExample file="v-select/slot-selection" />
