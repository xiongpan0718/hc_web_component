---
meta:
  nav: 幻灯片组 (Slide groups)
  title: Slide group 幻灯片组
  description: 幻灯片组组件类似于项目组，可以从元素中制作出可选择的内容，但以单行的方式进行。
  keywords: 幻灯片组，可滑动组，vuetify 幻灯片组组件，vue 幻灯片组组件
related:
  - /components/icons/
  - /components/carousels/
  - /components/tabs/
features:
  github: /components/VSlideGroup/
  label: 'C: VSlideGroup'
  report: true
---

# 幻灯片组 (Slide groups)

`v-slide-group` 组件通常用来提供假分页的信息。它使用了 [v-item-group](/components/item-groups) 作为核心组件，并为 [v-tabs](/components/tabs) 和 [v-chip-group](/components/chip-groups) 提供了基础。

<PageFeatures />

## 使用

类似于 [v-window](/components/windows) 组件，`v-slide-group` 允许项目根据需要占用尽可能多的空间，允许用户水平方向切换提供的信息。

<ExamplesExample file="v-slide-group/usage" />

<PromotedEntry />

## API

| 组件                                             | 描述                           |
| ---------------------------------------------- | ---------------------------- |
| [v-slide-group](/api/v-slide-group/)           | 主要组件                         |
| [v-slide-group-item](/api/v-slide-group-item/) | 用于修改 `v-slide-group` 的状态的子组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 激活类

**active-class** 属性允许您在激活的项上设置自定义的 CSS 类。

<ExamplesExample file="v-slide-group/prop-active-class" />

#### 激活项居中

使用 **center-active** 属性将使活动的项目永远居中。

<ExamplesExample file="v-slide-group/prop-center-active" />

#### 自定义分隔符

您可以使用 **next-icon** 和 **prev-icon** 属性添加自定义分页图标代替箭头。

<ExamplesExample file="v-slide-group/prop-custom-icons" />

### 必填项

**mandatory** 属性将使幻灯片组需要至少选择一个项目。

<ExamplesExample file="v-slide-group/prop-mandatory" />

#### 多选

您可以通过设置 **multiple** 属性来选择多个项目。

<ExamplesExample file="v-slide-group/prop-multiple" />

### 杂项

#### 伪轮播

自定义幻灯片组来在工作区展示信息。通过选择某一项，可以向用户示辅助信息。

<ExamplesExample file="v-slide-group/misc-pseudo-carousel" />
