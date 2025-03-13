---
meta:
  nav: 单行文本框 (Text fields)
  title: Text field 输入框
  description: 文本框组件接受用户的文本输入.
  keywords: 文本框，vuetify 文本框组件，vue 文本框组件
related:
  - /components/textareas/
  - /components/selects/
  - /components/forms/
features:
  label: 'C: VTextField'
  report: true
  github: /components/VTextField/
  spec: https://m2.material.io/components/text-fields
---

# 单行文本框 (Text fields)

文本框组件常用于收集用户输入的信息。

![Text-field Entry](https://cdn.vuetifyjs.com/docs/images/components-temp/v-text-field/v-text-field-entry.png)

<PageFeatures />

## 使用

一个简单的文本框，具有占位符或者提示标签的文字。

<ExamplesUsage name="v-text-field" />

<PromotedEntry />

## API

| 组件                                 | 描述   |
| ---------------------------------- | ---- |
| [v-text-field](/api/v-text-field/) | 主要组件 |

<ApiInline hide-links />

## 组件结构

`v-text-field` 中元素的推荐放置是：

* 在输入框或者标签的开始放置 `v-icon` 组件
* 在前缀内容的后面放置标签 (label) 内容

![Text-field Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-text-field/v-text-field-anatomy.png)

| 元素 / 区域     | 描述                                  |
| ----------- | ----------------------------------- |
| 1. 容器       | 文字区域容器包含了 `v-input` 和 `v-field` 组件。 |
| 2. 前置图标     | 在 `v-field` 之前的自定义图标                |
| 3. 输入框内前置图标 | 在 `v-field` 组件开始部分的自定义图标            |
| 4. 标签文字     | 向用户显示的，输入框的说明文字                     |
| 5. 输入框内后置图标 | 在 `v-field` 组件结束部分的自定义图标            |
| 6. 后置图标     | 在 `v-field` 之后的自定义图标                |

## 指南

`v-text-field` 组件是将 `v-input` 和 `v-field` 组件组合在一起的高级版 `<input type="text">`。它和 [v-select](/components/selects/)，[v-autocomplete](/components/autocompletes/) 和 [v-combobox](/components/combobox/) 等类似，都是表单里提供基础功能的组件。在下面的内容中你将了解到 `v-text-field` 的方方面面，它的各种属性以及它们之间的交互方式。

### 属性

`v-text-field` 组件拥有大量的 API 和众多可配置项，涵盖了修改你的输入内容的显示，功能，样式。大部分的可配置项都是可以通过[插槽](#slots)来实现。

#### 标签文字

**label** 属性用于显示输入框的目的文字。下面的例子展示了基础的 `v-text-field` 组件的例子：

```html
<v-text-field label="First name"></v-text-field>
```

Using this baseline makes it easy to put together quick mock implementations of your interface without needing to hook up any functional logic.

下面的代码是简单的收集用户的 **First** name 的例子：

<ExamplesExample file="v-text-field/prop-label" />

#### 占位符

有时候单独的标签文字并不能完全起到提示作用，需要更多的信息。这种情况下就需要 **placeholder** 属性，配合 [label](#labeling) 或者 [hint](#hint) 属性，起到提示的效果。

下面的例子中，我们通过提示 `v-text-field` 是输入电子邮件地址的方式提高了用户的使用体验。

```html
<v-text-field
  label="Email address"
  placeholder="johndoe@gmail.com"
  type="email"
></v-text-field>
```

当用户的焦点落在输入框组件上时，占位符会显示在框中，而标签文字会移至上方。这样在输入框很多时可以显著提高用户体验。

<ExamplesExample file="v-text-field/prop-placeholder" />

::: info
使用 **persistent-placeholder** 属性会强制使 **placeholder** 保持可见（之前是仅焦点在输入框上才可见），即使焦点不在输入框依然可见。
:::

#### 提示文字和消息文字

**label** 和 **placeholder** 属性在输入信息还是稍显简洁。对于更详细的文字信息，所有的 Vuetify 输入组件都有一个 **details** 部分。可以提供 **hints**，或者 **messages**，或者是 **error-messages**。下面的例子中当你焦点在输入组件时，将会看到提示消息：

<ExamplesExample file="v-text-field/prop-messages" open />

如果你想始终显示提示文字，使用 **persistent-hint** 属性即可。下面的例子展示了如何在 detail 区域一直显示 **hint** 属性：

```html
<v-text-field
  hint="Enter your password to access this website"
  label="Password"
  persistent-hint
  type="input"
></v-text-field>
```

除了 **persistent-hint** 属性外，还有 3 种其他的持续显示属性：

* **persistent-clear** - 当 **value** 有值的时候，会持续显示清除按钮
* **persistent-counter** - 会持续显示字符数量
* **persistent-placeholder** - 会持续显示占位符，会使标签文字自动上移

#### 可清除

**clearable** 属性会在输入框结束部分里面添加一个 [v-icon](/components/icons/)，点击后清除 `v-text-field` 的输入框内容。当 `v-text-field` 清除后，它会重置它的内容。下面的例子展示了当鼠标移动到输入框上时会出现可点击的移除按钮：

<ExamplesExample file="v-text-field/prop-clearable" open />

注意 **readonly** 并不会移除清除按钮，要避免只读的输入框被清空，需要也禁用 **clearable** 属性。

有时在用户清除输入框时，还需要额外的进行一些操作。这时就可以使用自定义的 [Vue 事件处理](https://vuejs.org/guide/essentials/event-handling.html)。它可以在 `v-text-field` 点击清除的时候调用自定义的函数。下面的例子给出了如何使用自定义的事件处理，来调用 **onClear** 方法：

```html { resource="Component.vue" }
<template>
  <v-text-field
    clearable
    label="Last name"
    placeholder="Doe"
    persistent-clear
    @click:clear="onClear"
  ></v-text-field>
</template>

<script setup>
  onClear () {
    alert('User cleared the input')
  }
</script>
```

你可以查看 [API 页面](/api/v-text-field/#events) 获取关于 `v-text-field` 更多支持的事件名称。

#### 输入验证和填写规则

当使用文本框时，常常需要验证用户输入。例如邮件地址或者密码。使用 **rules** 属性就可以根据 `v-text-field` 的状态调用自定义函数。这个属性接受一个**函数**的数组，这些函数要么返回 `true`，要么返回 `string`。在下面的例子中，可以填入值然后再清除它观看效果：

<ExamplesExample file="v-text-field/prop-rules" open />

#### 表单 (Forms)

Group multiple `v-text-field` components and other functionality within a `v-form` component; for a more detailed look at forms, please visit the [v-form](/components/forms/) page. Forms are useful for validating more than 1 input and make it easy to interact with the state of many fields at once. The following example combines multiple `v-text-field` components to create a login form:

<ExamplesExample file="v-text-field/misc-guide" />

### 示例

The following is a collection of `v-text-field` examples that demonstrate how different the properties work in an application.

#### 自定义颜色

The **color** prop provides an easy way to change the color of textual content; label, prefix, suffix, etc. This color is applied as long as `v-text-field` is focused.

<ExamplesExample file="v-text-field/prop-custom-colors" />

#### 间距 (Density)

**density** 属性有三个取值可以减小文本框的高度：**default**、**comfortable** 和 **compact**。

<ExamplesExample file="v-text-field/prop-dense" />

#### 禁用 (disabled) 与只读 (readonly)

文本框的状态可以通过 **disabled** 或者 **readonly** 属性来改变。

<ExamplesExample file="v-text-field/prop-disabled-and-readonly" />

#### 隐藏详细信息

当 **hide-details** 设置为 `auto` 时，只有在有信息（提示、错误信息等）显示的情况下，才会显示信息。

<ExamplesExample file="v-text-field/prop-hide-details" />

#### 提示

The **hint** property on text fields adds the provided string beneath the text field. Using **persistent-hint** keeps the hint visible when the text field is not focused.

<ExamplesExample file="v-text-field/prop-hint" />

#### 图标 (Icons)

可以使用 **prepend-icon**、**append-icon** 和 **append-inner-icon** 属性给文本框不同位置增加图标。

<ExamplesExample file="v-text-field/prop-icon" />

#### 前缀和后缀

**前缀** 和 **后缀** 属性允许您在文本字段旁边添加和附加不可更改的内联文本。

<ExamplesExample file="v-text-field/prop-prefixes-and-suffixes" />

#### 验证

在 Vuetify 中，可以通过 **rules** 属性来简单地验证文本框中的输入。这个属性可接受一个由 `function`、`boolean` 和 `string` 构成的数组。当输入值改变时，每个数组元素都会参与验证。对于函数的数组元素，会将当前 v-model的值作为参数传入，并返回 `true` 或 `false` 值或者包含错误信息的 `string（字符串）`。

<ExamplesExample file="v-text-field/prop-validation" />

#### 变体 (Variants)

**variant** 属性很容易用来自定义文本框的样式。它支持以下的值：**solo**、**filled**、**outlined**、**plain** 和 **underlined**。

<ExamplesExample file="v-text-field/prop-variant" />

### 事件

#### 图标事件

`click:prepend`, `click:append`, `click:append-inner`, and `click:clear` are emitted when you click on the respective icon. Note that these events will not be fired if the slot is used instead.

<ExamplesExample file="v-text-field/event-icons" />

### 插槽

插槽允许你自定义许多在 `v-text-field` 中由 Vuetify 默认定义好的行为。可以在 `v-text-field` 组件中使用下面的插槽：

| 插槽名称             | 描述                                               |
| ---------------- | ------------------------------------------------ |
| 1. prepend       | 由 `v-input` 提供，放置于输入框的前面                         |
| 2. prepend-inner | 由 `v-field` 提供，放置于输入框的起始部分                       |
| 3. label         | 表单输入框的标签文字                                       |
| 4. append-inner  | 由 `v-field` 提供，放置于输入框的结束部分                       |
| 5. append        | 由 `v-input` 提供，放置于输入框的后面                         |
| 6. details       | 用于显示 **messages**、**hint**、**error-messages** 等等 |

下面的例子中使用了 **label**、**prepend** 和 **prepend-inner** 插槽来为 `v-text-field` 添加自定义的元素

```html { resource="Component.vue" }
<template>
  <v-text-field v-model="model">
    <template v-slot:label>
      <span>Type something...</span>
    </template>

    <template v-slot:prepend>
      <v-icon
        :color="model ? 'primary' : undefined"
        icon="$vuetify"
      />
    </template>

    <template v-slot:append-inner>
      <v-icon
        v-if="model"
        icon="mdi-check-circle"
      />
    </template>

    <template #details>
      <v-spacer />

      See our <a href="#">Terms and Service</a>
    </template>
  </v-text-field>
</template>

<script setup>
  import { shallowRef } from 'vue'

  const model = shallowRef('')
</script>
```

<PromotedPromoted />

#### 图标插槽

除了使用 `prepend`/`append`/`append-inner` 这些图标外，可以使用对应的插槽实现更为丰富的功能。

<ExamplesExample file="v-text-field/slot-icons" />

#### 标签文字

文本框的标签可以在 `label` 插槽中定义 —— 插槽意味着可以使用 HTML 内容

<ExamplesExample file="v-text-field/slot-label" />

#### 进度条

你可以在文本框的底部显示进度条来代替下方的线。你也可以采用默认的未定进度条与文本框颜色相同，或者是使用 `progress` 插槽来自定义。

<ExamplesExample file="v-text-field/slot-progress" />

### 其他

#### 自定义验证

虽然内置的 `v-form` 组件以及第三方插件比如 [vuelidate](https://github.com/monterail/vuelidate) 或者 [vee-validation](https://github.com/logaretm/vee-validate) 可以帮助你简化验证过程，但也可以自己写进行简单的验证。

<ExamplesExample file="v-text-field/misc-custom-validation" />

#### 包含字数统计的全宽度文本框

全宽度文本框可以让你创建没有边框的文本框。这个例子中，我们使用了 `v-divider` 组件来分隔各个文本框。

<ExamplesExample file="v-text-field/misc-full-width-with-counter" />

#### 密码输入

使用 HTML 输入框的 **type** 为 [password](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password)，并且使用后缀图标和回调函数来控制密码字段的显隐。

<ExamplesExample file="v-text-field/misc-password" />

#### 登录表单

下面的例子中，我们使用了前缀图标和后缀图标来构建了一个自定义的登录表单。

<ExamplesExample file="v-text-field/misc-login-form" />
