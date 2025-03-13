---
meta:
  nav: 本地化提供器 (Locale providers)
  title: 本地化提供器组件
  description: 区域设置提供者允许您在模板内修改应用程序的当前语言范围。
  keywords: 区域设置提供者, Vuetify区域设置提供者组件, Vue区域设置提供者组件
related:
  - /features/internationalization/
  - /features/global-configuration/
  - /getting-started/browser-support/
features:
  github: /components/VLocaleProvider/
  label: 'C: VLocaleProvider'
  report: true
---

# 本地化提供器 (Locale providers)

本地化提供器允许为你的应用里，某些区域内的组件提供默认的属性值。

<PageFeatures />

<PromotedEntry />

## API

| 组件                                           | 描述   |
| -------------------------------------------- | ---- |
| [v-locale-provider](/api/v-locale-provider/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 区域 (Locale)

`v-locale-provider` 接受一个 **locale** 属性，一个出现在 `createVuetify` 新建你的应用时，传入 **locale** 对象的值。
