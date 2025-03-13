---
meta:
  nav: 列表 (Lists)
  title: List 列表
  description: 列表组件是一组连续的文字、图像和图标，以及可选的基本的或补充的操作。
  keywords: 列表, vuetify 列表组件, vue 列表组件
related:
  - /components/item-groups/
  - /components/avatars/
  - /components/sheets/
features:
  figma: true
  github: /components/VList/
  label: 'C: VList'
  report: true
  spec: https://m2.material.io/components/lists
---

# 列表 (Lists)

`v-list` 组件常用于展示信息。它可以包含头像，动作按钮，子标题等等内容。对于同一类信息的展示，使用列表组件展示会变得容易和好看。因为它们为文字和图像提供了相同的样式。

<PageFeatures />

## 使用

列表组件有三种主要的可变形式。**single-line（一行）**，**two-line（两行）** 和 **three-line（三行）**。可以在列表项中使用行数定义最小高度，也可以使用 `v-list` 中使用相同的值统一控制。

<ExamplesUsage name="v-list" />

<PromotedEntry />

## API

| 组件                                                 | 描述                                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [v-list](/api/v-list/)                             | 主要组件                                                                                 |
| [v-list-group](/api/v-list-group/)                 | 用于显示或隐藏项目组的子组件                                                                       |
| [v-list-subheader](/api/v-list-subheader/)         | 用于分隔项目组的子组件                                                                          |
| [v-list-item](/api/v-list-item/)                   | 用于显示一个列表项的组件或者修改 `v-list` 状态                                                         |
| [v-list-item-title](/api/v-list-item-title/)       | 用来显示列表组件的标题的子组件。也可以用 `#title` 插槽实现。                                                  |
| [v-list-item-subtitle](/api/v-list-item-subtitle/) | 用来显示列表组件的子标题的子组件。也可以使用 `#subtitle` 插槽实现。                                             |
| [v-list-item-action](/api/v-list-item-action/)     | 用于显示 [v-checkbox](/components/checkboxes/) 或者 [v-switch](/components/switches/) 的子组件 |
| [v-list-img](/api/v-list-img/)                     | 用于包裹 [v-img](/components/images/) 组件的的子组件                                            |
| [v-list-item-media](/api/v-list-item-media/)       | 用于包裹 [v-img](/components/images/) 组件的的子组件                                            |

<ApiInline hide-links />

## 示例

### 属性

#### 列表项 (Items)

列表项可以通过多个子组件来创建，也能通过 **items** 属性来创建。

<ExamplesExample file="v-list/prop-items" />

要自定义每个列表项的标题和值，请在列表中使用 **item-title** 和 **item-value** 属性。

<ExamplesExample file="v-list/prop-items-custom" />

如果你需要添加子标题或者分隔线，只需添加一个带有 **type** 属性的列表项。可以使用的值由 **item-type** 的值来确定。

<ExamplesExample file="v-list/prop-items-type" />

要定义某一个单独的列表项，可以使用 **item-props** 属性。它默认会查找该列表项上的 **props** 属性，并把其中每一项应用到 **v-list-item** 组件之上。

如果 **item-props** 设置为 **true** ，它会被放在整个 item 上。

<ExamplesExample file="v-list/prop-items-prop" />

#### 间距 (Density)

`v-list` 可以通过 **density** 属性来减小高度。

<ExamplesExample file="v-list/prop-density" />

<PromotedPromoted slug="vuetify-lux-admin-pro" />

#### 禁用

您不能与已禁用的 `v-list` 交互。

<ExamplesExample file="v-list/prop-disabled" />

#### 变体 (Variants)

`v-list` 支持 **variant** 属性。

<ExamplesExample file="v-list/prop-variant" />

#### 导航列表

可以给列表组件添加 **nav** 属性改变它的样式。它会修改 `v-list-item` 的宽度和为整个列表添加圆角。

<ExamplesExample file="v-list/prop-nav" />

#### 圆角 (Rounded)

你可以让 `v-list` 的列表项变为圆角。

<ExamplesExample file="v-list/prop-rounded" />

#### 形状

圆角属性可以设置为 shaped ，使 `v-list-item` 仅左上和右下成为圆角。

<ExamplesExample file="v-list/prop-shaped" />

#### 嵌套列表

可以使用 `v-list-group` 组件创建列表的子列表。

<ExamplesExample file="v-list/prop-sub-group" />

#### 三行列表 (Three line)

对于三行的列表项，子标题会被裁剪至两行并以省略号表示超出的部分。这个功能是通过 [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) 实现的，不一定被所有浏览器支持。

<ExamplesExample file="v-list/prop-three-line" />

#### 两行和副标题

列表组件可以包含列表组标题，分割线，以及1行或者更多行，如果副标题文本溢出则会以省略号的形式截断文本。

<ExamplesExample file="v-list/prop-two-line-and-subheader" />

### 杂项

#### 操作和项目组

一个 **three-line** 的可操作列表。使用了 **v-list-action** 组件，可以轻松地对每条列表项进行操作。

<ExamplesExample file="v-list/misc-action-and-item-groups" />
