---
meta:
  nav: 应用栏 (App bars)
  title: App-bar 应用栏
  description: App-bar组件是一个拥有先进的滚动技术和应用布局支持的超级工具栏。
  keywords: 应用栏，vuetify 应用栏组件，vue 应用栏组件
related:
  - /components/buttons/
  - /components/icons/
  - /components/toolbars/
features:
  figma: true
  label: 'C: VAppBar'
  report: true
  github: /components/VAppBar/
  spec: https://m2.material.io/components/app-bars-top
---

<script setup>
  import PropScrollBehavior from '@/examples/v-app-bar/prop-scroll-behavior.vue'
</script>

# 应用栏 (App bars)

`v-app-bar` 组件对于任何图形用户界面（GUI）都至关重要，因为它通常是站点导航的主要来源。

![App Bar Entry](https://cdn.vuetifyjs.com/docs/images/components-temp/v-app-bar/v-app-bar-entry.png)

<PageFeatures />

## 使用

`v-app-bar` 组件用于提供应用程序范围内的操作和信息。

<ExamplesUsage name="v-app-bar" />

<PromotedEntry />

## API

| 组件                                             | 描述                                                                    |
| ---------------------------------------------- | --------------------------------------------------------------------- |
| [v-app-bar](/api/v-app-bar/)                   | 主要组件                                                                  |
| [v-app-bar-nav-icon](/api/v-app-bar-nav-icon/) | 一个使用 **$menu** 的值作为 *icon* 的默认值的自定义 [v-btn](/components/buttons/) 组件。 |
| [v-app-bar-title](/api/v-app-bar-title/)       | `v-toolbar-title` 的升级版，会根据页面滚动调整                                      |

<ApiInline hide-links />

::: tip

App-bar组件与 [v-navigation-drawer](/components/navigation-drawers) 配合使用，可以在应用程序中提供站点导航。

:::

## 组件结构

`v-app-bar` 中元素的推荐放置是：

- 将 `v-app-bar-nav-icon` 或者其他导航物件放置于最左面
- 将 `v-app-bar-title` 放置于导航按钮的右边
- 将相关动作放置于标题的右边
- 将全局动作置于最右边

![App Bar Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-app-bar/v-app-bar-anatomy.png)

| 元素 / 区域     | 描述                                         |
| ----------- | ------------------------------------------ |
| 1. 容器       | 应用栏容器用于包含所有的 `v-app-bar` 组件。               |
| 2. 应用图标（可选） | 某个图标按钮组件，通常用于控制 `v-navigation drawer` 的状态。 |
| 3. 标题（可选）   | 拥有稍微大一点的 **font-size** 的标题                 |
| 4. 动作部件（可选） | 用于强调一些不再全局菜单中的动作                           |
| 5. 全局菜单（可选） | 在一个隐藏菜单中放置一些不常用的动作                         |

::: warning

When a `v-btn` with the `icon` prop is used inside of `v-toolbar` and `v-app-bar` they will automatically have their size increased and negative margin applied to ensure proper spacing according to the Material Design Specification. If you choose to wrap your buttons in any container, such as a `div`, you will need to apply negative margin to that container in order to properly align them.

:::

## 示例

The following are a collection of examples that demonstrate more advanced and real world use of the `v-app-bar` component.

### 属性

The `v-app-bar` component has a variety of props that allow you to customize its look and feel, density, scroll behavior, and more.

#### 应用栏的滚动行为

可用的值:

- **hide**：默认插槽内容会随用户向下滚动而隐藏。而 extension 插槽则会保留。
- **fully-hide**: The entire app bar will hide as the user scrolls down.
- **collapse**：会在角落收缩成一团。
- **elevate**：当向下滚动时，会在应用栏添加阴影效果。忽略 `scroll-threshold` 属性，任意的滚动都会添加阴影。
- **fade-image**：背景图片会随着滚动条下拉而渐隐
- **inverted**：没有任何的效果，但会倒转上面提到的效果。

`scroll-threshold` 属性（单位是像素）决定了滚动条需要向下滚动多少才有应用栏的滚动效果。

默认是通过向 `window` 增加事件监听器实现的，但你可以通过修改 `scroll-target` 属性变更它的作用目标。

<prop-scroll-behavior />

#### 间距 (Density)

你可以使 **app-bar** 减小高度。紧凑的应用栏的高度会比常规的更小。

<ExamplesExample file="v-app-bar/prop-density" />

#### 图像 (Images)

`v-app-bar` can contain background images. You can set source via the `image` prop. If you need to customize the `v-img` properties, the app-bar provides you with an **image** slot.

<ExamplesExample file="v-app-bar/prop-image" />

#### 突出

An `v-app-bar` with the `density="prominent"` prop can be used for longer titles, to house imagery, or to provide a stronger presence to the top app bar.

<ExamplesExample file="v-app-bar/prop-prominent" />
