---
meta:
  title: 过渡动画
  description: 利用 Vuetify 内置的 CSS 和 Javascript 将过渡应用到组件中。
  keywords: 运动, 过渡, vuetify 过渡
related:
  - /components/menus/
  - /styles/colors/
  - /components/expansion-panels/
---

# 过渡动画

流畅的动画有助于给用户界面带来很棒的感觉。使用 Vue 的过渡系统和可复用的功能组件，你可以轻松地控制应用程序的动画效果。大多数组件可以通过 **transition** 属性来改变他们的过渡效果。

<PageFeatures />

<PromotedEntry />

## API

| 名称                                                                               | 描述                                                                                                                                            |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [v-expand-transition](/api/v-expand-transition/)                                 | The expand transition is used in Expansion Panels and List Groups. There is also a horizontal version available with `v-expand-x-transition`. |
| [v-fab-transition](/api/v-fab-transition/)                                       | 在 `v-speed-dial` 组件中可以找到fab过渡的示例.                                                                                                             |
| [v-fade-transition](/api/v-fade-transition/)                                     | 在 Carousel 组件上可以找到淡入淡出过渡的示例。                                                                                                                  |
| [v-scale-transition](/api/v-scale-transition/)                                   | 许多 Vuetify 组件都包含一个 **transition** 属性允许你指定想要的效果。                                                                                               |
| [v-scroll-x-transition](/api/v-scroll-x-transition/)                             | X 轴滚动会使动画沿着水平轴线方向。                                                                                                                            |
| [v-scroll-y-transition](/api/v-scroll-y-transition/)                             | Y 轴滚动会使动画沿着垂直轴线方向。                                                                                                                            |
| [v-slide-x-reverse-transition](/api/v-slide-x-reverse-transition/)               | Slide X reverse transitions slide in from the right.                                                                                          |
| [v-slide-x-transition](/api/v-slide-x-transition/)                               | Slide X transitions slide in from the left.                                                                                                   |
| [v-slide-y-reverse-transition](/api/v-slide-y-reverse-transition/)               | Slide Y reverse transitions slide in from the bottom.                                                                                         |
| [v-slide-y-transition](/api/v-slide-y-transition/)                               | Slide Y transitions slide in from the top.                                                                                                    |
| [v-tab-reverse-transition](/api/v-tab-reverse-transition/)                       | Tab reverse transitions slide in from the right.                                                                                              |
| [v-tab-transition](/api/v-tab-transition/)                                       | Tab transitions slide in from the left.                                                                                                       |
| [v-toggle-slide-x-reverse-transition](/api/v-toggle-slide-x-reverse-transition/) | Toggle Slide X reverse transitions slide in from the right.                                                                                   |
| [v-toggle-slide-x-transition](/api/v-toggle-slide-x-transition/)                 | Toggle Slide X transitions slide in from the left.                                                                                            |
| [v-toggle-slide-y-reverse-transition](/api/v-toggle-slide-y-reverse-transition/) | Toggle Slide Y reverse transitions slide in from the bottom.                                                                                  |
| [v-toggle-slide-y-transition](/api/v-toggle-slide-y-transition/)                 | Toggle Slide Y transitions slide in from the top.                                                                                             |

<ApiInline hide-links />

## 示例


<!--
### Props

#### Custom Origin

Programmatically control the transition origin with a simple prop.

<ExamplesExample file="transitions/prop-custom-origin" />
-->

### 其他

#### Expand x

The expand transition is used in Expansion Panels and List Groups. There is also a horizontal version available with `v-expand-x-transition`.

<ExamplesExample file="transitions/misc-expand-x" />

#### Fab

在 `v-speed-dial` 组件中可以找到fab过渡的示例.

<ExamplesExample file="transitions/misc-fab" />

#### Fade

在 Carousel 组件上可以找到淡入淡出过渡的示例。

<ExamplesExample file="transitions/misc-fade" />

#### Scale

许多 Vuetify 组件都包含一个 **transition** 属性允许你指定想要的效果。

<ExamplesExample file="transitions/misc-scale" />

#### Scroll x

X 轴滚动过渡沿着水平轴继续。

<ExamplesExample file="transitions/misc-scroll-x" />

#### Scroll y

Y 轴滚动过渡沿着垂直轴继续。

<ExamplesExample file="transitions/misc-scroll-y" />

#### Slide x

X 轴滑动过渡可沿水平方向移动。

<ExamplesExample file="transitions/misc-slide-x" />

#### Slide y

动画使用应用程序的 `$primary-transition`。

<ExamplesExample file="transitions/misc-slide-y" />

#### Todo list

使用多个自定义转场，可以轻松实现简单的待办事项清单！

<ExamplesExample file="transitions/misc-todo" />


<!--
## Create your own

You can use Vuetify's transition helper function to easily create your own custom transitions. This function will return an object that you can import into Vue. Using Vue's [functional component](https://vuejs.org/v2/guide/render-function.html#Functional-Components) option will make sure your transition is as efficient as possible. Simply import the function:

```js
import { createSimpleTransition } from 'vuetify/components/transitions/createTransition'

const myTransition = createSimpleTransition('my-transition')

Vue.component('my-transition', myTransition)
```

The **createSimpleTransition** function accepts 1 argument, name. This will be the name that you can hook into with your style. This is an example of what `v-fade-transition` looks like:

```stylus
.fade-transition
  &-leave-active
    position: absolute

  &-enter-active, &-leave, &-leave-to
    transition: $primary-transition

  &-enter, &-leave-to
    opacity: 0
```
-->
