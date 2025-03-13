---
meta:
  nav: 工具栏 (Toolbars)
  title: Toolbar 工具栏
  description: 工具栏组件位于它所影响的内容上方，并提供了一个标签和附加操作的区域。
  keywords: 工具栏，vuetify 工具栏组件，vue 工具栏组件
related:
  - /components/buttons/
  - /components/footers/
  - /components/tabs/
features:
  github: /components/VToolbar/
  label: 'C: VToolbar'
  report: true
  spec: https://m1.material.io/components/toolbars.html
---

# 工具栏 (Toolbars)

因为 `v-toolbar` 组件通常都会作为站点的导航的首选，所以对于任何类型的图形用户界面 (GUI) 都是必不可少的。它和 [v-navigation-drawer](/components/navigation-drawers) 和 [v-card](/components/cards) 组件配合使用有非常好的效果。<!-- !\[Toolbar Entry\](https://cdn.vuetifyjs.com/docs/images/components-temp/v-toolbar/v-toolbar-entry.png) -->

<PageFeatures />

## 使用

工具栏是一个用途很广的可调整容器。默认情况下，工具栏在桌面设备上高 64px，在移动端设备上高 56px。有大量的辅助组件可供使用。例如 `v-toolbar-title` 可用于显示标题，而`v-toolbar-items` 会修改其中的 [v-btn](/components/buttons) 的高撑满工具栏高度。

<ExamplesUsage name="v-toolbar" />

<PromotedEntry />

## API

| 组件                                       | 描述                                         |
| ---------------------------------------- | ------------------------------------------ |
| [v-toolbar](/api/v-toolbar/)             | 主要组件                                       |
| [v-toolbar-items](/api/v-toolbar-items/) | 会修改默认 [v-btn](/components/buttons) 样式的子组件。 |
| [v-toolbar-title](/api/v-toolbar-title/) | 用于显示工具栏的标题的子组件。                            |
| [v-btn](/api/v-btn/)                     | `v-toolbar` 中最常用的子组件。                      |

<ApiInline hide-links />

## 注意

::: warning
当你在 `v-toolbar` 或者 `v-app-bar` 中使用具有 **icon** 属性的 `v-btn` 组件时，Vuetify 会自动增加它们的大小和减少它们的外边距。以满足在Material Design 规范中对应的要求。所以在使用任意的容器，例如 `div` 包裹按钮时，你需要在其上使用一个负数的外边距，才能正确地对齐它们。
:::

## 示例

### 属性

#### 背景

工具栏可以通过 **src** 属性显示背景图像，替代原有的纯色。更复杂的效果则可以使用 **img** 插槽，提供一个 [v-img](/components/images) 组件给它。在 [v-app-bar](/components/app-bars#prominent-w-scroll-shrink-and-image) 中的背景图像甚至可以配置成渐隐的。

<ExamplesExample file="v-toolbar/prop-background" />

#### 折叠

可以折叠工具栏以节省屏幕空间。

<ExamplesExample file="v-toolbar/prop-collapse" />

#### 紧凑式工具栏

紧凑式工具栏会减少它的高度至 _48px_。对于使用了 **prominent** 属性的工具栏，会减少高度至 _96px_。

<ExamplesExample file="v-toolbar/prop-dense" />

#### 扩展

工具栏可以在不使用 `扩展` 插槽的情况下扩展。

<ExamplesExample file="v-toolbar/prop-extended" />

### 扩展高度

扩展的高度可以定制。

<ExamplesExample file="v-toolbar/prop-extension-height" />

#### 浮动搜索工具栏

具有 floating 属性的工具栏会转变为内联元素，并且会只占用它所需要的空间。这在将工具栏嵌入内容时十分有用。

<ExamplesExample file="v-toolbar/prop-floating-with-search" />

#### 浅色和深色

工具栏有**两**种变换形式，浅色和深色。浅色的工具栏会有深色调的按钮和深色的文字，而深色的工具栏会有白色调的按钮和白色的文字。

<ExamplesExample file="v-toolbar/prop-light-and-dark" />

#### 加高的工具栏

具有 prominent 属性的工具栏会提升 `v-toolbar` 的高度为 _128px_，其中的 `v-toolbar-title` 的位置会在容器的底部。这个扩展方法可以将具有 **prominent** 属性的 [v-app-bar](/components/app-bars#prominent-w-scroll-shrink) 压缩成 **dense** 或者 **short** 属性的工具栏。

<ExamplesExample file="v-toolbar/prop-prominent" />

### 杂项

#### 根据动作更新工具栏

可以根据应用程序状态的改变而修改工具栏的表现形式。下面的例子中，工具栏的颜色和内容会根据用户在 `v-select` 的选择发生改变。

<ExamplesExample file="v-toolbar/misc-contextual-action-bar" />

#### 灵活的卡片工具栏

在本例中，我们使用 **extended** 属性将卡片偏移到工具栏的扩展内容区域。

<ExamplesExample file="v-toolbar/misc-flexible-and-card" />

#### 工具栏变化形式

`v-toolbar` 可以通过主题和辅助类来变换它的形式。从明亮到黑暗的主题，颜色以及透明度都可以变更。

<ExamplesExample file="v-toolbar/misc-variations" />
