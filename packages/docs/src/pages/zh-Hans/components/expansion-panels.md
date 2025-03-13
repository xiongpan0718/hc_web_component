---
meta:
  nav: 扩展面板 (Expansion panels)
  title: Expansion panel 扩展面板
  description: 扩展面板组件是一种轻量级的容器，它将信息隐藏在可膨胀和可收缩的容器后面。
  keywords: 扩展面板，vuetify 扩展面板组件，vue 扩展面板组件
related:
  - /components/cards/
  - /components/data-tables/basics/
  - /components/lists/
features:
  github: /components/VExpansionPanel/
  label: 'C: VExpansionPanels'
  report: true
  spec: https://m1.material.io/components/expansion-panels.html
---

# 扩展面板 (Expansion panels)

`v-expansion-panel` 组件可以用来减少大片信息所占用的垂直方向空间。组件默认仅显示一个扩展面板（即打开一个会关闭另一个）；但你可以添加 `multiple` 属性，扩展面板则可以保持打开，直到主动关闭。<!-- !\[expansion-panels Entry\](https://cdn.vuetifyjs.com/docs/images/components-temp/v-expansion-panels/v-expansion-panels-entry.png) -->

<PageFeatures />

## 使用

扩展面板可以以最简单的形式展现可扩展展现的信息。你可以使用子组件的形式，亦可以使用 **title** 和 **text** 属性。

<ExamplesUsage name="v-expansion-panels" />

<PromotedEntry />

## API

| 组件                                                       | 描述                                                             |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| [v-expansion-panels](/api/v-expansion-panels/)           | 主要组件                                                           |
| [v-expansion-panel](/api/v-expansion-panel/)             | 用于包裹 `v-expansion-panel-text` 和 `v-expansion-panel-title` 的子组件 |
| [v-expansion-panel-title](/api/v-expansion-panel-title/) | 用来显示扩展面板组件的标题的子组件。也可以用 `#title` 插槽实现。                          |
| [v-expansion-panel-text](/api/v-expansion-panel-text/)   | 用来显示扩展面板组件的文字的子组件。也可以用 `#text` 插槽实现。                           |

<ApiInline hide-links />

## 示例

### 属性

#### 变体 (Variants)

扩展面板有四种不同的变化形式。手风琴式 (Accordion) 扩展面板的展开面板没有外边距。内嵌式 (Inset) 扩展面板会减小展开面板的大小。而弹出式 (poput) 则会增大展开面板的大小。

<ExamplesExample file="v-expansion-panels/prop-variant" />

#### 禁用面板

扩展面板及其内容都可以使用 **disabled** 属性禁用。

<ExamplesExample file="v-expansion-panels/prop-disabled" />

<!-- #### Focusable

The expansion-panel headers can be made focusable with the prop **focusable**.

<ExamplesExample file="v-expansion-panels/prop-focusable" /> -->

#### 控制模型

扩展面板可以从外部由 **v-model** 控制。你需要在每个面板上设置 **value** 值，以便在组件外部控制它们的打开。如果组件设置了 **multiple** 属性，那么 **v-model** 的值将是数组。

<ExamplesExample file="v-expansion-panels/prop-model" />

#### 只读面板

**readonly** 属性的效果和 **disabled** 是相同的，但后者会影响样式，前者不会。

<ExamplesExample file="v-expansion-panels/prop-readonly" />

### 杂项

#### 高级版扩展面板

The expansion panel component provides a rich playground to build truly advanced implementations. Here we take advantage of slots in the `v-expansion-panel-title` component to react to the state of being open or closed by fading content in and out.

<ExamplesExample file="v-expansion-panels/misc-advanced" />

#### 自定义图标

展开和收回的操作图标可以使用 **expand-icon** 属性和 **collapse-icon** 属性或 `actions` 插槽自定义。

<ExamplesExample file="v-expansion-panels/misc-custom-icons" />
