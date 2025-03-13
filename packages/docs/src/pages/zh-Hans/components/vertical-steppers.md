---
meta:
  nav: 垂直步骤条（Vertical Steppers）
  title: 垂直步骤条组件
  description: 垂直步骤条组件是一个导航元素，通过一系列步骤来指导用户。
  keywords: 垂直步骤条, vuetify 垂直步骤条组件, vue 垂直步骤条组件
related:
  - /components/buttons/
  - /components/icons/
  - /styles/transitions/
features:
  report: true
---

# 垂直步骤条（Steppers Vertical）

垂直步骤条组件是一个导航元素，通过一系列步骤来指导用户。

<PageFeatures />

::: warning

此功能需要 [v3.6.5](/getting-started/release-notes/?version=v3.6.5)

:::

## 安装

实验室组件需要手动导入和安装该组件。

```js { resource="src/plugins/vuetify.js" }
import { VStepperVertical } from 'vuetify/labs/VStepperVertical'

export default createVuetify({
  components: {
    VStepperVertical,
  },
})
```

## 使用

垂直步骤条允许用户按步骤完成一系列操作。

<ExamplesUsage name="v-stepper-vertical" />

<PromotedEntry />

## API

| 组件                                             | 描述   |
| ---------------------------------------------- | ---- |
| [v-stepper-vertical](/api/v-stepper-vertical/) | 主要组件 |

<ApiInline hide-links />

### 指南

`v-stepper-vertical` 是 [v-stepper](/components/stepers/) 组件的垂直变体。它还扩展了 [v-expansion-panels](/components/spres-pans/) 的功能。

#### 插槽

`v-step-vertical` 组件有几个可自定义的插槽。

##### 行为

通过接入可用的 **prev** 和 **next** 插槽，自定义您的步骤条流程。

<ExamplesExample file="v-stepper-vertical/slot-actions" />
