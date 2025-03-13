---
meta:
  nav: 分隔线 (Dividers)
  title: Divider 分隔线
  description: 分隔线组件是列表或布局中常用来分隔内容组的细线。
  keywords: 分隔线, vuetify 分割线组件, vue 分割线组件
related:
  - /components/lists
  - /components/navigation-drawers
  - /components/toolbars
features:
  github: /components/VDivider/
  label: 'C: VDivider'
  report: true
  spec: https://m2.material.io/components/dividers
---

# 分隔线 (Dividers)

`v-divider` 组件用于分隔列表或布局的各个部分。<!-- !\[divider Entry\](https://cdn.vuetifyjs.com/docs/images/components-temp/v-divider/v-divider-entry.png) -->

<PageFeatures />

## 使用

最简单的分隔线即为一条水平线。

<ExamplesUsage name="v-divider" />

::: info

这个例子中用到了 **border-opacity** 这个实用类，如果 **$utilities** 被设为 **false** 将无法生效。关于实用类可以参考 [SASS 变量页面](features/sass-variables/#basic-usage)。

:::

<PromotedEntry />

## API

| 组件                           | 描述   |
| ---------------------------- | ---- |
| [v-divider](/api/v-divider/) | 主要部件 |

<ApiInline hide-links />

## 示例

### 属性

#### 嵌入 (Inset)

嵌入的分隔线会向右缩进 72px。这样可以和列表的内容对齐。

<ExamplesExample file="v-divider/prop-inset" />

#### 垂直分隔线

垂直分隔线为您提供了更多用于独特布局的工具。

<ExamplesExample file="v-divider/prop-vertical" />

#### 分隔线粗细 (Thickness)

通过设定 **thickness** 属性的值，我们可以调整分隔线的粗细。

### 杂项

#### 纵向视图分割

创建自定义卡片以适应任何用例.

<ExamplesExample file="v-divider/misc-portrait-view" />

#### 副标题分隔

分割线和副标题可以帮助分解内容，并可以使用相同的 `inset` 属性来相互对齐。

<ExamplesExample file="v-divider/misc-subheaders" />

## 无障碍

默认情况下，`v-divider`组件被赋予了[WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)的[**separator**](https://www.w3.org/TR/wai-aria/#separator)角色，这表示分隔符“分隔并区分内容的各个部分或菜单项组。”然而，有时分隔符只是一种使界面看起来更美观的方式。在这些情况下，应该使用[**presentation**](https://www.w3.org/TR/wai-aria/#presentation)角色，这表示“其隐式原生角色语义不会被映射到辅助功能API。”要覆盖`v-divider`中的默认**separator**角色，只需在组件上添加`role="presentation"`属性。此外，`v-divider`组件具有`aria-orientation="horizontal"`。如果设置`vertical="true"`，那么也会自动设置`aria-orientation="vertical"`。如果设置`role="presentation"`，则`aria-orientation="undefined"`，即其默认值。
