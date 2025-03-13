---
meta:
  nav: 数据和显示
  title: 数据表格 - 数据和显示
  description: 数据表组件用于以方便用户扫描的方式显示表格数据。 它包括分类、搜索、分页和选择。
  keywords: 数据表格, vuetify 数据表格组件, vue 数据表格组件
related:
  - /components/data-tables/basics/
  - /components/paginations/
  - /components/tables/
---

# 数据和展示

数据表过滤是关键功能，用户可以很快找到他们寻找的数据。

<PromotedEntry />

## 筛选示例

这些示例展示了您可以使用 **搜索** 属性过滤结果的各种方式。

### 搜索

数据表格还提供了一个**search** 属性，允许你进行数据筛选。

<ExamplesExample file="v-data-table/prop-search" />

### 可过滤

通过在标题项上将 **filterable** 的属性设置为 false，可以轻松地禁止在搜索表行时包括特定列。 在下面的示例中，dessert名称列不再可搜索。

<ExamplesExample file="v-data-table/prop-filterable" />

### 自定义过滤器

您可以通过 **search** 属性覆盖默认的过滤器，并为此提供一个 **自定义过滤器** 属性。 您可以看到下面函数的签名。

```ts
(value: string, query: string, item?: any) => boolean | number | [number, number] | [number, number][]
```

在下面的示例中，自定义过滤器只匹配完全大写的输入。

<ExamplesExample file="v-data-table/prop-custom-filter" />

## 分页示例

分页即是将大量数据分为较小的数据块。

### 外部分页

分页可以通过使用单独的属性或者使用 **options** 属性来外部控制。请记住，您必须应用 **.sync** 修饰符。

<ExamplesExample file="v-data-table/misc-external-paginate" />

## 选择示例

选择功能允许您选择/取消选择行，并检索有关哪些行已被选择的信息。

### 列表项

为了使选择功能正常工作，数据表必须能够区分数据集中的每一行。这是通过使用 **item-value** 属性来实现的。它指定了项目上应该包含唯一值的属性。默认情况下，它查找的属性是 `id`。

您也可以提供一个函数，如果例如唯一值需要由几个属性组合而成。该函数接收每个项目作为其第一个参数。

<ExamplesExample file="v-data-table/prop-item-value" />

### 选定的值

可以通过 **v-model** 属性访问数据表的当前选择。数组将由您使用 **item-value** 属性设置的属性中找到的唯一值组成（或者由您传递的函数返回的值）。如果您希望数组由实际对象组成，可以使用 **return-object** 属性。

<ExamplesExample file="v-data-table/prop-return-object" />

<PromotedEntry />

### 可选择的行

使用 **item-selectable** 属性来指定您的项目上的一个属性，该属性控制项目是否应该是可选的。

<ExamplesExample file="v-data-table/prop-item-selectable" />

### 自定义选择列

使用 **item.data-table-select** 插槽和 `v-checkbox-btn` 来自定义用于行选择的复选框。您也可以使用 **header.data-table-select** 插槽来自定义列标题中的全选复选框。

<ExamplesExample file="v-data-table/slot-item-data-table-select" />

### 选择策略

数据表支持三种不同的选择策略。

| Strategy   | 描述                                                      |
| ---------- | ------------------------------------------------------- |
| `'single'` | 只能选择一个单行。选择头部中的所有复选框不显示                                 |
| `'page'`   | 可以选择多行。点击标题中的所有复选框选择当前页面上的所有 (可选) 行  |
| `'all'`    | 可以选择多行。点击标题中的所有复选框选择整个数据集上的所有 (可选) 行 |

<ExamplesExample file="v-data-table/prop-select-strategy" />

## 排序示例

数据表可以按列值排序行。

<PromotedEntry />

### 基本排序

您的表格排序可以通过 **sort-by** 属性来控制。这个属性接受一个对象数组，每个对象都有 **key** 和 **order** 属性，描述了表格应该如何排序。

**key** 对应于 **headers** 数组中定义的一列，而 **order** 是字符串 `'asc'` 或 `'desc'`，表示项目排序的顺序。

除非您使用了下面看到的 **multi-sort** 属性，否则这个数组几乎总是只有一个对象。

<ExamplesExample file="v-data-table/prop-sort-by" />

### 多列排序

使用 **multi-sort** 属性可以根据多列同时排序。

<ExamplesExample file="v-data-table/prop-multi-sort" />

### 按原始排序

::: success

此特性在 [v3.5.0 (Polaris)](/getting-started/release-notes/?version=v3.5.0) 中引入。

:::

在您的 headers 对象中使用 _sortRaw_ 键可以让您访问项目的所有值。如果您想根据不在表格中显示的值或多个值的组合进行排序，这将非常有用。

<ExamplesExample file="v-data-table/prop-headers-sort-raw" />
