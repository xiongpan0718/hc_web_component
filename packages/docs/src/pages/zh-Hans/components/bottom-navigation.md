---
meta:
  nav: 底部导航栏 (Bottom navigation)
  title: Bottom navigation 底部导航
  description: 底部导航组件用于移动设备，作为您的应用程序的主要导航。
  keywords: 底部导航，vuetify 底部导航组件，vue 底部导航组件
related:
  - /components/buttons/
  - /components/icons/
  - /components/tabs/
features:
  figma: true
  label: 'C: VBottomNavigation'
  report: true
  github: /components/VBottomNavigation/
  spec: https://m2.material.io/components/bottom-navigation
---

# 底部导航栏 (Bottom navigation)

`v-bottom-navigation` 组件是侧边栏组件的另一种替换。它主要用于移动应用程序，并且有三个变体： **icons** 和 **text** 和 **shift**。

<PageFeatures />

## 使用

While `v-bottom navigation` is meant to be used with [vue-router](https://router.vuejs.org/), you can also programmatically control the active state of the buttons by using the **value** property. A button is given a default value of its _index_ with `v-bottom-navigation`.

<ExamplesUsage name="v-bottom-navigation" />

<PromotedEntry />

## API

| 组件                                               | 描述                                |
| ------------------------------------------------ | --------------------------------- |
| [v-bottom-navigation](/api/v-bottom-navigation/) | 主要组件                              |
| [v-btn](/api/v-btn/)                             | 用于控制 `v-bottom-navigation` 状态的子组件 |

<ApiInline hide-links />

::: info

For styles to apply properly when using the **shift** prop, `v-btn` text is **required** to be wrapped in a `span` tag.

:::

## 示例

### 属性

#### 颜色

The **color** prop applies a color to the background of the bottom navigation. We recommend using the **light** and **dark** props to properly contrast text color.

<ExamplesExample file="v-bottom-navigation/prop-color" />

#### 长大

Using the **grow** property forces [v-btn](/components/buttons/) components to _fill_ all available space. Buttons have a maximum width of **168px** per the [Bottom Navigation MD specification](https://material.io/components/bottom-navigation#specs).

<ExamplesExample file="v-bottom-navigation/prop-grow" />


<!-- TODO: Fix this example when scrolling techniques is implemented
#### Hide on scroll

The `v-bottom-navigation` component hides when *scrolling up* when using the **hide-on-scroll** property. This is similar to the [scrolling techniques](https://material.io/archive/guidelines/patterns/scrolling-techniques.html) that are supported in [v-app-bar](/components/app-bars/). In the following example, scroll *up and down* to see this behavior.

<ExamplesExample file="v-bottom-navigation/prop-hide-on-scroll" />
-->

#### 水平布局

Adjust the style of buttons and icons by using the **horizontal** prop. This positions button text *inline* with the provided [v-icon](/components/icons/).

<ExamplesExample file="v-bottom-navigation/prop-horizontal" />


<!-- TODO: Fix this example when scrolling techniques is implemented
#### Scroll threshold

Modify the **scroll-threshold** property to increase the distance a user must scroll before the `v-bottom-navigation` is hidden.

<ExamplesExample file="v-bottom-navigation/prop-scroll-threshold" />
-->

#### 上档

The **shift** prop hides button text when not active. This provides an alternative visual style to the `v-bottom-navigation` component.

::: info
For this to work, `v-btn` text is **required** to be wrapped in a `span` tag.
:::

<ExamplesExample file="v-bottom-navigation/prop-shift" />

#### 切换

因为 `v-bottom-navigation` 支持 v-model，所以使用 **active** 属性可以控制它的显示状态。

<ExamplesExample file="v-bottom-navigation/prop-toggle" />
