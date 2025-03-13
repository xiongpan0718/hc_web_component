---
meta:
  nav: 轮播 (Carousels)
  title: Carousel 轮播
  description: 轮播组件用于循环浏览视觉内容，如图片或文字的幻灯片。
  keywords: 轮播, vuetify 轮播组件, vue 轮播组件
related:
  - /components/parallax/
  - /components/images/
  - /components/windows/
features:
  github: /components/VCarousel/
  label: 'C: VCarousel'
  report: true
---

# 轮播 (Carousels)

`v-carousel` 组件用于在循环计时器上显示大量可视内容。<!-- !\[carousel Entry\](https://cdn.vuetifyjs.com/docs/images/components-temp/v-carousel/v-carousel-entry.png) -->

<PageFeatures />

## 使用

`v-carousel`组件通过提供用于显示图像的附加功能扩展了`v-window`。

<ExamplesUsage name="v-carousel" />

<PromotedEntry />

## API

| 组件                                       | 描述                       |
| ---------------------------------------- | ------------------------ |
| [v-carousel](/api/v-carousel/)           | 主要组件                     |
| [v-carousel-item](/api/v-carousel-item/) | 用于显示 `v-carousel` 状态的子组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 自定义分隔符

使用任何可用的图标来改变轮播的滑动分隔符。

<ExamplesExample file="v-carousel/prop-custom-icons" />

<!-- #### Custom transition

The `v-carousel-item` component can have its **transition/reverse-transition** changed.

<ExamplesExample file="v-carousel/prop-custom-transition" /> -->

#### 周期

使用 **cycle** 属性，你可以设置幻灯片每 6 秒（默认值）切换至下一张。

<ExamplesExample file="v-carousel/prop-cycle" />

#### 隐藏控件

你可以使用 `:show-arrows="false"` 来隐藏导航控制部分，也可以使用 `show-arrows="hover"` 控制它们仅在鼠标悬停时才出现。

<ExamplesExample file="v-carousel/prop-hide-controls" />

#### 自定义箭头按钮

可以用 **prev** 和 **next** 槽来自定义窗口中的箭头部分。

<ExamplesExample file="v-carousel/slots-next-prev" />

#### 隐藏分隔符

可以使用 **hide-delimiters** 属性来隐藏底部的控制条。

<ExamplesExample file="v-carousel/prop-hide-delimiters" />

#### 进度条

可以使用 **progress** 属性在组件上方出现进度条。它可以表示当前轮播的进度。

<ExamplesExample file="v-carousel/prop-progress" />

#### 模型 (Model)

可以使用 **v-model** 的值控制轮播组件。

<ExamplesExample file="v-carousel/prop-model" />
