---
meta:
  nav: 虚拟表
  title: Data table - Virtual tables
  description: 数据表组件用于以方便用户扫描的方式显示表格数据。 它包括分类、搜索、分页和选择。
  keywords: 数据表格, vuetify 数据表格组件, vue 数据表格组件
related:
  - /components/data-tables/basics/
  - /components/data-tables/server-side-tables/
  - /components/tables/
---

# 数据表格 - 虚拟表

V-data-table-virtual 组件依赖于所有数据在本地可用。但与标准的数据表不同，它使用虚拟化技术只渲染一小部分行。这使得它非常适合显示大型数据集。它支持排序和过滤，但不支持分页。

<PromotedEntry />

## 示例

### 简单示例：

<ExamplesExample file="v-data-table/virtual" />
