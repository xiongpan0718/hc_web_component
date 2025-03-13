---
meta:
  nav: 时间选择器（Time pickers）
  title: Time picker 时间选择器
  description: Time picker 组件是一个独立的接口，允许以 AM/PM 格式和 24 小时格式选择小时数和分钟。
  keywords: 时间选择器, vuetify 时间选择器组件, vue 时间选择器组件
related:
  - /components/buttons/
  - /components/date-pickers/
  - /components/text-fields/
---

# Time pickers（时间选择器）

The `v-time-picker` is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting the time.

<PageFeatures />

::: warning

This feature requires [v3.5.12](/getting-started/release-notes/?version=v3.5.12)

:::

## 安装

实验室组件需要手动导入和安装该组件。

```js { resource="src/plugins/vuetify.js" }
import { VTimePicker } from 'vuetify/labs/VTimePicker'

export default createVuetify({
  components: {
    VTimePicker,
  },
})
```

## 使用

时间选择器默认情况下启用了浅色主题。

<ExamplesUsage name="v-time-picker" />

<PromotedEntry />

## API

| 组件                                   | 描述   |
| ------------------------------------ | ---- |
| [v-time-picker](/api/v-time-picker/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 允许的时间

You can specify allowed times using arrays, objects, and functions. You can also specify time step/precision/interval - e.g. 10 minutes.

<ExamplesExample file="v-time-picker/prop-allowed-times" />

#### 颜色

Time picker colors can be set using the `color` and `header-color` props. If `header-color` prop is not provided  header will use the `color` prop value."

<ExamplesExample file="v-time-picker/prop-color" />

#### 禁用

您无法使用已禁用的选择器。

<ExamplesExample file="v-time-picker/prop-disabled" />

#### Elevation（海拔）

Emphasize the `v-time-picker` component by providing an **elevation** from 0 to 24. Elevation modifies the `box-shadow` css property.

<ExamplesExample file="v-time-picker/prop-elevation" />

#### 格式化

A time picker can be switched to 24hr format. Note that the `format` prop defines only the way the picker is displayed, picker's value (model) is always in 24hr format.

<ExamplesExample file="v-time-picker/prop-format" />

#### No header

You can remove picker's header.

<ExamplesExample file="v-time-picker/prop-hide-header" />

#### 范围

这是一个用 `min` 和 `max` props合并选择器的例子。

<ExamplesExample file="v-time-picker/prop-range" />

#### 只读

只读选择器的行为与禁用的一样，但看起来像默认的。

<ExamplesExample file="v-time-picker/prop-readonly" />

#### 可滚动

您可以使用鼠标滚轮编辑时间选择器的值。

<ExamplesExample file="v-time-picker/prop-scrollable" />

#### 使用秒

时间选择器可以输入秒数。

<ExamplesExample file="v-time-picker/prop-use-seconds" />

### 其他

#### 对话框和菜单

由于选择器的灵活性，您可以真正按照自己的意愿进行输入。

<ExamplesExample file="v-time-picker/misc-dialog-and-menu" />
