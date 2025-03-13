---
meta:
  title: 空状态 (Empty state)
  description: The empty state component is used to indicate that a list is empty or that no search results were found.
  keywords: empty state, no results, no data, no items, no content, no records, no information, no search results
related:
  - /components/buttons/
  - /components/icons/
  - /components/avatars/
features:
  report: true
  spec: https://m2.material.io/design/communication/empty-states.html
  label: "C: VEmptyState"
  github: /components/VEmptyState/
---

# 空状态 (Empty state)

`v-empty-state` 组件用于表示某个列表是空的或者搜索结果是空的。

<PageFeatures />

::: success

此特性在 [v3.6.0](/getting-started/release-notes/?version=v3.6.0) 引入。

:::

## 使用

基本的空状态由标题和描述组成。它还可以包括一个图标和一个按钮。

<ExamplesUsage name="v-empty-state" />

<PromotedEntry />

## API

| 组件                                   | 描述   |
| ------------------------------------ | ---- |
| [v-empty-state](/api/v-empty-state/) | 主要组件 |

<ApiInline hide-links />

## 指南

The `v-empty-state` component is used to indicate that a page or list is empty or that no search results were found. It can be used in a variety of contexts, such as a list of items, a search results page, or a page with no content.

### 属性

The `v-empty-state` component has a multitude of props that allow you to customize its appearance and behavior.

#### 内容

There are three main properties for configuring text content, **title**, **subtitle**, and **text**.

<ExamplesExample file="v-empty-state/prop-content" />

#### Media

Add an icon or image to the empty state to help convey its purpose.

<ExamplesExample file="v-empty-state/prop-media" />

#### 行为

Add a button to the empty state to help users take action.

<ExamplesExample file="v-empty-state/prop-actions" />

### 插槽

The `v-empty-state` component has numerous slots that make it easy to customize the default behavior.

| 插槽       | 描述                                    |
| -------- | ------------------------------------- |
| 1. 默认    | 默认插槽                                  |
| 2) Media | The media slot is for images or icons |
| 3. 标题    | The main title slot                   |
| 4) 子标题   | The subtitle slot                     |
| 5. 文字    | The text slot                         |
| 6) 行为    | The actions slot                      |

#### 默认值

The default slot is positioned between **text** and **actions**.

<ExamplesExample file="v-empty-state/slot-default" />

#### 标题

It's simple to customize the font-sizing of the title using utility classes.

<ExamplesExample file="v-empty-state/slot-title" />

#### Custom Actions

By default, only 1 action is displayed through configuration. To add more options, utilize the **actions** slot.

<ExamplesExample file="v-empty-state/slot-actions" />

## 示例

The following are a collection of examples that demonstrate more advanced and real world use of the `v-empty-state` component.

### Astro dog

This example demonstrates how to use the `v-empty-state` component to create a fun and engaging empty state.

<ExamplesExample file="v-empty-state/misc-astro-dog" />

### Astro cat

This example utilizes components such as [v-tabs](/components/tabs/) and [v-window](/components/windows/) to create a more complex empty state.

<ExamplesExample file="v-empty-state/misc-astro-cat" />
