---
meta:
  title: 间距 (Spacing)
  description: 间距辅助类允许你以 1 到 5 的增量对任何元素应用 margin 或 padding。
  keywords: 间距辅助类，间距类，vuetify 间距
related:
  - /styles/elevation/
  - /styles/content/
  - /components/grids/
features:
  report: true
---

# 间距

Update your layout without creating new classes. Spacing helpers are useful for modifying the padding and margin of an element.

<PageFeatures />

<PromotedEntry />

Use the playground to get a feel for what the different helper classes can do. For an explanation of **how they work**, see the How it works section below.

<ExamplesExample file="spacing/usage" />

## 如何运行

The helper classes apply **margin**, **padding**, or **gap** to an element ranging from _0 to 16_. Each size increment was designed to align with common Material Design spacings. These classes can be applied using the following format `{property}{direction}-{size}`.

**property** 应用间距类型:

- `m` - 应用 `margin`
- `p` - 应用 `padding`
- `g` - applies `gap`

**direction** 指定了该属性所应用的侧边:

- `t` - 应用 `margin-top` 和 `padding-top` 的间距
- `b` - 应用 `margin-bottom` 和 `padding-bottom` 的间距
- `l` - 应用 `margin-left` 和 `padding-left` 的间距
- `r` - applies the spacing for `margin-right`, `padding-right`, and `row-gap`
- `s` - 应用 `margin-left`/`padding-left` _(LTR模式)_ 和 `margin-right`/`padding-right`_(RTL模式)_ 的间距
- `e` - 应用 `margin-right`/`padding-right` _(LTR模式)_ 和 `margin-left`/`padding-left`_(RTL模式)_ 的间距
- `x` - applies the spacing for margin and padding `*-left` and `*-right`
- `y` - applies the spacing for margin and padding `*-top` and `*-bottom`
- `a` - applies the spacing for `margin`, `padding` and `gap` in all directions
- `c` - applies the spacing for `column-gap`

**size** 以4px增量控制间距属性:

- `0` - eliminates all `margin`, `padding` or `gap` by setting it to `0`
- `1` - sets `margin`, `padding` or `gap` to 4px
- `2` - sets `margin`, `padding` or `gap` to 8px
- `3` - sets `margin`, `padding` or `gap` to 12px
- `4` - sets `margin`, `padding` or `gap` to 16px
- `5` - sets `margin`, `padding` or `gap` to 20px
- `6` - sets `margin`, `padding` or `gap` to 24px
- `7` - sets `margin`, `padding` or `gap` to 28px
- `8` - sets `margin`, `padding` or `gap` to 32px
- `9` - sets `margin`, `padding` or `gap` to 36px
- `10` - sets `margin`, `padding` or `gap` to 40px
- `11` - sets `margin`, `padding` or `gap` to 44px
- `12` - sets `margin`, `padding` or `gap` to 48px
- `13` - sets `margin`, `padding` or `gap` to 52px
- `14` - sets `margin`, `padding` or `gap` to 56px
- `15` - sets `margin`, `padding` or `gap` to 60px
- `16` - sets `margin`, `padding` or `gap` to 64px
- `n1` - 设置 `margin` 为 -4px
- `n2` - 设置 `margin` 为 -8px
- `n3` - 设置 `margin` 为 -12px
- `n4` - 设置 `margin` 为 -16px
- `n5` - 设置 `margin` 为 -20px
- `n6` - 设置 `margin` 为 -24px
- `n7` - 设置 `margin` 为 -28px
- `n8` - 设置 `margin` 为 -32px
- `n9` - 设置 `margin` 为 -36px
- `n10` - 设置 `margin` 为 -40px
- `n11` - 设置 `margin` 为 -44px
- `n12` - 设置 `margin` 为 -48px
- `n13` - 设置 `margin` 为 -52px
- `n14` - 设置 `margin` 为 -56px
- `n15` - 设置 `margin` 为 -60px
- `n16` - 设置 `margin` 为 -64px
- `auto` - 设置间距为 **auto**

## 示例

### 断点

Vuetify 配备了一个基于 Flexbox 构建的 12 点网格系统。间距用于在应用程序内容中创建特定的布局。它由 5 个媒体断点组成，用于针对特定的屏幕尺寸或方向：**xs**（超小）、**sm**（小）、**md**（中等）、**lg**（大）和 **xl**（超大）。默认分辨率在下面的 *Viewport Breakpoints* 表中定义，并且可以通过自定义 [断点服务配置](/features/display-and-platform/) 来修改。

<FeaturesBreakpointsTable />

The helper classes apply **margin** or **padding** at a given breakpoint. These classes can be applied using the following format: `{property}{direction}-{breakpoint}-{size}`. This does not apply to **xs** as it is inferred; e.g. `ma-xs-2` equals `ma-2`.

<ExamplesExample file="spacing/breakpoints" />

### 水平布局

Margin helper classes let you easily center content horizontally.

<ExamplesExample file="spacing/horizontal" />

### Gap

Use the gap helper classes to easily apply a gap between content.

<ExamplesExample file="spacing/gap" />

### 负边距

同样也可以使用从 **1 到 16** 间隔的负边距.

<ExamplesExample file="spacing/negative-margin" />
