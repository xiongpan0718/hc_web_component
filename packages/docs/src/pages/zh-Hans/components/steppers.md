---
meta:
  nav: 步骤条 (Steppers)
  title: Stepper 步骤条
  description: 步骤条组件提供了一个类似于表单向导的信息收集和显示给用户的线性递进过程。
  keywords: 步骤条, vuetify 步骤条组件, vue 步骤条组件
related:
  - /components/tabs/
  - /components/item-groups/
  - /components/windows/
features:
  figma: true
  github: /components/VStepper/
  label: 'C: VStepper'
  report: true
  spec: https://m1.material.io/components/steppers.html
---

# Steppers（步骤条）

`v-stepper` 组件通过数字步骤显示进度。

![步骤条入口](https://cdn.vuetifyjs.com/docs/images/components/v-stepper/v-stepper-entry.png)

<PageFeatures />

::: success
此特性在 [v3.4.0 (Blackguard)](/getting-started/release-notes/?version=v3.4.0) 版本引入。
:::

## 使用

一个步骤组件适用于多种场景，包括购物车、创建记录等等。

<ExamplesUsage name="v-stepper" />

<PromotedEntry />

::: warning

因为横向和纵向的步骤条之间的显示和功能的差异巨大，所以我们移除了 **vertical** 属性，将其移动到了新组件 [v-stepper-vertical](/components/vertical-steppers/) 中。

:::

## API

| 组件                                                   | 描述            |
| ---------------------------------------------------- | ------------- |
| [v-stepper](/api/v-stepper/)                         | 主要组件          |
| [v-stepper-actions](/api/v-stepper-actions/)         | 步骤条的操作部分      |
| [v-stepper-header](/api/v-stepper-header/)           | 步骤条项目的容器      |
| [v-stepper-item](/api/v-stepper-item/)               | 主要组件          |
| [v-stepper-window](/api/v-stepper-window/)           | 每个步骤窗口项目的窗口容器 |
| [v-stepper-window-item](/api/v-stepper-window-item/) | 每个步骤窗口的步骤项目   |

<ApiInline hide-links />

## 组件结构

`v-stepper` 中元素的推荐放置是：

* 在顶部放置 `v-stepper-header` 组件。
* 在步骤条 header 后面放置 `v-stepper-window` 或者其他形式的内容
* 在步骤条 window 部分后面放置 `v-stepper-actions`

![待处理图形](https://cdn.vuetifyjs.com/docs/images/components/v-stepper/v-stepper-anatomy.png "步骤条解释性说明")

| 元素 / 区域    | 描述                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| 1. 容器      | 步骤条的放置容器，用于放置所有的 `v-stepper` 组件。由三个主要部分组成：`v-stepper-header`，`v-stepper-window` 和 `v-stepper-actions`。 |
| 2. 标题      | 标题区域用于放置 `v-stepper-item` 组件。                                                                          |
| 3. 窗口      | 窗口区域用于放置 `v-stepper-window-item` 组件。                                                                   |
| 4. 操作 (可选) | 拥有若干例如 [v-btn](/components/buttons) 组件的内容区域                                                            |

## 指南

`v-stepper` 组件提供了一个类似于安装向导框的线性过程，可以用于向用户收集或者展示信息。

### 属性

`v-steper` 组件有多个属性来自定义其视觉外观和功能。

#### 不可编辑步骤条

基本的步骤条组件是不可编辑的，意味着用户只能在步骤条中线性移动。

<ExamplesExample file="v-stepper/misc-non-editable" />

#### 可编辑步骤条

用户随时可以选择可编辑的步骤条并将跳转到该步骤。

<ExamplesExample file="v-stepper/misc-editable" />

#### 备用标签

步骤组件也有一个放置在步骤下方的备用标签样式。

<ExamplesExample file="v-stepper/prop-alternate-label" />

#### 线性步骤条

线性步骤始终沿着你定义的路径移动。

<ExamplesExample file="v-stepper/misc-linear" />

#### 可选步骤

可选步骤可由子文本调出。

<ExamplesExample file="v-stepper/misc-optional" />

#### 步骤项目

步骤条组件可以接受一个项目的数组，类似于 [v-list](/components/lists/) 和 [v-select](/components/selects/) 组件。

<ExamplesExample file="v-stepper/misc-horizontal" />

::: warning

如果没有提供值，则步骤条会默认使用数组下标值+1作为步骤值。

:::

#### 移动端

使用 **mobile** 属性来隐藏 `v-stepper-item` 组件的标题和子标题。

<ExamplesExample file="v-stepper/prop-mobile" />

#### 错误状态

可以显示错误状态来通知用户必须采取的一些行动。

<ExamplesExample file="v-stepper/misc-error" />

#### 动态步骤数

步骤可以动态的添加和移除，如果删除的是当前处于激活状态的步骤，请务必通过更改应用模型来解决这个问题。

<ExamplesExample file="v-stepper/misc-dynamic" />

#### 错误状态的备用标签

错误状态同样可以应用于备用标签样式的显示。

<ExamplesExample file="v-stepper/misc-alternate-error" />

#### 非线性的步骤条

非线性步骤可以让用户按照自己选择路线在流程中移动。

<ExamplesExample file="v-stepper/prop-non-linear" />
