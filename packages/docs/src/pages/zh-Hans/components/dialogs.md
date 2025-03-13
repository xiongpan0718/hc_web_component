---
meta:
  nav: 对话框 (Dialogs)
  title: Dialog 对话框
  description: 对话框组件告知用户特定的任务，可能包含关键信息，或要求用户采取特定行动。
  keywords: 对话框, vuetify 对话框组件, vue 对话框组件
related:
  - /components/buttons
  - /components/cards
  - /components/menus
features:
  github: /components/VDialog/
  label: 'C: VDialog'
  report: true
  spec: https://m2.material.io/components/dialogs
---

# Dialogs（对话框）

`v-dialog` 组件提醒用户进行特定的任务。其中或许包含关键信息，或许让用户选择，或包含多个任务。但应谨慎使用对话框，因为它具有打断效果。

![Dialog Entry](https://cdn.vuetifyjs.com/docs/images/components/v-dialog/v-dialog-entry.png)

<PageFeatures />

## 使用

在基本的例子里，我们使用了 **activator** 插槽来渲染打开对话框的按钮。当使用 **activator** 插槽时，请注意需要把 **props** 绑定至（使用 `v-bind`）用于激活对话框的按钮上。查看下面的例子获取更多激活对话框的方式。

<ExamplesUsage name="v-dialog" />

<PromotedEntry />

## API

| 组件                           | 描述                 |
| ---------------------------- | ------------------ |
| [v-dialog](/api/v-dialog/)   | 主要组件               |
| [v-overlay](/api/v-overlay/) | Extended component |

<ApiInline hide-links />

## 组件结构

The recommended components to use inside of a `v-dialog` are:

* [v-card](/components/cards/)
* [v-list](/components/lists/)
* [v-sheet](/components/sheets/)

![Dialog Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-dialog/v-dialog-anatomy.png)

| 元素 / 区域      | 描述                                                    |
| ------------ | ----------------------------------------------------- |
| 1. 容器        | The dialog's content that animates from the activator |
| 2. Activator | The element that activates the dialog                 |

## 指南

The `v-dialog` component is used to inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. They are controlled by a **v-model** and/or an activator.

### 属性

The `v-dialog` component extends [v-overlay](/components/overlays/) and has access to all of its props.

#### v-model

你可以通过 v-model 的更新来激活对话框，既不需要 **activator** 插槽或者属性。在下面的例子中，对话框不会表现为从某个组件激活，只会单单地出现在屏幕中央。

<ExamplesExample file="v-dialog/prop-model" />

#### 对话框保持

保持的对话框不会因为点击对话框外部或者按 **esc** 键就会关闭。

<ExamplesExample file="v-dialog/prop-persistent" />

#### 过渡动画

您可以让对话框从顶部或底部渐显出现。

<ExamplesExample file="v-dialog/prop-transitions" />

#### 嵌套

对话框可以嵌套：可以从一个对话框打开另一个对话框。

<ExamplesExample file="v-dialog/misc-nesting" />

#### 溢出

若对话框内容溢出，将在对话框内显示滚动条。

<ExamplesExample file="v-dialog/misc-overflowed" />

### 插槽

The `v-dialog` component has 2 slots, **activator** and **default**. The **activator** slot is used to designate an element that will activate the dialog. The **default** slot provides an **isActive** ref which is tied to the current state of the dialog.

#### 激活器 (Activator)

除了使用 **activator** 插槽外，我们也可以使用 **activator** 属性来激活对话框。可以通过把对话框组件放置于按钮组件内，然后把对话框的 **activator** 属性的值设为 **"parent"**，就可以使用它的 parent （按钮）来激活对话框。

<ExamplesExample file="v-dialog/prop-activator" />

#### 默认值

<ExamplesExample file="v-dialog/slot-default" />

## 示例

The following are a collection of examples that demonstrate more advanced and real world use of the `v-dialog` component.

### 可滚动

一个可滚动内容的对话框示例。

<ExamplesExample file="v-dialog/prop-scrollable" />

### 表单对话框

一个镶嵌了表单的对话框例子。

<ExamplesExample file="v-dialog/misc-form" />

### 加载图标

我们可以通过 `v-dialog` 组件为 app 轻松创建自定义加载效果。

<ExamplesExample file="v-dialog/misc-loader" />

### 全屏对话框

由于屏幕空间有限，移动设备最好使用全屏对话框，而不是普通设备屏幕上的大对话框。

<ExamplesExample file="v-dialog/prop-fullscreen" />

### Invite dialog

This example demonstrates a dialog that is used to invite users to a group.

<ExamplesExample file="v-dialog/misc-invite-dialog" />
