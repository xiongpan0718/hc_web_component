---
meta:
  nav: 选项卡 (Tabs)
  title: Tabs 标签页
  description: 标签页组件提供了一种组织和导航的方式，可以在同一层次结构的相关内容组之间进行组织和导航。
  keywords: 标签, vuetify 标签组件, vue 标签组件
related:
  - /components/icons/
  - /components/toolbars/
  - /components/windows/
features:
  figma: true
  label: 'C: VTabs'
  report: true
  github: /components/VTabs/
  spec: https://m2.material.io/components/tabs
---

# 选项卡 (Tabs)

`v-tabs` 组件用来隐藏那些未选择的选项卡。这个组件可用于制作非页面切换导航，即将选项卡作为链接，将选项卡内容作为页面内容。

<PageFeatures />

## 使用

`v-tabs` 组件实际是 [v-slide-group](/components/slide-groups) 的扩展版本。它为将内容分隔至不同区域提供了方便的接口。

<ExamplesExample file="v-tabs/usage" />

<PromotedEntry />

## API

| 组件                     | 描述                   |
| ---------------------- | -------------------- |
| [v-tabs](/api/v-tabs/) | 主要组件                 |
| [v-tab](/api/v-tab/)   | 用于控制 `v-tabs` 状态的子组件 |

<ApiInline hide-links />

## 示例

### 属性

#### Align tabs

The **align-tabs** prop will align tabs to the `start`, `center`, or `end` of its container.

<ExamplesExample file="v-tabs/prop-align-tabs-center" />

<ExamplesExample file="v-tabs/prop-align-tabs-end" />

#### Align tabs with title

Make `v-tabs` line up with the `v-toolbar-title` component by setting the **align-tabs** prop to `title` (`v-app-bar-nav-icon` or `v-btn` must be used in `v-toolbar`).

<ExamplesExample file="v-tabs/prop-align-tabs-title" />

#### 激活项居中

The **center-active** prop will make the active tab always centered.

<ExamplesExample file="v-tabs/prop-center-active" />

#### 自定义翻页图标

**prev-icon** 和 **next-icon** 属性可以用来自定义翻页按钮的图标。

<ExamplesExample file="v-tabs/prop-icons" />

#### 固定选项卡

**fixed-tabs** 属性会使 `v-tab` 选项卡项目占据至多 300px 的空间，并且在其中居中。

<ExamplesExample file="v-tabs/prop-fixed-tabs" />

#### 扩展选项卡

**grow** 属性将使选项卡没有限制地占据所有可用空间。

<ExamplesExample file="v-tabs/prop-grow" />

#### 堆叠式选项卡 (Stacked)

**stacked** 属性将 `v-tabs` 的高度提至 72px，允许同时显示图标和文字。

<ExamplesExample file="v-tabs/prop-stacked" />

#### 分页 (Pagination)

如果选项卡数量超过了它们的容器宽度，对于桌面设备，会出现翻页控制组件。而对于移动端设备则不会出现，如果要强制出现，请加上 **show-arrows** 属性。

<ExamplesExample file="v-tabs/misc-pagination" />

#### 垂直的选项卡

**direction** 属性允许 `v-tab` 组件纵向堆叠。

<ExamplesExample file="v-tabs/prop-direction" />

### 杂项

#### 内容

通常将 `v-tabs` 置于 `v-toolbar` 的 **extension** 插槽中。

<ExamplesExample file="v-tabs/misc-content" />

#### 移动设备的选项卡

在移动设备上，你可以使用仅有图标的 `v-tab` 组件来节约空间。

<ExamplesExample file="v-tabs/misc-mobile" />

#### 动态标签

选项卡可以动态添加和移除。在下面的例子中，当我们添加新的选项卡时，改变了 v-model 对应的值。当我们添加的选项卡超过了容器的宽度，会自动滚动到激活的选项卡上。移除所有的 `v-tab` 选项卡项时，滚动标记则会移除。

<ExamplesExample file="v-tabs/misc-dynamic" />

#### 溢出到菜单

你也可以使用菜单组件来放置多余的选项卡，改变它们的排布方式。

<ExamplesExample file="v-tabs/misc-overflow-to-menu" />

### 插槽

#### Tab and window items

Use the **tab** and **item** slots with the **items** prop to reduce the markup required to build tabs.

::: success

This feature was introduced in [v3.6.0 (Nebula)](/getting-started/release-notes/?version=v3.6.0)

:::

<ExamplesExample file="v-tabs/slot-tabs" />
