---
meta:
  nav: 介绍
  title: 实验室介绍
  description: 用于在最后发布之前进行测试的开发中的组件集合。
  keywords: 实验室
related:
  - /getting-started/installation/
  - /getting-started/browser-support/
  - /introduction/sponsors-and-backers/
---

# Vuetify 实验室

在正式发布前体验并试用开发中的组件。

<PageFeatures />

## 实验室是什么？ { id=what-is-labs }

实验室是开发者使用处于 Alpha 阶段、未完成组件的新方式。

::: error
通过实验室提供的组件 **不能** 用于生产，只能用于测试目的。补丁发布将引入破坏性更改，且不提供任何支持。
:::

## 使用

只需要从`vuetify/labs`中引入即可使用一个实验室组件，下面的例子展示了如何在你的组件中引入并启用`v-picker`：

```html
<template>
  <v-picker />
</template>

<script setup>
  import { VPicker } from 'vuetify/labs/VPicker'
</script>
```

或者，你可以通过在你的 Vuetify 插件文件中导入组件，使其在全局可用：

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'
import { VPicker } from 'vuetify/labs/VPicker'

export default createVuetify({
  components: {
    VPicker,
  },
})
```

当Vuetify 实例化时，它将注册 `VPicker` 作为模板中一个可用的组件。

如果您想要安装所有可用的Vuetify 组件，请使用以下代码：

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

export default createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
})
```

<PromotedEntry />

## 可用组件

下面是用于Labs的可用和即将可用的组件列表：

| 组件                                                   | 描述              | 最低可用版本                                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------------------- |
| [v-calendar](/components/calendars/)                 | 日历组件            | [v3.4.9](/getting-started/release-notes/?version=v3.4.9)   |
| [v-date-input](/components/date-inputs/)             | 文件上传组件          | [v3.6.0](/getting-started/release-notes/?version=v3.6.0)   |
| [v-pull-to-refresh](/components/pull-to-refresh/)    | 一个通过屏幕滑动刷新内容的组件 | [v3.6.0](/getting-started/release-notes/?version=v3.6.0)   |
| [v-number-input](/components/number-input/)          | 数字数据组件          | [v3.5.10](/getting-started/release-notes/?version=v3.5.10) |
| [v-snackbar-queue](/components/snackbar-queue/)      | 消息条队列           | [v3.6.0](/getting-started/release-notes/?version=v3.6.0)   |
| [v-stepper-vertical](/components/vertical-steppers/) | 垂直版本的步骤条        | [v3.6.5](/getting-started/release-notes/?version=v3.6.5)   |
| [v-time-picker](/components/time-pickers/)           | 时间选择器组件         | [v3.5.12](/getting-started/release-notes/?version=v3.5.12) |
| [v-treeview](/components/treeview/)                  | 树形视图组件          | [v3.5.9](/getting-started/release-notes/?version=v3.5.9)   |

::: warning
实验室组件的API并**没有**最终确定下来，且随时可能改变，您**需要**做好在开发过程中将要遇到错误的准备。
:::
