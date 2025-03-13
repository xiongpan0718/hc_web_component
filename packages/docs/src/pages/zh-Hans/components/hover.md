---
meta:
  nav: 悬停 (Hover)
  title: Hover 悬停
  description: 悬停组件通过包裹可选择的内容，当用户悬停事件发生时，悬停组件可以轻松响应。
  keywords: 悬停，vuetify 悬停组件，vue 悬停组件
related:
  - /components/cards/
  - /components/images/
  - /components/tooltips/
features:
  github: /components/VHover/
  label: 'C: VHover'
  report: true
---

# 悬停 (Hover)

`v-hover` 组件为处理任何组件的悬停状态提供了一个简单接口。

<PageFeatures />

## 使用

 `v-hover` 是一个无渲染组件，它使用默认插槽提供对其内部模型的作用域访问；以及鼠标事件监听器来修改它。要显式控制内部状态，请使用 **model-value** 属性。

<ExamplesUsage name="v-hover" />

<PromotedEntry />

## API

| 组件                       | 描述   |
| ------------------------ | ---- |
| [v-hover](/api/v-hover/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 禁用

**disabled** prop 禁用了悬停功能.

<ExamplesExample file="v-hover/prop-disabled" />

#### 打开和关闭延迟

通过组合或单独使用 **open-delay** 和 **close-delay** props 延迟 `v-hover` 事件。

<ExamplesExample file="v-hover/prop-open-and-close-delay" />

### 其他

#### 悬停列表

`v-hover` 可以与 `v-for` 结合使用，以便在用户与列表交互时突出单个项目。

<ExamplesExample file="v-hover/misc-hover-list" />

#### 过渡

创建高度定制的组件以响应用户交互。

<ExamplesExample file="v-hover/misc-transition" />
