---
meta:
  nav: 滚动
  title: 滚动指令
  description: 滚动指令使你能够在屏幕或元素滚动时有条件地调用方法。
  keywords: 滚动，vuetify 滚动指令，vue 滚动指令，窗口滚动指令。
related:
  - /components/app-bars/
  - /components/bottom-navigation/
  - /directives/touch/
---

# 滚动指令

`v-scroll` 指令允许您在窗口、指定目标或元素本身( 使用`.self` 修饰符)滚动时提供回调。

<PageFeatures />

<PromotedEntry />


<!-- ## Usage

The default behavior is to bind to the window. If no additional configuration options are needed, you can simply pass your callback function.

<ExamplesExample file="v-scroll/usage" /> -->

## API

| 指令                                   | 描述   |
| ------------------------------------ | ---- |
| [v-scroll](/api/v-scroll-directive/) | 滚动指令 |

<ApiInline hide-links />

## 示例

### 选项

#### Self

`v-scroll` 默认针对 `window`，但也可以监视它所绑定的元素。在以下示例中，我们使用 **self** 修饰符，`v-scroll.self`，特别监视 [`v-card`](/components/cards) 元素。这导致当滚动卡片内容时，方法 `onScroll` 被调用；计数器递增。

<ExamplesExample file="v-scroll/option-self" />

#### Target

为了更好地调整方法，您可以给指定目标绑定滚动事件监听器。

<ExamplesExample file="v-scroll/option-target" />
