---
meta:
  title: CSS 重置
  description: Vuetify 使用了 ress.min，这是一个完全基于normalize.css的浏览器重置。
  keywords: ress.min, css 重置, vuetify css 重置
related:
  - /styles/colors/
  - /styles/text-and-typography/
  - /features/sass-variables/
---

# CSS 重置

Vuetify 项目的基础风格。

<PageFeatures />

<PromotedEntry />

## 引导

ress is a modern CSS reset that applies a solid base for stylesheets. It is built on top of [normalize.css](https://github.com/necolas/normalize.css) and adds new features such as specifying `font-family: monospace` for `<code>` elements, removing all `outlines` from elements when hovering, and much much more. Additional information can be found on the [ress GitHub repository](https://github.com/filipelinhares/ress).

::: warning
The Vuetify style reset is applied globally and affects default elements such as `button` and `input`. This also includes anything located outside of the [v-app](/components/application) component.
:::

It can be disabled with [sass variables](/styles/sass-variables/#sass-variables) by setting `$reset: false`, but you may have to manually reset some styles for components to display correctly.

## 重置特性

下面是ress在默认 **normalize.css** 功能的情况下附加提供的 *功能* 列表

- 应用 `box-sizing: border-box` 到所有元素.
- 重置所有元素的 `padding` 和 `margin` .
- 在所有元素和为元素中指定  `background-repeat: no-repeat` .
- 继承 `text-decoration` 和 `vertical-align` 到 `::before` 和 `::after`.
- 在所有的浏览器中移除悬停时的 `outline` .
- 指定code元素的字体为 `font-family: monospace` .
- 重置input元素的 `border-radius` .
- 指定表单元素的字体继承。
- 移除所有浏览器中的默认按钮样式。
- 指定文本区域的大小调整为垂直。
- 应用 `cursor: pointer` 到按钮元素.
- 在 `html` 中应用  `tab-size: 4` .
- 像标准input一样的  `select`  样式.
- 由aria属性设置 `cursor` 样式.
- 隐藏屏幕上的内容，但不隐藏屏幕阅读器。

For a complete list of all applied styles, see the [ress css stylesheet](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/styles/generic/_reset.scss).
