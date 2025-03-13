---
meta:
  nav: 警告框 (Alerts)
  title: Alert 提示框
  description: V-alert 组件用于向用户传达信息。为了突出，提示框有四种上下文风格。
  keywords: v-alert, alerts, vue alert 组件, vuetify alert 组件
related:
  - /components/buttons/
  - /components/icons/
  - /components/snackbars/
features:
  figma: true
  github: /components/VAlert/
  label: 'C: VAlert'
  report: true
---

# 警告框 (Alerts)

`v-alert` 组件是通过整体性的使用类型，图标和颜色来向用户传递重要信息的组件。

![Alert Entry](https://cdn.vuetifyjs.com/docs/images/components-temp/v-alert/v-alert-entry.png)

<PageFeatures />

## 使用

警告框使用了特殊版本的 [v-sheet](/components/sheets/) 组件来吸引用户的注意力。它和 [v-banner](/components/banners/) 在功能上类似，不同的是 `v-alert` 和内容是内联 (inline) 布局，且在应用中可以多次使用。

<ExamplesUsage name="v-alert" />

<PromotedEntry />

## API

| 组件                                   | 描述                                           |
| ------------------------------------ | -------------------------------------------- |
| [v-alert](/api/v-alert/)             | 主要组件                                         |
| [v-alert-title](/api/v-alert-title/) | 用来显示 `v-alert` 组件的标题的子组件。也可以用 `#title` 插槽实现。 |

## 组件结构

`v-alert` 中元素的推荐放置是：

* 在最左边放置 `v-icon`
* 将 `v-alert-title` 置于整体性图标右边
* 将文本内容放在标题下方
* 将关闭操作放在最右边

![Alert Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-alert/v-alert-anatomy.png)

| 元素 / 区域     | 描述                                                 |
| ----------- | -------------------------------------------------- |
| 1. 容器       | 包含了所有 `v-alert` 组件的警告框容器                           |
| 2. 图标       | 展示警告框的整体含义的图标；例如 **success, info, warning, error** |
| 3. 标题       | 某个增大字号的标题文字                                        |
| 4. 文字       | 显示文本和其他内联元素的区域                                     |
| 5. 关闭图标（可选） | 用于隐藏 `v-alert` 组件                                  |

<ApiInline hide-links />

## 指南

`v-alert` 组件吸引用户注意的标注组件。与 [v-banner](/components/banners/)相比， `v-alert` 组件适合在应用中重复使用。Alert组件的颜色源自它的**type** 属性，让其设计得以配合应用的 [主题颜色](/features/theme/#custom-theme-colors) 和[图标集](/features/icon-fonts/#creating-a-custom-icon-set).

### 属性

除了标准的 [v-sheet](/components/sheets/) 所支持的强调效果和圆角效果。`v-alert` 组件还支持 **v-model**，**variants** 和 **density** 属性。

#### 内容

`v-alert` 组件支持使用 **title** 和**text** 属性来简单展示内容。这种实现方式用于那些不需要自定义样式的字符串。

下面的代码片段是一个基础的只包含文本的 `v-alert` 组件示例：

```html
<v-alert text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus..."></v-alert>
```

添加标题和添加值一样简单。下面的例子展示了如何给内容文本添加一个合适的标题：

<ExamplesExample file="v-alert/prop-content" />

注意警告没有颜色或者图标。这可以使用 **type** 属性来实现。

#### 类型

警告组件有四种上下文风格（type）：**success（成功）**、**info（提示）**、**warning（警告）** 和 **error（错误）**。每种风格都有其默认的 _color（颜色）_ 和 _icon（图标）_，当没有提供 **type** 时，`v-alert` 组件默认是灰色系的背景。

当要渲染一个基本的警告组件时，请添加一个上下文类型。下面的例子是一个成功类型的 `v-alert` 组件：

<ExamplesExample file="v-alert/prop-type" />

##### 可用状态参考

<table spaces-before="0">
  <tr>
    <th>
      类型
    </th>
    
    <th>
      颜色
    </th>
    
    <th>
      图标代替
    </th>
    
    <th align="center">
      图标
    </th>
  </tr>
  
  <tr>
    <td>
      成功
    </td>
    
    <td>
      <strong x-id="1">success</strong> { .text-success }
    </td>
    
    <td>
      $success
    </td>
    
    <td align="center">
      <v-icon icon="$success" />
    </td>
  </tr>
  
  <tr>
    <td>
      提示
    </td>
    
    <td>
      <strong x-id="1">info</strong> { .text-info }
    </td>
    
    <td>
      $info
    </td>
    
    <td align="center">
      <v-icon icon="$info" />
    </td>
  </tr>
  
  <tr>
    <td>
      警告
    </td>
    
    <td>
      <strong x-id="1">warning</strong> { .text-warning }
    </td>
    
    <td>
      $warning
    </td>
    
    <td align="center">
      <v-icon icon="$warning" />
    </td>
  </tr>
  
  <tr>
    <td>
      错误
    </td>
    
    <td>
      <strong x-id="1">error</strong> { .text-error }
    </td>
    
    <td>
      $error
    </td>
    
    <td align="center">
      <v-icon icon="$error" />
    </td>
  </tr>
</table>

#### 颜色和图标

The **type** property acts as a shorthand for a **color** and **icon** combination, you can use both props individually to achieve the same effect. The following example produces the same result as using **type="success"** by defining a custom color and using the icon lookup table to get the globally defined success icon:

```html
<v-alert
  color="success"
  icon="$success"
  title="Alert title"
  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus..."
></v-alert>
```

#### Density

The `v-alert` component has the ability to reduce its height in intervals using the density prop. This is useful when you need to reduce the vertical space a component needs. The following example reduces the vertical space by using **density="compact"**:

<ExamplesExample file="v-alert/prop-density" />

The **density** prop supports 3 levels of component height; **default**, **comfortable**, and **compact**.

#### 变体

The `v-alert` has 6 style variants, **elevated**, **flat**, **tonal**, **outlined**, **text**, and **plain**. By default, the `v-alert` component is **flat**; which means that it has a solid background and no box-shadow (elevation). The following example modifies the overall styling of the alert with a custom variant:

<ExamplesExample file="v-alert/prop-variant" />

#### 可关闭

The **closable** prop adds a [v-icon](/components/icons) on the far right, after the main content. This control hides the `v-alert` when clicked, setting it's internal model to **false**. Manually control the visibility of the alert by binding **v-model** or using **model-value**. The following example uses a dynamic model that shows and hides the `v-alert` component:

<ExamplesExample file="v-alert/prop-closable" />

The close icon automatically applies a default `aria-label` and is configurable by using the **close-label** prop or changing **close** value in your locale.

::: info
For more information on how to global modify your locale settings, navigate to the [Internationalization page](/features/internationalization).
:::

## Additional Examples

The following is a collection of `v-alert` examples that demonstrate how different the properties work in an application.

### Border color

The **border-color** prop removes the alert background in order to accent the **border** prop. If a **type** is set, it will use the type's default color. If no **color** or **type** is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).

<ExamplesExample file="v-alert/prop-border-color" />

### 图标

The **icon** prop allows you to add an icon to the beginning of the alert component. If a **type** is provided, this will override the default type icon. Additionally, setting the **icon** prop to _false_ will remove the icon altogether.

<ExamplesExample file="v-alert/prop-icon" />

### Outlined（轮廓）

**outlined** 属性将会反转提示框的风格，它会继承当前应用的 **color** 并应用与文本和边框且将其背景透明化。

<ExamplesExample file="v-alert/prop-outlined" />

## 无障碍

默认情况下，`v-alert`组件被赋予了[WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)的[**alert**](https://www.w3.org/TR/wai-aria/#alert)角色，这表示警告是“包含重要且通常具有时间敏感性信息的动态区域。”当使用**closable**属性时，关闭图标将获得相应的`aria-label`。这个值可以通过更改**close-label**属性或通过自定义[全局](/features/internationalization)的_close_属性的默认值来全局修改。
