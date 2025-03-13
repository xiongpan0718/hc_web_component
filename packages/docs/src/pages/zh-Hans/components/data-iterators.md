---
meta:
  nav: 数据迭代器（Data iterators）
  title: Data iterator 数据迭代器
  description: 数据迭代器组件用于过滤和显示数据，包括排序、搜索、分页和选择。
  keywords: 数据迭代器，vuetify 数据迭代器组件，vue 数据迭代器组件
related:
  - /components/data-tables/basics/
  - /components/simple-tables/
  - /components/toolbars/
features:
  github: /components/VDataIterator/
  label: 'C: VDataIterator'
  report: true
---

# 数据迭代器（Data iterators）

The `v-data-iterator` component is used for displaying arbitrary data, and shares a majority of its functionality with the `v-data-table` component. Features include sorting, searching, pagination, and selection.<!-- !\[Data iterator Entry\](https://cdn.vuetifyjs.com/docs/images/components/v-data-iterator/v-data-iterator-entry.png){ placeholder=true } -->

<PageFeatures />

::: success
此特性在 [v3.4.0 (Blackguard)](/getting-started/release-notes/?version=v3.4.0) 版本引入。
:::

## 使用

The `v-data-iterator` allows you to customize exactly how to display your data. In this example we are using a grid with cards.

<ExamplesUsage name="v-data-iterator" />

<PromotedEntry />

## API

| 组件                                       | 描述   |
| ---------------------------------------- | ---- |
| [v-data-iterator](/api/v-data-iterator/) | 主要组件 |

<ApiInline hide-links />

## 组件结构

The recommended placement of elements inside of a `v-data-iterator` are:

* Place a [v-toolbar](/components/toolbars/) or similar component above the main content
* 将内容放在页眉之后
* 在主要内容下方放置一个 [v-pagination](/components/paginations/)

![Data iterator Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-data-iterator/v-data-iterator-anatomy.png){ height=392 }

| 元素 / 区域              | 描述                                                 |
| -------------------- | -------------------------------------------------- |
| 1. Header (optional) | 页眉用于显示标题和动作                                        |
| 2. Container         | The container is the root element of the component |
| 3. Footer (optional) | 页脚用于显示分页                                           |

## 指南

The `v-data-iterator` component is used for displaying data, and shares a majority of its functionality with the `v-data-table` component. Features include sorting, searching, pagination, and selection.

The following code snippet is an example of a basic `v-data-iterator` component:

```html
<v-data-iterator :items="[1, 2, 3, 4, 5]">
  <template v-slot:default="{ items }">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :title="`Item ${i}`"
    ></v-list-item>
  </template>
</v-data-iterator>
```

## 示例

The following are a collection of examples that demonstrate more advanced and real world use of the `v-data-iterator` component.

### 插槽

The `v-data-iterator` component has 4 main slots

#### 默认值

The `v-data-iterator` has internal state for both selection and expansion, just like `v-data-table`. In this example we use the methods `isExpanded` and `toggleExpand` available on the default slot.

<ExamplesExample file="v-data-iterator/slot-default" />

#### 页眉和页脚

The `v-data-iterator` has both a **header** and **footer** slot for adding extra content.

<ExamplesExample file="v-data-iterator/slot-header-and-footer" />

#### 可控 props

Sorting, filters and pagination can be controlled externally by using the individual props

<ExamplesExample file="v-data-iterator/misc-filter" />

#### Loader props

Loader can be used to change loader on "loading" prop

<ExamplesExample file="v-data-iterator/slot-loader" />
