---
meta:
  nav: 纸片组 (Chip groups)
  title: Chip group 纸片组
  description: 纸片组组件将许多可选择的芯片合并为单行或多行。
  keywords: 纸片组，vuetify 纸片组组件，vue 纸片组组件
related:
  - /components/chips/
  - /components/slide-groups/
  - /components/item-groups/
features:
  github: /components/VChipGroup/
  label: 'C: VChipGroup'
  report: true
  spec: 'https://m2.material.io/components/chips#choice-chips'
---

# 纸片组 (Chip groups)

`v-chip-group` 组件通过提供组内功能来扩展了 `v-chip` 组件。通常被用来构建纸片组件组成的选择组件。<!-- !\[chip-groups Entry\](https://cdn.vuetifyjs.com/docs/images/components-temp/v-chip-groups/v-chip-groups-entry.png) -->

<PageFeatures />

## 使用

纸片组使用户能够轻松选择更复杂实现的过滤选项。默认情况下，`v-chip-group` 会向右溢出，但可以更改为仅 **column** 模式。

<ExamplesUsage name="v-chip-group" />

<PromotedEntry />

## API

| 组件                                 | 描述   |
| ---------------------------------- | ---- |
| [v-chip-group](/api/v-chip-group/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 列 (Column)

使用 ** column ** 属性的纸片组可以包装它们的纸片。

<ExamplesExample file="v-chip-group/prop-column" />

#### 过滤结果

可以通过增加 **filter** 属性的方式，创建可以提供额外选中效果的纸片组。这个属性会在选中的纸片上添加可见的效果，来表明这个纸片被选中了。

<ExamplesExample file="v-chip-group/prop-filter" />

#### 必填项

具有 <strong x-id=“1”>mandatory</strong> 属性的纸片组必须至少有一个纸片被选中。

<ExamplesExample file="v-chip-group/prop-mandatory" />

#### 多选

具有 **multiple** 属性的纸片组可以选择多个值。

<ExamplesExample file="v-chip-group/prop-multiple" />

### 杂项

#### 产品卡

`v-chip` 组件可有 value 作为其特定的值，将它用作父组件 `v-chip-group` 的 v-model 值。这在你不想使用它的纸片的序号作为它的值时很有用。

<ExamplesExample file="v-chip-group/misc-product-card" />

#### 刷牙卡片

纸片组允许创建自定义接口，这些接口执行与项组或单选控件相同的操作，但在风格上有所不同。

<ExamplesExample file="v-chip-group/misc-toothbrush-card" />

#### Reddit 样式分类

使用工具类和 emojis 的组合来创建一个 Reddit-style 类别选择。

<ExamplesExample file="v-chip-group/misc-reddit-categories" />
