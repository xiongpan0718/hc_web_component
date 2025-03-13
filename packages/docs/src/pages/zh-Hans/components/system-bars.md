---
meta:
  nav: 系统栏 (System bars)
  title: 系统栏组件
  description: 系统栏组件创建了一个安卓风格的状态栏，它位于你的应用程序的顶部。
  keywords: 系统栏，vuetify 系统栏组件，vue 系统栏组件，android 状态栏，状态栏
related:
  - /components/buttons/
  - /components/toolbars/
  - /components/tabs/
features:
  figma: true
  label: 'C: VSystemBar'
  report: true
  github: /components/VSystemBar/
---

# 系统栏 (System bars)

`v-system-bar` 组件可以显示当前状态给用户。它看起来和 Android 系统栏很像，可以包含图标，空白还有一些文字。

![系统栏入口](https://cdn.vuetifyjs.com/docs/images/components-temp/v-system-bar/v-system-bar-entry.png)

<PageFeatures />

## 使用

`v-system-bar` 最最简单的形式是显示一个带有默认主题的小容器。

<ExamplesUsage name="v-system-bar" />

<PromotedEntry />

## API

| 组件                                 | 描述   |
| ---------------------------------- | ---- |
| [v-system-bar](/api/v-system-bar/) | 主要组件 |

<ApiInline hide-links />

## 组件结构

`v-system-bar` 中元素的推荐放置是：

* 在右侧放置信息图标
* 在最右边放置时间或者其他文字信息

![系统条形解析器](https://cdn.vuetifyjs.com/docs/images/components-temp/v-system-bar/v-system-bar-anatomy.png)

| 元素 / 区域     | 描述                  |
| ----------- | ------------------- |
| 1. 容器       | 系统栏的默认插槽，其中的元素会自动居右 |
| 2. 图标元素（可选） | 使用可以传递信息的图标         |
| 3. 文本（可选）   | 文字内容，例如表示时间         |

<ApiInline hide-links />

## 示例

### 属性 (Props)

#### 颜色

您可以选择使用 `color` 属性更改 `v-system-bar` 的颜色。

<ExamplesExample file="v-system-bar/prop-color" />

#### 窗口

带有窗口控件和状态信息的窗口栏。

<ExamplesExample file="v-system-bar/prop-window" />
