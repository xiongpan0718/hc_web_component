---
meta:
  nav: 纸片 (Chip)
  title: Chip 纸片
  description: 纸片组件允许用户输入信息，进行选择、过滤内容或触发动作。
  keywords: 纸片, vuetify 纸片组件, vue 纸片组件
related:
  - /components/avatars
  - /components/icons
  - /components/selects
features:
  figma: true
  github: /components/VChip/
  label: 'C: VChip'
  report: true
  spec: https://m2.material.io/components/chips
---

# 纸片 (Chip)

`v-chip` 组件用于传递小段信息。`close` 属性会让纸片变得可交互。此组件和 [v-chip-group](/components/chip-groups) 组件的合用可以实现更高级的用法。

![Chips Entry](https://cdn.vuetifyjs.com/docs/images/components/v-chip/v-chip-entry.png)

<PageFeatures />

## 使用

Chips come in the following variations: closeable, filter, outlined, pill. The default slot of `v-chip` will also accept avatars and icons alongside text.

<ExamplesUsage name="v-chip" />

<PromotedEntry />

## API

| 组件                     | 描述   |
| ---------------------- | ---- |
| [v-chip](/api/v-chip/) | 主要组件 |

<ApiInline hide-links />

## 指南

`v-chip` 组件用于传递小段信息。`close` 属性会让纸片变得可交互。此组件和 [v-chip-group](/components/chip-groups) 组件的合用可以实现更高级的用法。

### 属性 (Props)

Similar to other components such as [v-btn](/components/buttons/) and [v-list](/components/lists/), the `v-chip` component has a large selection of props for customizing the appearance.

#### 可关闭的 (Closeable)

可关闭的纸片可以通过 v-model 进行控制。如果您想知道纸片组件何时关闭，也可以监听 `click:close` 事件。

<ExamplesExample file="v-chip/prop-closable" />

#### 颜色和变体

你可以使用任意来自 Material Design 调色板中的颜色，来更改纸片组件的颜色。

<ExamplesExample file="v-chip/prop-colored" />

**variant** 属性可以让按钮具有不同的风格。允许的变化形式有：**elevated**、**flat**、**toanl**（默认）、**outlined**、**text** 和 **plain**。

<table spaces-before="0">
  <tr>
    <th>
      值
    </th>
    
    <th>
      示例
    </th>
    
    <th>
      描述
    </th>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">elevated</strong>
    </td>
    
    <td>
      <v-chip color="primary" variant="elevated">Chip</v-chip>
    </td>
    
    <td>
      Elevates the chip with a shadow
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">flat</strong>
    </td>
    
    <td>
      <v-chip color="primary" variant="flat">Chip</v-chip>
    </td>
    
    <td>
      Removes chip shadow
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">tonal</strong>
    </td>
    
    <td>
      <v-chip color="primary" variant="tonal">Chip</v-chip>
    </td>
    
    <td>
      按钮的背景颜色被设为文字颜色的高透明度版本
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">outlined</strong>
    </td>
    
    <td>
      <v-chip color="primary" variant="outlined">Chip</v-chip>
    </td>
    
    <td>
      以当前文字颜色绘制细边框
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">text</strong>
    </td>
    
    <td>
      <v-chip color="primary" variant="text">Chip</v-chip>
    </td>
    
    <td>
      移除背景颜色和阴影
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">plain</strong>
    </td>
    
    <td>
      <v-chip color="primary" variant="plain">Chip</v-chip>
    </td>
    
    <td>
      移除背景颜色并且在未悬停时降低透明度
    </td>
  </tr>
</table>

#### Size and density

Chips can have various sizes from `x-small` to `x-large`. `density` is used to adjust the vertical spacing without affecting width or font size.

<ExamplesExample file="v-chip/prop-sizes" />

#### 可拖动的 (Draggable)

拥有 `draggable` 属性的 `v-chip` 组件可以由鼠标拖拽。

<ExamplesExample file="v-chip/prop-draggable" />

#### 标签 (Label)

使用 label 属性的纸片组件会拥有类似 `v-card` 组件的圆角。

<ExamplesExample file="v-chip/prop-label" />

#### 禁止波纹效果 (No ripple)

当 `ripple` 属性被设为 `false` 时，`v-chip` 没有点击波纹效果。

<ExamplesExample file="v-chip/prop-no-ripple" />

#### 仅有轮廓 (Outlined)

仅有轮廓的纸片从其中文本颜色继承其边框颜色。

<ExamplesExample file="v-chip/prop-outlined" />

### 插槽 (Slots)

#### 图标插槽 (Icon)

纸片可以使用文本或“ Material Icons 字体库中可用的任何图标。

<ExamplesExample file="v-chip/slot-icon" />

## 示例

The following are a collection of examples that demonstrate more advanced and real world use of the `v-chip` component.

### 可操作的纸片

纸片组件可以是可交互的。如果提供了 _click_ 事件，纸片组件就可接受点击，可以调用方法。

<ExamplesExample file="v-chip/event-action-chips" />

#### 自定义列表

在下面的例子中，我们使用了自定义的列表来代替 [v-autocomplete](/components/autocompletes) 组件。这样可以使其在显示可选的选项的同时，还能保留搜索和选择的功能。

<ExamplesExample file="v-chip/misc-custom-list" />

#### 可展开的列表

纸片组件可与 `v-menu` 组合使用，可以实现纸片组件的特定功能。

<ExamplesExample file="v-chip/misc-expandable" />

#### 纸片组件过滤信息

纸片组件可以在一些特别的工作中提供辅助操作。在下面的例子中，我们可以搜索某个列表，从中提取出关键字，以纸片的形式显示在搜索框下面。

<ExamplesExample file="v-chip/misc-filtering" />

#### 纸片组件用于选择

可以使用纸片组件显示已选择的选项。尝试在下方添加你自己的标签。

<ExamplesExample file="v-chip/misc-in-selects" />
