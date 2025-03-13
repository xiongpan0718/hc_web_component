---
meta:
  title: 显示 & 平台
  description: Access display viewport information using the Vuetify Breakpoint composable.
  keywords: breakpoints, grid breakpoints, platform details, screen size, display size
related:
  - /directives/resize/
  - /styles/display/
  - /styles/text-and-typography/
features:
  report: true
---

# 显示 & 平台

显示组合式函数提供了关于当前设备的大量信息。

<PageFeatures />

<PromotedEntry />

## 使用

**useDisplay** 组合式函数提供了关于当前设备多个方面的信息。

这样，您就可以根据窗口大小、设备类型和 SSR 状态来控制应用程序的各个方面。此可组合类可与 [grids](/components/grids/) 和其他响应式实用工具类（例如 [display](/styles/display/)）配合使用。

以下展示了如何访问应用的显示信息：

```html { resource="Composition.vue" }
<script setup>
  import { onMounted } from 'vue'
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay()

  onMounted(() => {
    console.log(mobile.value) // false
  })
</script>
```

如果你仍旧在使用 Vue 的选项式 API，那么你可以使用全局变量 **$vuetify** 来获得显示的信息。注意在选项式 API 中，refs 引用无需使用 `.value` 即可访问。

```html { resource="Options.vue" }
<script>
  export default {
    mounted () {
      console.log(this.$vuetify.display.mobile)
    },
  }
</script>
```

## API

| 组件                              | 描述    |
| ------------------------------- | ----- |
| [useDisplay](/api/use-display/) | 组合式函数 |

## 关键点大小和阈值

Threshold values generate the ranges used for various breakpoints seen throughout vuetify and the `useDisplay` composable. The system uses an "and up" mentality starting from `xs` at 0px. The default threshold values are displayed below.

<FeaturesBreakpointsTable />

These ranges power the various additional `AndUp` / `AndDown` properties accessible in `useDisplay`

```ts
{
  smAndDown: boolean // < 960px
  smAndUp: boolean // > 600px
  mdAndDown: boolean // < 1280px
  mdAndUp: boolean // > 960px
  lgAndDown: boolean // < 1919px
  lgAndUp: boolean // > 1280px
  xlAndDown: boolean // < 2559px
  xlAndUp: boolean // > 1920px
}
```

## 选项

The **useDisplay** composable has several configuration options, such as the ability to define custom values for breakpoints.

For example, the **thresholds** option modifies the values used for viewport calculations. The following snippet overrides **thresholds** values *xs* through *lg* and sets **mobileBreakpoint** to `sm`.

```js { resource="src/plugins/vuetify.js" }
import { createVuetify} from 'vuetify'

export default createVuetify({
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  },
})
```

::: info
The **mobileBreakpoint** option accepts numbers and breakpoint keys.
:::

## 示例

In the following example, we use a switch statement and the current breakpoint name to modify the **height** property of the [v-card](/components/cards/) component:

```html { resource="Component.vue" }
<template>
  <v-card :height="height">
    ...
  </v-card>
</template>

<script setup>
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'

  const { name } = useDisplay()

  const height = computed(() => {
    // name is reactive and
    // must use .value
    switch (name.value) {
      case 'xs': return 220
      case 'sm': return 400
      case 'md': return 500
      case 'lg': return 600
      case 'xl': return 800
      case 'xxl': return 1200
    }

    return undefined
  })
</script>
```

### 接口

```ts
{
  // Breakpoints
  xs: boolean // 0 - 595
  sm: boolean // 600 - 959
  md: boolean // 960 - 1279
  lg: boolean // 1280 - 1919
  xl: boolean // > 1920
  xxl: boolean
  smAndDown: boolean // < 960
  smAndUp: boolean // > 600
  mdAndDown: boolean // < 1280
  mdAndUp: boolean // > 960
  lgAndDown: boolean // < 1919
  lgAndUp: boolean // > 1280
  xlAndDown: boolean
  xlAndUp: boolean // < 1920

  // true if screen width < mobileBreakpoint
  mobile: boolean
  mobileBreakpoint: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

  // Current breakpoint name (e.g. 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl')
  name: string

  // The current value of window.innerHeight and window.innerWidth
  height: number
  width: number

  // Device userAgent information
  platform: {
    android: boolean
    ios: boolean
    cordova: boolean
    electron: boolean
    chrome: boolean
    edge: boolean
    firefox: boolean
    opera: boolean
    win: boolean
    mac: boolean
    linux: boolean
    touch: boolean
    ssr: boolean
  }

  // The values used to make Breakpoint calculations
  thresholds: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
  }
}
```

## 使用 Setup 函数

Use the **useDisplay** composable alongside Vue 3's `setup` function to harness the power of the [Composition API](https://v3.vuejs.org/guide/composition-api-setup.html). In this example we show how to toggle the **fullscreen** property of `v-dialog` when the mobile breakpoint is active.

```html { resource="Component.vue" }
<template>
  <v-dialog :fullscreen="mobile">
    ...
  </v-dialog>
</template>

<script setup>
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay()
</script>
```

### 关键点大小条件

Breakpoint and conditional values return a `boolean` that is derived from the current viewport size. Additionally, the **breakpoint** composable follows the [Vuetify Grid](/components/grids) naming conventions and has access to properties such as **xs**, **smAndUp**, **mdAndDown**, and many others. In the following example we use the `setup` function to pass the _xs_ and _mdAndUp_ values to our template:

```html { resource="Component.vue" }
<template>
  <v-sheet
    :min-height="mdAndUp ? 300 : '20vh'"
    :rounded="xs"
  >
    ...
  </v-sheet>
</template>

<script setup>
  import { useDisplay } from 'vuetify'

  // Destructure only the keys you want to use
  const { xs, mdAndUp } = useDisplay()
</script>
```

Using the _dynamic_ display values, we are able to adjust the minimum height of [v-sheet](/components/sheets/) to `300` when on the _medium_ breakpoint or greater and only show rounded corners on _extra small_ screens:

## Component Mobile Breakpoints

::: success
此特性在 [v3.4.0 (Blackguard)](/getting-started/release-notes/?version=v3.4.0) 版本引入。
:::

Some components within Vuetify have a **mobile-breakpoint** property which allows you to override the default value. These components reference the global mobileBreakpoint value that is generated at runtime using the provided options in the `vuetify.js` file.

The following components have built in support for the **mobile-breakpoint** property:

| 组件                                                     |
| ------------------------------------------------------ |
| [v-banner](/components/banners/)                       |
| [v-navigation-drawer](/components/navigation-drawers/) |
| [v-slide-group](/components/slide-groups/)             |

By default, **mobileBreakpoint** is set to **lg**, which means that if the window is less than _1280_ pixels in width (which is the default value for the **lg** threshold), then the **useDisplay** composable will update its **mobile** value to `true`.

For example, the [v-banner](/components/banners/) component implements different styling when its mobile versus desktop. In the following example, The first banner uses the global **mobile-breakpoint** value of **lg** while the second overrides this default with **580**:

```html { resource="Component.vue" }
<template>
  <div>
    <v-banner>
      ...
    </v-banner>

    <v-banner mobile-breakpoint="580">
      ...
    </v-banner>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { useDisplay } from 'vuetify'

  const { width, mobile } = useDisplay()

  onMounted(() => {
    console.log(width.value) // 960
    console.log(mobile.value) // true
  })
</script>
```

如果屏幕宽度为 1024 像素，第二个横幅将不会转换为移动端状态。

### useDisplay overrides

Specify a custom **mobileBreakpoint** value directly to the [useDisplay](/api/use-display/) composable and override the global value. In the following example we use a custom mobileBreakpoint value of **580**:

```html { resource="Component.vue" }
<script setup>
  import { onMounted } from 'vue'
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay({ mobileBreakpoint })

  // Given a viewport width of 960px
  onMounted(() => {
    console.log(mobile.value) // false
  })
</script>
```

If you supply a value for the **name** argument, utilize the **displayClasses** property to apply the appropriate classes to your component. In the next example, the following classes would be applied to the root element of the component:

```html { resource="Component.vue" }
<template>
  <div
    :class="[
      'v-component',
      displayClasses,
    ]"
  >
    <!-- v-component--mobile -->
  </div>
</template>

<script setup>
  import { defineName } from 'vue'
  import { useDisplay } from 'vuetify'

  const { displayClasses } = useDisplay({ mobileBreakpoint }, 'v-component')
</script>
```

If you leave out the name argument, displayClasses will use the default name set by Vue. The following example uses the default name of the local component:

```html { resource="AppDrawer.vue" }
<template>
  <v-navigation-drawer
    :class="[
      displayClasses, // 'app-drawer--mobile'
    ]"
  >
    ...
  </v-navigation-drawer>
</template>

<script setup>
  import { useDisplay } from 'vuetify'

  const { displayClasses } = useDisplay({ mobileBreakpoint })
</script>
```
