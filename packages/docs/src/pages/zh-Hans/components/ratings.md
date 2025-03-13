---
meta:
  nav: 评价 (Ratings)
  title: Rating 评级
  description: 星级评级组件是一个专门的小工具，通过评级收集用户反馈。
  keywords: 星级评级，vuetify 星级评级组件，vue 星级评级组件，评级组件
related:
  - /components/cards
  - /components/icons
  - /components/lists
features:
  github: /components/VRating/
  label: 'C: VRating'
  report: true
---

# 评价 (Ratings)

`v-rating` 组件是构建用户界面时，特别却重要的一环。通过评分组件，收集用户的评价，虽然简单，但是可以为你的产品或者应用获取大量的用户评价。

<PageFeatures />

## 使用

`v-rating` 组件为收集用户反馈提供了一个简单的界面。

<ExamplesUsage name="v-rating" />

<PromotedEntry />

## API

| 组件                         | 描述   |
| -------------------------- | ---- |
| [v-rating](/api/v-rating/) | 主要组件 |

<ApiInline hide-links />

## 示例

### 属性

#### 颜色

`v-rating` 组件可以根据您的需要进行着色，您可以设置选定和未选定的颜色。

<ExamplesExample file="v-rating/prop-color" />

#### 间距 (Density)

Control the space occupied by `v-rating` items using the **density** prop.

<ExamplesExample file="v-rating/prop-density" />

#### 可清除

Clicking on a current rating value can reset the rating by using **clearable** prop.

<ExamplesExample file="v-rating/prop-clearable" />

#### 只读

For ratings that are not meant to be changed you can use **readonly** prop.

<ExamplesExample file="v-rating/prop-readonly" />

#### 悬停效果

When using the **hover** prop, the rating icons will become a solid color and slightly increase its scale when the mouse is hovered over them.

<ExamplesExample file="v-rating/prop-hover" />

#### 标签文字

The `v-rating` component can display labels above or below each item.

<ExamplesExample file="v-rating/prop-item-labels" />

#### 图标 (Icons)

You can use custom icons.

<ExamplesExample file="v-rating/prop-icons" />

#### 长度

Change the number of items by modifying the the **length** prop.

<ExamplesExample file="v-rating/prop-length" />

#### 半增量

The **half-increments** prop increases the granularity of the ratings, allow for `.5` values as well.

<ExamplesExample file="v-rating/prop-half-increments" />

#### 尺寸

使用`v-icon`中提供的相同尺寸等级，或提供您自己的<strong x-id=“1”>size</strong> prop。

<ExamplesExample file="v-rating/prop-size" />

#### 辅助标签

Provide a label to assistive technologies for each item.

<ExamplesExample file="v-rating/prop-icon-label" />

### 插槽

#### 项目插槽

Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.

<ExamplesExample file="v-rating/slot-item" />

#### 自定义标签文字插槽

Any arbitrary content could be displayed for labels in **item-label** slot.

<ExamplesExample file="v-rating/slot-item-label" />

### 其他


<!-- #### Advanced usage

The `v-rating` component fits right in with existing components. Build truly complex examples with rich features and beautiful designs.

<ExamplesExample file="v-rating/misc-advanced" /> -->

#### 卡片评级

评级组件与产品搭配良好，使你能够收集和显示客户反馈。

<ExamplesExample file="v-rating/misc-card" />

<ExamplesExample file="v-rating/misc-card-overview" />
