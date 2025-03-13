---
meta:
  nav: 框架加载器（Skeleton Loaders）
  title: 框架加载器组件
  description: The skeleton loader component provides a placeholder loading state for when content is being fetched from a server or loaded asynchronously. It can be used in a variety of contexts, including cards, lists, and tables.
  keywords: skeleton loaders, vuetify skeleton loader component, vue skeleton loader
related:
  - /components/cards/
  - /components/progress-circular/
  - /components/buttons/
features:
  figma: true
  label: 'C: VSkeletonLoader'
  github: /components/VSkeletonLoader/
  report: true
---

# 框架加载器（Skeleton Loaders）

Skeleton loaders provide a simple way to display loading placeholders in your application.

![框架加载器入口](https://cdn.vuetifyjs.com/docs/images/components-temp/v-skeleton-loader/v-skeleton-loader-entry.png)

<PageFeatures />

::: success
此特性在 [v3.4.0 (Blackguard)](/getting-started/release-notes/?version=v3.4.0) 版本引入。
:::

## 使用

The `v-skeleton-loader` component provides a user with a visual indicator that content is coming / loading. This is better received than traditional full-screen loaders.

<ExamplesUsage name="v-skeleton-loader" />

<PromotedEntry />

## API

| 组件                                           | 描述   |
| -------------------------------------------- | ---- |
| [v-skeleton-loader](/api/v-skeleton-loader/) | 主要组件 |

<ApiInline hide-links />

## 组件结构

`v-skeleton-loader` 有一个默认槽，在组件未处于加载状态时呈现。

![Skeleton loader Anatomy（骨架装载器组件结构）](https://cdn.vuetifyjs.com/docs/images/components-temp/v-skeleton-loader/v-skeleton-loader-anatomy.png)

| 元素 / 区域 | 描述         |
| ------- | ---------- |
| 1. 容器   | 容器是元件的根元素。 |

## 指南

The `v-skeleton-loader` component can be used in a variety of contexts, including cards, lists, and tables. It can be used to create a placeholder loading state for when content is being fetched from a server or loaded asynchronously.

The following code snippet is an example of a basic `v-skeleton-loader` component. When no **type** property is provided, the component will default to an **image** type.

```html
<v-skeleton-loader></v-skeleton-loader>
```

### 属性

`v-skeleton-loader` 组件有一个小型 API，主要用于配置根和项目高度。

#### 类型

The **type** property is used to define the type of skeleton loader. Types can be combined to create more complex skeletons. For example, the **card** type is a combination of the **image** and **heading** types.

<ExamplesExample file="v-skeleton-loader/prop-type" />

可使用以下内置类型：

| 类型                              | 组成                                                                          |
| ------------------------------- | --------------------------------------------------------------------------- |
| **actions**                     | button@2                                                                    |
| **article**                     | heading, paragraph                                                          |
| **avatar**                      | avatar                                                                      |
| **button**                      | button                                                                      |
| **card**                        | image, heading                                                              |
| **card-avatar**                 | image, list-item-avatar                                                     |
| **chip**                        | chip                                                                        |
| **date-picker**                 | list-item, heading, divider, date-picker-options, date-picker-days, actions |
| **date-picker-options**         | text, avatar@2                                                              |
| **date-picker-days**            | avatar@28                                                                   |
| **divider**                     | divider                                                                     |
| **heading**                     | heading                                                                     |
| **image**                       | image                                                                       |
| **list-item**                   | text                                                                        |
| **list-item-avatar**            | avatar, text                                                                |
| **list-item-two-line**          | sentences                                                                   |
| **list-item-avatar-two-line**   | avatar, sentences                                                           |
| **list-item-three-line**        | paragraph                                                                   |
| **list-item-avatar-three-line** | avatar, paragraph                                                           |
| **ossein**                      | ossein                                                                      |
| **paragraph**                   | text@3                                                                      |
| **sentences**                   | text@2                                                                      |
| **subtitle**                    | text                                                                        |
| **table**                       | table-heading, table-thead, table-tbody, table-tfoot                        |
| **table-heading**               | heading, text                                                               |
| **table-thead**                 | heading@6                                                                   |
| **table-tbody**                 | table-row-divider@6                                                         |
| **table-row-divider**           | table-row, divider                                                          |
| **table-row**                   | text@6                                                                      |
| **table-tfoot**                 | text@2, avatar@2                                                            |
| **text**                        | text                                                                        |

#### 加载

如果满足以下条件之一，则认为骨架装载器处于装载状态：

* The default slot is not used
* **loading** 属性被设置为 **true**

If either condition is met, the skeleton loader returns the type structure in place of the default slot and applies dimensions values; e.g. **height**, **width**, **min-height**, etc. If the condition is not met, the default slot is returned.

<ExamplesExample file="v-skeleton-loader/prop-loading" />

#### Elevation（海拔）

**elevation** 属性使骨架加载器的海拔与其替换的内容相匹配。

<ExamplesExample file="v-skeleton-loader/prop-elevation" />

#### 模板

The `v-skeleton-loader` can be used as boilerplate designs when creating mockups. Mix and match various pre-defined options or create your own unique implementations. In this example, we use a custom **data** property to apply the same props to multiple `v-skeleton-loader`'s at once.

<ExamplesExample file="v-skeleton-loader/prop-boilerplate" />

## 示例

下面的示例集展示了 `v-skeleton-loader` 组件在现实世界中更高级的用法。

### 冰淇淋建议

下面的示例演示了如何使用 `v-skeleton-loader` 组件创建占位符加载状态，以便从服务器获取内容或异步加载内容。

<ExamplesExample file="v-skeleton-loader/misc-ice-cream" />

## SASS 变量

Make fine tuned changes by modifying the `v-skeleton-loader` [SASS variables](/features/sass-variables). This is useful when you want to change the default button height or padding.

```scss { resource="src/settings.scss" }
@use 'vuetify/settings' with (
  $skeleton-loader-gutter: 24px,
  $skeleton-loader-button-width: 80px,
);
```

有关所有可用 SASS 变量的列表，请访问 [v-skeleton-loader](/api/v-skeleton-loader/#sass) API 页面。

## 无障碍

默认情况下，`v-skeleton-loader`组件被赋予了[WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)的[**alert**](https://www.w3.org/TR/wai-aria/#alert)角色。我们通过三个aria属性增强了这个角色。[**aria-busy**](https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-busy)的值为**true**表示一个控件缺少所需的拥有元素。[**aria-live**](https://www.w3.org/TR/wai-aria-1.1/#aria-live)的值为**polite**设置了屏幕阅读器对动态区域的优先级。最后，[**aria-label**](https://www.w3.org/TR/WCAG20-TECHS/ARIA6.html)用于提供元素的人类可读描述。

### 配置 aria-label

Configure the default text used in the `v-skeleton-loader` component in the locale options. The following example demonstrates how to update the **loading-text** property:

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'

export default createVuetify({
  locale: {
    messages: {
      loading: 'Loading content...',
    },
  },
})
```

导航至 [本地化 (i18n)](/features/internationalization/) 页面，了解有关如何配置本地化选项的更多信息。
