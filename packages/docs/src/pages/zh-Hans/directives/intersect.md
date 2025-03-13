---
meta:
  nav: 交叉观察器
  title: 交叉观察器指令
  description: 交点观察器指令利用了交点观察器API。它允许你确定元素何时在屏幕上可见。
  keywords: 交叉, vuetify交叉指令, 交叉观察器指令
related:
  - /components/cards/
  - /components/images/
  - /components/text-fields/
---

# 交叉观察器

`v-intersect` 指令使用了 [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)。它提供了一个易用的检测元素是否进入视口 (viewport) 的接口。这个指令同样也用在了 [v-lazy](/components/lazy) 组件上。

<PageFeatures />

<PromotedEntry />

## 使用

滚动窗口并观察彩色圆点。注意到当[v-card](/components/cards)进入视图时，它从错误状态变为成功状态。

<ExamplesExample file="v-intersect/usage" />

## API

| 指令                                         | 描述      |
| ------------------------------------------ | ------- |
| [v-intersect](/api/v-intersect-directive/) | 交叉观察器指令 |

<ApiInline hide-links />

## 示例

### 属性

#### 选项

`v-intersect`指令接受选项（进行配置）。可以在[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)看到可用选项。下面这个例子使用了 `threshold` 选项

<ExamplesExample file="v-intersect/prop-options" />
