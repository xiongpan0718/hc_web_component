---
disabled: true
meta:
  title: Month picker 月份选择器
  description: 月份选择器组件是一个独立的接口，允许选择月份或月份和年份。
  keywords: 月份选择器, vuetify 月份选择器组件, vue 月份选择器组件
related:
  - /components/date-pickers/
  - /components/menus/
  - /components/time-pickers/
---

# Date pickers - month (月份选择器)

`v-date-picker` 可以用作一个独立的月份选择器组件。

<PromotedEntry />

## 使用

月份选择器有两种方向变化：纵向 **(默认)** 和横向。

<ExamplesExample file="v-date-picker-month/usage" />

## API

<ApiInline />

## 注意

::: warning
`v-date-picker` accepts ISO 8601 **date** strings (*YYYY-MM-DD*). For more information regarding ISO 8601 and other standards, visit the official ISO (International Organization for Standardization) [International Standards](https://www.iso.org/standards.html) page.
:::

## 示例

### 属性

#### 允许的月份

您可以使用数组、对象或函数指定允许的月份。

<ExamplesExample file="v-date-picker-month/prop-allowed-months" />

#### 颜色

Month picker colors can be set using the **color** and **header-color** props. If **header-color** prop is not provided header will use the `color` prop value.

<ExamplesExample file="v-date-picker-month/prop-colors" />

#### 图标 (Icons)

您可以覆盖选择器中使用的默认图标。

<ExamplesExample file="v-date-picker-month/prop-icons" />

#### 多选

Month pickers can now select multiple months with the **multiple** prop. If using **multiple** then the month picker expects its model to be an array.

<ExamplesExample file="v-date-picker-month/prop-multiple" />

#### 只读

可以添加 **readonly** prop 来禁用选择新日期。

<ExamplesExample file="v-date-picker-month/prop-readonly" />

#### 显示当前月份

默认情况下，当前月份使用边框按钮显示 - <strong x-id=“1”>show current</strong> prop 允许您删除边框或选择其他月份作为当前月份显示。

<ExamplesExample file="v-date-picker-month/prop-show-current" />

#### 宽度

您可以指定选择器的宽度或使其宽度切边(100%)。

<ExamplesExample file="v-date-picker-month/prop-width" />

### 其他

#### 对话框和菜单

When integrating a picker into a `v-text-field`, it is recommended to use the **readonly** prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.

Pickers expose a slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.

<ExamplesExample file="v-date-picker-month/misc-dialog-and-menu" />

#### 国际化

The month picker supports internationalization through the JavaScript Date object. Specify a BCP 47 language tag using the **locale** prop.

<ExamplesExample file="v-date-picker-month/misc-internationalization" />

#### 方向

月份选择器有两种方向变化：纵向 **(默认)** 和横向。

<ExamplesExample file="v-date-picker-month/misc-orientation" />
