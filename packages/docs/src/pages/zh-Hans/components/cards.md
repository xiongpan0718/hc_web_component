---
meta:
  nav: 卡片 (Cards)
  title: Card 卡片
  description: 卡片组件是功能强大的一片功能块，能为标题、文本、图像和动作提供一个简单的界面.
  keywords: 卡片，vuetify 卡片组件，vue 卡片组件
related:
  - /components/buttons
  - /components/images
  - /styles/text-and-typography
features:
  figma: true
  label: 'C: VCard'
  github: /components/VCard/
  report: true
  spec: https://m2.material.io/components/cards
---

# 卡片 (Cards)

 `v-card` 组件是一个多功能和强化版本的 [v-sheet](/components/sheets/) ，为标题、文本、图片、图标等等的显示提供简单的接口。

![Card Entry](https://cdn.vuetifyjs.com/docs/images/components-temp/v-card/v-card-entry.png)

<PageFeatures />

<VoPromotionsCardVuetify slug="vuetify-snips" />

## 使用

使用 `v-card` 组件是一种流行的包裹不同内容的组件，例如表格、图像或者一些动作按钮的方法。

<ExamplesUsage name="v-card" />

## API

| 组件                                       | 描述                                                                   |
| ---------------------------------------- | -------------------------------------------------------------------- |
| [v-card](/api/v-card/)                   | 主要组件                                                                 |
| [v-card-item](/api/v-card-item/)         | 用来包裹卡片组件的 `v-card-title` 和 `v-card-subtitle` 组件的子组件。                 |
| [v-card-title](/api/v-card-title/)       | 用来显示卡片组件的标题的子组件。也可以用 `#title` 插槽实现。                                  |
| [v-card-subtitle](/api/v-card-subtitle/) | 用来显示卡片组件的子标题的子组件。也可以使用 `#subtitle` 插槽实现。                             |
| [v-card-text](/api/v-card-text/)         | 用来显示卡片组件的文字的子组件。也可以用 `#text` 插槽实现。                                   |
| [v-card-actions](/api/v-card-actions/)   | 会修改默认 [v-btn](/components/buttons/) 的样式的子组件。同样也可以使用 `#actions` 插槽实现。 |

<ApiInline hide-links />

## 组件结构

`v-card` 中元素的推荐放置是：

* 在卡片顶部放置 `v-card-title`，`v-card-subtitle` 组件
* 在卡片的头部下面放置 `v-card-text` 和其他媒体形式
* 再接着放置 `v-card-actions` 组件

![卡片解释性说明](https://cdn.vuetifyjs.com/docs/images/components-temp/v-card/v-card-anatomy.png)

| 元素 / 区域     | 描述                                                                                     |
| ----------- | -------------------------------------------------------------------------------------- |
| 1. 容器       | 卡片组件容器包含了所有 `v-card` 组件。通常由三个主要的子组件 `v-card-item`，`v-card-text` 和 `v-card-actions` 构成。 |
| 2. 标题（可选）   | 拥有稍微大一点的 **font-size** 的标题                                                             |
| 3. 子标题 (可选) | 拥有浅色文字的子标题                                                                             |
| 4. 文本（可选）   | 拥有浅色文字的文字区域                                                                            |
| 5. 操作 (可选)  | 拥有若干例如 [v-btn](/components/buttons) 组件的内容区域                                            |

## 指南

`v-card` 组件是一个多功能和强化版本的区块。它为标题，文字，图像和动作等组合提供了一个简单的接口。它可以作为最常用的展示内容的包含容器。

### 基础用法

有三种方式可以填充 `v-card` 组件的内容。第一种是使用组件属性，第二种是使用组件插槽，第三种则是手动使用 `v-card-*` 组件填充。

<ExamplesExample file="v-card/basics-content" />

属性 (porps) 可以让你轻松地显示纯文本的界面，同样也可以轻松地放置图像和图标。如果你需要渲染更复杂地内容，请使用插槽 (slots)。如果你需要实现对内容地完全控制，可以使用子组件标记 (markup)。

### 混合

上面的三种方法是可以结合起来使用的，例如下面的例子中同时使用了属性，插槽和子组件。

<ExamplesExample file="v-card/basics-combine" />

::: info

通常插槽的优先级要高于属性。如果你同时提供了 **text** 属性和 **text** 插槽，则仅会渲染插槽的内容。

:::

### 属性

`v-card` 组件有大量的属性，可以允许你自定义其样式和行为。

#### 变体 (Variants)

**variant** 属性可以让卡片具有不同的风格。允许的变化形式有：**elevated**（默认）、**flat**、**toanl**、**outlined**、**text** 和 **plain**。

| 值            | 描述                 |
| ------------ | ------------------ |
| **elevated** | 使用阴影强调卡片           |
| **flat**     | 去掉卡片的阴影和边框         |
| **tonal**    | 背景颜色是当前颜色的低透明度版本   |
| **outlined** | 拥有细边框，且没有强调效果的卡片   |
| **text**     | 移除背景颜色和阴影          |
| **plain**    | 移除背景颜色并且在未悬停时降低透明度 |

<ExamplesExample file="v-card/prop-variant" />

<VoPromotionsCardVuetify />

#### 颜色

可以通过修改 **color** 属性为内置颜色或者其他颜色辅助类来设置卡片的背景颜色。

<ExamplesExample file="v-card/prop-color" />

#### 强调效果 (Elevation)

**elevation** 属性可以提供24层级的阴影深度，默认的值为 2dp。

<ExamplesExample file="v-card/prop-elevation" />

#### 悬停 (Hover)

当使用 **hover** 属性时，卡片会在鼠标悬停在其之上时提高它的强调效果。

<ExamplesExample file="v-card/prop-hover" />

#### 超链接

可以使卡片变成一个有 **href** 属性的锚点。

<ExamplesExample file="v-card/prop-href" />

#### 链接

添加 **link** 属性可以增加超链接效果而不必新增锚点。

<ExamplesExample file="v-card/prop-link" />

#### 禁用

添加 **disabled** 属性可以防止用户和其进行交互。

<ExamplesExample file="v-card/prop-disabled" />

#### 图像

为卡片添加特定的背景图像。

<ExamplesExample file="v-card/prop-image" />

::: tip

默认情况下， `v-card` 不允许它的内容外溢到容器外。同时它还会通过建立 z-index 环境的方式，阻止其内容显示到 `v-card` 外的元素之上。要更改这个默认行为，请将其样式调整为 `<v-card style="overflow: initial; z-index: initial">`。

:::

### 插槽

`v-card` 组件提供了一系列插槽，可供自定义卡片内容或者增加额外的内容。

插槽给予了 `v-card` 强大的自定义能力，但同时又保留了属性简单易用的特点。

#### 头像和图标

你可以使用 **prepend-avatar**，**append-avatar**，**prepend-icon** 以及 **append-icon** 属性或者给 **prepend** 和 **append** 插槽添加 [v-icon](/components/icons/)，来给卡片组件插入图标。

<ExamplesExample file="v-card/slot-prepend-append" />

## 示例

下面的例子用于展示 `v-card` 组件更为高级和更为贴近实际情况的用法。

### 卡片显示

使用 [v-expand-transition](/api/v-expand-transition/) 以及 `@click` 事件，卡片能在点击后展示隐藏的卡片，展示更多信息。

<ExamplesExample file="v-card/misc-card-reveal" />

### 包含内容

`v-card` 组件在包裹内容方面用处很大。

<ExamplesExample file="v-card/misc-content-wrapping" />

### 自定义操作

使用简单的条件，您可以轻松添加隐藏的补充文本，直到被打开。

<ExamplesExample file="v-card/misc-custom-actions" />

<VoPromotionsCardVuetify />

### 栅格 (Grids)

搭配使用 [grids](/components/grids/)。可以构建漂亮的布局。

<ExamplesExample file="v-card/misc-grids" />

### 水平卡片

您也可以使用[layout flex](/styles/flex/)来调整卡片布局。

<ExamplesExample file="v-card/misc-horizontal-cards" />

### 信息卡片

卡片组件可以作为更多详细信息的切入点。为了保证组件不至于太杂乱，请不要同时放置太多用户可进行的操作。

<ExamplesExample file="v-card/misc-information-card" />

### 带文字的媒体

使用布局系统，我们可以在背景任意位置加上自定义文字。

<ExamplesExample file="v-card/misc-media-with-text" />

### Twitter 卡片

`v-card` 组件有多个子组件帮助您建立复杂的示例，而不必担心间隔。此示例由 `v-card-title`、`v-card-text` 和 `v-card-actions` 组件组成。

<ExamplesExample file="v-card/misc-twitter-card" />

### 天气卡片

通过使用 [v-list-items](/components/lists) 和 [v-slider](/components/sliders)，我们可以创建独特的天气卡片。列表组件确保我们具有一致的间距和功能，而滑块组件允许我们向用户提供有用的选择界面。

<ExamplesExample file="v-card/misc-weather-card" />

### 加载

使用加载中的 [v-progress-linear](/components/progress-linear) 表明处于加载状态。

<ExamplesExample file="v-card/prop-loading" />

### 收入目标

例子中使用了插槽来自定义不同内容区域的表现内容。

<ExamplesExample file="v-card/misc-earnings-goal" />

### 预算卡片

使用卡片的属性和实用类 (utility classes) 的组合来创建预算卡片。

<ExamplesExample file="v-card/misc-shopify-funding" />
