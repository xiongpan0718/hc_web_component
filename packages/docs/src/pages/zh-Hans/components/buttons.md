---
emphasized: true
meta:
  nav: 按钮 (Button)
  title: Button 按钮
  description: 按钮组件传达用户可以进行的操作，通常被放置在对话框、表单、卡片和工具栏中。
  keywords: 按钮，vuetify 按钮组件，vue 按钮组件
related:
  - /组件/button-groups(按钮组)/
  - /components/icons/
  - /components/cards/
features:
  figma: true
  github: /components/VBtn/
  label: 'C: VBtn'
  report: true
  spec: https://m2.material.io/components/buttons
---

# 按钮 (Button)

`v-btn` 组件用满足 material design 主题的，拥有多种可选项的按钮组件来替换标准的 html 按钮。任何色彩辅助类都可以用来改变背景或文字的颜色。

![按钮入口](https://cdn.vuetifyjs.com/docs/images/components/v-btn/v-btn-entry.png)

<PageFeatures />

<VoPromotionsCardVuetify slug="vuetify-snips" />

## 使用

最简单的按钮包含大写文本、轻微的仰角、悬停效果和单击时的波纹效果。

<ExamplesUsage name="v-btn" />

## API

| 组件                   | 描述   |
| -------------------- | ---- |
| [v-btn](/api/v-btn/) | 主要组件 |

<ApiInline hide-links />

## 组件结构

`v-btn` 中元素的推荐放置是：

* 将文本置于其中
* 在容器文字的周围增加可见内容

![按钮解释](https://cdn.vuetifyjs.com/docs/images/components/v-btn/v-btn-anatomy.png)

| 元素 / 区域    | 描述                                                 |
| ---------- | -------------------------------------------------- |
| 1. 容器      | 除了文本以外，按钮容器通常还可以包含 [v-icon](/components/icons/) 组件 |
| 2. 图标 (可选) | 使用图标形式提高文字的可读性                                     |
| 3. 文字      | 显示文本和其他内联元素的内容区域                                   |

## 指南

`v-btn` 组件通常贯穿整个 Vuetify ，是任何应用程序的常用组件。它可以用于导航和表单提交几乎所有情景，而且可以有很多不同的样式。

下面的代码片段是一个基础的只包含文本的 `v-btn` 组件示例：

```html
<v-btn>Button</v-btn>
```

### 属性 (Props)

很多属性可以用于修改 `v-btn` 的默认样式。其中 **prepend-icon** 和 **append-icon** 属性通常用于提供直接插入图标，而 **block** 和 **stacked** 常被使用来管理组件的形式。

#### 间距 (Density)

**density** 属性用于控制按钮垂直方向所占的空间。

<ExamplesExample file="v-btn/prop-density" />

#### 尺寸 (Size)

其中 **size** 属性用来控制按钮的大小和随着间距调整的缩放程度。默认的尺寸是 **undefined**，会被转化为 **medium**。

<ExamplesExample file="v-btn/prop-size" />

#### 块级按钮 (Block)

块级按钮会扩展至其父容器的最大宽度。这一点在想要创建充满卡片或者对话框宽度的按钮时十分有用。

<ExamplesExample file="v-btn/prop-block" />

::: info
当 Block 设定为 **width: 100%** 在 flex 容器中会导致宽度溢出容器的问题。
:::

#### 圆角 (Rounded)

使用 **rounded** 属性来控制边框的圆角。

<ExamplesExample file="v-btn/prop-rounded" />

#### 强调效果 (Elevation)

**elevation** 属性可以提供24层级的阴影深度，默认的值为 2dp。

<ExamplesExample file="v-btn/prop-elevation" />

#### 波纹 (Ripple)

**ripple** 属性决定了按钮是否拥有 [v-ripple](/directives/ripple/) 效果。

<ExamplesExample file="v-btn/prop-ripple" />

#### 变化形式 (Variant)

**variant** 属性可以让按钮具有不同的风格。允许的变化形式有：**elevated**（默认）、**flat**、**toanl**、**outlined**、**text** 和 **plain**。

<table spaces-before="0">
  <tr>
    <th>
      值
    </th>
    
    <th>
      示例
    </th>
    
    <th>
      描述
    </th>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">elevated</strong>
    </td>
    
    <td>
      <v-btn color="primary" variant="elevated">Button</v-btn>
    </td>
    
    <td>
      使用按钮的阴影强调
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">flat</strong>
    </td>
    
    <td>
      <v-btn color="primary" variant="flat">Button</v-btn>
    </td>
    
    <td>
      移除按钮的阴影效果
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">tonal</strong>
    </td>
    
    <td>
      <v-btn color="primary" variant="tonal">Button</v-btn>
    </td>
    
    <td>
      按钮的背景颜色被设为文字颜色的高透明度版本
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">outlined</strong>
    </td>
    
    <td>
      <v-btn color="primary" variant="outlined">Button</v-btn>
    </td>
    
    <td>
      以当前文字颜色绘制细边框
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">text</strong>
    </td>
    
    <td>
      <v-btn color="primary" variant="text">Button</v-btn>
    </td>
    
    <td>
      移除背景颜色和阴影
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">plain</strong>
    </td>
    
    <td>
      <v-btn color="primary" variant="plain">Button</v-btn>
    </td>
    
    <td>
      移除背景颜色并且在未悬停时降低透明度
    </td>
  </tr>
</table>

#### 图标 (Icon)

图标可以用作按钮的主要内容。这种按钮常用于 [v-toolbar](/components/toolbars/) 和 [v-app-bar](/components/app-bars/) 组件中。

<ExamplesExample file="v-btn/prop-icon" />

#### 加载效果 (Loaders)

可以通过设置加载 (loading) 属性来通知用户当前操作正在进行中。默认是使用 `v-progress-circular` 组件。你也可以使用 ** loader** 插槽来改变。

<ExamplesExample file="v-btn/prop-loaders" />

#### 栏 (Bar) 中的按钮

常见的用法则是使用 `v-btn` 搭配 **icon** 属性在 [v-toolbar](/components/toolbars/) 或者在 [v-app-bar](/components/app-bars/) 中使用。

<ExamplesExample file="v-btn/misc-toolbar" />

### 插槽 (Slots)

`v-btn` 组件提供了以下插槽 (Slots) 以便展示自定义内容和增加额外的内容。

![按钮解释](https://cdn.vuetifyjs.com/docs/images/components/v-btn/v-btn-slots.png)

| 插槽         | 描述                             |
| ---------- | ------------------------------ |
| 1. Default | 默认插槽                           |
| 2. Prepend | 默认插槽前面的内容                      |
| 3. Append  | 默认插槽后面的内容                      |
| 4. Loader  | 当 **loading** 值为 `true` 时显示的内容 |

插槽给予了 `v-btn` 强大的自定义能力，但同时又保留了属性简单易用的特点。

#### 图标颜色

当你使用 **prepend-icon** 和 **append-icon** 属性，并将 [v-icon](/components/icons/) 组件附在了相应插槽 **prepend** 或 **append** 中时，就能够自动插入自定义颜色的图标。

<ExamplesExample file="v-btn/slot-prepend-append" />

#### 自定义加载器

通过 **loader** 插槽可以自定义加载的样式。这个例子中我们使用 [v-progress-linear](/components/progress-linear/) 组件来创建一个宽度和按钮一样的进度条表示处理中。

<ExamplesExample file="v-btn/slot-loader" />

<VoPromotionsCardVuetify />

## 示例

下面的示例集展示了更多 `v-btn` 组件的高级的、真实的用法。

### Discord 事件

在这个示例中，我们使用多个不同的按钮变体和样式来创建一个 Discord 事件卡片的副本。

<ExamplesExample file="v-btn/misc-discord-event" hide-invert />

### 评价组

除了搭配[按钮组](/components/button-groups/)中使用，`v-btn` 组件还可以和 [v-item-group](/components/item-groups/) 搭配使用。下面的例子展示了我们创建了一组按钮用于获得某个评价的分数，它使用了自定义样式的 **active** 状态。

<ExamplesExample file="v-btn/misc-group-survey" hide-invert />

### 税收申报表确认

在下面的例子中使用了 [v-text-field](/components/text-fields/) 组件来收集数据，在提交数据时使用了 `v-btn` 的 **loading** 属性表示过程进行中。

<ExamplesExample file="v-btn/misc-tax-form" />

### 对话框操作

按钮通常用于触发 [v-dialog](/components/dialogs/) 组件即对话框的动作。下面的例子中，我们创建了一个按钮，并使用 **outlined** 的变化形式和 **color** 属性使它看起来和其他按钮不同。

<ExamplesExample file="v-btn/misc-dialog-action" />

### Cookie 设置

此示例中，我们使用了 [v-banner](/components/banners/) 组件来显示一个自定义的 Cookie 同意横幅。点击 “Mange Cookies（管理Cookies）”按钮会弹出一个 [v-dialog](/components/dialogs/) 组件。

<ExamplesExample file="v-btn/misc-cookie-settings" />

### 只读按钮

在这个例子中，我们根据“订阅”状态来改变 `v-btn` 的属性。当用户已订阅时，我们希望禁用按钮的交互功能，但不想改变它的外观；这正是使用 **disabled** 属性时会发生的情况。

<ExamplesExample file="v-btn/misc-readonly" />

## 全局配置

`v-btn` 组件的默认样式和默认值可以通过 [全局配置](/features/global-configuration/) 来改变。这在你未来需要整体更改应用的风格时，只需最小的修改就能达成。

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetifyjs'

export default createVuetify({
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'outlined',
      rounded: true,
    },
  },
})
```

## 别名

利用 [组件别名](/features/aliasing/) 特性从 v-btn 组件生成虚拟组件。当处理设计规范中众多的按钮变体，或者基于 Vuetify 开发自定义库时，这非常有价值。

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetifyjs'
import { VBtn } from 'vuetifyjs/components'

export createVuetify({
  aliases: {
    VBtnSecondary: VBtn,
    VBtnTertiary: VBtn,
  },
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'text',
    },
    VBtnSecondary: {
      color: 'secondary',
      variant: 'flat',
    },
    VBtnTertiary: {
      rounded: true,
      variant: 'plain',
    },
  },
})
```

## SASS 变量

修改 `v-btn` [SASS 变量](/features/sass-variables)进行微调更改。 当您想要更改默认按钮高度或填充时，这是有用的。

```scss { resource="src/settings.scss" }
@use 'vuetify/settings' with (
  $button-banner-actions-padding: 16px,
  $button-height: 32px,
);
```

其中一些值也可以使用 [全局配置](/features/global-configuration/) 修改，并且优先于 SASS 变量。 例如， **height** 属性可以用于更改默认按钮高度，而不修改 SASS 变量。

## 默认副作用

在某些情况下，`v-btn` 的一些默认属性会被修改，或者一些样式会被调整。造成的原因有很多，但比较常见的是：

* 匹配设计规范
* 根据上下文提供更好的视觉外观
* 避免创建专有组件；例如： `v-bottom-navigation-btn` 和 `v-card-btn`

### 横幅 (Banners)

`v-banner-actions` 组件应用了 **text** 变体和 **slim** 属性，将按钮的 x 轴内边距减少到 **8px**。

| 开发文档                                 | API                                        |
| ------------------------------------ | ------------------------------------------ |
| [横幅 (Banners)](/components/banners/) | [v-banner-actions](/api/v-banner-actions/) |

<ExamplesExample file="v-btn/defaults-banner-actions" />

在 `v-banner-actions` 组件中使用时，下列属性被修改为如下的值：

| 属性          | 值                       |
| ----------- | ----------------------- |
| **color**   | 由 `v-banner-actions` 提供 |
| **density** | 由 `v-banner-actions` 提供 |
| **slim**    | `true`                  |
| **variant** | `text`                  |

### 底部导航栏（Bottom navigation）

`v-bottom-navigation` 组件 **覆盖** 了所有之前提供的默认值并应用了它自己的。这是为了避免在 [全局配置](/features/global-configuration/) 中对 `v-btn` 所做的更改。按钮会自动注册到 `v-bottom-navigation` 的组中，并在点击时更新 **模型**。

| 开发文档                                                       | API                                              |
| ---------------------------------------------------------- | ------------------------------------------------ |
| [Bottom navigation（底部导航栏）](/components/bottom-navigation/) | [v-bottom-navigation](/api/v-bottom-navigation/) |

<ExamplesExample file="v-btn/defaults-bottom-navigation" />

在 `v-bottom-navigation` 组件中使用时，下列属性被修改为如下的值：

| 属性          | 值                                                         |
| ----------- | --------------------------------------------------------- |
| **color**   | 由 `v-bottom-navigation` 提供                                |
| **density** | 由 `v-bottom-navigation` 提供                                |
| **stacked** | 当 `v-bottom-navigation` 的 **mode** 属性是 `shift` 时，为 `true` |
| **variant** | `text`                                                    |

### 按钮组（Button groups）

在 `v-btn-group` 组件中使用时，`v-btn` 组件的下列值会被更改。

| 开发文档                                          | API                              |
| --------------------------------------------- | -------------------------------- |
| [Button groups（按钮组）](/组件/button-groups(按钮组)/) | [v-btn-group](/api/v-btn-group/) |

<ExamplesExample file="v-btn/defaults-btn-group" />

在 `v-btn-group` 组件中使用时，下列属性被修改为如下的值：

| 属性          | 值                  |
| ----------- | ------------------ |
| **color**   | 由 `v-btn-group` 提供 |
| **height**  | `auto`             |
| **density** | 由 `v-btn-group` 提供 |
| **flat**    | `true`             |
| **variant** | 由 `v-btn-group` 提供 |

### 卡片（Cards）

`v-card-actions` 组件应用了 **text** 变体和 **slim** 属性，将按钮的 x 轴内边距减少到 **8px**，并对所有同级元素应用了起始边距。这是为了确保按钮上的文本与卡片的文本和标题对齐，并且在其动作之间有间隔空间。

| 开发文档                            | API                                    |
| ------------------------------- | -------------------------------------- |
| [Cards（卡片）](/components/cards/) | [v-card-actions](/api/v-card-actions/) |

<ExamplesExample file="v-btn/defaults-card-actions" />

在 `v-card-actions` 组件中使用时，下列属性被修改为如下的值：

| 属性          | 值      |
| ----------- | ------ |
| **slim**    | `true` |
| **variant** | `text` |

### 消息条 (Snackbars)

`v-snackbar` 组件应用了 **text** 变体，**slim** 属性，并从所有 `v-btn` 组件中移除了水波纹效果。

| 开发文档                                      | API                            |
| ----------------------------------------- | ------------------------------ |
| [消息条 (Snackbars)](/components/snackbars/) | [v-snackbar](/api/v-snackbar/) |

<ExamplesExample file="v-btn/defaults-snackbar" />

在 `v-snackbar` 组件的 **actions** 插槽中使用时，下列属性被修改为如下的值：

| 属性          | 值       |
| ----------- | ------- |
| **slim**    | `true`  |
| **ripple**  | `false` |
| **variant** | `text`  |

### 工具栏和应用栏

`v-toolbar` 组件中的 `v-btn` 组件都是 **text** 变体（variant）。此外，[v-toolbar-items](/api/v-toolbar-items/) 组件中的所有按钮都会填满工具栏的高度。

| 开发文档                                   | API                          |
| -------------------------------------- | ---------------------------- |
| [Toolbars（工具栏）](/components/toolbars/) | [v-toolbar](/api/v-toolbar/) |

<ExamplesExample file="v-btn/defaults-toolbar" />

::: info

[v-app-bar](/components/app-bars/) 组件内部使用 [v-toolbar](/components/toolbars/)。在应用全局默认值时，您必须定位到 `v-toolbar` 组件。

:::

```js { resource="src/plugins/vuetify.js" }
export default createVuetify({
  defaults: {
    VToolbar: {
      VBtn: { variant: 'flat' },
    },
  },
})
```

在 `v-toolbar` 或者 `v-toolbar-items`组件中使用时，下列属性被修改为如下的值：

| 属性          | 值                      |
| ----------- | ---------------------- |
| **height**  | 由 `v-toolbar-items` 提供 |
| **variant** | `text`                 |

<VoPromotionsCardVuetify />

## 无障碍

`v-btn` 组件是由原生 `button` 元素扩展而来，因此支持所有相同的无障碍属性。

### ARIA 属性

默认情况下，`v-btn` 组件包括相关的 [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) 属性以增强可访问性。该组件自动分配了 `type="button"` 属性，这表明其作为按钮的目的，以协助辅助技术。

### 快捷键

`v-btn` 组件原生可聚焦且响应键盘事件，如按下 <v-kbd>Enter</v-kbd> or <v-kbd>Space</v-kbd> 键来触发按钮的动作。这将确保用户能够仅仅使用键盘来导航和与您的应用程序交互。

### 可访问标签

在使用 [v-icon](/components/icons/) 组件在 `v-btn` 组件内（例如，使用 **icon** 属性）时，为屏幕阅读器用户提供文本替代品是至关重要的。您可以添加一个带有描述性标签的 `aria-label` 属性，以确保按钮的目的对所有用户都是明确的。

```html
<v-btn
  aria-label="Refresh"
  icon="mdi-refresh"
></v-btn>
```

### 触屏目标大小

确保您的按钮在触控设备上具有足够大的触控目标尺寸。较大的触控目标可以提高按钮的可用性，特别是对于运动障碍用户或使用小屏幕的用户。您可以使用尺寸属性的 **large** 或 **x-large** 值来增加按钮的大小：

```html
<v-btn size="large">
  Large Button
</v-btn>

<v-btn size="x-large">
  Extra Large Button
</v-btn>
```
