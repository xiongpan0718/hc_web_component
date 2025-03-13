---
meta:
  nav: 环状进度 (Progress circular)
  title: Progress circular 进度环
  description: 进度环组件用于显示圆圈中的数字数据的视觉指示器。
  keywords: 进度环, vuetify 进度环组件, vue 进度环组件 环形进度
related:
  - /components/cards/
  - /components/progress-linear/
  - /components/lists/
features:
  github: /components/VProgressCircular/
  label: 'C: VProgressCircular'
  report: true
  spec: https://m2.material.io/components/progress-indicators
---

# 环状进度 (Progress circular)

The `v-progress-circular` component is used to convey data circularly to users. It also can be put into an indeterminate state to portray loading.

<PageFeatures />

## 使用

In its simplest form, v-progress-circular displays a circular progress bar. Use the value prop to control the progress.

<ExamplesUsage name="v-progress-circular" />

<PromotedEntry />

## API

| 组件                                               | 描述   |
| ------------------------------------------------ | ---- |
| [v-progress-circular](/api/v-progress-circular/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 颜色

可以使用 `color` 属性为 `v-progress-circular`设置其他颜色。

<ExamplesExample file="v-progress-circular/prop-color" />

#### 不定线条

使用 `indeterminate` 属性，`v-progress-circular` 将会一直处于动画中。

<ExamplesExample file="v-progress-circular/prop-indeterminate" />

#### 旋转

`rotate` 参数使您能够自定义 `v-progress-circular`的原点。

<ExamplesExample file="v-progress-circular/prop-rotate" />

#### 大小和宽度

`size` 和 `width` 属性允许您轻松修改 `v-progress-circular` 组件的大小和宽度。

<ExamplesExample file="v-progress-circular/prop-size-and-width" />

### 插槽

#### 默认值

`default` slot can be used to replace the text inside the loader.

<ExamplesExample file="v-progress-circular/prop-slot-default" />
