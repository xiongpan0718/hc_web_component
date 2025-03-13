---
meta:
  title: 光标（Cursor）
  description: Assign a custom cursor to any element.
  keywords: cursor, utility, helper, class
related:
  - /styles/content/
  - /styles/spacing/
  - /styles/text-and-typography/
features:
  report: true
---

# 光标（Cursor）

此工具类用于控制鼠标光标停留于元素上方时的样式。

<PageFeatures />

| 类                      | Properties                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| **cursor-auto**        | cursor: auto;                                                             |
| **cursor-default**     | cursor: default;                                                          |
| **cursor-grab**        | cursor: grab;                                                             |
| **cursor-grabbing**    | cursor: grabbing;                                                         |
| **cursor-help**        | cursor: help;                                                             |
| **cursor-move**        | cursor: move;                                                             |
| **cursor-none**        | cursor: none;                                                             |
| **cursor-not-allowed** | cursor: not-allowed;                                                      |
| **cursor-pointer**     | cursor: pointer;                                                          |
| **cursor-progress**    | cursor: progress;                                                         |
| **cursor-text**        | cursor: text;                                                             |
| **cursor-wait**        | cursor: wait; { style="max-height: 420px;" fixed-header } |

<PromotedEntry />

## 使用

在组件或元素上使用自定义的光标样式。

<ExamplesExample file="cursor/usage" />

## SASS 变量

你也可以使用以下的 SASS 变量来自定义边框的颜色与宽度：

```scss { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $utilities: (
    "cursor": (
      property: cursor,
      class: cursor,
      values: auto default pointer wait text move help not-allowed progress grab grabbing none
    )
  )
);
```

Disable the generation of **cursor** utility classes by overwriting the utilities value:

```scss { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $utilities: (
    "cursor": false,
  ),
);
```
