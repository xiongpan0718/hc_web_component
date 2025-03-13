---
meta:
  nav: 日期输入框（Date inputs）
  title: Date input component
  description: The date input is a specialized input that provides a clean interface for selecting dates, showing detailed selection information.
  keywords: date input, date picker, date field
related:
  - /components/date-pickers/
  - /components/text-fields/
  - /components/menus/
features:
  label: "C: VDateInput"
  report: true
  github: /labs/VDateInput/
---

# 日期输入框（Date inputs）

`v-date-input` 组件将文本输入框与日期选择器结合在一起。它旨在直接替代标准日期输入。

<PageFeatures />

::: warning

该功能需要 [v3.6.0](/getting-started/release-notes/?version=v3.6.0)

:::

## 安装

实验室组件需要手动导入和安装该组件。

```js { resource="src/plugins/vuetify.js" }
import { VDateInput } from 'vuetify/labs/VDateInput'

export default createVuetify({
  components: {
    VDateInput,
  },
})
```

## 使用

At its core, the `v-date-input` component is a basic container that extends [v-text-field](/components/text-fields).

<ExamplesUsage name="v-date-input" />

<PromotedEntry />

## API

| 组件                                   | 描述                |
| ------------------------------------ | ----------------- |
| [v-date-input](/api/v-date-input/)   | 主要组件              |
| [v-date-picker](/api/v-date-picker/) | Date picker 日期选择器 |
| [v-text-field](/api/v-text-field/)   | Text field 输入框    |

<ApiInline hide-links />

## 指南

The `v-date-input` component is a replacement for the standard date input. It provides a clean interface for selecting dates and shows detailed selection information.

### 属性

The `v-date-input` component extends the [v-text-field](/components/text-fields/) and [v-date-picker](/components/date-pickers/) component; and supports all of their props.

#### 模型

The default model value is a Date object, but is displayed as formatted text in the input..

<ExamplesExample file="v-date-input/prop-model" />

#### 多选

Using the **multiple** prop, the default model value is an empty array.

<ExamplesExample file="v-date-input/prop-multiple" />

#### 范围

Using the multiple prop with a value of **range**, select 2 dates to select them and all the dates between them.

<ExamplesExample file="v-date-input/prop-multiple-range" />

#### Calendar icon

You can move the calendar icon within the input or entirely by utilizing the **prepend-icon** and **prepend-inner-icon** properties.

<ExamplesExample file="v-date-input/prop-prepend-icon" />

## 示例

The following are a collection of examples that demonstrate more advanced and real world use of the `v-date-input` component.

### Passenger

In this example, the `v-date-input` component is used to select a date of birth.

<ExamplesExample file="v-date-input/misc-passenger" />
