---
meta:
  nav: 面包屑导航 (Breadcrumbs)
  title: Breadcrumbs 面包屑
  description: 面包屑组件是页面的导航助手。它可以接受一个 Material Icons 图标或字符作为分隔符。
  keywords: 面包屑, vuetify 面包屑组件, vue 面包屑组件, v-breadcrumbs 组件
related:
  - /components/buttons/
  - /components/navigation-drawers/
  - /components/icons/
features:
  figma: true
  label: 'C: VBreadcrumbs'
  report: true
  github: /components/VBreadcrumbs/
---

# 面包屑导航 (Breadcrumbs)

`v-breadcrumbs` 组件是页面的辅助性导航组件。<!-- !\[breadcrumbs Entry\](https://cdn.vuetifyjs.com/docs/images/components-temp/v-breadcrumbs/v-breadcrumbs-entry.png) -->

<PageFeatures />

## 使用

默认情况下，面包屑导航使用文本分隔符。这可以是任何字符串。

<ExamplesUsage name="v-breadcrumbs" />

<PromotedEntry />

::: tip

使用 [slots](/api/v-breadcrumbs/#slots) 来更精确地控制面包屑，也可以利用 `v-breadcrumbs-item` 或其他自定义标记。

:::

## API

| 组件                                                   | 描述          |
| ---------------------------------------------------- | ----------- |
| [v-breadcrumbs](/api/v-breadcrumbs/)                 | 主要组件        |
| [v-breadcrumbs-item](/api/v-breadcrumbs-item/)       | 作为每个面包屑的子组件 |
| [v-breadcrumbs-divider](/api/v-breadcrumbs-divider/) | 用于分隔面包屑的子组件 |

<ApiInline hide-links />

::: info
默认情况下，`v-breadcrumbs` 会阻止路由跳转到相对当前页面的链接。但你可以通过设置 `items` 数组中的 `exact: true` 来阻止这个行为。
:::

## 示例

### 属性

#### 分隔线

可以使用 `divider` 属性来设置面包屑分隔符。

<ExamplesExample file="v-breadcrumbs/prop-divider" />

### 插槽

#### 前缀内容

可以使用 `prepend` 插槽添加前缀内容。

<ExamplesExample file="v-breadcrumbs/slot-prepend" />

#### 分隔线 (Dividers)

要自定义分隔线，使用 `divider` 插槽即可。

<ExamplesExample file="v-breadcrumbs/slot-icon-dividers" />

#### 标题

你可以使用 `title` 插槽来自定义每个面包屑的标题内容。

<ExamplesExample file="v-breadcrumbs/slot-title" />
