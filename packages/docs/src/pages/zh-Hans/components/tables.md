---
meta:
  nav: 表格 (Tables)
  title: Table
  description: The table component is a lightweight wrapper around the table element that provides a Material Design feel without all the baggage.
  keywords: table, simple table, vuetify table component, vue simple table component, table component
related:
  - /components/data-tables/basics/
  - /components/data-tables/headers/
  - /components/lists/
features:
  github: /components/VTable/
  label: 'C: VTable'
  report: true
  spec: https://m2.material.io/components/data-tables
---

# 表格 (Tables)

简单的表格组件即为 `v-table`，它是包裹了默认的 HTML `<table>` 元素来实现的。意味着，一般的表格元素，例如 `<thead>`、`<tbody>`、`<tr>` 以及 `<td>`，都能够正常地在其中工作。

::: info
More advanced tables such as [v-data-table](/components/data-tables/basics/) are available. :::<!-- !\[Table Entry\](https://cdn.vuetifyjs.com/docs/images/components-temp/v-table/v-table-entry.png) -->

<PageFeatures />

## 使用

<ExamplesExample file="v-table/usage" />

<PromotedEntry />

## API

| 组件                       | 描述   |
| ------------------------ | ---- |
| [v-table](/api/v-table/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 主题

**theme** 属性可以切换表格的主题。

<ExamplesExample file="v-table/prop-dark" />

#### 间距 (Density)

你可以通过设置 **density** 属性来得到紧凑的表格。

<ExamplesExample file="v-table/prop-dense" />

#### 高度

使用 **height** 属性设置表格的高度。

<ExamplesExample file="v-table/prop-height" />

#### 固定表头

使用 **fixed-header** 属性和 **height** 属性，将表头固定在表格的顶部。

<ExamplesExample file="v-table/prop-fixed-header" />
