---
meta:
  nav: 默认提供器 (Defaults providers)
  title: Defaults provider component
  description: The defaults provider allows you to provide specific default prop values to components in a section of your application
  keywords: defaults provider, vuetify defaults provider component, vue defaults provider component
related:
  - /features/aliasing/
  - /features/blueprints/
  - /features/global-configuration/
features:
  github: /components/VDefaultsProvider/
  label: 'C: VDefaultsProvider'
  report: true
---

# 默认提供器 (Defaults providers)

The defaults provider allows you to provide specific default prop values to components in a section of your application

<PageFeatures />

## 使用

The `v-defaults-provider` component is used to provide default props to components within its scope. It hooks into the [Global configuration](/features/global-configuration/) feature and makes it easy to assign multiple properties at once or scope out all incoming changes to any children.

<ExamplesUsage name="v-defaults-provider" />

<PromotedEntry />

## API

| 组件                                               | 描述   |
| ------------------------------------------------ | ---- |
| [v-defaults-provider](/api/v-defaults-provider/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 默认设置 (Defaults)

The `v-defaults-provider` expects a prop **defaults** which looks the same as the **defaults** object that you can pass to `createVuetify` when creating your application.

<ExamplesExample file="v-defaults-provider/prop-defaults" />
