---
meta:
  nav: 无限滚动器 (Infinite scrollers)
  title: Infinite scroller component
  description: The Infinite scroll component is a container that loads more items when scrolling. It is useful when you need to display an unknown but large number of items.
  keywords: infinite scroll, vuetify infinite scroll component, vue infinite scroll component, v-infinite-scroll component
related:
  - /components/lists/
  - /components/data-tables/basics/
  - /components/data-iterators/
features:
  github: /components/VInfiniteScroll/
  label: 'C: VInfiniteScroll'
  report: true
---

# 无限滚动器 (Infinite scrollers)

`v-infinite-scroll` 组件用于展示某个潜在无限长度的列表，这个列表会在滚动时加载更多的元素。它可以支持水平方向或者垂直方向的列表。

![Infinite scroll Entry](https://cdn.vuetifyjs.com/docs/images/components/v-infinite-scroll/v-infinite-scroll-entry.png)

<PageFeatures />

::: success
此特性在 [v3.4.0 (Blackguard)](/getting-started/release-notes/?version=v3.4.0) 版本引入。
:::

## 使用

当滚动到底部时，可以选择自动加载新元素或者点击后加载新元素。

<ExamplesUsage name="v-infinite-scroll" />

当组件需要加载更多内容时，会触发 **load** 事件。它的参数是包含两个属性的对象。

- `side` tells you on which side new content should be added, either at the `'start'` or `'end'`. The return value of the function is a string that describes if the new content was loaded successfully or not.
- `done` is a callback function that should be called when the loading of new content is done. It takes a single parameter `status` that describes if the load was successful or not. See the table below for the possible values.

| 支持状态        | 描述                                                                                                                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `'ok'`      | Content was added succesfully                                                                                                                                                                |
| `'error'`   | Something went wrong when adding content. This will display the `error` slot                                                                                                                 |
| `'empty'`   | There is no more content to fetch. This will display the `empty` slot                                                                                                                        |
| `'loading'` | Content is currently loading. This will display a message that the content is loading. This status is only set internally by the component and should not be used with the **done** function |

<PromotedEntry />

## API

| 组件                                           | 描述   |
| -------------------------------------------- | ---- |
| [v-infinite-scroll](/api/v-infinite-scroll/) | 主要组件 |

<ApiInline hide-links />

## 组件结构

The `v-infinite-scroll` works with any content in its default slot.

![Infinite scroll Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-infinite-scroll/v-infinite-scroll-anatomy.png)

| 元素 / 区域 | 描述        |
| ------- | --------- |
| 1. 容器   | 无限滚动内容的容器 |
| 2. 加载部分 | 加载内容的区域   |

## 指南

The `v-infinite-scroll` component is a container that allows you to react to a user reaching the end of the content area. It is useful when you need to display an unknown but large number of items, and you don't want to load them all at once.

### 属性

The `v-infinite-scroll` component has several props that can be used to customize its behavior.

#### Mode

The default behavior of the component is to try to load more content automatically when the scrollbar gets close to the end. However, a manual mode is also supported, where the user needs to do some interaction to load the content. By default this is a button, but it can be customized with a [slot](#load-more)

<ExamplesExample file="v-infinite-scroll/prop-mode" />

#### 布局

The `v-infinite-scroll` component can be used with either vertical or horizontal scrolling.

<ExamplesExample file="v-infinite-scroll/prop-direction" />

#### Side

By default, the `v-infinite-scroll` component assumes that new content will appear at the end of existing content. But it also supports content being added to the start and appearing both at the beginning and the end.

When using the **start** side for content, the scrollbar will start at the bottom of the content.

<ExamplesExample file="v-infinite-scroll/prop-side-start" />

When using **both** sides for content, the scrollbar will start in the middle of the content.

<ExamplesExample file="v-infinite-scroll/prop-side-both" />

#### 颜色

The default load more button and loading spinner can be colored with the **color** prop.

<ExamplesExample file="v-infinite-scroll/prop-color" />

### 插槽

The `v-infinite-scroll` component exposes several slots that allow you to further customize its behaviour.

![Infinite scroll Slots](https://cdn.vuetifyjs.com/docs/images/components/v-infinite-scroll/v-infinite-scroll-slots.png)

| 元素 / 区域      | 描述                                                                              |
| ------------ | ------------------------------------------------------------------------------- |
| 1. 容器        | 默认插槽                                                                            |
| 2. Load-more | The slot shown when the mode is set to `manual` and the status is not `loading` |
| 3. Loading   | The slot is shown when the mode is set to `manual` and status is `loading`      |
| 4. Empty     | The slot shown when the status is `empty`                                       |
| 5. Error     | The slot is shown when the status is `error`                                    |

#### 加载

You can customize the loading message with the **loading** slot.

<ExamplesExample file="v-infinite-scroll/slot-loading" />

#### Load more

When using **manual** mode you can customize the action required to load more content with the **load-more** slot.

<ExamplesExample file="v-infinite-scroll/slot-load-more" />

#### Empty

You can customize the empty message with the **empty** slot.

<ExamplesExample file="v-infinite-scroll/slot-empty" />

#### 出错

The **error** slot is shown if the status `'error'` is returned from the `done` callback.

<ExamplesExample file="v-infinite-scroll/slot-error" />

### 示例

The following is a collection of examples that demonstrate more advanced and real-world use of the `v-infinite-scroll` component.

#### Virtualized infinite scroller

If the items in your infinite list are of a uniform size, you can quite easily virtualize the list to only render a small number of items regardless of how far you scroll in either direction.

<ExamplesExample file="v-infinite-scroll/misc-virtual" />
