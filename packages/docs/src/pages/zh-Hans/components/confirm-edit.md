---
meta:
  nav: 可确认编辑框 (Confirm Edit)
  title: 可确认编辑框 (Confirm Edit)
  description: The confirm edit component is used to allow the user to verify their changes before they are committed. This is useful when you want to prevent accidental changes or to allow the user to cancel their changes.
  keywords: v-confirm-edit, confirm edit, vuetify confirm edit, vuetify confirm edit component, vuetify confirm edit examples
related:
  - /components/avatars/
  - /components/icons/
  - /components/toolbars/
features:
  github: /components/VConfirmEdit/
  label: "C: VConfirmEdit"
  report: true
---

# 可确认编辑框 (Confirm edit)

`v-confirm-edit` 组件用于让用户提交前确认他的修改是正确的。

<PageFeatures />

::: success

此特性在 [v3.6.0](/getting-started/release-notes/?version=v3.6.0) 引入。

:::

## 使用

<ExamplesUsage name="v-confirm-edit" />

<PromotedEntry />

## API

| 组件                                     | 描述   |
| -------------------------------------- | ---- |
| [v-confirm-edit](/api/v-confirm-edit/) | 主要组件 |

<ApiInline hide-links />

## 指南

The `v-confirm-edit` component is an intuitive way to capture a model's changes before they are committed. This is useful when you want to prevent accidental changes or to allow the user to cancel their changes.

### 选择器组件 (Pickers)

It's easy to integrate pickers into the `v-confirm-edit` component. This allows you to provide a more user-friendly experience when selecting dates, times, or colors.

<ExamplesExample file="v-confirm-edit/misc-date-picker" />
