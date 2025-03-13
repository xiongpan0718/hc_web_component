---
meta:
  nav: 介绍
  title: 数据表 - 介绍
  description: 数据表组件用于以方便用户扫描的方式显示表格数据。 它包括分类、搜索、分页和选择。
  keywords: 数据表格, vuetify 数据表格组件, vue 数据表格组件
related:
  - /components/paginations/
  - /components/selects/
  - /components/data-tables/basics/
---

# 数据表 - 介绍

数据表组件用于以方便用户扫描的方式显示表格数据。 它包括分类、搜索、分页和选择。

<PromotedEntry />

:::success
此特性在 [v3.4.0 (Blackguard)](/getting-started/release-notes/?version=v3.4.0) 引入。
:::

## 组件

在深入到指南和实例中之前，我们需要理解一些数据表格的核心组件。它们为不同的场景而做了不同的优化。

| 组件                                                           | 用例                         |
| ------------------------------------------------------------ | -------------------------- |
| [Data tables](/components/data-tables/basics/)               | 基本功能的数据表，常用于分页、过滤和排序数据。    |
| [Server tables](/components/data-tables/server-side-tables/) | 添加了一些新的事件和属性，用于从服务器获取数据并展示 |
| [Virtual tables](/components/data-tables/virtual-tables/)    | 有虚拟化行特性的数据表                |

## API

| 组件                                                 | 描述                                           |
| -------------------------------------------------- | -------------------------------------------- |
| [v-data-table](/api/v-data-table/)                 | 主要组件                                         |
| [v-data-table-server](/api/v-data-table-server/)   | 用于显示服务器结果的专用数据表                              |
| [v-data-table-virtual](/api/v-data-table-virtual/) | 内置行虚拟化功能的数据表                                 |
| [v-data-table-footer](/api/v-data-table-footer/)   | 用于显示数据表底部的功能组件                               |
| [v-checkbox-btn](/api/v-checkbox-btn/)             | 可复用的轻量化 [v-checkbox](/components/checkboxes) |

<ApiInline hide-links />

## 指南

下面是为多种功能和用途提供了详细解释和代码实例的的数据表详细页面。

| 指南                                                 | 描述              |
| -------------------------------------------------- | --------------- |
| [基本用法](/components/data-tables/basics/)            | 理解数据表的基本组成部分。   |
| [数据和显示](/components/data-tables/data-and-display/) | 学习如何有效地操作和显示数据。 |
