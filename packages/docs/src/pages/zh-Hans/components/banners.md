---
meta:
  nav: 横幅 (Banners)
  title: Banner 横幅
  description: The banner component displays an important and concise message for a user to address. It can also indicate actions that the user can take.
  keywords: banners, vuetify banner组件, vue banner组件
related:
  - /components/alerts/
  - /components/icons/
  - /components/snackbars/
features:
  figma: true
  github: /components/VBanner/
  label: 'C: VBanner'
  report: true
  spec: https://m2.material.io/components/banners
---

# 横幅 (Banners)

`v-banner` 组件用于展示给用户一个中度打断性的消息，并且可以提供一到两个操作。

![Banner Entry](https://cdn.vuetifyjs.com/docs/images/components-temp/v-banner/v-banner-entry.png)

<PageFeatures />

## 使用

Banners come in two variations **single-line** and **multi-line** (implicit). These can have icons and actions that you can use with your message.

<ExamplesUsage name="v-banner" />

<PromotedEntry />

## API

| 组件                                         | 描述                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------- |
| [v-banner](/api/v-banner/)                 | 主要组件                                                                |
| [v-banner-text](/api/v-banner-text/)       | 用于显示 `v-banner` 子标题的组件。同样可以使用 `#text` 插槽实现                          |
| [v-banner-actions](/api/v-banner-actions/) | 会修改默认 [v-btn](/components/buttons/) 的样式的子组件。同样也可以使用 `#actions` 插槽实现 |

<ApiInline hide-links />

## 组件结构

`v-banner` 中元素的推荐放置是：

* 将 `v-banner-avatar` 或者 `v-banner-icon` 放置于最左边
* 将 `v-banner-text` 放置于任何可视内容的右侧
* 将 `v-banner-actions` 放置于文字内容的右边，和底部留出距离

![Banner Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-banner/v-banner-anatomy.png)

| 元素 / 区域        | 描述                                          |
| -------------- | ------------------------------------------- |
| 1. 容器          | 所有 `v-banner` 组件需要的横幅容器。                    |
| 2. 头像 / 图标（可选） | 使用图标形式提高文字的可读性                              |
| 3. 文字          | 显示文本和其他内联元素的内容区域                            |
| 4. 操作（可选）      | 拥有若干例如 [v-btn](/components/buttons) 组件的内容区域 |

## 示例

### 属性

#### 行数 (Lines)

组件会根据 **lines** 属性来决定显示多少文字的内容。

<ExamplesExample file="v-banner/prop-lines" />

#### 粘连 (Sticky)

你可以设置 **sticky** 属性，来使横幅停留在屏幕顶部。

<ExamplesExample file="v-banner/prop-sticky" />

### 插槽

#### 行为

Banners may have one or two text buttons that don't stand out that much.

<ExamplesExample file="v-banner/slot-actions" />

#### 图标

图标插槽允许你明确控制其包含的内容和功能。

<ExamplesExample file="v-banner/slot-icon" />

#### Prepend

The prepend slot allows you to to explicitly control the content and functionality within it. Icons also help to emphasize a banner's message.

<ExamplesExample file="v-banner/slot-prepend" />
