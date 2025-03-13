---
meta:
  nav: 基础用法
  title: Data table 数据表格
  description: 数据表组件用于以方便用户扫描的方式显示表格数据。 它包括分类、搜索、分页和选择。
  keywords: 数据表格, vuetify 数据表格组件, vue 数据表格组件
related:
  - /components/paginations/
  - /components/tables/
  - /components/lists/
features:
  github: /components/VDataTable/
  label: 'C: VDataTable'
  report: true
  spec: https://m2.material.io/components/data-tables
---

# 数据表格（Data tables）

`` `v-data-table`  ``组件用于显示表格数据。功能包括排序、搜索、分页、内嵌式编辑和行选择。

<PageFeatures />

## 使用

标准数据表假定整个数据集在本地可用。排序、分页和过滤由组件本身支持并在内部完成。

<ExamplesUsage name="v-data-table" />

<PromotedEntry />

## API

| 组件                                                 | 描述                                         |
| -------------------------------------------------- | ------------------------------------------ |
| [v-data-table](/api/v-data-table/)                 | 主要组件                                       |
| [v-data-table-headers](/api/v-data-table-headers/) | 用于显示数据表头部的功能组件                             |
| [v-data-table-footer](/api/v-data-table-footer/)   | 用于显示数据表底部的功能组件                             |
| [v-checkbox-btn](/api/v-checkbox-btn/)             | 可复用的轻量 [v-checbox](/components/checkboxes) |

<ApiInline hide-links />

### 服务器渲染表格

这种数据表的变体旨在用于非常大的数据集，如果将所有数据加载到客户端将效率低下。它支持排序、过滤、分页和选择，就像标准数据表一样，但所有的逻辑必须由您的后端或数据库在外部处理。

你可以在 [服务器渲染表格](/components/data-tables/server-side-tables) 页面找到更多例子和信息。

<ExamplesExample file="v-data-table/server" />

### 虚拟表

数据表的虚拟变体依赖于所有数据在本地可用，这与标准变体一样。但与标准变体不同，它使用虚拟化技术只渲染一小部分行。这使得它非常适合显示大型数据集。它支持客户端排序和过滤，但不支持分页。

你可以在 [虚拟表](/components/data-tables/virtual-tables) 页面找到更多信息。

<ExamplesExample file="v-data-table/virtual" />

## 指南

`v-data-table` 组件是一个简单和强大的桌面操纵组件。它非常适合显示大量的表格数据。

### 步骤项目

表项可以是几乎具有任何形状或数量属性的对象。 唯一的要求是，如果正在使用行选择，则需要某种形式的独特标识符。

### 标题头

头部数组是表的核心。 它界定了哪些属性可以显示、它们的相关标签、它们应该如何排序以及它们应该是什么样的。
<br>
所有属性都是可选的，但至少应该有一个 **title**、**value** 或 **key** 属性存在，以便显示不仅仅是一个空列：

```js
headers = [
  { title: 'No data, just a label' },
  { key: 'quantity' },
  { value: 'price' },
]
```

如果没有定义头部，表格将使用第一项的所有键作为头部。

标题也可以是一个树状结构，具有 **children** 属性，以创建具有自动计算 rowspan 和 colspan 的多行标题标签。
<br>
叶节点（没有** children** 的对象）将被用作每个项目的列。
<br>
分支节点（具有 **children** 的对象）支持与叶节点相同的排序和过滤选项，但不能用作列。

<ExamplesExample file="v-data-table/headers-multiple" />

#### 键和值

**key** 属性用于在插槽、事件、过滤器和排序函数中标识列。如果 **value** 是一个字符串，它将默认为 **value** 属性。
<br>
**value** 将列映射到项目数组中的属性。如果未定义 **value**，它将默认为 **key**，因此在大多数情况下，key 和 value 是可以互换的。这个例外是保留的 key，如 `data-table-select` 和 `data-table-expand`，它们必须定义为 **key** 才能正常工作。
<br>
**key** 和 **value** 都支持点标记法来访问嵌套对象的属性，而且 **value** 也可以是一个函数，用于组合多个属性或进行其他自定义格式化。如果 **value** 不是一个字符串，那么必须定义 **key**。

```js
items = [
  {
    id: 1,
    name: {
      first: 'John',
      last: 'Doe',
    },
  }
]
headers = [
  { title: 'First Name', value: 'name.first' },
  { title: 'Last Name', key: 'name.last' },
  {
    title: 'Full Name',
    key: 'fullName',
    value: item => `${item.name.first} ${item.name.last}`,
  },
]
```

#### 排序、过滤、分页

参见 [数据和展示](/components/data-tables/data-and-display)。

#### 自定义设置

其他选项可用的有：**width**、**align**、**fixed**，或使用 **headerProps**传递自定义的属性给头部元素，以及使用 **cellProps** 传递自定义属性给单元格。

### 属性

没有可用于自定义数据表组件各个方面的属性的缩短表。

#### 间距

使用 **density** 属性，可以使数据表格的样式更为紧凑。

<ExamplesExample file="v-data-table/prop-dense" />


<!-- #### Footer props

The `v-data-table` renders a default footer using the `v-data-footer` component. You can pass props to this component using **footer-props**.

<ExamplesExample file="v-data-table/prop-footer-props" /> -->

#### 隐藏默认表头和表尾

你可以应用 **hide-default-header** 和 **hide-default-footer**属性，分别移除默认表头和表尾。

<ExamplesExample file="v-data-table/prop-hide-header-footer" />

#### 选择框

**show-select** 属性将在默认表头中渲染一个复选框以切换所有行是否被选择，同时也为每一行渲染一个复选框。

欲了解更多信息和实例，请参考 [选择框例子](/components/data-tables/data-and-display/#selection-examples) 页面。

<ExamplesExample file="v-data-table/prop-row-selection" />

#### 简单复选框

当您想在数据表的插槽模板中使用复选框组件时，请使用 `v-checkbox-btn` 组件而不是 `v-checkbox` 组件。`v-checkbox-btn` 组件在内部使用，并将遵守标题对齐。

<ExamplesExample file="v-data-table/slot-simple-checkbox" />

### 插槽

#### 头部插槽

您可以使用动态插槽 `header.<key>` 来自定义特定的列。`<key>` 对应于在 **headers** 属性中找到的项目的 **key** 属性。

::: info
在使用 **show-select** 和 **show-expand** prop 时，有两个内置插槽可分别用于自定义选择（`header.data-table-select`）和展开（`header.data-table-expand`）列。
:::

<ExamplesExample file="v-data-table/slot-header" />

#### Headers 插槽

您也可以通过使用 `headers` 插槽来覆盖所有内部标题。请记住，您将不得不重新实现任何内部功能，如排序。

<ExamplesExample file="v-data-table/slot-headers" />

#### 项目插槽

通常，您会使用 `item.<key>` 插槽在特定列中渲染自定义标记。如果您需要对整行有更多的控制，可以使用 `item` 插槽。

<ExamplesExample file="v-data-table/slot-item" />

#### 键值对插槽

您可以使用动态插槽 `item.<key>` 来自定义特定的列。`<key>` 是发送到 **headers** 的标题项中 **key** 属性的名称。因此，要自定义calories列，我们使用 `item.calories` 插槽。

<ExamplesExample file="v-data-table/slot-item-key" />

#### 组头部插槽

当使用 **by** 属性时，您可以使用 `组头` 槽自定义组头部。

<ExamplesExample file="v-data-table/slot-group-header" />

#### 加载插槽

`loading` 插槽允许您自定义在获取数据时表格的显示状态。在这个示例中，我们利用 [v-skeleton-loader](/components/skeleton-loaders) 组件来显示加载动画。

<ExamplesExample file="v-data-table/slot-loading" />

## 示例

以下是一系列示例，展示了 `v-data-table` 组件更高级和现实世界中的使用方式。

### CRUD 操作

带 CRUD 操作的 `v-data-table` 使用 `v-dialog` 组件来编辑每行数据。

<ExamplesExample file="v-data-table/misc-crud" />

### 可展开行

**show-expand** 属性会在每一行渲染一个展开图标。您可以使用 `item.data-table-expand` 插槽来自定义这个图标。通过向 headers 数组添加一个具有 `key: 'data-table-expand'` 的列去改变这个插槽的位置。

就像选择功能一样，为了使展开功能正常工作，每行项目都需要一个唯一的属性。默认属性是 `id`，但您可以使用 **item-value** 属性来指定不同的项目属性。

<ExamplesExample file="v-data-table/misc-expand" />
