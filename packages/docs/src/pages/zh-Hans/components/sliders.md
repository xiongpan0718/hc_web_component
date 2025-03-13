---
meta:
  nav: 滑块 (Sliders)
  title: Slider 滑块
  description: Slider 组件可以用作某些数字输入的可视化替代。
  keywords: 滑块，vuetify 滑块组件，vue 滑块组件
related:
  - /components/forms/
  - /components/selects/
  - /components/range-sliders/
features:
  label: 'C: VSlider'
  report: true
  github: /components/VSlider/
  spec: https://m2.material.io/components/sliders
---

# 滑块 (Sliders)

`v-slider` 组件可以用作某些数字输入的可视化替代。

<PageFeatures />

## 使用

滑块组件可以根据一个用户选择的轨迹的位置，来表示一个单独的值。适合用来作音量，亮度，或者图像的某个滤镜的调整。

<ExamplesUsage name="v-slider" />

<PromotedEntry />

## API

| 组件                         | 描述   |
| -------------------------- | ---- |
| [v-slider](/api/v-slider/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 颜色

可以使用 **color**、**track-color** 和 **thumb-color** 属性设置滑块的颜色。

<ExamplesExample file="v-slider/prop-colors" />

#### 禁用

您不能与 **disabled** 滑块交互。

<ExamplesExample file="v-slider/prop-disabled" />

#### 步长

使用 **step** 属性可以控制滑块的精度，以及每一次可以移动的距离。

<ExamplesExample file="v-slider/prop-step" />

#### 图标 (Icons)

你可以使用 **append-icon** 和 **prepend-icon** 属性在滑块的后面和前面添加图标。还能够添加 `@click:append` 和 `@click:prepend` 来触发点击这些图标的执行函数。

<ExamplesExample file="v-slider/prop-icons" />

#### 最小值和最大值

您可以通过 **min** 和 **max** 设置滑块的最小值和最大值。

<ExamplesExample file="v-slider/prop-min-and-max" />

#### 只读

您不能与 **readonly** 滑块交互，但它们看起来与普通滑块一样。

<ExamplesExample file="v-slider/prop-readonly" />

#### 上方标签

你可以选择在滑块滑动时显示上方标签，或者将 **thumb-label** 属性设为 always 来始终显示。可以设定 **thumb-color** 属性调整滑块的颜色，也可以设定 **thumb-size** 属性调整滑块的大小。

<ExamplesExample file="v-slider/prop-thumb" />

#### 刻度

刻度线决定了用户能将滑块移动到的预定值。

<ExamplesExample file="v-slider/prop-ticks" />


<!-- #### Validation

Vuetify includes simple validation through the **rules** prop. The prop accepts a mixed array of types `function`, `boolean` and `string`. When the input value changes, each element in the array will be validated. Functions pass the current v-model as an argument and must return either `true` / `false` or a `string` containing an error message.

<ExamplesExample file="v-slider/prop-validation" /> -->

#### 垂直滑块

你也可以使用 **direction** 属性将滑块方向切换到垂直方向。如果你要更改滑块的高度，请使用 CSS 来修改。

<ExamplesExample file="v-slider/prop-vertical" />

### 插槽

#### 后置插槽和前置插槽

使用 `append` 和 `prepend` 插槽来轻松自定义 `v-slider` 以便适应任何情况。

<ExamplesExample file="v-slider/slot-append-and-prepend" />

#### 追加文本字段

滑块可以在它的 `append` 插槽中添加其他组件，例如 `v-text-field`，以便为组件添加额外的功能。

<ExamplesExample file="v-slider/slot-append-text-field" />
