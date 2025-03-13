---
meta:
  nav: 视差 (Parallax)
  title: Parallax 视差
  description: 视差组件创建一个3D效果，使图像的滚动速度比窗口慢。
  keywords: 视差, vuetify 视差组件, vue 视差组件
related:
  - /components/aspect-ratios/
  - /components/cards/
  - /components/images/
features:
  github: /components/VParallax/
  label: 'C: VParallax'
  report: true
---

# 视差 (Parallax)

`v-parallax` 组件创建一个3d效果，使图像的滚动速度看起来比窗口慢。

<PageFeatures />

## 使用

当用户滚动页面时，视差引起背景图像的滚动。

<ExamplesExample file="v-parallax/usage" />

<PromotedEntry />

## API

| 组件                             | 描述   |
| ------------------------------ | ---- |
| [v-parallax](/api/v-parallax/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 其他

#### 内容

你也可以在视差中放置任何内容，这使您可以使用视差作为 hero 图像。

<ExamplesExample file="v-parallax/misc-content" />

#### 自定义高度

你可以在视差上指定自定义高度。请记住，如果您的图像尺寸不合适，这可能会打破视差。

<ExamplesExample file="v-parallax/misc-custom-height" />
