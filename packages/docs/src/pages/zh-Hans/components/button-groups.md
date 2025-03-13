---
meta:
  nav: 切换按钮 (Button toggles)
  title: 按钮切换组件
  description: 按钮切换组件允许你将一系列可选按钮组合在一起作为一个单一元素。
  keywords: button group，vuetify 按钮组，vue 按钮组
related:
  - /components/buttons/
  - /components/icons/
  - /components/toolbars/
features:
  github: /components/VBtnToggle/
  label: 'C: VBtnToggle'
  report: true
  spec: 'https://m2.material.io/components/buttons#toggle-button'
---

# 切换按钮 (Button toggles)

`v-btn-toggle` 组件是专门针对` v-btn `构建的 `v-item-group `的简单包装器。<!-- !\[btn-groups Entry\](https://cdn.vuetifyjs.com/docs/images/components-temp/v-btn-groups/v-btn-groups-entry.png) -->

<PageFeatures />

## 使用

切换按钮允许您创建一个样式化的按钮组，可以在单个 **v-model** 下选择或切换

<ExamplesExample file="v-btn-toggle/usage" />

<PromotedEntry />

## API

| 组件                                  | 描述                         |
| ----------------------------------- | -------------------------- |
| [v--btn-toggle](/api/v-btn-toggle/) | 主要组件                       |
| [v-btn](/api/v-btn/)                | 用于控制 `v-btn-toggle` 状态的子组件 |
| [v-btn-group](/api/v-btn-group/)    | 无状态版本的 `v-btn-togle`       |

<ApiInline hide-links />

## 示例

### 属性

#### 分隔线 (Divided)

可以使用 **divided** 属性添加可见的分隔线。

<ExamplesExample file="v-btn-toggle/prop-divided" />

#### 变体 (Variants)

可以在 `v-btn-toggle` 上使用 **variant** 属性控制按钮的 variant 属性。

<ExamplesExample file="v-btn-toggle/prop-variant" />

#### 必填项

`v-btn-toggle` 带有 **mandatory** 属性 将总是有一个（被选中的）值。

<ExamplesExample file="v-btn-toggle/prop-mandatory" />

#### 多选

一个 `v-btn-twitch` 带有 **multiple** 属性将允许用户选中多个值并以数组的形式返回。

<ExamplesExample file="v-btn-toggle/prop-multiple" />

#### 圆角 (Rounded)

可以通过 **rounded** 属性控制按钮组的圆角。

<ExamplesExample file="v-btn-toggle/prop-rounded" />

### 杂项

<!-- #### Toolbar

Easily integrate customized button solutions with a `v-toolbar`

<ExamplesExample file="v-btn-toggle/misc-toolbar" /> -->

#### WYSIWYG/所见即所得

对类似的操作进行分组，并设计自己的 WYSIWYG 组件。

<ExamplesExample file="v-btn-toggle/misc-wysiwyg" />
