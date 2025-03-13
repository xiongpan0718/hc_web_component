---
meta:
  nav: 消息条 (Snackbars)
  title: Snackbar 消息条
  description: Snackbar 组件用于通知用户应用程序已经执行或将要执行的过程。它通常是临时的，并且经常包含操作。当用户将鼠标悬停在 Snackbar 上时，计时器会停止。
  keywords: 消息条, vuetify 消息组件, vue 消息条组件
related:
  - /components/buttons/
  - /styles/colors/
  - /components/forms/
features:
  github: /components/VSnackbar/
  label: 'C: VSnackbar'
  report: true
  spec: https://m2.material.io/components/snackbars
---

# 消息条 (Snackbars)

`v-snackbar` 组件通常用来显示速递消息。它支持修改位置，移除延迟，以及调用回调函数。

<PageFeatures />

## 使用

`v-snackbar` 以最简单的形式向用户显示一个临时且可关闭的通知。

<ExamplesExample file="v-snackbar/usage" />

<PromotedEntry />

## API

| 组件                             | 描述           |
| ------------------------------ | ------------ |
| [v-snackbar](/api/v-snackbar/) | 主要组件         |
| [v-btn](/api/v-btn/)           | 通常用于执行动作的子组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 多行

**multi-line** 属性扩展了 `v-snackbar` 的高度，让您有更多的内容空间。

<ExamplesExample file="v-snackbar/prop-multi-line" />

#### 超时

**timeout** 属性允许您自定义 `v-snackbar` 隐藏之前的延迟。

<ExamplesExample file="v-snackbar/prop-timeout" />

#### 变体

使用 **text**、**shaped**、**outlined** 等属性将不同样式应用于消息条组件。

<ExamplesExample file="v-snackbar/prop-variants" />

#### 垂直

**vertical** 属性允许您堆叠 `v-snackbar` 的内容。

<ExamplesExample file="v-snackbar/prop-vertical" />
