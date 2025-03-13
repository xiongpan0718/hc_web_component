---
meta:
  nav: 主题提供器 (Theme providers)
  title: 主题供应器组件
  description: 主题提供器允许您在应用程序的不同部分应用与默认主题不同的样式。
  keywords: 主题提供器, Vuetify主题提供器组件, Vue主题提供器组件
related:
  - /features/theme/
  - /styles/colors/
  - /features/application-layout/
features:
  github: /components/VThemeProvider/
  label: 'C: VThemeProvider'
  report: true
---

# 主题提供器 (Theme providers)

主题提供器允许你在应用中的某个部分使用不同于默认的主题

<PageFeatures />

<PromotedEntry />

## API

| 组件                                         | 描述   |
| ------------------------------------------ | ---- |
| [v-theme-provider](/api/v-theme-provider/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 背景

默认情况下，`v-theme-provider` 属于非渲染的组件，且让你可以修改它的所有子组件的主题。当使用 **with-background** 属性时，`v-theme-provider` 将器子元素包含在一个元素中，并使用主题的背景颜色来替换其本身的背景颜色。

<ExamplesExample file="v-theme-provider/prop-with-background" />
