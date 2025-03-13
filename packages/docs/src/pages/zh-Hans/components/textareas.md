---
meta:
  nav: 多行文本框 (Textareas)
  title: Textarea 文本区域
  description: 多行文本框组件是一个接受用户输入长篇文字的文本字段。
  keywords: 多行文本框, vuetify 多行文本框组件, vue 多行文本框组件
related:
  - /components/forms/
  - /components/selects/
  - /components/text-fields/
features:
  label: 'C: VTextarea'
  report: true
  github: /components/VTextarea/
  spec: 'https://m2.material.io/components/text-fields#input-types'
---

# 多行文本框 (Textareas)

多行文本框组件用于收集大量文本数据。

<PageFeatures />

## 使用

`v-textarea` 的最简单形式是充当多行的文本区域，适合填入大量文字。

<ExamplesUsage name="v-textarea" />

<PromotedEntry />

## API

| 组件                             | 描述   |
| ------------------------------ | ---- |
| [v-textarea](/api/v-textarea/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 自动增长

当使用 `auto-grow` 属性时，当包含的文本超过其大小时，多行文本框的大小将自动增加。

<ExamplesExample file="v-textarea/prop-auto-grow" />

#### 背景色

`background-color` 和 `color` 属性可以定制 `v-textarea` 的样式。

<ExamplesExample file="v-textarea/prop-background-color" />

#### 浏览器自动补全

`autocomplete` 属性让浏览器可以预测用户输入的选项。

<ExamplesExample file="v-textarea/prop-browser-autocomplete" />

#### 可清除

您可以使用 `clearable` 属性设定 `v-textarea` 可以清除文本，并使用 `clearable-icon` 属性自定义清除图标。

<ExamplesExample file="v-textarea/prop-clearable" />

#### 计数器

`counter` 属性告知用户 `v-textarea` 的字符限制。

<ExamplesExample file="v-textarea/prop-counter" />

#### 图标 (Icons)

`append-icon` 和 `prepend-icon` 属性可以使 `v-textarea` 融入使用环境。

<ExamplesExample file="v-textarea/prop-icons" />

#### 禁止缩放

`v-textarea` 可以选择使用 `no-resize` 属性忽视填入内容的多少而改变尺寸。

<ExamplesExample file="v-textarea/prop-no-resize" />

#### 行数

`rows` 属性允许你定义多行文本框的行数，当与 `row-height` 属性结合使用时，就可以通过行数来调整文本框高度。

<ExamplesExample file="v-textarea/prop-rows" />

### 杂项

#### 注册表单

可以使用文本框的样式创建简单好用而又方便构建的惊艳界面。

<ExamplesExample file="v-textarea/misc-signup-form" />
