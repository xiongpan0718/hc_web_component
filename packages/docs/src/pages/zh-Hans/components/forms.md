---
emphasized: true
meta:
  nav: 表单 (Forms)
  title: Form 表单
  description: 表单组件提供了一个封装器，使输入组件的验证状态的处理和控制变得很容易。
  keywords: 表单，vuetify 表单组件，vue 表单组件，表单验证
related:
  - /components/selects/
  - /components/switches/
  - /components/text-fields/
features:
  label: 'C：VForm'
  report: true
  github: /components/VForm/
---

# 表单 (Forms)

Vuetify 提供了一个基于函数作为规则的简单内置表单验证系统，这使得开发者可以快速轻松地设置。

<PageFeatures />

## 使用

`v-form` 组件使得为表单输入添加验证变得简单。所有输入组件都有一个 **rules** 属性，可以用来指定输入在何种条件下是 *有效的* 或者 *无效的*。

::: tip

如果您更倾向于使用第三方验证插件，我们在页面下方提供了[示例](#vee-validate)，用于集成[Vee-validate](https://github.com/baianat/Vee-validate) 和 [vuelidate](https://github.com/vuelidate/vuelidate) 这两个验证库。

:::

每当输入值被更改时，每条规则都会收到一个新的值并得到重新验证。 如果规则返回 `false` 或 `string`, 这意味着验证失败， `string` 值作为错误信息显示。

<ExamplesExample file="v-form/usage" />

<PromotedEntry />

## API

| 组件                     | 描述   |
| ---------------------- | ---- |
| [v-form](/api/v-form/) | 主要组件 |

<ApiInline hide-links />

## 规则

规则允许您在所有表单组件上应用自定义验证。这些规则会按顺序进行验证，并且组件每次*最多*显示一个错误；所以请确保按照相应的顺序排列您的规则。

最基本的规则是一个简单的函数，用于检查输入是否有值；也就是说，它使输入成为必填项。

<ExamplesExample file="v-form/rules-required" />

然而，您可以根据需要使规则变得尽可能复杂，甚至允许异步输入验证。 在下面的示例中，输入将与虚假 API 服务进行检查，假的 API 服务需要一些时间才能响应。 等待 `提交` 事件的promise解决，然后您将看到验证的实际效果。

<ExamplesExample file="v-form/rules-async" />

提交事件是原生的`SubmitEvent`与promise的组合，因此可以被`await`或者使用`.then()`来获取验证的结果。
<br>
这也展示了**validate-on**属性，它告诉`v-form`组件何时应该进行验证。在这里，我们将其设置为`'submit lazy'`，这样我们只有在点击按钮时才调用API服务。

## 校验状态

规则运行的时机由 **validate-on** 属性控制，它接受一个字符串，包含 `input`、`blur`、`submit`、`invalid-input`、`eager` 或 `lazy`。
<br>
`input`、`blur`、`submit` 和 `eager` 设置了何时首次可以向用户显示验证错误，而 `lazy` 则在挂载时禁用验证（对于异步规则很有用）
<br>
默认情况下，所有输入在挂载时运行它们的验证规则，但不会向用户显示错误。添加 `eager` 将立即显示错误，或者使用 `lazy` 来禁用此行为。
<br>
`eager` 和 `lazy` 可以与其他选项结合使用，但彼此之间不能结合使用，而且它们各自隐含了 `input` 选项。
<br>
`invalid-input` 的行为与 `blur` 相同，除非字段无效，在这种情况下，它会改为在输入时运行，直到验证再次通过。

| `validate-on=` | `"input"` | `"blur"` | `"submit"` | `"invalid-input"` |   `"eager"`   | `"lazy"` |
| -------------- |:---------:|:--------:|:----------:|:-----------------:|:-------------:|:--------:|
| On mount       |     ✅     |    ✅     |     ✅      |         ✅         | ✅<sup>†</sup> |    ❌     |
| On input       |     ✅     |    ❌     |     ❌      |         ‡         |       *       |    *     |
| On blur        |     ✅     |    ✅     |     ❌      |         ✅         |       *       |    *     |
| On submit      |     ✅     |    ✅     |     ✅      |         ✅         |       ✅       |    ✅     |
<p class="text-caption">
* 使用与其结合使用的行为，与默认情况下的 on="input" 相同。
<br>
† 在挂载或重置时立即显示错误。
<br>
‡ 只有在之前验证失败的情况下。
</p>

表格当前的验证状态使用 `v-model` 或提交事件。它可以是三个状态之一：

- `true`: 所有带有验证规则的输入都已成功验证。
- `false`: 至少有一个输入通过交互或手动验证验证失败。
- `null`：至少有一个输入因交互或由于 `lazy` 验证而未经验证就已验证失败。

这允许您使用 `!valid` 检查任何验证失败，或者仅使用 `valid === false`检查显示给用户的错误。{.text-no-wrap}

## 示例

### 属性

#### 禁用

您可以通过设置**disabled**属性，轻松地禁用`v-form`中的所有输入组件。

<ExamplesExample file="v-form/prop-disabled" />

#### 快速失败

当设置了**fast-fail**属性时，一旦找到第一个无效输入，验证就会立即中断。这在某些规则计算量大且耗时较长时非常有用。在这个例子中，请注意当点击提交按钮时，即使第二个输入不符合规则，它也不会显示验证错误。

<ExamplesExample file="v-form/prop-fast-fail" />

### 其他

#### 暴露属性

`v-form`组件有多个暴露属性，可以通过在组件上设置**ref**来访问。ref允许我们访问组件的内部方法。你可以在API页面上找到它们全部，但一些更常用的是`validate()`、`reset()`和`resetValidation()`。

`reset()` 和 `resetValidation()` 之间的差别是，前者重置输入值和验证状态。 后者只能重置验证状态。

<ExamplesExample file="v-form/misc-exposed" />

#### Vee-validate

**vee-valide** 文档可以在这里找到 [](https://vee-validate.logaretm.com/v4/)

<ExamplesExample file="v-form/misc-vee-validate" />

#### 验证

**vuelidate** 文档可以在这里找到 [](https://vuelidate-next.netlify.app/)

<ExamplesExample file="v-form/misc-vuelidate" />
