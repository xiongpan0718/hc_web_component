---
meta:
  nav: 虚拟滚动器 (Virtual scroller)
  title: 虚拟滚动器组件
  description: 虚拟滚动器组件是一个只渲染可见元素的容器。当您需要显示大量的统一数据时，它是有用的。
  keywords: 虚拟滚动, vuetify 虚拟滚动组件, vue 虚拟滚动组件, v-virtual-scroll组件
related:
  - /components/lists/
  - /components/data-tables/virtual-tables/
  - /components/combobox/
features:
  github: /components/VVirtualScroller/
  label: 'C: VVirtualScroller'
  report: true
---

# 虚拟滚动器 (Virtual scroller)

`v-virtual-scroll` 组件用于展示虚拟的，_无限的_ 列表。它支持动态的高度，也支持横向滚动。是分页模式的另一种替代方式。

![虚拟滚动条入口](https://cdn.vuetifyjs.com/docs/images/components/v-virtual-scroll/v-virtual-scroll-entry.png)

<PageFeatures />

::: success
此特性自 [v3.2.0 (Orion)](/getting-started/release-notes/?version=v3.2.0) 引入
:::

## 使用

虚拟滚动器只显示足够的记录来填充视图，并使用现有组件，并用新的数据对其进行再填充。

<ExamplesUsage name="v-virtual-scroll" />

<PromotedEntry />

## API

| 组件                                         | 描述   |
| ------------------------------------------ | ---- |
| [v-virtual-scroll](/api/v-virtual-scroll/) | 主要组件 |

<ApiInline hide-links />

## 组件结构

`v-virtual-scroll` 组件仅有一个默认插槽，没有其他样式选项。它通常包含大量的 [v-list-item](/components/lists/)。

![虚拟滚动条解释](https://cdn.vuetifyjs.com/docs/images/components/v-virtual-scroll/v-virtual-scroll-anatomy.png)

| 元素 / 区域 | 描述                     |
| ------- | ---------------------- |
| 1. 容器   | 根据 **items** 属性渲染内容的区域 |

## 指南

`v-virtual-scroll` 允许你在一个页面上展示数千条数据，而不必担心性能问题，因为数据不会同时显示出来。`v-virtual-scroll` 适合于 [v-card](/components/cards/) 类似的，没有过多的样式的组件搭配，提供更好的视觉效果。

### 属性

`v-virtual-scroll` 组件支持配置它的根节点和节点高度的 API。

#### 高度

`v-virtual-scroll` 组件没有设定任何的初始高度。

下面的代码片段使用了 **height** 属性：

<ExamplesExample file="v-virtual-scroll/prop-height" />

确保组件高度的另一种方法是将其放置在一个使用 `display: flex` 的元素中。

<ExamplesExample file="v-virtual-scroll/prop-height-parent" />

#### 列表项高度

因为对于列表来说列表项高度是固定的，每项一致的。所以我们推荐为其确定一个 **item-height** 值。它会用于 `v-virtual-scroll` 的计算。

<ExamplesExample file="v-virtual-scroll/prop-item-height" />

如果你的列表项没有统一的高度，则可以忽略 **item-height** 属性，而让 `v-virtual-scroll` 动态地计算每一项的高度。

<ExamplesExample file="v-virtual-scroll/prop-dynamic-item-height" />

### 示例

下面是 `v-virtual-scroll` 的示例集，用来表明不同的属性在应用程序中的作用。

#### 用户列表

V-virtual-scroll 组件通过仅渲染填充滚动器可见区域的所需内容来实现大量项目的渲染。

<ExamplesExample file="v-virtual-scroll/misc-user-directory" />
