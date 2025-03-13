---
meta:
  nav: 范围滑块 (Range sliders)
  title: Range Slider 滑块
  description: 范围滑块组件是对数字输入的更好可视化。它用于收集用户数据的范围。
  keywords: 滑块、范围、 vuetify 滑块组件，vuetify range Slider 组件，vue Slider 组件
related:
  - /components/forms/
  - /components/selects/
  - /components/sliders/
features:
  label: 'C: VRangeSlider'
  report: true
  github: /components/VRangeSlider/
  spec: https://m2.material.io/components/sliders
---

# 范围滑块 (Range sliders)

`v-range-slider` 组件在你需要表示一个范围值的时候，很适合代替 `v-slider` 组件。

<PageFeatures />

## 使用

滑块组件可以根据一个用户选择的轨迹的位置，来表示一个单独的值。适合用来作音量，亮度，或者图像的某个滤镜的调整。

<ExamplesUsage name="v-range-slider" />

<PromotedEntry />

## API

| 组件                                     | 描述   |
| -------------------------------------- | ---- |
| [v-range-slider](/api/v-range-slider/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 严格模式 (Strict)

在使用了 **strict** 属性之后，范围滑块的滑块就无法越过另一个滑块了。

<ExamplesExample file="v-range-slider/prop-strict" />

#### 禁用

用户无法与 **disabled** 属性的滑块交互。

<ExamplesExample file="v-range-slider/prop-disabled" />

#### 最小值和最大值

您可以通过 **min** 和 **max** 设置滑块的最小值和最大值。

<ExamplesExample file="v-range-slider/prop-min-and-max" />

#### 步长

`v-range-slider` 可以将步长设为不为 1 的值。这在你需要降低或者提高精度地调整数值时非常有用。

<ExamplesExample file="v-range-slider/prop-step" />

#### 垂直滑块

你也可以使用 **vertical** 属性将滑块方向切换到垂直方向。如果你要更改滑块的高度，请使用 CSS 来修改。

<ExamplesExample file="v-range-slider/prop-vertical" />

### 插槽

#### thumb标签

使用 **tick-labels** prop 和 `thumb-label` 插槽，您可以创建一个非常自定义的解决方案。

<ExamplesExample file="v-range-slider/slot-thumb-label" />
