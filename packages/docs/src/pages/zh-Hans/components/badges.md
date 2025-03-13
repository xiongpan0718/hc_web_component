---
meta:
  nav: 徽章 (Badges)
  title: Badge 徽章
  description: 徽章组件是一个用于元素的小状态描述符。这通常包含一个小数字或一组简短的字符。
  keywords: 徽章, vuetify 徽章组件, vue 徽章组件
related:
  - /components/avatars/
  - /components/icons/
  - /components/toolbars/
features:
  github: /components/VBadge/
  label: 'C: VBadge'
  report: true
---

# 徽章 (Badges)

`v-badge` 组件用于在内容的右上或者右下角显示图标或者文字内容，来向用户展示内容或者只是吸引用户的注意力。带徽章的内容通常是带有数字或者图标。<!-- !\[Badge Entry\](https://cdn.vuetifyjs.com/docs/images/components-temp/v-badge/v-badge-entry.png) -->

<PageFeatures />

## 使用

最简单形式的徽章显示在它包装的内容的右上角，并且需要徽章插槽。

<ExamplesUsage name="v-badge" />

<PromotedEntry />

## API

| 组件                       | 描述   |
| ------------------------ | ---- |
| [v-badge](/api/v-badge/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 点状徽章 (dot)

**dot** 属性移除了徽章的内容，并减少它的大小。这在你需要吸引用户注意力时非常有用。

<ExamplesExample file="v-badge/prop-dot" />

#### 行内徽章 (inline)

行内徽章可以放置于内容的任何部分，且无需 *default* 插槽。

<ExamplesExample file="v-badge/prop-inline" />

#### 内容 (content)

对于简单的文字，使用 **content** 属性能够在徽章上显示*值*。

<ExamplesExample file="v-badge/prop-content" />
