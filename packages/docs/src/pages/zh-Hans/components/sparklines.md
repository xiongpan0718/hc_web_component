---
meta:
  title: 迷你图表（Sparklines）
  description: 迷你图表组件可以创建美丽而富有表现力的简单图形来显示数字数据。
  keywords: 迷你图表, vuetify 迷你图表组件, vue 迷你图表组件, sparkline, graph, 曲线, 图表, 直线
related:
  - /components/cards/
  - /components/sheets/
  - /components/expansion-panels/
features:
  github: /components/VSparkline/
  label: 'C: VSparkline'
  report: true
---

# 迷你图表（Sparklines）

迷你图表组件可以用来创建简单的图表，例如GitHub的贡献图。

<PageFeatures />

::: success

此特性自 [v3.6.0](/getting-started/release-notes/?version=v3.6.0) 版本引入。

:::

## 使用

A sparkline is a tiny chart that provides a visual representation of data. The sparkline component comes in 2 variations, **trend** (default) and **bar**. Each supports a multitude of options for customizing the look and feel of the sparkline.

<ExamplesExample file="v-sparkline/usage" />

<PromotedEntry />

## API

| 组件                               | 描述   |
| -------------------------------- | ---- |
| [v-sparkline](/api/v-sparkline/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 填充

您可以使用 `fill` 属性创建一个 `v-sparkline` 并填充。

<ExamplesExample file="v-sparkline/prop-fill" />

### 其他

#### 自定义标签

By providing a **label** slot, we are able to modify the displayed content by adding a dollar sign ($). This slot is **_exclusively_** for text content. For more information on the svg `<text>` element, [navigate here](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text).

<ExamplesExample file="v-sparkline/misc-custom-labels" />

#### 仪表盘卡片

The `v-sparkline` component pairs nicely with `v-card` and `v-sheet` to create customized information cards, perfect for admin dashboards. Here we use custom labels to provide additional context for the sparkline.

<ExamplesExample file="v-sparkline/misc-dashboard-card" />

#### 心率

For concise information, a complete chart might be overkill. Using a trend line with gradient provides enough detail for the user without showing too much information.

<ExamplesExample file="v-sparkline/misc-heart-rate" />
