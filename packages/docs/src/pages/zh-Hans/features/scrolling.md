---
meta:
  title: 程序滚动
  description: 使用 goTo 函数在你的应用中滚动。
  keywords: 程序滚动, vuetify goto, goto
related:
  - /directives/scroll/
  - /features/application-layout/
  - /components/slide-groups/
features:
  github: /composables/goto.ts
  label: 'E: goto'
  report: true
---

# 程序滚动

使用 **goTo** 函数在你的应用中滚动。

<PageFeatures />

<PromotedEntry />

::: success

此特性自 [v3.5.0 (Polaris)](/getting-started/release-notes/?version=v3.5.0) 版本引入。

:::

## 使用

**goTo** 方法接受两个参数 **target** 和 **options**。**target** 可以是页面顶部的像素偏移量、有效的 CSS 选择器或元素引用。**options** 是一个对象，包括 **duration**（持续时间）、**easing**（缓动）、**container**（容器）和 **offset**（偏移量）。

<ExamplesExample file="scroll/usage" />

## API

| 指令                         | 描述            |
| -------------------------- | ------------- |
| [useGoTo](/api/use-go-to/) | useGoTo 组合式函数 |

<ApiInline hide-links />


<!--## Use with router

The **goTo** function can be individually imported and invoked anywhere. This is particularly useful when hooking up to [vue-router](https://router.vuejs.org/).

```js { resource="src/router.js" }
import Router from 'vue-router'
import goTo from 'vuetify/lib/services/goto'

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes: [
    //
  ],
})
```
-->
