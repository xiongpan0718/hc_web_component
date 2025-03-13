---
emphasized: true
meta:
  nav: 头像 (Avatars)
  title: Avatar 头像
  description: The avatar component is used to control the size and border radius of an image. It can be used with numerous components to provide better visual context.
  keywords: 头像，vuetify 头像组件，vue 头像组件
related:
  - /components/badges/
  - /components/icons/
  - /components/lists/
features:
  figma: true
  github: /components/VAvatar/
  label: 'C: VAvatar'
  report: true
---

# 头像 (Avatars)

The `v-avatar` component is typically used to display circular user profile pictures. This component will allow you to dynamically size and add a border radius of responsive images, icons, and text.  When **rounded** prop set to `0` will display an avatar without border radius.

![Avatar Entry](https://cdn.vuetifyjs.com/docs/images/components-temp/v-avatar/v-avatar-entry.png)

<PageFeatures />

## 使用

头像以最简单的形式在圆形容器中显示内容。

<ExamplesUsage name="v-avatar" />

<PromotedEntry />

## API

| 组件                         | 描述   |
| -------------------------- | ---- |
| [v-avatar](/api/v-avatar/) | 主要组件 |

## 组件结构

`v-avatar` 中元素的推荐放置是：

* Place a [v-img](/components/images/) or [v-icon](/components/icons/) component within the default *slot*
* 文字性的内容也放置于默认 *插槽*

![Avatar Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-avatar/v-avatar-anatomy.png)

| 元素 / 区域 | 描述                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------------ |
| 1. 容器   | The Avatar container that typically holds a [v-icon](/components/icons/) or [v-img](/components/images/) component |

<ApiInline hide-links />

## 示例

### 属性

#### 尺寸 (Size)

`size` 属性允许你变更头像组件的宽高。

<ExamplesExample file="v-avatar/prop-size" />

#### 方形头像

`rounded` 属性可以移除头像组件的圆角，给予你一个方形的头像。

<ExamplesExample file="v-avatar/prop-tile" />

### 插槽

#### 默认插槽

`v-avatar` 的默认插槽允许你渲染 `v-icon` 组件，图像，或者文字。搭配其他的属性，就可以打造独一无二的头像组件。

<ExamplesExample file="v-avatar/slot-default" />

<PromotedPromoted />

### 杂项

#### 高级用法

将头像与其他组件组合在一起，你就可以构建漂亮的用户界面。

<ExamplesExample file="v-avatar/misc-advanced" />

另一个例子是将头像和菜单结合起来。

<ExamplesExample file="v-avatar/misc-avatar-menu" />

#### 个人名片

Using the **rounded** prop value `0`, we can create a sleek hard-lined profile card.

<ExamplesExample file="v-avatar/misc-profile-card" />
