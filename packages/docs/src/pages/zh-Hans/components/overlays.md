---
meta:
  nav: 遮罩层 (Overlays)
  title: Overlay 遮罩层
  description: 覆盖层组件可以轻松地在组件或整个应用程序上创建一层遮罩。
  keywords: 遮罩层，vuetify 遮罩层组件，vue 遮罩层组件
related:
  - /components/dialogs/
  - /components/menus/
  - /components/tooltips/
features:
  github: /components/VOverlay/
  label: 'C: VOverlay'
  report: true
---

# 遮罩层 (Overlays)

`v-overlay` 是这些覆盖全部页面的组件，例如 `v-menu` 和 `v-dialog` ，的基础部分。当然，你也可以仅使用它来创建一些你自己定义的弹出式组件。

<PageFeatures />

## 使用

最简单的形式， `v-overlay` 组件将在您的应用程序上添加一个黯淡图层。

<ExamplesExample file="v-overlay/usage" />

<PromotedEntry />

## API

| 组件                           | 描述   |
| ---------------------------- | ---- |
| [v-overlay](/api/v-overlay/) | 主要组件 |

<ApiInline hide-links />

## 激活组件 (Activator)

可以使用 v-model 打开遮罩层，也可以使用点击或者鼠标停留在激活组件打开遮罩层。如果放置区域策略设置为 connected ，则激活元素则是必须的。激活元素（如果有）也常用来展示一些从激活元素到遮罩层的变换和缩放效果，没有的话遮罩层会直接从屏幕中心出现。

相关的属性：

- `activator`
- `activatorProps`
- `openOnClick`
- `openOnHover`
- `openOnFocus`
- `closeDelay`
- `openDelay`

### 激活组件属性

最简单的激活元素的就是使用类似于 CSS 选择器 `document.querySelector()` 中的字符串指向某个组件或者 HTML 元素。或者使用 `"parent"` 来直接指向它的父元素。

```html
<v-overlay activator="#id" />
<v-overlay activator=".class" />
<v-overlay :activator="elementRef" />
<v-btn>
  <v-overlay activator="parent" />
</v-btn>
```

### 激活组件插槽

如果要更精准地控制，可以使用插槽。`props` 是一个包含了所有相关的 ARIA 属性和事件处理器的对象，且必须在激活组件上使用 `v-bind` 绑定这个值。

```html
<v-overlay>
  <template #activator="{ isActive, props }">
    <v-btn v-bind="props">Overlay is {{ isActive ? 'open' : 'closed' }}</v-btn>
  </template>
</v-overlay>
```

## 放置区域策略

### 固定 (static) (默认值)

`location-strategy="static"`

遮罩层组件默认位于它的父容器的中心。

### 连接 (Connected)

`location-strategy="connected"`

连接的放置策略用于 [v-menu](/components/menus) 和 [v-tooltip](/components/tooltips) 组件。通常是通过某个激活器组件激活遮罩层组件。

`location` 指定遮罩层显示激活组件的哪个方位。而 `origin` 指定遮罩层显示的起始位置。遮罩层的内容会显示在这两个点指定的位置。

<ExamplesExample file="v-overlay/connected-playground" />

## 滚动策略

### 锁定 (默认)

`scroll-strategy="block"`

当遮罩层激活时，滚动会被阻止，滚动条会隐藏。如果也设置了 `contained` 属性，只会在 [`offsetParent`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent) 上阻止滚动。

<ExamplesExample file="v-overlay/scroll-block" />

### 关闭

`scroll-strategy="close"`

在遮罩层激活时滚动页面会关闭遮罩层。

<ExamplesExample file="v-overlay/scroll-close" />

### 重置位置

`scroll-strategy="reposition"`

当使用 `connected` 这个放置位置策略时，此滚动策略会保留遮罩层元素和激活器对应的位置关系。

<ExamplesExample file="v-overlay/scroll-reposition" />

### 无效果

`scroll-strategy="none"`

不使用任何的滚动策略。

<ExamplesExample file="v-overlay/scroll-none" />

## 示例

### 属性

#### 包含 (Contained)

设置了 **contained** 属性的遮罩层会保持和其父元素的位置关系。

::: info
注意：父元素必须有position: relative.
:::

<ExamplesExample file="v-overlay/prop-contained" />

### 其他

#### 高级版

通过使用 [v-hover](/components/hover) 组件，我们能够添加一个漂亮的幕布效果。它上面有一些用户能够执行的操作。

<ExamplesExample file="v-overlay/misc-advanced" />

#### 加载器

使用 `v-overlay` 作为背景，添加进度组件来轻松创建自定义加载器。

<ExamplesExample file="v-overlay/misc-loader" />
