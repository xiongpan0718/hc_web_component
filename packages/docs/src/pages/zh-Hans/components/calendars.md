---
meta:
  nav: 日历（Calendars）
  title: Calendar 日历
  description: 日历组件是对流行的 Google 日历应用程序进行了简洁的改编。
  keywords: 日历, vuetify 日历组件, vue 日历组件
related:
  - /components/date-pickers/
  - /features/dates/
  - /components/cards/
features:
  github: /labs/VCalendar/
  label: 'C: VCalendar'
  report: true
---

# 日历（Calendars）

The `v-calendar` component is used to display information in a daily, weekly, monthly. The daily view has slots for all day or timed elements, and the weekly and monthly view has a slot for each day.

<PageFeatures />

::: warning
这个功能需要 [v3.4.9](/getting-started/release-notes/?version=v3.4.9) 版本。
:::

## 安装

实验室组件需要手动导入和安装该组件。

```js { resource="src/plugins/vuetify.js" }
import { VCalendar } from 'vuetify/labs/VCalendar'

export default createVuetify({
  components: {
    VCalendar,
  },
})
```

## 使用

一个日历有一个类型和一个值，它们决定了显示的日历类型以及时间跨度。这显示了最基本的配置，一个包含事件数组的配置，事件具有**title**、**start**和**end**属性。**end**是可选的，默认为**start**时间。如果**start**有时间，则被视为定时事件，并将在日视图中相应显示。一个事件可以跨越多天，并将相应地进行渲染。

<ExamplesExample file="v-calendar/usage" />

<PromotedEntry />

## API

| 组件                             | 描述   |
| ------------------------------ | ---- |
| [v-calendar](/api/v-calendar/) | 主要组件 |

<ApiInline hide-links />

## 指南

The `v-calendar` component in Vuetify offers a versatile solution for building various calendar interfaces. It's designed to be highly customizable, catering to a wide range of applications from simple date pickers to complex event calendars.

### 属性

The `v-calendar` component is equipped with a range of props that allow you to tailor its functionality and appearance to your specific requirements. This section will provide an overview of the available properties, offering insights into their usage and impact on the calendar's behavior and presentation.

#### Type month

This is a calendar with the type of `month`

<ExamplesExample file="v-calendar/prop-type-month" />

#### week类型

This is a calendar with the type of `week`

<ExamplesExample file="v-calendar/prop-type-week" />

#### day类型

This is a calendar with the type of `day`

<ExamplesExample file="v-calendar/prop-type-day" />
