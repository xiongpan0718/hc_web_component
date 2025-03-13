---
meta:
  nav: 底部面板 (Bottom sheets)
  title: Botton sheet 底部工作表
  description: 底部工作表组件用于以对话风格的方式将内容提升到其他元素之上。
  keywords: 底页, vuetify 底页组件, vue 底页组件
related:
  - /components/dialogs/
  - /components/lists/
  - /components/menus/
features:
  label: 'C: VBottomSheet'
  github: /components/VBottomSheet/
  report: true
  spec: https://m2.material.io/components/sheets-bottom
---

# Bottom sheets（底部工作表）

底部表单是一个经过修改的 `v-dialog `, 从屏幕的底部滑出，类似于 `v-bottom-navigation`。

![底部面板入口](https://cdn.vuetifyjs.com/docs/images/components/v-bottom-sheet/v-bottom-sheet-entry.png)

<PageFeatures />

<VoPromotionsCardVuetify />

::: success

此特性自 [v3.4.0 (Blackguard)](/getting-started/release-notes/?version=v3.4.0) 版本引入。

:::

## 使用

底部面板组件可以提供应用层级的操作，因为底部的区域能够包含任意的元素。

<ExamplesUsage name="v-bottom-sheet" />

## API

| 组件                                     | 描述   |
| -------------------------------------- | ---- |
| [v-bottom-sheet](/api/v-bottom-sheet/) | 主要组件 |

<ApiInline hide-links />

## 组件结构

在 `v-bottom-sheet` 中推荐使用的组件如下：

* [v-card](/components/cards/)
* [v-list](/components/lists/)
* [v-sheet](/components/sheets/)

![底部面板解释性说明](https://cdn.vuetifyjs.com/docs/images/components/v-bottom-sheet/v-bottom-sheet-anatomy.png)

| 元素 / 区域 | 描述                       |
| ------- | ------------------------ |
| 1. 容器   | 底部面板是一个带有动画的从屏幕底部升起的对话框。 |

## 指南

`v-bottom-sheet` 组件是 [v-dialog](/components/dialogs/) 组件的些许修改，它和后者不同在于从屏幕底部滑动出现。它使用对话框的模式展现其他的元素。可以使用 `v-model` 属性或者使用 `activator` 插槽来对其进行控制。

下面的代码段展现了基本的 `v-bottom-sheet` 组件用法：

```html
<v-bottom-sheet>
  <v-card
    title="Bottom Sheet"
    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis."
  ></v-card>
</v-bottom-sheet>
```

### 属性

`v-bottom-sheet` 组件可以使用 [v-dialog](/api/v-dialog/) 全部的可用属性。

#### 模型 (Model)

**v-model** （或者 **model-value**）用于控制底部面板的可见性。

<ExamplesExample file="v-bottom-sheet/prop-model" />

这也与 `[activator](/api/v-bottom-sheet/#slots-activator)` 插槽协同工作。

#### 嵌入 (Inset)

使用 **inset** 属性，可以减少区域的宽度（桌面版）至 70%。也可以使用 **width** 属性进一步减小。

<ExamplesExample file="v-bottom-sheet/prop-inset" />

### 插槽

`v-bottom-sheet` 组件可以使用 [v-dialog](/api/v-dialog#slots) 的全部插槽。

![底部面板插槽](https://cdn.vuetifyjs.com/docs/images/components/v-bottom-sheet/v-bottom-sheet-slots.png)

| 插槽           | 描述                     |
| ------------ | ---------------------- |
| 1. Default   | 默认插槽                   |
| 2. Activator | Activator 插槽被用于打开底部面板。 |

::: info
**activator** 插槽在使用 **v-model** 属性时不是必须的。
:::

### 示例

下面的例子展示了 `v-bottom-sheet` 更为高级的、更贴近真实世界的用法。

#### 音乐播放器

使用嵌入式底部工作表，你可以制作一些实用的组件，比如这个简单的音乐播放器。

<ExamplesExample file="v-bottom-sheet/misc-player" />

#### 在列表中打开

通过将功能列表合并到底部表单中，您可以创建一个简单的 'open in' 组件。

<ExamplesExample file="v-bottom-sheet/misc-open-in-list" />
