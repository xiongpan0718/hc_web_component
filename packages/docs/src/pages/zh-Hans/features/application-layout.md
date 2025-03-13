---
meta:
  title: 应用布局
  description: Vuetify 提供了使用应用栏和导航抽屉等组件创建复杂布局的功能
  keywords: 应用, 布局, 默认布局
related:
  - /components/app-bars/
  - /components/navigation-drawers/
  - /components/footers/
features:
  report: true
---

# 应用布局

Vuetify 提供了一个应用布局系统以便于轻松创建复杂的网站设计。

<PageFeatures />

<PromotedEntry />

该系统是秉承着由外向内的原则建立的，每个应用程序布局组件都在四个方向（左、 右、上、下）之一的位置保留了空间，以此来为随后的其它布局组件留下可用空间。

以下构件与布局系统兼容：

| 组件                                                     | 描述                           |
| ------------------------------------------------------ | ---------------------------- |
| [v-app-bar](/components/app-bars/)                     | 一个放置导航组件、品牌展示、搜索栏和操作按钮的容器    |
| [v-system-bar](/components/system-bars/)               | 取代原生手机系统栏的系统栏                |
| [v-navigation-drawer](/components/navigation-drawers/) | 一个持有站点导航链接的持久性或临时性的容器        |
| [v-footer](/components/footers/)                       | 一个替换默认的 html 页脚的通用组件         |
| [v-bottom-navigation](/components/bottom-navigation/)  | 一个具有导航链接且通常用于较小设备的持久性或临时性的容器 |

布局系统的最后一部分是 **v-main** 组件。你可以在此处放置页面内容。在所有其他布局组件分配完空间后，它将使用页面上剩余的可用空间

::: info
在下面示例中，**v-app** 已被 **v-layout**所取代。这是因为 **v-app** 默认的最低高度为 `100dvh`。在你自己的应用程序中，你应该使用 **v-app** 用于根布局。
:::

## 放置组件

默认情况下，布局组件试图保留空间的顺序只是它们在您的标记中出现的顺序。 为了说明这一概念， 查看以下两个示例：一个 **v-app-bar** 和 **v-navigation-drawer** 更改了标记中的位置。

<ExamplesExample file="application-layout/app-bar-first" />

<ExamplesExample file="application-layout/nav-drawer-first" />

你可以看到的，将 **v-app-bar** 放置在 **v-navigation-laber** 前，这意味着它将使用屏幕的全宽度。 当它放置在 **v-navigation-laber**之后时，它将只使用剩余的空闲空间。

一些布局组件可以接受一个 **location** 属性，通过它可以将组件放置在布局中。在下面的示例中，我们使用了两个 **v-navigation-drawer** 组件，应用程序的两侧各一个。

<ExamplesExample file="application-layout/location" />

## 复杂布局

让我们创建一个更复杂的布局来展示系统的灵活性。在下面的示例中，我们重新创建了 Discord 应用程序的总体布局。该示例还演示了布局组件可以接受 **width** 或 **height** prop，而且同一类型的多个组件可以堆叠在同一位置。

<ExamplesExample file="application-layout/discord" />

## 动态布局和顺序

在大多数情况下，只需在标记中按照正确的顺序放置布局组件，就能实现所需的布局。不过，有几种情况可能无法做到这一点。其中一种情况是，您想动态更改布局组件的顺序。

要解决这个问题，你可以使用 **order** prop来明确设置布局顺序。 探索下面的示例以查看使用prop时发生的事情。 切换开关后，您将应用栏的顺序更改为 `-1`，因此在布局排序中将其置于**navigation-drawer**之上。

所有布局组件的默认顺序为 `0`。排序顺序相同的布局组件将与标记中出现的顺序相同。

<ExamplesExample file="application-layout/dynamic" />

## 获取布局信息

布局系统提供了一个 `getLayoutItem`函数，可用于获取标记中特定布局组件的大小和位置信息。你可以在布局组件中添加一个**name**prop并给他一个特殊的值来使用该函数。你也可以使用**v-app**上的 ref 访问该方法，或者使用**useLayout** 组合式函数访问该方法。

<ExamplesExample file="application-layout/layout-information-ref" />

::: warning
您将无法直接在正在渲染 **v-app** 组件的同一个组件中使用组合式函数。 调用**UsLayout** 必须在子组件中发生，以便布局能够被正确注入。
:::

<ExamplesExample file="application-layout/layout-information-composable" />

所有布局组件的合并大小也可在 `layout.mainRect`下使用。 此选项由 **v-main** 组件内部使用，用于确定主要内容区域的大小。
