---
meta:
  title: 不透明度（Opacity）
  description: 使用透明度辅助类可以快速地调整任意元素的透明度。
  keywords: opacity classes, opacity utilities, vuetify opacity helper classes
related:
  - /styles/opacity-radius/
  - /styles/display/
  - /styles/content/
features:
  report: true
---

# 不透明度

控制用户应用中元素透明度样式的辅助工具类。

<PageFeatures />

::: success

此特性在 [v3.6.0 (Nebula)](/getting-started/release-notes/?version=v3.6.0) 引入。

:::

| 类                     | 属性值                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **opacity-0**         | opacity: 0;                                                                                                       |
| **opacity-10**        | opacity: .1;                                                                                      |
| **opacity-20**        | opacity: .2;                                                                                      |
| **opacity-30**        | opacity: .3;                                                                                      |
| **opacity-40**        | opacity: .4;                                                                                      |
| **opacity-50**        | opacity: .5;                                                                                      |
| **opacity-60**        | opacity: .6;                                                                                      |
| **opacity-70**        | opacity: .7;                                                                                      |
| **opacity-80**        | opacity: .8;                                                                                      |
| **opacity-90**        | opacity: .9;                                                                                      |
| **opacity-100**       | opacity: 1;                                                                                                       |
| **opacity-hover**     | opacity: var(--v-hover-opacity);                                                               |
| **opacity-focus**     | opacity: var(--v-focus-opacity);                                                               |
| **opacity-selected**  | opacity: var(--v-selected-opacity);                                                            |
| **opacity-activated** | opacity: var(--v-activated-opacity);                                                           |
| **opacity-pressed**   | opacity: var(--v-pressed-opacity);                                                             |
| **opacity-dragged**   | opacity: var(--v-dragged-opacity); { style="max-height: 420px;" fixed-header } |

<PromotedEntry />

## 使用

使用透明度辅助类可以快速地调整任意元素的透明度。

<ExamplesExample file="opacity/misc-opacity" />

### 悬停 (Hover)

使用 [v-hover](/components/hover/) 组件，可以在组件被光标悬停时应用透明度类。

<ExamplesExample file="opacity/misc-hover" />

## SASS 变量

你也可以使用以下的 SASS 变量来自定义透明度：

```sass { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $opacities: (
    hover: var(--v-hover-opacity),
    focus: var(--v-focus-opacity),
    selected: var(--v-selected-opacity),
    activated: var(--v-activated-opacity),
    pressed: var(--v-pressed-opacity),
    dragged: var(--v-dragged-opacity),
    0: 0,
    10: .1,
    20: .2,
    30: .3,
    40: .4,
    50: .5,
    60: .6,
    70: .7,
    80: .8,
    90: .9,
    100: 1
  )
);
```

可以将 $opacities 变量设置为 **false** 来禁用 opactity 类的生成。

```sass { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $opacities: false
);
```
