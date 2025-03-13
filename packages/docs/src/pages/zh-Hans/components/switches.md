---
meta:
  nav: 开关 (Switches)
  title: Switch 开关
  description: 开关组件是用于在两个值之间简单流畅的切换.
  keywords: 开关，开关组件，vuetify 开关组件，vue开关组件
related:
  - /components/checkboxes/
  - /components/forms/
  - /components/radio-buttons/
features:
  label: 'C: VSwitch'
  report: true
  github: /components/VSwitch/
  spec: https://m2.material.io/components/switches
---

# 开关 (Switches)

`v-switch` 组件让用户可以在两个不同的值之间作出选择。这和切换按钮，或者接通/断开开关很类似，但明显地比单选框好看。

<PageFeatures />

## 使用

最简单形式的 `v-switch` 提供两个值之间的切换。

<ExamplesUsage name="v-switch" />

<PromotedEntry />

## API

| 组件                         | 描述   |
| -------------------------- | ---- |
| [v-switch](/api/v-switch/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 颜色

开关可以使用任何内置颜色和上下文名称使用 **color** prop 进行着色。

<ExamplesExample file="v-switch/prop-colors" />


<!-- #### Flat

You can make switch render without elevation of thumb using **flat** property.

<ExamplesExample file="v-switch/prop-flat" /> -->

#### 嵌入

您可以在嵌入模式下使开关渲染。

<ExamplesExample file="v-switch/prop-inset" />

#### 数组模型

通过使用数组，多个 `v-switch`'可以共享相同的 **v-model**。

<ExamplesExample file="v-switch/prop-model-as-array" />

#### 自定义 true/false 值

开关组件可以通过修改 **true-value** 和 **false-value** 属性值来自定义 v-model 接受到的值。

<ExamplesExample file="v-switch/prop-custom-values" />

#### 状态

`v-switch` 可以有不同的状态，例如<strong x-id=“1”>默认</strong>，<strong x-id=“1”>禁用</strong>，以及<strong x-id=“1”>加载</strong>。

<ExamplesExample file="v-switch/prop-states" />

### 插槽

#### 标签

如果你需要渲染比文字更复杂的开关标签，可以使用 **label** 插槽来实现。

<ExamplesExample file="v-switch/slot-label" />
