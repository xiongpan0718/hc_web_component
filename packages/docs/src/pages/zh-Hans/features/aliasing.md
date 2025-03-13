---
meta:
  title: 别名
  description: 描述
  keywords: 关键词
related:
  - /features/blueprints/
  - /features/global-configuration/
  - /features/treeshaking/
features:
  report: true
---

# 别名 & 虚拟组件

使用自定义别名创建扩展 Vuetify 内置组件的虚拟组件。

<PageFeatures />

<PromotedEntry />

## 使用

使用别名可以让你通过基础的 Vuetify 组件来创建自定义的组件实现。首先，引用你想继承的组件，然后为其提供一个独有的键值，作为它的新名字：

```js { resource="src/plugins/vuetify.js"}
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  aliases: {
    MyButton: VBtn,
    MyButtonAlt: VBtn,
  },
})
```

::: info
虽然在构建生产版本应用时会自动应用摇树 (Treeshaking) 算法，但在开发过程中应当使用组件完整路径来引入组件。例如，使用`vuetify/components/VBtn` 而不是 `vuetify/components` 来保证在开发模式下编译器不会引入多余的组件，因而提升性能。
:::

## 虚拟组件默认值

虚拟组件可以访问 Vuetify 的 [ 全局配置](/features/global-configuration/)。别名的默认配置和内置组件相同，并不需要额外步骤。在下面的示例中，**MyButton** 使用了 [v-btn 属性](/api/v-btn/#props) 来改变它默认的 **variant** 属性。

```js { resource="src/plugins/vuetify.js"}
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  aliases: {
    MyButton: VBtn,
  },
  defaults: {
    VBtn: { variant: 'flat' },
    MyButton: { variant: 'tonal' },
  },
})
```

## 嵌套默认值

根据组件的阶层关系，可以设定对应组件的默认的属性来改变样式。在下面的示例中， [v-btn](/components/buttons/) 和 **MyButton** 嵌套在 [v-card](/components/cards/) 组件内时交换颜色。

```js { resource="src/plugins/vuetify.js"}
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  aliases: {
    MyButton: VBtn,
  },
  defaults: {
    MyButton: {
      color: 'primary',
      variant: 'tonal',
    },
    VBtn: {
      color: 'secondary',
      variant: 'flat',
    },
    VCard: {
      MyButton: { color: 'secondary' },
      VBtn: { color: 'primary' },
    },
  },
})
```
