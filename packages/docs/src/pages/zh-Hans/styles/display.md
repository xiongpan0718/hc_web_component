---
meta:
  title: 显示 (Display)
  description: 显示辅助类允许你根据视口控制元素的显示方式。
  keywords: 显示辅助类，显示类，vuetify 显示
related:
  - /styles/text-and-typography/
  - /directives/resize/
  - /features/display-and-platform/
features:
  report: true
---

# 显示辅助

显示辅助类可以帮助你控制内容的显示。它包括了根据当前视口 (viewport) 大小或者元素的显示类型来调整显示的情况。

<PageFeatures />

| 类                        | Properties                                                 |
| ------------------------ | ---------------------------------------------------------- |
| **d-none**               | display: none;                                             |
| **d-sm-none**            | display: none;                                             |
| **d-md-none**            | display: none;                                             |
| **d-lg-none**            | display: none;                                             |
| **d-xl-none**            | display: none;                                             |
| **d-xxl-none**           | display: none;                                             |
| **d-sm-flex**            | display: flex;                                             |
| **d-md-flex**            | display: flex;                                             |
| **d-lg-flex**            | display: flex;                                             |
| **d-xl-flex**            | display: flex;                                             |
| **d-xxl-flex**           | display: flex;                                             |
| **d-sm-inline**          | display: inline;                                           |
| **d-md-inline**          | display: inline;                                           |
| **d-lg-inline**          | display: inline;                                           |
| **d-xl-inline**          | display: inline;                                           |
| **d-xxl-inline**         | display: inline;                                           |
| **d-sm-inline-block**    | display: inline-block;                                     |
| **d-md-inline-block**    | display: inline-block;                                     |
| **d-lg-inline-block**    | display: inline-block;                                     |
| **d-xl-inline-block**    | display: inline-block;                                     |
| **d-xxl-inline-block**   | display: inline-block;                                     |
| **d-sm-table**           | display: table;                                            |
| **d-md-table**           | display: table;                                            |
| **d-lg-table**           | display: table;                                            |
| **d-xl-table**           | display: table;                                            |
| **d-xxl-table**          | display: table;                                            |
| **d-sm-table-cell**      | display: table-cell;                                       |
| **d-md-table-cell**      | display: table-cell;                                       |
| **d-lg-table-cell**      | display: table-cell;                                       |
| **d-xl-table-cell**      | display: table-cell;                                       |
| **d-xxl-table-cell**     | display: table-cell;                                       |
| **d-sm-table-row**       | display: table-row;                                        |
| **d-md-table-row**       | display: table-row;                                        |
| **d-lg-table-row**       | display: table-row;                                        |
| **d-xl-table-row**       | display: table-row;                                        |
| **d-xxl-table-row**      | display: table-row;                                        |
| **d-sm-flex**            | display: flex;                                             |
| **d-md-flex**            | display: flex;                                             |
| **d-lg-flex**            | display: flex;                                             |
| **d-xl-flex**            | display: flex;                                             |
| **d-xxl-flex**           | display: flex;                                             |
| **d-sm-inline-flex**     | display: inline-flex;                                      |
| **d-md-inline-flex**     | display: inline-flex;                                      |
| **d-lg-inline-flex**     | display: inline-flex;                                      |
| **d-xl-inline-flex**     | display: inline-flex;                                      |
| **d-xxl-inline-flex**    | display: inline-flex;                                      |
| **d-print-none**         | display: none;                                             |
| **d-print-inline**       | display: inline;                                           |
| **d-print-inline-block** | display: inline-block;                                     |
| **d-print-block**        | display: block;                                            |
| **d-print-table**        | display: table;                                            |
| **d-print-table-cell**   | display: table-cell;                                       |
| **d-print-table-row**    | display: table-row;                                        |
| **d-print-flex**         | display: flex;                                             |
| **d-print-inline-flex**  | display: inline-flex;                                      |
| **d-sr-only**            | display: none;                                             |
| **d-sr-only-focusable**  | display: none; { style="max-height: 420px;" fixed-header } |

<VoPromotionsCardVuetify />

<FeaturesBreakpointsTable />

## 显示 (Display)

Specify the element's `display` property. These classes can be applied to all breakpoints from `xs` to `xxl`. When using a base class,`.d-{value}`, it is inferred to be `.d-xs-{value}`.

- `.d-{value}` 用于 `xs`
- `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, `xl`, and `xxl`

该 _value_ 属性的值是以下之一：

- `none`
- `inline`
- `inline-block`
- `block`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`

When setting a specific breakpoint for a display helper class, it will apply to all screen widths from the designation and up. For example, `d-lg-flex` will apply to `lg`, `xl` and `xxl` size screens.

<ExamplesExample file="display/display-inline" />

<ExamplesExample file="display/display-block" />

## 可见性

Conditionally display an element based upon the current **viewport**. Breakpoint utility classes always apply from the bottom up. That means if you have `.d-none`, it will apply to all breakpoints. However, `.d-md-none` will apply to only `md` and up.

| 屏幕大小         | 类                                |
| ------------ | -------------------------------- |
| 全部隐藏         | `.d-none`                        |
| 仅在 xs 大小时隐藏  | `.d-none .d-sm-flex`             |
| 仅在 sm 大小时隐藏  | `.d-sm-none .d-md-flex`          |
| 仅在 md 大小时隐藏  | `.d-md-none .d-lg-flex`          |
| 仅在 lg 大小时隐藏  | `.d-lg-none .d-xl-flex`          |
| 仅在 xl 大小时隐藏  | `.d-xl-none .d-xxl-flex`         |
| 仅在 xxl 大小时隐藏 | `.d-xxl-none`                    |
| 全部可见         | `.d-flex`                        |
| 仅在 xs 大小时可见  | `.d-flex .d-sm-none`             |
| 仅在 sm 大小时可见  | `.d-none .d-sm-flex .d-md-none`  |
| 仅在 md 大小时可见  | `.d-none .d-md-flex .d-lg-none`  |
| 仅在 lg 大小时可见  | `.d-none .d-lg-flex .d-xl-none`  |
| 仅在 xl 大小时可见  | `.d-none .d-xl-flex .d-xxl-none` |
| 仅在 xxl 大小时可见 | `.d-none .d-xxl-flex`            |

<ExamplesExample file="display/visibility" />

Alternatively you can hide an element based upon the current **viewport** using lateral display helper classes. These classes can be applied using the following format `hidden-{breakpoint}-{condition?}`

基于以下 _条件_ 应用类:

- nothing - hide the element only on the specified breakpoint
- `and-down` - hide the element on the specified breakpoint and down - `sm` through `xl` only
- `and-up` - hide the element on the specified breakpoint and up - `sm` through `xl` only

`hidden-{breakpoint}-and-up` is equivalent to `d-{breakpoint}-none`.

**Media types** can also be targeted using the `only` condition. Both `hidden-screen-only` and `hidden-print-only` are currently supported.

### 注意

::: info
It is important to note that using any of the display classes above will result in any display style previously added being overwritten. This is because of the classes using `!important` in their display styling.
:::

## 打印显示

You can also change the display property when printing. Print utility classes can also be combined with none print display utilities.

<ExamplesExample file="display/print" />

## 无障碍

### 屏幕阅读器

Use the `d-sr` utility classes to conditionally hide content on all devices _except_ screen readers.

- `d-sr-only` 视觉隐藏元素但仍会通知 **屏幕阅读器** 。
- `d-sr-only-focusable` 在视觉上隐藏一个元素，直到它被聚焦。这在实现_跳过链接_时非常有用。
