---
emphasized: true
meta:
  nav: 树形视图（Treeview）
  title: Treeview 树形视图
  description: 树形视图组件是一个用户界面，用来表示树状结构中的分层数据。
  keywords: 树形视图, vuetify 树形视图组件, vue 树形视图组件
related:
  - /components/lists/
  - /components/timelines/
features:
  label: 'C: VTreeview'
  report: true
---

# Treeview（树形视图）

`v-treeview` 组件适用于显示大量嵌套数据。

<PageFeatures />

::: warning

This feature requires [v3.5.9](/getting-started/release-notes/?version=v3.5.9)

:::

## 安装

实验室组件需要手动导入和安装该组件。

```js { resource="src/plugins/vuetify.js" }
import { VTreeview } from 'vuetify/labs/VTreeview'

export default createVuetify({
  components: {
    VTreeview,
  },
})
```

## 使用

A basic example of the treeview component.

<ExamplesExample file="v-treeview/usage" />

<PromotedEntry />

## API

| 组件                                               | 描述                                                              |
| ------------------------------------------------ | --------------------------------------------------------------- |
| [v-treeview](/api/v-treeview/)                   | 主要组件                                                            |
| [v-treeview-item](/api/v-treeview-item/)         | Sub-component used to display a single treeview node            |
| [v-treeview-children](/api/v-treeview-children/) | Sub-component used to display a single treeview node's children |
| [v-treeview-group](/api/v-treeview-group/)       | Sub-component used to display a single treeview node's children |

<ApiInline hide-links />

## 示例

### 属性

#### 可激活

树形视图节点可以将其激活。

<ExamplesExample file="v-treeview/prop-activatable" />

#### 颜色

您可以控制活动的树形视图节点的文本和背景颜色。

<ExamplesExample file="v-treeview/prop-color" />

#### 密集模式

`dense`属性激活密集模式，提供了更紧凑的布局，同时降低了项目的高度。

<ExamplesExample file="v-treeview/prop-dense" />


<!-- #### Hoverable

Treeview nodes can have a hover effect.

<ExamplesExample file="v-treeview/prop-hoverable" /> -->

#### Item props

If **item-props** is set to `true` then the whole item will be spread. In the following example, the disabled prop defined in each item will disable the item accordingly.

<ExamplesExample file="v-treeview/prop-item-props" />

#### 加载子项

You can dynamically load child data by supplying a _Promise_ callback to the **load-children** prop. This callback will be executed the first time a user tries to expand an item that has a children property that is an empty array.

<ExamplesExample file="v-treeview/prop-load-children" />

#### 打开全部

树形视图节点可以在页面加载时预先打开。

<ExamplesExample file="v-treeview/prop-open-all" />


<!-- #### Rounded

You can make treeview nodes rounded.

<ExamplesExample file="v-treeview/prop-rounded" /> -->


<!-- #### Selectable

You can easily select treeview nodes and children.

<ExamplesExample file="v-treeview/prop-selectable" /> -->

#### 选择颜色

您可以控制所选节点复选框的颜色。

<ExamplesExample file="v-treeview/prop-selected-color" />

#### 选择类型

Treeview now supports two different selection types. The default type is **'leaf'**, which will only include leaf nodes in the v-model array, but will render parent nodes as either partially or fully selected. The alternative mode is **'independent'**, which allows one to select parent nodes, but each node is independent of its parent and children.

<ExamplesExample file="v-treeview/prop-selection-type" />


<!-- #### Shaped

Shaped treeview's have rounded borders on one side of the nodes.

<ExamplesExample file="v-treeview/prop-shaped" /> -->

### 插槽

#### Prepend

Using the the **prepend** slot we are able to create an intuitive file explorer.

<ExamplesExample file="v-treeview/slot-append-and-label" />

### 其他

#### 搜索&过滤

Easily filter your treeview by using the **search** prop. You can easily apply your custom filtering function if you need case-sensitive or fuzzy filtering by setting the **custom-filter** prop. This works similar to the [v-autocomplete](/components/autocompletes) component.

<ExamplesExample file="v-treeview/misc-search-and-filter" />

#### 可选择的图标

Customize the **on**, **off** and **indeterminate** icons for your selectable tree. Combine with other advanced functionality like API loaded items.

<ExamplesExample file="v-treeview/misc-selectable-icons" />
