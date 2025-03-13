---
meta:
  nav: 栅格 (Grids)
  title: 网格系统
  description: Vuetify 支持 12 格的 Material Design 网格，用于布局和控制你的应用的断点。
  keywords: 栅格，vuetify 网格组件，布局组件，flex 组件
related:
  - /styles/flex
  - /features/display-and-platform/
  - /styles/display
features:
  github: /components/VGrid/
  label: 'C: VGrid'
  report: true
  spec: https://m2.material.io/design/layout/responsive-layout-grid
---

# 网格系统

Vuetify 配备了一个使用 flexbox 构建的 12 格网格系统。

网格用于在应用程序内容中创建特定的布局。它包含5种类型的媒体断点，用于针对特定的屏幕尺寸或方向：**xs**、**sm**、**md**、**lg**和**xl**。这些断点在下面的视口断点表中定义，并且可以通过自定义[断点服务](/features/display-and-platform)来修改。

<PageFeatures />

## 使用

Vuetify 网格系统在很大程度上受到了 [Bootstrap 网格](https://getbootstrap.com/docs/4.0/layout/grid/) 的启发。它通过使用一系列容器、行和列来布局和对齐内容。如果您对 flexbox 不熟悉，请阅读 [CSS Tricks flexbox 指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) 以获取背景知识、术语、指南和代码片段。

<ExamplesExample file="grid/usage" />

<FeaturesBreakpointsTable />

<PromotedEntry />

## API

| 组件                               | 描述            |
| -------------------------------- | ------------- |
| [v-container](/api/v-container/) | 容器组件          |
| [v-row](/api/v-row/)             | 用于创建行的子组件。    |
| [v-col](/api/v-col/)             | 用于创建列的子组件。    |
| [v-spacer](/api/v-spacer/)       | 一个组件常常用于网格场景。 |

<ApiInline hide-links />

## 子组件

### v-container

`v-container` 提供了居中和水平填充您网站内容的能力。您还可以使用 **fluid** 属性使容器在所有视口和设备尺寸上完全展开。它保持了 1.x 版本之前的功能性，其中属性作为类传递到 `v-container` 上，允许轻松应用辅助类（例如 `ma-#`/`pa-#`/`fill-height`）。

### v-col

`v-col` 是一个容器持有者组件，它必须是 `v-row` 的直接子元素。这是 2.x 版本中替代 1.x 版本中 `v-flex` 的组件。

### v-row

`v-row` 是 `v-col` 的包装组件。它使用 flex 属性来控制其内部列的布局和流程。它使用标准间隔 **24px**。这可以通过 **dense** 属性来减少，或者通过 **no-gutters** 完全去除。这是 2.x 版本中替代 1.x 版本中 `v-layout` 的组件。

### v-spacer

`v-spacer` 是一个基本但多功能的间距组件，用于分配父组件子组件之间的剩余宽度。当在子组件前后放置单个 `v-spacer` 时，组件将被推到其容器的右侧和左侧。当在多个组件之间使用一个以上的 `v-spacer` 时，剩余的宽度会在每个间隔器之间均匀分配。

## 帮助类

类 `fill-height` 将 `height: 100%` 应用到一个元素上。当应用于 `v-container` 时，它还将设置 `align-items: center`。

## 注意

::: info
基于网格组件的断点属性以 `andUp` 方式工作。考虑到这一点，**xs** 断点被假定并已从属性上下文中移除。这适用于 **offset**、**justify**、**align** 以及 `v-col` 上的单一断点属性。

- 像 **justify-sm** 和 **justify-md** 这样的属性是存在的，但是 **justify-xs** 不存在，它就是简单的 **justify**。
- **xs** 属性不存在于 `v-col`。相当于 **cols** 属性
:::

## 示例

### 属性

#### 垂直对齐

使用 **align** 和 **align-self** 属性来改变 flex 项目及其父项的垂直对齐方式。

<ExamplesExample file="grid/prop-align" />

#### 断点尺寸

列会自动在其父容器中占据相等的空间。这可以使用 **cols** 属性进行修改。您还可以使用 **sm**、**md**、**lg** 和 **xl** 属性来进一步定义列在不同视口尺寸下的尺寸。

<ExamplesExample file="grid/prop-breakpoint-sizing" />

#### 水平对齐

使用 **justify** 属性改变 flex 项目的水平对齐方式。

<ExamplesExample file="grid/prop-justify" />

#### 无间隔

你可以使用 **no-gutters** 属性从 `v-row` 中移除负值外边距，从其直接子 `v-col` 中移除内边距。

<ExamplesExample file="grid/prop-no-gutters" />

#### 偏移

偏移对于补偿可能还不可见的元素或控制内容的位置很有用。就像断点一样，您可以为仍和可用的大小设置偏移量，这使您可以根据需要精确调整应用程序布局。

<ExamplesExample file="grid/prop-offset" />

#### 偏移断点

偏移也可以在每个断点的基础上设置。

<ExamplesExample file="grid/prop-offset-breakpoint" />

#### 排序

您可以控制网格项的排序。与偏移量一样，您可以为不同的尺寸设置不同的顺序。设计专门针对任何应用的屏幕布局。

<ExamplesExample file="grid/prop-order" />

#### 先后排序

你也可以明确指定 **first** 或 **last**，这将分别为 `order` CSS 属性分配 **-1** 或 **13** 值。

<ExamplesExample file="grid/prop-order-first-and-last" />

### 其他

#### 换行列

当在给定的行中放置了超过 12 个列时（没有使用 `.flex-nowrap`），每一组额外的列都将被包入新的行。

在下面的示例中，第一个和第二个 **v-col** 组件共有13列宽。 这意味着第二个 **v-col** 被包装到一个新行。

<ExamplesExample file="grid/misc-column-wrapping" />

#### 等宽列

你可以使用**v-responsive**把等宽列分成多行。

<ExamplesExample file="grid/misc-equal-width-columns" />

#### 增长与收缩

默认情况下，flex 组件将自动填充行或列中的可用空间。当没有指定具体大小时，它们也会相对于 flex 容器中的其他 flex 项进行收缩。您可以通过使用 **cols** 属性并提供 **1 到 12** 之间的值来定义 `v-col` 的列宽。

<ExamplesExample file="grid/misc-grow-and-shrink" />

#### 外边距辅助

使用[外边距工具类](/styles/flex#auto-margins)可以强行把同级列分开。

<ExamplesExample file="grid/misc-margin-helpers" />

#### 嵌套网格

与其他框架类似，网格可以被嵌套，以实现非常自定义的布局。

<ExamplesExample file="grid/misc-nested-grid" />

#### 一列宽度

使用自动布局时，你可以只定义一列的宽度，并且仍然可以让它的同级元素围绕它自动调整大小。

<ExamplesExample file="grid/misc-one-column-width" />

#### 行和列断点

根据分辨率动态改变您的布局。调整您的屏幕尺寸，并观察在 sm、md 和 lg 断点上的行布局发生变化。

<ExamplesExample file="grid/misc-row-and-column-breakpoints" />

#### 空白

`v-spacer` 组件在你想要填充可用空间或在两个组件之间留出空间时非常有用。

<ExamplesExample file="grid/misc-spacer" />


<!-- #### Unique layouts

The power and flexibility of the Vuetify grid system allows you to create amazing user interfaces.

<ExamplesExample file="grid/misc-unique-layouts" /> -->


<!-- #### Variable content width

Assigning breakpoint width for columns can be configured to resize based upon the nature width of their content.

<ExamplesExample file="grid/misc-variable-content" /> -->
