---
meta:
  nav: 项目组 (Item groups)
  title: Item group 项目组
  description: 项目组组件提供了从任何组件中创建可选择的项目组的能力。
  keywords: 项目组，vuetify 项目组组件，vue 项目组组件
related:
  - /components/button-groups
  - /components/carousels
  - /components/tabs
features:
  github: /components/VItemGroup/
  label: 'C: VItemGroup'
  report: true
---

# 项目组 (Item groups)

`v-item-group` 组件提供了一组可选择的任意组件构成的集合。它是例如 `v-tabs` 和 `v-carousel` 组件的基础部分。

<PageFeatures />

## 使用

`v-item-group` 的核心用法是创建由 **model** 控制的任何对象的组。

<!-- <ExamplesExample file="v-item-group/usage" /> -->

<PromotedEntry />

## API

| 组件                                 | 描述                          |
| ---------------------------------- | --------------------------- |
| [v-item-group](/api/v-item-group/) | 项目组组件。                      |
| [v-item](/api/v-item/)             | 用于修改 `v-item-group` 的状态的子组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 选中项的 CSS 类

**selected-class** 属性允许你给 _选中_ 的项目添加 CSS 类。

<ExamplesExample file="v-item-group/prop-selected-class" />

#### 必填项

具有 **mandatory** 属性的项目组必须至少选中一个项目。

<ExamplesExample file="v-item-group/prop-mandatory" />

#### 多选

项目组可以选中 **多个** 项目。

<ExamplesExample file="v-item-group/prop-multiple" />

### 杂项

#### 纸片 (Chip)

轻松绑定自定义纸片组。

<ExamplesExample file="v-item-group/misc-chips" />

#### 选择

当需要对某个目标进行选中或者取消选中这种同一个选择切换时，图标可以用作切换按钮。例如下例中的将项目标记为喜欢。

<ExamplesExample file="v-item-group/misc-selection" />
