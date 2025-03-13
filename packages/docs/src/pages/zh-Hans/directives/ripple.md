---
meta:
  nav: 波纹 (Ripple)
  title: 波纹指令
  description: 波纹指令以水波纹的形式为任何元素添加触摸和点击反馈。
  keywords: 涟漪, 墨迹, vuetify 涟漪指令, vue 涟漪指令
related:
  - /components/buttons/
  - /components/expansion-panels/
  - /styles/transitions/
---

# 波纹指令

`v-ripple` 指令用于显示用户的操作。它可以应用于任何块级元素。许多组件都内置了波纹指令，如 `v-btn`、`v-tabs-item` 等。

<PageFeatures />

<PromotedEntry />

## 使用

只要在组件或HTML元素上使用 `v-ripple ` 指令，就可以启用基本的ripple功能

<ExamplesExample file="v-ripple/usage" />

## API

| 指令                                   | 描述   |
| ------------------------------------ | ---- |
| [v-ripple](/api/v-ripple-directive/) | 波纹指令 |

<ApiInline hide-links />

## 示例

### 传播

If multiple elements have the ripple directive applied, only the inner one will show the effect. This can also be done without having a visible ripple by using `v-ripple.stop` to prevent ripples in the outer element if the inner element is clicked on. `v-ripple.stop` will not actually stop propagation of the mousedown/touchstart events unlike other workarounds.

<ExamplesExample file="v-ripple/stop" />

### 选项

#### Center

当使用 `center` 选项时，始终会从目标的中心处产生波纹。

<ExamplesExample file="v-ripple/option-center" />

### 其他

#### 自定义色彩

您可以使用辅助器类改变波纹的颜色。

<ExamplesExample file="v-ripple/misc-custom-color" />

#### 组件中的波纹

Some components provide the `ripple` prop that allows you to control the ripple effect. You can turn it off or customize the behavior by using `class` or `center` options.

<ExamplesExample file="v-ripple/misc-ripple-in-components" />
