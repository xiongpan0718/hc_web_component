---
meta:
  title: 浮动 (Float)
  description: 浮动辅助类允许你根据视口大小来控制元素的 float 属性。
  keywords: 浮动辅助类，浮动类，vuetify 浮动
related:
  - /styles/text-and-typography/
  - /styles/transitions/
  - /styles/content/
features:
  report: true
---

# 浮动

使用响应式 float 工具在任何断点上应用自定义浮动。

<PageFeatures />

| 类                  | Properties                                               |
| ------------------ | -------------------------------------------------------- |
| **float-left**     | float: left;                                             |
| **float-right**    | float: right;                                            |
| **float-start**    | float: start;                                            |
| **float-end**      | float: end;                                              |
| **float-none**     | float: none;                                             |
| **float-sm-left**  | float: left;                                             |
| **float-sm-right** | float: right;                                            |
| **float-sm-start** | float: start;                                            |
| **float-sm-end**   | float: end;                                              |
| **float-sm-none**  | float: none;                                             |
| **float-md-left**  | float: left;                                             |
| **float-md-right** | float: right;                                            |
| **float-md-start** | float: start;                                            |
| **float-md-end**   | float: end;                                              |
| **float-md-none**  | float: none;                                             |
| **float-lg-left**  | float: left;                                             |
| **float-lg-right** | float: right;                                            |
| **float-lg-start** | float: start;                                            |
| **float-lg-end**   | float: end;                                              |
| **float-lg-none**  | float: none;                                             |
| **float-xl-left**  | float: left;                                             |
| **float-xl-right** | float: right;                                            |
| **float-xl-start** | float: start;                                            |
| **float-xl-end**   | float: end;                                              |
| **float-xl-none**  | float: none; { style="max-height: 420px;" fixed-header } |

<VoPromotionsCardVuetify />

## 概述

浮动辅助类基于当前视口尺寸(及以上)使用 [CSS 浮动属性](https://developer.mozilla.org/en-US/docs/Web/CSS/float) 应用浮动功能.

<FeaturesBreakpointsTable />

## 类

轻松切换一个带有类的 float：

<ExamplesExample file="float/classes" />

## 响应式

Floats 也可以在每个断点（视图）的基础上适用。

<ExamplesExample file="float/responsive" />
