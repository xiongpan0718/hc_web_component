---
meta:
  nav: 分页 (Pagination)
  title: Pagination 分页
  description: 分页组件用于分离长数据集，以便用户消化信息。
  keywords: 分页, vuetify 分页组件, vue 分页组件
related:
  - /components/data-tables/basics/
  - /components/data-tables/pagination/
  - /components/tables/
features:
  figma: true
  label: 'C: VPagination'
  report: true
  github: /components/VPagination/
---

# 分页 (Pagination)

`v-pagination` 组件用于分离长数据集，以便用户消化信息。

<PageFeatures />

## 使用

Pagination by default displays the number of pages based on the set **length** prop, with **prev** and **next** buttons surrounding to help you navigate. Depending on the length provided, the pagination component will automatically scale. To maintain the current page, simply supply a **v-model** attribute.

<ExamplesUsage name="v-pagination" />

<PromotedEntry />

## API

| 组件                                 | 描述   |
| ---------------------------------- | ---- |
| [v-pagination](/api/v-pagination/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 圆角 (Rounded)

**rounded** 属性可以调整分页按钮为圆形。

<ExamplesExample file="v-pagination/prop-rounded" />

#### 禁用

使用 **disabled** 属性，可以手动禁用分页。

<ExamplesExample file="v-pagination/prop-disabled" />

#### 图标 (Icons)

上一页和下一页的图标可以通过 **prev-icon** 和 **next-icon** 属性自定义。

<ExamplesExample file="v-pagination/prop-icons" />

#### 长度

使用 **length** 属性可以设置 `v-pagination` 的长度，如果页面按钮的数量超过了父容器，分页将被从中截断。

<ExamplesExample file="v-pagination/prop-length" />

#### 最大可见分页数

你也可以通过 **total-visible** 属性手动设置最大可见分页数。

<ExamplesExample file="v-pagination/prop-total-visible" />
