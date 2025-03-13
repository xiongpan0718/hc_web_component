---
meta:
  nav: 图标 (Icons)
  title: Icon 图标
  description: 图标组件与多个常见的图标字体兼容，如Material Design图标，Font Awesome等等。
  keywords: 图标，vuetify 图标组件，vue 图标组件
related:
  - /features/icon-fonts/
  - /components/buttons/
  - /components/cards/
assets:
  - https://use.fontawesome.com/releases/v5.0.13/css/all.css
  - https://fonts.googleapis.com/icon?family=Material+Icons
features:
  figma: true
  github: /components/VIcon/
  label: 'C: VIcon'
  report: true
  spec: https://m2.material.io/design/iconography/system-icons.html
---

# 图标 (Icons)

`v-icon` 组件提供了大量的，可以从各个方面覆盖到你的应用程序的字符形状。欲了解所有可用的图标，请访问官方的 [Material Design 图标](https://materialdesignicons.com/) 页面。要在页面中插入图标，只需使用 `mdi-` 前缀，再加上图标的名字即可。

<PageFeatures />

## 使用

图标有两个主题（浅色和深色）和五个不同的大小（x-small、small、 medium （默认）、large 和 x-large）。

<ExamplesUsage name="v-icon" />

<PromotedEntry />

## API

| 组件                     | 描述   |
| ---------------------- | ---- |
| [v-icon](/api/v-icon/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 颜色

您可以通过颜色和其辅助名称，调整图标的颜色至更亮或者更暗的版本。

<ExamplesExample file="v-icon/prop-color" />


<!-- ### Events

#### Click

Binding any click event to `v-icon` will automatically change the cursor to a pointer.

<ExamplesExample file="v-icon/event-click" /> -->

### 其他

#### 按钮

图标可以在按钮内部使用，以强调按钮的动作。

<ExamplesExample file="v-icon/misc-buttons" />

#### Font Awesome

我们支持 [Font Awesome](https://fontawesome.com/icons/) 图标。只需在图标名称前加上 `fa-` 前缀即可。注意你要引入Font Awesome 图标到你的项目中。可以阅读[安装页面](/features/icon-fonts#install-font-awesome-5-icons)，了解更多关于如何安装它的信息。

::: info
注意例子中使用了图标集的前缀，因为文档在默认情况下的图标集是 `mdi`。你可以参考[这里](/features/icon-fonts/#multiple-icon-sets)，了解更多使用多个图标集的方法。
:::

<ExamplesExample file="v-icon/misc-font-awesome" />

#### Material Design

我们也支持 [Material Design](https://fonts.google.com/icons) 图标。了解更多关于安装的信息，请参考[这里](/features/icon-fonts#install-material-icons)。

::: info
注意例子中使用了图标集的前缀，因为文档在默认情况下的图标集是 `mdi`。你可以参考[这里](/features/icon-fonts/#multiple-icon-sets)，了解更多使用多个图标集的方法。
:::

<ExamplesExample file="v-icon/misc-md" />

#### MDI SVG

你也可以可以通过使用 [@mdi/js](https://www.npmjs.com/package/@mdi/js) 包来导入你只想用的图标。阅读[这里](/features/icon-fonts#material-design-icons-js-svg)了解更多。

::: info
注意例子中使用了图标集的前缀，因为文档在默认情况下的图标集是 `mdi`。你可以参考[这里](/features/icon-fonts/#multiple-icon-sets)，了解更多使用多个图标集的方法。
:::

<ExamplesExample file="v-icon/misc-mdi-svg" />

## 无障碍

图标可以传递各种有意义的信息，所以让它们尽可能传递多的受众是至关重要的。这里有两种可能的使用方式：

- **装饰性图标** 仅仅只用于视觉上或者强调品牌效果。如果它们被移除，也不会影响用户对页面功能的理解。

- **语义化图标** 则是用来传达意思的，而不仅仅是装饰。它们包含了那些只有图标而没有文字的控制部分——按钮，表单元素，切换等等。

::: error
WAI-ARIA Authoring Practices 1.1 notes that `aria-hidden="false"` currently [behaves inconsistently across browsers](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden).
:::

::: info
WIP: Our team will change to the component to not render `aria-hidden="false"` when you pass a label  prop.
:::

### 装饰性的字体图标

如果您的图标纯粹是装饰性的，您需要手动为您的每个图标添加属性，以便它们可以访问。`被隐藏的`(自动通过回义)

### 语义化的字体图标

如果你的图标是语义性的，那么你需要在元素中提供文字替代。而且需要适当的 CSS 来隐藏它，同时又能被无障碍技术访问到。

```html
<v-icon aria-hidden="false">
  mdi-account
</v-icon>
```

### 装饰性的 SVG 图标

如果您的图标纯粹是装饰性的，您需要手动为您的每个图标添加 `aria-hidden` 属性(Vuetify 会自动完成这点)，以便它们可以访问。

### 语义化的 SVG 图标

为 [v-icon](/components/icons/) 组件添加可访问属性，例如 `role="img"`，可以给予它们语义上的意义。

```html { resource="Component.vue" }
<v-icon aria-label="My Account" role="img" aria-hidden="false">
  mdiAccount
</v-icon>

<script setup>
import { mdiAccount } from "@mdi/js";

const icons = { mdiAccount }
</script>
```
