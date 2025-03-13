---
meta:
  nav: 文件上传 (File Input)
  title: File input 文件上传
  description: v-file-input是一个定制的输入组件，它提供了一个干净的选择界面，显示详细的选择信息和上传进度。
  keywords: 文件输入，文件上传，文件字段
related:
  - /components/text-fields/
  - /components/forms/
  - /components/icons/
features:
  label: 'C: VFileInput'
  report: true
  github: /components/VFileInput/
---

# 文件上传 (File Input)

`v-file-input` 组件是一个特殊的表单，它为选择文件，展示选中文件，展示上传进度提供了简洁的界面，旨在取代浏览器默认的文件上传组件。

<PageFeatures />

## 使用

`v-file-input` 组件的是由 [v-text-field](/components/text-fields) 为基础的容器组件。

<ExamplesUsage name="v-file-input" />

<PromotedEntry />

## API

| 组件                                 | 描述   |
| ---------------------------------- | ---- |
| [v-file-input](/api/v-file-input/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 接受文件格式（Accept）

`v-file-input` 组件可以根据你的需求设定为接受某几种特定的文件类型。更多的信息，请参考 [accept 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) 的文档。

<ExamplesExample file="v-file-input/prop-accept" />

#### 文件显示为纸片 (Chip)

选择的文件可以显示成 [chip](/components/chips) 组件，当设定了 **chips** 和 **multiple** 时，每个纸片元素都会展示出来（和文件计数相反）。

<ExamplesExample file="v-file-input/prop-chips" />

#### 计数器（Counter）

当 **show-size** 属性和 **counter** 属性一同启用时，会下输入框下方显示文件总数和大小。

<ExamplesExample file="v-file-input/prop-counter" />

#### 间距 (Density)

您可以使用 **density** 属性降低文件输入框的高度。

<ExamplesExample file="v-file-input/prop-dense" />

#### 多选 (Multiple)

启用 **multiple** 属性可以使 `v-file-input` 同时包含多个文件。

<ExamplesExample file="v-file-input/prop-multiple" />

#### 前置图标

`v-file-input` 有一个默认的前置图标——**prepend-icon**。这个值既可以设定在组件上，也可以全局调整。要全局调整这个图标，请参考[自定义图标页面](/features/icon-fonts)。

<ExamplesExample file="v-file-input/prop-prepend-icon" />

#### 显示文件大小

可以通过配置 **show-size** 属性来显示上传文件的大小。显示的大小可以是 _1024_（默认是 **true** 时）或者 _1000_。

<ExamplesExample file="v-file-input/prop-show-size" />

#### 验证

与其他输入类似，您可以使用 **rules** 属性来创建您自己的自定义验证参数。

<ExamplesExample file="v-file-input/prop-validation" />

### 插槽

#### 选择的文件

你可以通过 `selection` 插槽，来自定义选择的文件的样式。例子中使用了 [chips](/components/chips)，但实际上你可以使用任何组件或者标签。

<ExamplesExample file="v-file-input/slot-selection" />

### 杂项

#### 复杂选择文件插槽

选择文件插槽的灵活性允许你构建复杂的用例。例子中，前两个选择的文件以纸片形式展示，其余的文件以一个提示表示。

<ExamplesExample file="v-file-input/misc-complex-selection" />
