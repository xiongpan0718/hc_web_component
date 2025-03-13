---
emphasized: true
meta:
  nav: 工具提示
  title: Tooltip directive
  description: The Tooltip directive is an easy to use implementation of VTooltip.
  keywords: Tooltip, vuetify Tooltip directive, vue Tooltip directive, mobile Tooltip directive
related:
  - /components/navigation-drawers/
  - /components/slide-groups/
  - /components/windows/
features:
  report: true
---

# 工具提示（Tooltip）指令

The `v-tooltip` directive is a shorthand way of adding tooltips to elements in your application.

<PageFeatures />

<PromotedEntry />

## 使用

The `v-tooltip` directive makes it easy to add a tooltip to any element in your application. It is a wrapper around the `v-tooltip` component.

<ExamplesUsage name="v-tooltip-directive" />

## API

| 指令                                     | 描述                    |
| -------------------------------------- | --------------------- |
| [v-tooltip](/api/v-tooltip-directive/) | The Tooltip directive |

## 指南

The `v-tooltip` directive is a simple way to add a tooltip to any element in your application. It is a wrapper around the `v-tooltip` component.

### Location

Location is set as a directive argument with the same syntax as the component's `location` prop separated by a hyphen instead of a space.

<ExamplesExample file="v-tooltip-directive/args" />

### Tooltip text

By default the tooltip will use the target element's [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext), or you can pass another string as a directive value. Remember directive values are expressions so static strings must be quoted.

<ExamplesExample file="v-tooltip-directive/text" />

### Other props

The `v-tooltip` directive can also accept an object of [VTooltip props](/api/v-tooltip/#props) as a value (use camelCase keys).

<ExamplesExample file="v-tooltip-directive/object-literals" />
