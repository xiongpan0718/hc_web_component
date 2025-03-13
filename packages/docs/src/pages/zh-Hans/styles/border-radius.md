---
meta:
  title: 边框半径 (Border radius)
  description: 使用边框半径辅助样式对元素快速应用`border-radius`样式
  keywords: 边框半径类，半径通用类，vuetify 半径辅助类
related:
  - /styles/text-and-typography/
  - /components/sheets/
  - /components/buttons/
features:
  report: true
---

# 边框半径

使用边框辅助类可以快速地给任何元素以 border-radius 样式。

<PageFeatures />

| 类                     | 代表值                                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| **rounded**           | border-radius: 4px;                                                                                        |
| **rounded-0**         | border-radius: 0;                                                                                          |
| **rounded-sm**        | border-radius: 2px;                                                                                        |
| **rounded-lg**        | border-radius: 8px;                                                                                        |
| **rounded-xl**        | border-radius: 24px;                                                                                       |
| **rounded-pill**      | border-radius: 9999px;                                                                                     |
| **rounded-circle**    | border-radius: 50%;                                                                                        |
| **rounded-shaped**    | border-radius: 24px 0                                                                                      |
| **rounded-t**         | border-top-left-radius: 4px;<br>border-top-right-radius: 4px;                                        |
| **rounded-t-0**       | border-top-left-radius: 0;<br>border-top-right-radius: 0;                                            |
| **rounded-t-sm**      | border-top-left-radius: 2px;<br>border-top-right-radius: 2px;                                        |
| **rounded-t-lg**      | border-top-left-radius: 8px;<br>border-top-right-radius: 8px;                                        |
| **rounded-t-xl**      | border-top-left-radius: 24px;<br>border-top-right-radius: 24px;                                      |
| **rounded-t-pill**    | border-top-left-radius: 9999px;<br>border-top-right-radius: 9999px;                                  |
| **rounded-t-circle**  | border-top-left-radius: 50%;<br>border-top-right-radius: 50%;                                        |
| **rounded-t-shaped**  | border-top-left-radius: 24px; border-top-right-radius: 0;                                                  |
| **rounded-te**        | border-top-right-radius: 4px;                                                                              |
| **rounded-te-0**      | border-top-right-radius: 0;                                                                                |
| **rounded-te-sm**     | border-top-right-radius: 2px;                                                                              |
| **rounded-te-lg**     | border-top-right-radius: 8px;                                                                              |
| **rounded-te-xl**     | border-top-right-radius: 24px;                                                                             |
| **rounded-te-pill**   | border-top-right-radius: 9999px;                                                                           |
| **rounded-te-circle** | border-top-right-radius: 50%;                                                                              |
| **rounded-te-shaped** | border-top-right-radius: 24px<br>border-top-left-radius: 0;                                          |
| **rounded-ts**        | border-top-left-radius: 4px;                                                                               |
| **rounded-ts-0**      | border-top-left-radius: 0;                                                                                 |
| **rounded-ts-sm**     | border-top-left-radius: 2px;                                                                               |
| **rounded-ts-lg**     | border-top-left-radius: 8px;                                                                               |
| **rounded-ts-xl**     | border-top-left-radius: 24px;                                                                              |
| **rounded-ts-pill**   | border-top-left-radius: 9999px;                                                                            |
| **rounded-ts-circle** | border-top-left-radius: 50%;                                                                               |
| **rounded-ts-shaped** | border-top-left-radius: 24px; border-top-right-radius: 0;                                                  |
| **rounded-e**         | border-inline-end-radius: 4px;                                                                             |
| **rounded-e-0**       | border-inline-end-radius: 0;                                                                               |
| **rounded-e-sm**      | border-inline-end-radius: 2px;                                                                             |
| **rounded-e-lg**      | border-inline-end-radius: 8px;                                                                             |
| **rounded-e-xl**      | border-inline-end-radius: 24px;                                                                            |
| **rounded-e-pill**    | border-inline-end-radius: 9999px;                                                                          |
| **rounded-e-circle**  | border-inline-end-radius: 50%;                                                                             |
| **rounded-e-shaped**  | border-inline-end-radius: 0; border-inline-start-radius: 24px;                                             |
| **rounded-b**         | border-bottom-left-radius: 4px;<br>border-bottom-right-radius: 4px;                                  |
| **rounded-b-0**       | border-bottom-left-radius: 0;<br>border-bottom-right-radius: 0;                                      |
| **rounded-b-sm**      | border-bottom-left-radius: 2px;<br>border-bottom-right-radius: 2px;                                  |
| **rounded-b-lg**      | border-bottom-left-radius: 8px;<br>border-bottom-right-radius: 8px;                                  |
| **rounded-b-xl**      | border-bottom-left-radius: 24px;<br>border-bottom-right-radius: 24px;                                |
| **rounded-b-pill**    | border-bottom-left-radius: 9999px;<br>border-bottom-right-radius: 9999px;                            |
| **rounded-b-circle**  | border-bottom-left-radius: 50%;<br>border-bottom-right-radius: 50%;                                  |
| **rounded-b-shaped**  | border-bottom-left-radius: 0; border-bottom-right-radius: 24px;                                            |
| **rounded-be**        | border-bottom-right-radius: 4px;                                                                           |
| **rounded-be-0**      | border-bottom-right-radius: 0;                                                                             |
| **rounded-be-sm**     | border-bottom-right-radius: 2px;                                                                           |
| **rounded-be-lg**     | border-bottom-right-radius: 8px;                                                                           |
| **rounded-be-xl**     | border-bottom-right-radius: 24px;                                                                          |
| **rounded-be-pill**   | border-bottom-right-radius: 9999px;                                                                        |
| **rounded-be-circle** | border-bottom-right-radius: 50%;                                                                           |
| **rounded-be-shaped** | border-bottom-right-radius: 24px; border-bottom-left-radius: 0;                                            |
| **rounded-bs**        | border-inline-start-radius: 4px;                                                                           |
| **rounded-bs-0**      | border-inline-start-radius: 0;                                                                             |
| **rounded-bs-sm**     | border-inline-start-radius: 2px;                                                                           |
| **rounded-bs-lg**     | border-inline-start-radius: 8px;                                                                           |
| **rounded-bs-xl**     | border-inline-start-radius: 24px;                                                                          |
| **rounded-bs-pill**   | border-inline-start-radius: 9999px;                                                                        |
| **rounded-bs-circle** | border-inline-start-radius: 50%;                                                                           |
| **rounded-bs-shaped** | border-inline-start-radius: 24px; border-inline-end-radius: 0;                                             |
| **rounded-s**         | border-inline-start-radius: 4px;                                                                           |
| **rounded-s-0**       | border-inline-start-radius: 0;                                                                             |
| **rounded-s-sm**      | border-inline-start-radius: 2px;                                                                           |
| **rounded-s-lg**      | border-inline-start-radius: 8px;                                                                           |
| **rounded-s-xl**      | border-inline-start-radius: 24px;                                                                          |
| **rounded-s-pill**    | border-inline-start-radius: 9999px;                                                                        |
| **rounded-s-circle**  | border-inline-start-radius: 50%;                                                                           |
| **rounded-s-shaped**  | border-inline-start-radius: 24px; border-inline-end-radius: 0; { style="max-height: 420px;" fixed-header } |

<VoPromotionsCardVuetify />

## 使用

`border-radius` 工具类可以让你快速的设计任何元素的 border-radius 样式。

### 圆角

使用 **rounded**，**rounded-0**，**rounded-sm**，**rounded-lg** 和 **rounded-xl** 这些类来设定元素的圆角。

<ExamplesExample file="border-radius/misc-rounded-corners" />

### 药丸型和圆形

使用 **rounded-pill** 和 **rounded-circle** 类创建药丸和圆形的形状。

<ExamplesExample file="border-radius/misc-pill-and-circle" />

### 不同边的圆角

使用 **rounded-t-\***，**rounded-b-\***，**rounded-s-\*** 和 **rounded-e-\*** 这些类来设定元素的某一边的两个位置的圆角。

<ExamplesExample file="border-radius/misc-rounding-by-side" />

### 不同位置的圆角

使用 **rounded-te-\***，**ounded-ts-\***，**rounded-be-\*** 和 **rounded-bs-\*** 来设定元素的特定位置的圆角。

<ExamplesExample file="border-radius/misc-rounding-by-corner" />

### 非圆角

使用 **rounded-0** 类来移除元素的圆角。

<ExamplesExample file="border-radius/misc-removing-border-radius" />

### 组件

::: info

当在组件上使用 **rounded** 属性时，需要省略 `rounded-` 前缀。例如，使用 `rounded="sm"` 代替 `rounded-sm`。

:::

某些组件（例如 `v-sheet--rounded`）的 **rounded** 属性相当于某个圆角类。它是为了保证即是禁用了实用类，这种基本圆角效果依然可以生效。

<ExamplesExample file="border-radius/misc-components" />

## SASS 变量

你也可以使用以下的 SASS 变量来自定义边框的颜色与宽度：

```scss
$rounded: (
  0: 0,
  'sm': $border-radius-root / 2,
  null: $border-radius-root,
  'lg': $border-radius-root * 2,
  'xl': $border-radius-root * 6,
  'pill': 9999px,
  'circle': 50%
);
```

可以将 $rounded 变量设置为 **false** 来禁用 border-radius 类的生成。

```sass { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $rounded: false
);
```
