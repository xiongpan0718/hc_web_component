---
meta:
  nav: 提示 (Tooltips)
  title: Tooltip 工具提示
  description: 提示组件显示其附加元素的文本信息。
  keywords: 提示, vuetify 提示组件, vue 提示组件
related:
  - /components/overlays/
  - /components/icons/
  - /components/menus/
features:
  github: /components/VTooltip/
  label: 'C: VTooltip'
  report: true
  spec: https://m2.material.io/components/tooltips
---

# 提示 (Tooltips)

`v-tooltip` 组件常用于用户鼠标悬停在某个元素上时向其传递信息。你也可以使用 `v-model` 控制提示信息的显示。当激活时，提示组件显示文字描述，例如对其功能的描述。

<PageFeatures />

## 使用

提示组件可以包装任何元素。

<ExamplesUsage name="v-tooltip" />

<PromotedEntry />

## API

| 组件                           | 描述   |
| ---------------------------- | ---- |
| [v-tooltip](/api/v-tooltip/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 显示位置 (Location)

使用 **location** 属性确定提示会在元素的哪个方向显示。阅读 [这里](/components/overlays/#location) 获取更多关于 **location** 的信息。

<ExamplesExample file="v-tooltip/prop-location" />


<!-- TODO: not supported
#### Color

Tooltip color can be set with the `color` prop.

<ExamplesExample file="v-tooltip/prop-color" />
-->

#### 可见性

可使用 `v-model` 编程性修改提示可见性。

<ExamplesExample file="v-tooltip/prop-visibility" />
