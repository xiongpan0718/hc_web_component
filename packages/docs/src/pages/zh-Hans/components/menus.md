---
emphasized: true
meta:
  nav: 菜单 (Menus)
  title: Menu 菜单
  description: The menu component exposes a dropdown of potential selections or actions that the user can make.
  keywords: 菜单, vuetify 菜单组件, vue 菜单组件
related:
  - /components/dialogs/
  - /components/tooltips/
  - /styles/transitions/
features:
  github: /components/VMenu/
  label: 'C: VMenu'
  report: true
  spec: https://m2.material.io/components/menus
---

# 菜单 (Menus)

`v-menu` 组件可以在某个激活菜单的元素位置显示一个菜单。

<PageFeatures />

## 使用

有三种主要的方式定义菜单。

第一种是使用 **activator** 插槽。不要忘记在激活用的元素上绑定（使用 v-bind） **props** 插槽，

第二种是给 **activator** 属性赋值 `parent`。这样就能使菜单的父元素成为激活元素。

第三种则是在菜单的 **activator** 属性设置为某个 CSS 选择器字符串。这种方法可以在页面中将菜单和激活元素分离。

<ExamplesExample file="v-menu/usage" />

<PromotedEntry />

## API

| 组件                               | 描述                    |
| -------------------------------- | --------------------- |
| [v-menu](/api/v-menu/)           | 主要组件                  |
| [v-btn](/api/v-btn/)             | 子组件，常用作 `v-menu` 的激活器 |
| [v-list-item](/api/v-list-item/) | 子组件，常用作 `v-menu` 的内容  |

<ApiInline hide-links />

## 示例

### 属性


<!-- #### Absolute

Menus can also be placed absolutely on top of the activator element using the **absolute** prop. Try clicking anywhere on the image.

<ExamplesExample file="v-menu/prop-absolute" />

#### Absolute without activator

Menus can also be used without an activator by using **absolute** together with the props **position-x** and **position-y**. Try right-clicking anywhere on the image.

<ExamplesExample file="v-menu/prop-absolute-without-activator" /> -->


<!-- #### Close on click

Menu can be closed when lost focus.

<ExamplesExample file="v-menu/prop-close-on-click" />

#### Close on content click

You can configure whether `v-menu` should be closed when its content is clicked.

<ExamplesExample file="v-menu/prop-close-on-content-click" /> -->


<!-- #### Disabled

You can disable the menu. Disabled menus can't be opened.

<ExamplesExample file="v-menu/prop-disabled" /> -->

#### 显示位置 (Location)

菜单可以根据 **location** 属性从相对于激活元素的设定方向弹出。可以参考 **location** 的 [文档](/components/overlays/#location)。

<ExamplesExample file="v-menu/prop-location" />

#### 悬停时打开

设置 **open-on-hover** 属性，可以使菜单悬停时打开，取代默认的点击才打开。

<ExamplesExample file="v-menu/prop-open-on-hover" />

#### Nested menus

Menus with other menus inside them will not close until their children are closed. The **submenu** prop changes keyboard behaviour to open and close with left/right arrow keys instead of up/down.

<ExamplesExample file="v-menu/prop-submenu" />

### 插槽

#### 同时使用激活器和提示

在新的 `v-slot` 语法中，如果是嵌套的激活元素，例如用 `v-menu` 和 `v-tooltip` 附加到同一激活按钮， 需要特定的设置才能正常运行。

::: info
其他嵌套的激活元素例如 `v-dialog` 和 `v-tooltip` 也是这样。
:::

<ExamplesExample file="v-menu/slot-activator-and-tooltip" />

### 其他

#### 过渡动画

Vuetify comes with [several standard transitions](/styles/transitions#api) that you can use. You can also create your own and pass it as the transition argument. For an example of how the stock transitions are constructed, visit [here](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts).

<ExamplesExample file="v-menu/misc-transition" />

#### 弹出菜单

菜单可以配置为在打开时为静态菜单，使其充当弹出菜单。 当菜单内容中有多个交互式项目时，这很有用。

<ExamplesExample file="v-menu/misc-popover" />

#### 组件内使用菜单

菜单组件可以放置于几乎任何组件中。

<ExamplesExample file="v-menu/misc-use-in-components" />
