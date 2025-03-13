---
meta:
  title: 日期 (Dates)
  description: Vuetify 拥有第一方日期支持，可以轻松地替换到到另一个日期库。
  keywords: date, datepicker, datetime, time, calendar, picker, date library
related:
  - /features/blueprints/
  - /features/global-configuration/
  - /features/treeshaking/
features:
  github: /composables/date/
  label: 'E: date'
  report: true
---

# 日期 (Dates)

轻松使用用于需要日期功能的组件（如日期选取器和日历）的日期库。

<PageFeatures />

<PromotedEntry />

::: success
此特性在 [v3.4.0 (Blackguard)](/getting-started/release-notes/?version=v3.4.0) 版本引入。
:::

## 使用

组合式日期提供一个共享架构，用于日期选择器和日历等组件。默认实现是使用原生日期对象构建的，但可以切换到其它日期库。如果没有给出其他日期适配器，则使用默认的 Vuetify 实现。

在您的应用程序中，导入 **useDate** 函数并通过它来使用日期组合式函数。

```html { resource="src/views/Date.vue" }
<script setup>
  import { useDate } from 'vuetify'

  const date = useDate()

  console.log(date.getMonth(new Date('March 1, 2021'))) // 3
</script>
```

::: info

对于所有支持的日期适配器的列表，请访问 [date-io](https://github.com/dmtrKovalenko/date-io#projects) 项目存储库。

:::

### 格式选项

日期组合式函数支持以下日期格式化选项：

| 格式名称                  | 输出格式                                  |
| --------------------- | ------------------------------------- |
| fullDate              | "Jan 1, 2024"                         |
| fullDateWithWeekday   | "Tuesday, January 1, 2024"            |
| normalDate            | "1 January"                           |
| normalDateWithWeekday | "Wed, Jan 1"                          |
| shortDate             | "Jan 1"                               |
| year                  | "2024"                                |
| month                 | "January"                             |
| monthShort            | "Jan"                                 |
| monthAndYear          | "January 2024"                        |
| monthAndDate          | "January 1"                           |
| weekday               | "Wednesday"                           |
| weekdayShort          | "Wed"                                 |
| dayOfMonth            | "1"                                   |
| hours12h              | "11"                                  |
| hours24h              | "23"                                  |
| minutes               | "44"                                  |
| seconds               | "00"                                  |
| fullTime              | "11:44 PM" for US, "23:44" for Europe |
| fullTime12h           | "11:44 PM"                            |
| fullTime24h           | "23:44"                               |
| fullDateTime          | "Jan 1, 2024 11:44 PM"                |
| fullDateTime12h       | "Jan 1, 2024 11:44 PM"                |
| fullDateTime24h       | "Jan 1, 2024 23:44"                   |
| keyboardDate          | "02/13/2024"                          |
| keyboardDateTime      | "02/13/2024 23:44"                    |
| keyboardDateTime12h   | "02/13/2024 11:44 PM"                 |
| keyboardDateTime24h   | "02/13/2024 23:44"                    |

下面的示例展示了如何使用日期组合式函数格式化日期字符串：

```html { resource="src/views/Date.vue" }
<script setup>
  import { useDate } from 'vuetify'

  const date = useDate()

  const formatted = date.format('2010-04-13', 'fullDateWithWeekday')

  console.log(formatted) // Tuesday, April 13, 2010
</script>
```

## API

| 产品特点                      | 描述                  |
| ------------------------- | ------------------- |
| [useDate](/api/use-date/) | 日期组合式函数用于需要日期功能的组件。 |

<ApiInline hide-links />

### 适配器

内置的日期适配器实现了 [DateIOFormats](https://github.com/dmtrKovalenko/date-io/blob/master/packages/core/IUtils.d.ts) 接口中的一个功能子集。因此，在切换为 [date-io](https://github.com/dmtrKovalenko/date-io) 支持的任何日期库时都很容易。

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'
import LuxonAdapter from "@date-io/luxon"

export default createVuetify({
  date: {
    adapter: LuxonAdapter,
  },
})
```

For TypeScript users, an interface is also exposed for [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation):

```ts { resource="src/plugins/vuetify.js" }
export default createVuetify({
  ...
})

declare module 'vuetify' {
  namespace DateModule {
    interface Adapter extends LuxonAdapter {}
  }
}
```

### 本地化 (Localization)

The date composable will use the current vuetify [locale](/features/internationalization/) for formatting and getting the first day of the week. These do not always line up perfectly, so a list of aliases can be provided to map language codes to locales. The following configuration will look up `en` keys for translations, but use `en-GB` for date formatting:

```js { resource="src/plugins/vuetify.js" }
export default createVuetify({
  locale: {
    locale: 'en',
  },
  date: {
    locale: {
      en: 'en-GB',
    },
  },
})
```

#### 自定义适配器

要实现您自己的日期适配器，请使用 **DateAdapter** 接口：

```ts
import type { DateAdapter } from 'vuetify/labs'

export interface DateAdapter<TDate> {
  date (value?: any): TDate | null
  format (date: TDate, formatString: string): string
  toJsTDate (value: TDate): TDate
  parseISO (date: string): TDate
  toISO (date: TDate): string

  startOfDay (date: TDate): TDate
  endOfDay (date: TDate): TDate
  startOfMonth (date: TDate): TDate
  endOfMonth (date: TDate): TDate
  startOfYear (date: TDate): TDate
  endOfYear (date: TDate): TDate

  isBefore (date: TDate, comparing: TDate): boolean
  isAfter (date: TDate, comparing: TDate): boolean
  isEqual (date: TDate, comparing: TDate): boolean
  isSameDay (date: TDate, comparing: TDate): boolean
  isSameMonth (date: TDate, comparing: TDate): boolean
  isValid (date: any): boolean
  isWithinRange (date: TDate, range: [TDate, TDate]): boolean

  addDays (date: TDate, amount: number): TDate
  addMonths (date: TDate, amount: number): TDate

  getYear (date: TDate): number
  setYear (date: TDate, year: number): TDate
  getDiff (date: TDate, comparing: TDate | string, unit?: string): number
  getWeekArray (date: TDate): TDate[][]
  getWeekdays (): string[]
  getMonth (date: TDate): number
  setMonth (date: TDate, month: number): TDate
  getNextMonth (date: TDate): TDate
}
```
