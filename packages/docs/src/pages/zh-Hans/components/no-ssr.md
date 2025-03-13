---
meta:
  title: No SSR
  description: No SSR 组件是一个简单的组件，它不会在服务器上渲染，只会在客户端渲染。
  keywords: no Ssr, Vuetify No Ssr 组件, Vue No Ssr 组件
features:
  github: /components/VNoSsr/
  label: 'C: VNoSsr'
  report: true
---

# No SSR

`v-no-ssr` 组件是一个简单的包装程序，允许开发者指定服务器侧渲染器不应渲染的内容。 但留给客户端。<!-- !\[No-Ssr Entry\](https://cdn.vuetifyjs.com/docs/images/components-temp/v-No-Ssr/v-No-Ssr-entry.png) -->

<PageFeatures />

## 使用

`v-no-ssr` 组件阻止其内容在服务器端渲染。

```html
<template>
  <v-no-ssr>
    <!-- 内部的所有内容仅在客户端渲染。 -->
    <v-sheet>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae minus, incidunt laboriosam amet doloribus officiis?
    </v-sheet>
  </v-no-ssr>
</template>
```

## API

| 组件                         | 描述   |
| -------------------------- | ---- |
| [v-no-ssr](/api/v-no-ssr/) | 主要组件 |

<ApiInline hide-links />

<PromotedEntry />
