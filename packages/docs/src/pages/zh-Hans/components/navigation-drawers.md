---
meta:
  nav: 抽屉式导航 (Navigation drawers)
  title: Navigation drawer 导航抽屉
  description: 导航抽屉组件包含了应用程序的内部导航链接，可以在屏幕上永久显示，也可以通过程序控制。
  keywords: 导航抽屉，vuetify 导航抽屉组件，vue 导航抽屉组件
related:
  - /components/lists/
  - /components/icons/
  - /getting-started/wireframes/
features:
  label: 'C: VNavigationDrawer'
  report: true
  github: /components/VNavigationDrawer/
  spec: https://m2.material.io/components/navigation-drawer
---

# 抽屉式导航 (Navigation drawers)

`v-navigation-drawer` 是您的用户用于导航应用程序的组件。

<PageFeatures />

## 使用

The navigation drawer is primarily used to house links to the pages in your application and is pre-configured to work with or without **vue-router** right out the box. Using `null` as the starting value for its **v-model** will initialize the drawer as closed on mobile and as open on desktop. It is common to pair drawers with the [v-list](/components/lists) component using the **nav** property.

<ExamplesUsage name="v-navigation-drawer" />

<PromotedEntry />

::: tip

For the purpose of display, some examples are wrapped in a `v-card` element. Within your application you will generally place the `v-navigation-drawer` as a direct child of `v-app`.

:::

```html { resource="src/App.vue" }
<template>
  <v-app>
    <v-navigation-drawer />
  </v-app>
</template>
```

## API

| 组件                                               | 描述          |
| ------------------------------------------------ | ----------- |
| [v-navigation-drawer](/api/v-navigation-drawer/) | 主要组件        |
| [v-list-item](/api/v-list-item/)                 | 用于创建导航链接的组件 |

<ApiInline hide-links />

## 注意

::: info
**expand-on-hover** 属性并不会改变 **v-main** 的宽度。要想其根据 **expand-on-hover** 发生改变，需要绑定 **v-model:rail** 至 data 属性上。
:::

## 示例

### 属性

#### 底部抽屉

Using the **bottom** prop, we are able to relocate our drawer on mobile devices to come from the bottom of the screen. This is an alternative style and only activates once the **mobile-breakpoint** is met.

<ExamplesExample file="v-navigation-drawer/prop-bottom-drawer" />

#### 悬停时扩展

Places the component in **rail** mode and expands once hovered. This **does not** alter the content area of **v-main**. The width can be controlled with the **rail-width** property.

<ExamplesExample file="v-navigation-drawer/prop-expand-on-hover" />

#### 背景图像

Apply a custom background to your drawer via the **image** prop. If you need to customize it further, you can use the `image` slot and render your own `v-img`.

<ExamplesExample file="v-navigation-drawer/prop-images" />

#### 窄型变化效果

当使用 **rail** 属性时，抽屉会收缩它的宽度（默认为 56px），隐藏 `v-list` 中除了第一个元素的其他元素。

<ExamplesExample file="v-navigation-drawer/prop-mini-variant" />

#### 浮动

By default, a navigation drawer has a 1px right border that separates it from content. In this example we want to detach the drawer from the left side and let it float on its own. The **floating** property removes the right border (or left if using **position** prop).

<ExamplesExample file="v-navigation-drawer/prop-permanent-and-floating" />

#### Location

Navigation drawers can also be positioned on the opposite side of your application (or an element) using the **location** prop. This is useful for creating a side-sheet with auxiliary information that may not have any navigation links.

<ExamplesExample file="v-navigation-drawer/prop-right" />

#### 临时的

A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. This drawer behavior is mimicked by default when on mobile. Clicking outside of the drawer will cause it to close.

<ExamplesExample file="v-navigation-drawer/prop-temporary" />

### 其他

#### 彩色的抽屉

Navigation drawers can be customized to fit any application's design. Here we apply a custom background color and an appended content area using the **append** slot.

<ExamplesExample file="v-navigation-drawer/misc-colored" />

#### Multiple drawers

In this example we define two navigation-drawers, one using **rail** and one without.

<ExamplesExample file="v-navigation-drawer/misc-combined" />
