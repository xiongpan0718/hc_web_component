---
meta:
  title: 位置 (Position)
  description: 使用位置辅助类可以快速的设置任意元素的位置样式。
  keywords: position classes, positioning utilities, vuetify position helper classes
related:
  - /styles/display/
  - /styles/spacing/
  - /styles/flex/
features:
  report: true
---

# 位置 (Position)

用户控制你的应用中元素位置的工具类。

<PageFeatures />

| 类                     | 属性值                                 |
| --------------------- | ----------------------------------- |
| **position-static**   | position: static;   |
| **position-relative** | position: relative; |
| **position-absolute** | position: absolute; |
| **position-fixed**    | position: fixed;    |
| **position-sticky**   | position: sticky;   |
| **top-0**             | top: 0;             |
| **right-0**           | right: 0;           |
| **bottom-0**          | bottom: 0;          |
| **left-0**            | left: 0;            |

<PromotedEntry />

## 使用

`position` 辅助类允许你快速调整任意元素的位置。使用方式是结合某个元素的 `position` 以及 `top`, `right`, `bottom` 和 `left` 属性。

### Static

The default position value for all elements is `static`. This means that the element is positioned according to the normal flow of the document. The `top`, `right`, `bottom`, `left` properties have no effect on a statically positioned element.

<ExamplesExample file="position/static" />

### Relative

The `position-relative` class allows you to position an element relative to its normal position in the document. This means that the `top`, `right`, `bottom`, and `left` properties can be used to move the element from its normal position.

<ExamplesExample file="position/relative" />

### Absolute

The `position-absolute` class allows you to position an element relative to its closest positioned ancestor. If no positioned ancestor is found, the element is positioned relative to the document body.

<ExamplesExample file="position/absolute" />

### Fixed

The `position-fixed` class allows you to position an element relative to the viewport. This means that the element will stay in the same position even when the page is scrolled.

<ExamplesExample file="position/fixed" />

### 粘连 (Sticky)

The `position-sticky` class allows you to position an element based on the user's scroll position. The element is treated as `relative` until it crosses a specified threshold, at which point it is treated as `fixed`.

<ExamplesExample file="position/sticky" />

## SASS 变量

Disable position class generation by setting $position, $top, $right, $bottom, and $left to **false**.

```scss { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $utilities: (
    position: false,
    top: false,
    right: false,
    bottom: false,
    left: false
  )
);
```
