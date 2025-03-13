---
meta:
  nav: 自定义输入框 (Custom inputs)
  title: Input 输入框
  description: 输入框组件是所有 Vuetify 表单组件的基础功能，为自定义实现提供了一个基础。
  keywords: 输入, vuetify 输入组件, vue 输入组件
related:
  - /components/forms/
  - /components/selects/
  - /components/text-fields/
features:
  label: 'C: VInput'
  report: true
  github: /components/VInput/
---

# 自定义输入框

The `v-input` component gives you a baseline to create your own custom inputs. It consists of a prepend/append slot, messages, and a default slot.

<PageFeatures />

## 使用

`v-input` 有 4 个主要区域。prepend 插槽，append 插槽，default 插槽和消息部分。它们参与了所有表单组件的核心逻辑。

<ExamplesExample file="v-input/usage" />

<PromotedEntry />

## API

| 组件                       | 描述   |
| ------------------------ | ---- |
| [v-input](/api/v-input/) | 主要组件 |

<ApiInline hide-links />

## 注意

::: warning

The `v-input` component is used as a wrapper for all of the Vuetify form controls. It does **NOT** inherit attributes as they are expected to be passed down to inner inputs.

:::

## 示例

### 属性

#### 错误信息 (Error)

As any validatable Vuetify component, `v-input` can be set to error state using **error** prop, messages can be added using **error-messages** prop. You can determine error messages count to show using **error-count** property.

#### 错误个数

你可以使用**error-count** 属性给 `v-input` 添加多个错误。

<ExamplesExample file="v-input/prop-error-count" />

<ExamplesExample file="v-input/prop-error" />

#### 隐藏详细信息

当 `hide-details` 设置为 `auto` 时，只有在有信息（提示、错误信息等）显示的情况下，才会显示信息。

<ExamplesExample file="v-input/prop-hide-details" />

#### 提示

`v-input` can have **hint** which can tell user how to use the input. **persistent-hint** prop makes the hint visible always if no messages are displayed.

<ExamplesExample file="v-input/prop-hint" />

#### 加载

`v-input` has **loading** state which can be used, e.g. for data loading indication. Note: `v-text-field` is used just for example.

<ExamplesExample file="v-input/prop-loading" />

#### 规则

You can add custom validation rules to `v-input`, add them as functions returning `true`/error message. Note: `v-text-field` is used just for example.

<ExamplesExample file="v-input/prop-rules" />

#### 成功

作为任何可验证的Vuetify组件，`v-input`可以使用**error** prop设置为错误状态，可以使用**error-messages** prop添加消息。

<ExamplesExample file="v-input/prop-success" />

### 事件

#### 点击槽位

`v-input` can have `click:append` and `click:prepend` events for its slots. Note: `v-text-field` is used just for example.

<ExamplesExample file="v-input/event-slot-clicks" />

### 插槽

#### 附加代码

`v-input` has `append` and `prepend` slots. You can place custom icons in them.

<ExamplesExample file="v-input/slot-append-and-prepend" />
