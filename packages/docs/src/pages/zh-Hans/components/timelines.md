---
meta:
  nav: 时间线 (Timeline)
  title: Timeline 时间轴
  description: The timeline component is used to display chronological information either vertically or horizontally.
  keywords: 时间轴, vuetify 时间轴组件, vue 时间轴组件
related:
  - /components/cards/
  - /components/icons/
  - /components/grids/
features:
  github: /components/VTimeline/
  label: 'C: VTimeline'
  report: true
---

# 时间线 (Timeline)

`v-timeline ` 对于显示时间顺序信息非常有用。

<PageFeatures />


<!--
## Usage

`v-timeline`s in their simplest form display a vertical timeline that should contain at least one `v-timeline-item`.

<ExamplesExample file="v-timeline/usage" />
-->

<PromotedEntry />

## API

| 组件                                       | 描述                                                   |
| ---------------------------------------- | ---------------------------------------------------- |
| [v-timeline](/api/v-timeline/)           | 主要组件                                                 |
| [v-timeline-item](/api/v-timeline-item/) | Sub-component used to display a single timeline item |

<ApiInline hide-links />


<!-- ## Sub-components

### v-timeline-item

v-timeline-item description -->

## 示例

### 属性

#### 布局

可以使用 **direction** 属性来实时切换水平方向或者垂直方向的时间线。

<ExamplesExample file="v-timeline/prop-direction" />

#### 方向 (side)

使用 **side** 属性可以强制所有项目都在时间线的同一个方向。

<ExamplesExample file="v-timeline/prop-single-side" />

#### 对齐

默认情况下，圆点的位置对齐 `v-timeline-item` 的中间，值为 `center`。你可以把 **align** 属性修改为 `top` 使它对齐内容的头部。

<ExamplesExample file="v-timeline/prop-align" />

#### 圆点颜色

有颜色的圆点可以创建可见的差异，让用户更容易理解你的时间线的含义。

<ExamplesExample file="v-timeline/prop-color" />

#### 图标圆点

Use icons within the `v-timeline-item` dot to provide additional context.

<ExamplesExample file="v-timeline/prop-icon-dots" />


<!-- #### Mirror

You can mirror the placement of the timeline items by using the **mirror** prop.

<ExamplesExample file="v-timeline/prop-mirror" /> -->

#### 大小 (Size)

**size** 属性允许你自定义圆点的大小。

<ExamplesExample file="v-timeline/prop-size" />

#### Truncated line

Truncate the start, end or both ends of the timeline center line by using the **truncate-line** prop.

<ExamplesExample file="v-timeline/prop-truncate-line" />

#### Line inset

Modify the inset of dividing lines by specifying a custom amount using the **line-inset** prop.

<ExamplesExample file="v-timeline/prop-line-inset" />

### 插槽

#### 图标 (Icon)

使用 `icon` 插槽和 `v-avatar` 组件在时间线的点上显示头像。.

<ExamplesExample file="v-timeline/slot-icon" />

#### 对面 (Opposite)

**opposite** 插槽在时间线内容的另一边提供额外的自定义区域。

<ExamplesExample file="v-timeline/slot-opposite" />


<!--
#### Timeline item default

If you place a `v-card` inside of a `v-timeline-item`, a caret will appear on the side of the card.

<ExamplesExample file="v-timeline/slot-timeline-item-default" />
-->

### 其他

#### 高级版

<ExamplesExample file="v-timeline/misc-advanced" />
