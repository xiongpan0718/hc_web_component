---
meta:
  title: 边框 (Borders)
  description: 使用边框辅助类可以快速地给任何元素以边框样式。
  keywords: border classes, border utilities, vuetify border helper classes
related:
  - /styles/border-radius/
  - /styles/display/
  - /styles/content/
features:
  report: true
---

# 边框 (Borders)

控制用户应用中元素边框样式的工具类。

<PageFeatures />

| 类                      | 属性值                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **border**             | border: thin solid rgba(var(--v-border-color), var(--v-border-opacity)); |
| **border-thin**        | border-width: thin;                                                                                                               |
| **border-sm**          | border-width: 1px;                                                                                                                |
| **border-md**          | border-width: 2px;                                                                                                                |
| **border-lg**          | border-width: 4px;                                                                                                                |
| **border-xl**          | border-width: 8px;                                                                                                                |
| **border-0**           | border-width: 0;                                                                                                                  |
| **border-t**           | border-top-width: thin;                                                                                                           |
| **border-t-0**         | border-top-width: 0;                                                                                                              |
| **border-t-thin**      | border-top-width: thin;                                                                                                           |
| **border-t-sm**        | border-top-width: 1px;                                                                                                            |
| **border-t-md**        | border-top-width: 2px;                                                                                                            |
| **border-t-lg**        | border-top-width: 4px;                                                                                                            |
| **border-t-xl**        | border-top-width: 8px;                                                                                                            |
| **border-e**           | border-inline-end-width: thin;                                                                                                    |
| **border-e-0**         | border-inline-end-width: 0;                                                                                                       |
| **border-e-thin**      | border-inline-end-width: thin;                                                                                                    |
| **border-e-sm**        | border-inline-end-width: 1px;                                                                                                     |
| **border-e-md**        | border-inline-end-width: 2px;                                                                                                     |
| **border-e-lg**        | border-inline-end-width: 4px;                                                                                                     |
| **border-e-xl**        | border-inline-end-width: 8px;                                                                                                     |
| **border-b**           | border-bottom-width: thin;                                                                                                        |
| **border-b-0**         | border-bottom-width: 0;                                                                                                           |
| **border-b-thin**      | border-bottom-width: thin;                                                                                                        |
| **border-b-sm**        | border-bottom-width: 1px;                                                                                                         |
| **border-b-md**        | border-bottom-width: 2px;                                                                                                         |
| **border-b-lg**        | border-bottom-width: 4px;                                                                                                         |
| **border-b-xl**        | border-bottom-width: 8px;                                                                                                         |
| **border-s**           | border-inline-start-width: thin;                                                                                                  |
| **border-s-0**         | border-inline-start-width: 0;                                                                                                     |
| **border-s-thin**      | border-inline-start-width: thin;                                                                                                  |
| **border-s-sm**        | border-inline-start-width: 1px;                                                                                                   |
| **border-s-md**        | border-inline-start-width: 2px;                                                                                                   |
| **border-s-lg**        | border-inline-start-width: 4px;                                                                                                   |
| **border-s-xl**        | border-inline-start-width: 8px;                                                                                                   |
| **border-opacity-0**   | --v-border-opacity: 0;                                                                                                            |
| **border-opacity**     | --v-border-opacity: .12;                                                                                          |
| **border-opacity-25**  | --v-border-opacity: .25;                                                                                          |
| **border-opacity-50**  | --v-border-opacity: .5;                                                                                           |
| **border-opacity-75**  | --v-border-opacity: .75;                                                                                          |
| **border-opacity-100** | --v-border-opacity: 1;                                                                                                            |
| **border-dashed**      | border-style: dashed;                                                                                                             |
| **border-dotted**      | border-style: dotted;                                                                                                             |
| **border-double**      | border-style: double;                                                                                                             |
| **border-solid**       | border-style: solid; { style="max-height: 420px;" fixed-header }                                                  |

<PromotedEntry />

## 使用

`border`工具类可以让你快速的设计任何元素的边框样式。

### 所有方向

使用 **border**, **border-0**, **border-sm**, **border-md**, **border-lg**, 和 **border-xl** 类来设置元素的边框宽度。

<ExamplesExample file="border/all" />

### 单独方向

使用 **border-\***, **border-\*-0**, **border-\*-sm**, **border-\*-md**, **border-\*-lg**, 和 **border-\*-xl** 类来设置元素的某个或多个边框宽度。

<ExamplesExample file="border/sides" />

### 边框样式

使用 **border-dashed**, **border-dotted**, **border-double**和 **border-solid** 类来设置元素的边框样式。

<ExamplesExample file="border/styles" />

### 主题颜色

所有支持**border**属性的组件都能利用所有边框辅助类，当然也包括了您的主题包含的边框颜色。

<ExamplesExample file="border/colors" />

| 类                          | 属性值                                                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **border-primary**         | --v-border-color: var(--v-theme-primary);                                                                    |
| **border-secondary**       | --v-border-color: var(--v-theme-secondary);                                                                  |
| **border-accent**          | --v-border-color: var(--v-theme-accent);                                                                     |
| **border-error**           | --v-border-color: var(--v-theme-error);                                                                      |
| **border-info**            | --v-border-color: var(--v-theme-info);                                                                       |
| **border-success**         | --v-border-color: var(--v-theme-success);                                                                    |
| **border-warning**         | --v-border-color: var(--v-theme-warning);                                                                    |
| **border-surface**         | --v-border-color: var(--v-theme-surface);                                                                    |
| **border-background**      | --v-border-color: var(--v-theme-background);                                                                 |
| **border-surface-light**   | --v-border-color: var(--v-theme-surface-light);                                                              |
| **border-surface-variant** | --v-border-color: var(--v-theme-surface-variant);                                                            |
| **border-surface-bright**  | --v-border-color: var(--v-theme-surface-bright); { style="max-height: 420px;" fixed-header } |

### 组件

::: info

当在组件上使用 **border** 属性时，需要省略 `border-` 前缀。例如，使用 `border="sm"` 代替 `border="border-sm"`。

:::

将某些组件（例如`v-card--border`）的 **border** 属性设为`true`会应用某个特定的边框辅助类。它是为了保证即时禁用了实用类，这种边框效果依然可以生效。

<ExamplesExample file="border/card" />

## SASS 变量

你也可以使用以下的 SASS 变量来自定义边框的颜色与宽度：

```sass { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $borders: (
    0: 0,
    null: thin,
    thin: thin,
    sm: 1px,
    md: 2px,
    lg: 4px,
    xl: 8px
  )
);
```

可以将 $borders 变量设置为 **false** 来禁用 border 类的生成。

```sass { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $borders: false
);
```
