---
meta:
  nav: 服务器端表
  title: 数据表 - 服务器端表
  description: 数据表组件用于以方便用户扫描的方式显示表格数据。 它包括分类、搜索、分页和选择。
  keywords: 数据表格, vuetify 数据表格组件, vue 数据表格组件
related:
  - /components/data-tables/basics/
  - /components/data-tables/virtual-tables/
  - /components/tables/
---

# 数据表 - 服务器端表

服务器端数据表用于显示来自API的数据。

<PromotedEntry />

## 示例

### 服务器端分页和排序

若要使用来自API的数据，请监听 **@update:options** 事件以知道何时获取新数据。 使用 **loading** 在获取数据时显示进度栏。

<ExamplesExample file="v-data-table/misc-server-side-paginate-and-sort" />

### 服务器端搜索

如果您需要支持搜索功能，请使用 **search** 属性来告知表格何时有新的搜索输入可用。由于表格本身实际上不会进行任何过滤，因此 **search** 输入不必是实际要搜索的值。在这个例子中，我们有多个可搜索的值，所以我们只需在需要获取新数据时确保将 **search** 设置为 _anything_。

<ExamplesExample file="v-data-table/server-search" />

### 加载

您可以使用 **loading** 属性来表示表格中的数据目前正在加载中。如果表格中没有数据，也会显示一个加载消息。这个消息可以通过使用 **loading-text** 属性或 `loading` 插槽来自定义。

<ExamplesExample file="v-data-table/prop-loading" />
