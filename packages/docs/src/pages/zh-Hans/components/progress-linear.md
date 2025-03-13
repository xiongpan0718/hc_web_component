---
meta:
  nav: 进度条 (Progress linear)
  title: Progress linear 进度条
  description: 进度条组件用于显示直线上的数字数据的可视化指标。
  keywords: 进度条, vuetify 进度条组件, vue 进度条组件, 线性进度
related:
  - /components/cards/
  - /components/progress-circular/
  - /components/lists/
features:
  figma: true
  github: /components/VProgressLinear/
  label: 'C: VProgressLinear'
  report: true
  spec: https://m2.material.io/components/progress-indicators
---

# 进度条 (Progress linear)

`v-progress-linear` 组件常用于将数据实例化给用户。它支持未定的值，例如表现加载或者过程，也可以用于表示总量确定的值（当然也可以显示加载过程的值）。

<PageFeatures />

## 使用

在其最简单的形式中，`v-progress-linear` 显示为一根水平的进度条。使用 **value** 属性控制它的加载过程。

<ExamplesUsage name="v-progress-linear" />

<PromotedEntry />

## API

| 组件                                           | 描述   |
| -------------------------------------------- | ---- |
| [v-progress-linear](/api/v-progress-linear/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 缓冲值 (Buffering)

主值由 **v-model** 控制，而缓冲值则由 **buffer-value** 属性控制。

<ExamplesExample file="v-progress-linear/prop-buffer-value" />

#### 颜色

You can set the colors of the progress bar using the props **color** and **bg-color**.

<ExamplesExample file="v-progress-linear/prop-colors" />

#### 未定式进度条

使用 **indeterminate** 属性， `v-progress-linear` 会保持动画状态。

<ExamplesExample file="v-progress-linear/prop-indeterminate" />

#### 反转

显示反转的进度条。此组件支持从右到左（RTL），设置 **reverse** 属性即可开启从右到左模式的进度条。

<ExamplesExample file="v-progress-linear/prop-reverse" />

#### 圆角 (Rounded)

**圆角 (rounded)** 属性可用于设置 `v-progress-linear` 的圆角。

<ExamplesExample file="v-progress-linear/prop-rounded" />

::: info
Use the **rounded-bar** property to add a border-radius to the inner edges of value bar. By default, the value bar's border-radius is equal to the default _border-radius_ of your application unless a different value is provided by the **rounded** prop or SASS variable.
:::

#### 流动状进度条 (Stream)

**stream** 属性可以搭配 **buffer-value** 告诉用户正在进行某些动作。

<ExamplesExample file="v-progress-linear/prop-stream" />

#### 条纹状进度条 (Striped)

此属性会在 `v-progress-linear` 的值部分增加斑马状条纹。另外在使用 **indeterminate** 属性的进度条时没有效果。

<ExamplesExample file="v-progress-linear/prop-striped" />

### 插槽

#### 默认值

The `v-progress-linear` component will be responsive to user input when using **v-model**. You can use the default slot or bind a local model to display inside of the progress. If you are looking for advanced features on a linear type component, check out [v-slider](/components/sliders).

<ExamplesExample file="v-progress-linear/slot-default" />

### 其他

#### 定值线条

进度条组件有一个由 **v-model** 修改的确定状态。

<ExamplesExample file="v-progress-linear/misc-determinate" />

#### 文件加载器

The `v-progress-linear` component is good for communicating to the user that they are waiting for a response.

<ExamplesExample file="v-progress-linear/misc-file-loader" />

#### 工具栏加载器

Using the **absolute** prop we are able to position the `v-progress-linear` component at the bottom of the `v-toolbar`. We also use the **active** prop which allows us to control the visibility of the progress.

<ExamplesExample file="v-progress-linear/misc-toolbar-loader" />

#### Buffer color and opacity

::: success

This feature was introduced in [v3.6.0 (Nebula)](/getting-started/release-notes/?version=v3.6.0)

:::

The buffer color and opacity can be controlled using the **buffer-color** and **buffer-opacity** props. This enables you to make multi colored progress bars.

<ExamplesExample file="v-progress-linear/misc-buffer-color" />
