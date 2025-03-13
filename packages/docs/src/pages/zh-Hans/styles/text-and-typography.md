---
meta:
  title: 文本和排版 (Text and typography)
  description: 查看各种排版风格。从标题到说明文字，有各种字重、字体大小和斜体。
  keywords: 排版, 页头, 标题, 文本
related:
  - /styles/display/
  - /styles/content/
  - /features/internationalization/
features:
  report: true
  spec: https://m2.material.io/design/typography/the-type-system.html
---

# 文本和排版

控制文字大小，对齐，换行，溢出，转换等效果。默认情况下 Vuetify 使用 Material Design 规定的 [Roboto Font](https://fonts.google.com/specimen/Roboto)。

<PageFeatures />

| 类                                | 属性值                                                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **text-h1**                      | font-size: 6rem;<br>font-weight: 300;<br>line-height: 1;<br>letter-spacing: -0.015625em                                                |
| **text-h2**                      | font-size: 3.75rem;<br>font-weight: 300;<br>line-height: 1;<br>letter-spacing: -0.0083333333em;                                        |
| **text-h3**                      | font-size: 3rem;<br>font-weight: 400;<br>line-height: 1.05;<br>letter-spacing: normal;                                                 |
| **text-h4**                      | font-size: 2.125rem;<br>font-weight: 400;<br>line-height: 1.175;<br>letter-spacing: 0.0073529412em;                                    |
| **text-h5**                      | font-size: 1.5rem;<br>font-weight: 400;<br>line-height: 1.333;<br>line-height: normal;                                                 |
| **text-h6**                      | font-size: 1.25rem;<br>font-weight: 500;<br>line-height: 1.6;<br>letter-spacing: 0.0125em;                                             |
| **text-subtitle-1**              | font-size: 1rem;<br>font-weight: normal;<br>line-height: 1.75;<br>letter-spacing: 0.009375em;                                          |
| **text-subtitle-2**              | font-size: 0.875rem;<br>font-weight: 500;<br>line-height: 1.6;<br>letter-spacing: 0.0071428571em;                                      |
| **text-body-1**                  | font-size: 1rem;<br>font-weight: 400;<br>line-height: 1.5;<br>letter-spacing: 0.03125em;                                               |
| **text-body-2**                  | font-size: font-size: 0.875rem;<br>font-weight: 400;<br>line-height: 1.425;<br>letter-spacing: 0.0178571429em;                         |
| **text-button**                  | font-size: 0.875rem;<br>font-weight: 500;<br>line-height: 2.6;<br>letter-spacing: 0.0892857143em;<br>text-transform: uppercase;  |
| **text-caption**                 | font-size: 0.75rem;<br>font-weight: 400;<br>line-height: 1.667;<br>letter-spacing: 0.0333333333em;                                     |
| **text-overline**                | font-size: 0.75rem;<br>font-weight: 500;<br>line-height: 2.667;<br>letter-spacing: 0.1666666667em;<br>text-transform: uppercase; |
| **text-high-emphasis**           | color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));                                                                               |
| **text-medium-emphasis**         | color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));                                                                             |
| **text-disabled**                | color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));                                                                                    |
| **text-uppercase**               | text-transform: uppercase;                                                                                                                               |
| **text-lowercase**               | text-transform: lowercase;                                                                                                                               |
| **text-capitalize**              | text-transform: capitalize;                                                                                                                              |
| **text-start**                   | text-align: start;                                                                                                                                       |
| **text-center**                  | text-align: center;                                                                                                                                      |
| **text-end**                     | text-align: end;                                                                                                                                         |
| **text-justify**                 | text-align: justify;                                                                                                                                     |
| **text-left**                    | text-align: left;                                                                                                                                        |
| **text-right**                   | text-align: right;                                                                                                                                       |
| **text-truncate**                | overflow: hidden;<br>text-overflow: ellipsis;<br>white-space: nowrap;                                                                        |
| **text-no-wrap**                 | white-space: nowrap;                                                                                                                                     |
| **text-break**                   | overflow-wrap: break-word;                                                                                                                               |
| **text-decoration-none**         | text-decoration: none;                                                                                                                                   |
| **text-decoration-overline**     | text-decoration: overline;                                                                                                                               |
| **text-decoration-underline**    | text-decoration: underline;                                                                                                                              |
| **text-decoration-line-through** | text-decoration: line-through;                                                                                                                           |
| **font-weight-black**            | font-weight: 900;                                                                                                                                        |
| **font-weight-bold**             | font-weight: 700;                                                                                                                                        |
| **font-weight-medium**           | font-weight: 500;                                                                                                                                        |
| **font-weight-regular**          | font-weight: 400;                                                                                                                                        |
| **font-weight-light**            | font-weight: 300;                                                                                                                                        |
| **font-weight-thin**             | font-weight: 100;                                                                                                                                        |
| **font-italic**                  | font-style: italic;                                                                                                                                      |
| **text-{breakpoint}-h1**         | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-h2**         | 设置字体的大小为指定的值                                                                                                                                             |
| **text-{breakpoint}-h3**         | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-h4**         | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-h5**         | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-h6**         | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-subtitle-1** | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-subtitle-2** | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-body-1**     | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-body-2**     | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-button**     | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-caption**    | 为特定的断点设置字体的大小                                                                                                                                            |
| **text-{breakpoint}-overline**   | 为特定的断点设置字体的大小 { style="max-height: 600px;" fixed-header }                                                                                                |

<PromotedEntry />

## 排版

可以使用这些排版辅助类来控制文字的样式和大小。这写属性值是基于 [Material Design 排版准则](https://material.io/design/typography/the-type-system.html) 来定的。

<ExamplesExample file="text-and-typography/typography" />

### 断点

所有排版类都支持框架其他部分的响应断点。基础类 `.text-{value}` 对应于 `xsAndUp` 断点，而类 `.text-{breakpoint}-{value}` 可用于其余断点（`sm`、`md`、`lg` 和`xl`）。

下面的示例显示了如何使用不同的类来实现一个略微精心设计的示例：

<ExamplesExample file="text-and-typography/typography-breakpoints" />

### 强调字体

Material 设计, 默认情况下, 支持 **100, 300, 400, 500, 700, 900** 字体宽度和斜体文本.

<ExamplesExample file="text-and-typography/font-emphasis" />

## 文本

### 对齐

Alignment 助手类允许你轻松的创建 re-align 文本。

<ExamplesExample file="text-and-typography/text-alignment" />

对齐类也支持响应式断点。

<ExamplesExample file="text-and-typography/text-alignment-responsive" />

### 装饰线

使用 `.text-decoration-none` 移除文本装饰线或使用 `.text-decoration-overline`, `.text-decoration-underline`, 和 `.text-decoration-line-through` 添加一个 *上划线, 下划线或删除线*.

<ExamplesExample file="text-and-typography/text-decoration" />

### 不透明度

透明度辅助类允许你调整文本的重点。`text-high-emphasis` 和默认的文本有同样的透明度。`text-medium-emphasis` 则常用于提示和帮助文本。而 `text-disabled` 则不强调文本。

<ExamplesExample file="text-and-typography/text-opacity" />

### 变形

文本 capitalization 类可以转换文字的大小写。

<ExamplesExample file="text-and-typography/text-transform" />

Text breaking and the removal of `text-transform` is also possible. In the first example, the `text-transform: uppercase` custom class is overwritten and allows the text casing to remain. In the second example, we break up a longer word to fit the available space.

<ExamplesExample file="text-and-typography/text-break" />

### 文本换行和溢出

您可以使用 `.text-no-wrap` 工具类来防止文本换行.

<ExamplesExample file="text-and-typography/text-no-wrap" />

使用 `.text-truncate` 实用类可以用文字省略来截断较长的内容。

::: info
**需要** `display: inline-block` **或者** `display: block`。
:::

<ExamplesExample file="text-and-typography/text-truncate" />

## RTL 对齐

When using [RTL](/features/bidirectionality), you may want to keep the alignment regardless of current text direction. This can be achieved by setting the direction to either `left` or `right`.

If instead you want the alignment to respond to the current text direction, use `start` and `end`.

<ExamplesExample file="text-and-typography/text-rtl" />
