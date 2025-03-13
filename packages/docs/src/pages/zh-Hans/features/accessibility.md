---
meta:
  title: 无障碍 (a11y)
  description: 请看例子，以及 Vuetify 组件中的支持可访问性 (a11y) 的优势。
  keywords: a11y, 可访问性, 可用性
related:
  - /features/internationalization/
  - /components/menus/
  - /components/lists/
features:
  report: true
---

# 无障碍 (a11y)

Web 无障碍**（简称 a11y）**，是指确保没有任何障碍阻碍残疾人与万维网上的网站进行互动或访问的包容性做法。Vuetify 组件是为所有基于鼠标的操作提供键盘交互，并在适当的情况下利用 HTML5 语义元素。

<PageFeatures />

<PromotedEntry />

## 激活器插槽

Vuetify 对许多组件使用激活插槽，如 `v-menu`，`v-dialog` 等等。 在某些情况下，这些 activator 元素应该具有特定的 a11y 属性，将它们与它们的相应内容联系起来。 为了做到这一点，我们通过范围插槽 (slots scope) 传递必要的 a11y 选项。

```html
<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        text="Click me"
        v-bind="props"
      ></v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Option 1</v-list-item-title>
      </v-list-item>

      <v-list-item disabled>
        <v-list-item-title>Option 2</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Option 3</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
```

当激活器元素被渲染时，它现在将包含绑定的 a11y 属性

```html
<!-- Rendered `v-btn` HTML Output -->

<button
  aria-expanded="false"
  aria-haspopup="true"
  role="button"
  type="button"
>
  Click me
</button>
```

## 焦点管理和键盘交互

除了属性之外，诸如 `v-menu` 等组件也支持通过按 <kbd>↑</kbd> 和 <kbd>↓</kbd> 在选项之间导航。

### v-menu

当位于 `v-menu` 内时，`v-list-item` 将自动配置 role 为 **menuitem**。有关组件功能的更多信息，请浏览 [菜单](/components/menus)。

<ExamplesExample file="accessibility/menu" inline />

## 额外资源

虽然 Vuetify 尽可能保证你在开发应用程序中轻松地使用 a11y，但有时候仍然需要额外的信息。 下面可以找到有用的资源列表。

- [W3C Web 可访问性计划](https://www.w3.org/WAI/)
- [WAI-ARIA 创作实践](https://www.w3.org/WAI/ARIA/apg/)
- [A11Y 项目](https://a11yproject.com/)"
