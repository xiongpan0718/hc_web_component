---
meta:
  nav: 外部点击
  title: 外部单击指令
  description: 当目标元素以外的东西被点击时，v-click-out指令会调用函数。
  keywords: 外部单击, 单击指令, vue 单击指令, vuetify 单击指令
related:
  - /components/dialogs/
  - /components/navigation-drawers/
  - /directives/intersect/
---

# 外部点击

当在目标元素外点击鼠标时，`v-click-outside` 指令会调用函数。这个指令已经集成于例如 `v-menu` 和 `v-dialog` 组件中。

<PageFeatures />

<PromotedEntry />

## 使用

`v-click-outside` 指令允许您提供一个处理函数并且在用户点击目标元素之外时被调用。

<ExamplesExample file="v-click-outside/usage" />

## API

<ApiInline />

## 示例

### 选项

#### 根据条件响应

可以提供可选的 `closeConditional` 函数，返回 `true` 或 `false`。此函数决定是否调用外部点击功能。

<ExamplesExample file="v-click-outside/option-close-on-outside-click" />

#### Include

可以在 `options` 中提供 `include` 函数，此函数返回一个 `HTMLElement` 的数组。如果点击在这个数组里的 HTML 元素中，会被排除在响应的范围之外。

<ExamplesExample file="v-click-outside/option-include" />
