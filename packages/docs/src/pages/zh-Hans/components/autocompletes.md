---
meta:
  nav: 自动补全 (Autocpmpletes)
  title: Autocomplete 自动补全
  description: 自动补全组件提供了类型前自动补全功能，并提供了一个可用选项列表。
  keywords: 自动补全, vuetify 自动补全组件, vue 自动补全组件
related:
  - /components/combobox/
  - /components/forms/
  - /components/selects/
features:
  figma: true
  label: 'C: VAutocomplete'
  report: true
  github: /components/VAutocomplete/
  spec: https://m2.material.io/components/text-fields
---

# 自动补全 (Autocpmpletes)

`v-autocomplete` 组件提供了简单且弹性的填充功能。在需要在大量数据中寻找结果或者需要请求后端 API 时很有用。

<PageFeatures />

## 使用

自动补全组件拓展了 `v-select` 并且添加了过滤项目的功能。

<ExamplesUsage name="v-autocomplete" />

<PromotedEntry />

## API

| 组件                                     | 描述                                                             |
| -------------------------------------- | -------------------------------------------------------------- |
| [v-autocomplete](/api/v-autocomplete/) | 主要组件                                                           |
| [v-combobox](/api/v-combobox/)         | A select component that allows for filtering and custom values |
| [v-select](/api/v-select/)             | A replacement for the HTML <select></select>                   |

<ApiInline hide-links />

## 注意

::: error

When using objects for the **items** prop, you must associate **item-title** and **item-value** with existing properties on your objects. These values are defaulted to **title** and **value** and can be changed.

:::

## 示例

下面是一些简单到复杂的例子。

### 属性

#### 间距

You can use `density` prop to adjust vertical spacing within the component.

<ExamplesExample file="v-autocomplete/prop-density" />

#### 过滤器

The `custom-filter` prop can be used to filter each individual item with custom logic. In this example we filter items by name.

<ExamplesExample file="v-autocomplete/prop-filter" />

::: tip

The **v-autocomplete** component updates the search model on focus/blur events. Focus sets search to the current model (if available), and blur clears it.

Unlike **v-combobox**, it doesn't keep unlisted values. To prevent unnecessary API requests when querying, ensure that search is not empty and/or doesn't match the current model.

:::

### 插槽

#### 项目和选择项

With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items.

<ExamplesExample file="v-autocomplete/slot-item-and-selection" />

### 其他


<!--
#### Asynchronous items

Sometimes you need to load data externally based upon a search query. Use the `search-input` prop with the **.sync** modifier when using the `autocomplete` prop. We also make use of the new `cache-items` prop. This will keep a unique list of all items that have been passed to the `items` prop and is **REQUIRED** when using asynchronous items and the **multiple** prop.

<ExamplesExample file="v-autocomplete/misc-asynchronous-items" />
-->

#### 状态选择器

结合使用 `v-autocomplete`插槽和过渡，您可以创建一个现代的的可切换的自动补全栏，例如这个状态选择器。

<ExamplesExample file="v-autocomplete/misc-state-selector" />

#### New tab

::: success
This feature was introduced in [v3.3.0 (Icarus)](/getting-started/release-notes/?version=v3.3.0)
:::

The **auto-select-first** property highlights the first result when searching, allowing you to press <v-kbd>tab</v-kbd> or <v-kbd>enter</v-kbd> to quickly select it.

<ExamplesExample file="v-autocomplete/misc-new-tab" />
