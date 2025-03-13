---
meta:
  title: 验证码输入 (OTP Input)
  description: The OTP input component is used for MFA authentication via input field.
  keywords: OTP, MFA, vuetify OTP input component, vue OTP component
related:
  - /components/inputs/
  - /components/text-fields/
  - /components/forms/
features:
  label: 'C: VOtpInput'
  github: /components/VOtpInput/
  report: true
---

# 验证码输入 (OTP Input)

The OTP input is used for MFA procedure of authenticating users by a one-time password.

![Otp input Entry](https://cdn.vuetifyjs.com/docs/images/components/v-otp-input/v-otp-input-entry.png)

<PageFeatures />

::: success
此特性在 [v3.4.0 (Blackguard)](/introduction/roadmap/#v3-4-blackguard) 版本引入。
:::

## 使用

这里我们展示了在应用中可能用到的设置项。

<ExamplesUsage name="v-otp-input" />

<PromotedEntry />

## API

| 组件                               | 描述   |
| -------------------------------- | ---- |
| [v-otp-input](/api/v-otp-input/) | 主要组件 |

<ApiInline hide-links />

## 组件结构

`v-otp-input` 组件是 [v-field](/api/v-field/) 组件的组合，后者是只能输入单字的输入框。

![Otp input Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-otp-input/v-otp-input-anatomy.png "OTP input Anatomy")

| 元素 / 区域 | 描述                         |
| ------- | -------------------------- |
| 1. 容器   | 验证码输入容器包含了数个 `v-field` 组件。 |
| 2. 输入区  | `v-field` 组件用于创建单字输入区域。    |

## 指南

The `v-otp-input` component is a collection of `v-field` components that combine to create a single input. It is used to validate a one-time password (OTP) that is sent to the user via email or SMS.

The following code snippet is an example of a basic `v-otp-input` component.

```html
<v-otp-input></v-otp-input>
```

### 属性

The `v-otp-input` component has support for most of `v-field`'s props and is follows the same design patterns as other inputs.

#### 长度

The `length` prop determines the number of `v-field` components that are rendered. The default value is `6`.

<ExamplesExample file="v-otp-input/prop-length" />

#### Focus-all

The `autofocus` prop automatically focuses the first element in the `v-otp-input` component.

<ExamplesExample file="v-otp-input/prop-focus-all" />

#### 出错

The `error` prop puts the `v-otp-input` into an error state. This is useful for displaying validation errors.

<ExamplesExample file="v-otp-input/prop-error" />

#### 变体

The `v-otp-input` component supports the same variants as `v-field`, `v-text-field` and other inputs.

<ExamplesExample file="v-otp-input/prop-variant" />

#### 加载器

The `loader` prop displays a loader when the `v-otp-input` component is in a loading state. When complete, emits a `finish` event.

<ExamplesExample file="v-otp-input/prop-loader" />

## 示例

The following are a collection of examples that demonstrate more advanced and real world use of the `v-otp-input` component.

### Card variants

The following example is a detailed example of a `v-otp-input` component used within a card.

<ExamplesExample file="v-otp-input/misc-card" />

### Mobile text

The following example is a detailed example of a `v-otp-input` component used with mobile text.

<ExamplesExample file="v-otp-input/misc-mobile" />

### Verify account

The following example is a detailed example of a `v-otp-input` component used to verify a user's account.

<ExamplesExample file="v-otp-input/misc-verify" />

### 分隔线

The following example is a detailed example of a `v-otp-input` component used with a divider.

<ExamplesExample file="v-otp-input/misc-divider" />
