---
meta:
  title: 主题
  description: 瞬间设置你的应用程序的主题和补充颜色。
  keywords: theme, themes, theming, color, colors
related:
  - /styles/colors/
  - /styles/transitions/
  - /getting-started/wireframes/
features:
  report: true
---

# 主题配置

Customize your application's default text colors, surfaces, and more. Easily modify your theme programmatically in real time. Vuetify comes with standard support for light and dark variants.

<PageFeatures />

<PromotedEntry />

## API

| 产品特点                                       | 描述                                                                                     |
| ------------------------------------------ | -------------------------------------------------------------------------------------- |
| [useTheme](/api/use-theme/)                | The theme composable allows you to get information about, and modify the current theme |
| [v-theme-provider](/api/v-theme-provider/) | 主题提供器组件可以修改子组件的主题                                                                      |

<ApiInline hide-links />

## 起步

Vuetify comes with two themes pre-installed, `light` and `dark`. To set the default theme of your application, use the **defaultTheme** option.

### Javascript

Example with only the **defaultTheme** value

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  }
})
```

添加新主题就像在**theme.themes**对象中定义一个新属性一样简单。主题是一组颜色和选项的集合，它们可以改变应用程序的整体外观和感觉。这些选项中的一个指定主题是**light**（浅色）还是**dark**（深色）的变化。 这使得Vuetify能够实现Material Design概念，例如高亮的表面，在颜色上越往上越浅。你可以在官方的[Material Design](https://material.io/design/color/dark-theme.html)页面上了解更多关于深色主题的信息。

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})
```

### TypeScript

Example with only the **defaultTheme** value

```ts { resource="src/plugins/vuetify.ts" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
})
```

When using Typescript you may use the `ThemeDefinition` type to get type hints for the structure of the theme object.

```ts { resource="src/plugins/vuetify.ts" }
import { createApp } from 'vue'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})
```

## 更改主题

This is used when you need to change the theme during runtime

```html { resource="src/App.vue" }
<template>
  <v-app>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
    ...
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
```

You should keep in mind that most of the Vuetify components support the **theme** prop. When used a new context is created for _that_ specific component and **all** of its children. In the following example, the [v-btn](/components/buttons/) uses the **dark** theme because it is applied to its parent [v-card](/components/cards/).

```html
<template>
  <v-app>
    <v-card theme="dark">
      <!-- button uses dark theme -->
      <v-btn>foo</v-btn>
    </v-card>
  </v-app>
</template>
```

You can use the `<v-theme-provider>` component to dynamically apply different themes to larger sections of your application, without having to set the **theme** prop on each individual component. In the following example, we apply a custom theme named `high-contrast`.

```html
<template>
  <v-app>
    <!-- uses the current default theme -->
    <v-card>...</v-card>

    <v-theme-provider theme="high-contrast">
      <!-- uses the high-contrast theme -->
      <v-card>...</v-card>
      <v-btn>...</v-btn>
    </v-theme-provider>
  </v-app>
</template>
```

## 自定义主题颜色

The Vuetify theme system supports adding custom colors. When configuring the Vuetify theme settings, add your custom colors to the **colors** object and Vuetify will generate a number of CSS classes and variables for you to use in your application.

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          ..., // We have omitted the standard color properties here to emphasize the custom one that we've added
          something: '#00ff00',
        },
      },
    },
  },
})
```

Custom properties for colors are a list of `red, green, blue`, so the `rgb()` or `rgba()` function has to be used:

```html
<template>
  <div class="bg-something on-something">background color with appropriate text color contrast</div>

  <div class="text-something">text color</div>

  <div class="border-something">border color</div>
</template>

<style>
  .custom-class {
    background: rgb(var(--v-theme-something))
    color: rgba(var(--v-theme-on-something), 0.9)
  }
</style>
```

## 颜色衍生(Color variations)

The Vuetify theme system can help you generate any number of **variations** for the colors in your theme. The following example shows how to generate 1 lighten and 2 darken variants for the `primary` and `secondary` colors.

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    variations: {
      colors: ['primary', 'secondary'],
      lighten: 1,
      darken: 2,
    },
    themes: {
      //
    },
  },
})
```

```html
<template>
  <div class="text-primary-lighten-1">text color</div>

  <div class="text-primary-darken-1">text color</div>

  <div class="text-primary-darken-2">text color</div>
</template>
```

## 禁用主题

The theme functionality can be disabled by setting the **theme** configuration property to `false`. This prevents the creation of the Vuetify stylesheet, and theme classes will not be applied to components.

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: false,
})
```

## 主题对象结构

```ts
interface ThemeInstance {
  /**
  * 原始主题对象
  * 可以被修改以添加新的主题或更新现有的颜色
   */
  themes: Ref<{ [name: string]: ThemeDefinition }>

  /**
   * 当前主题名称
   * 从父组件继承
   */
  readonly name: Ref<string>

  /** 处理后的主题对象，包括自动生成的颜色 */
  readonly current: Ref<ThemeDefinition>
  readonly computedThemes: Ref<{ [name: string]: ThemeDefinition }>

  readonly global: {
    /** Name of the current global theme */
    name: Ref<string>

    /**
     * 当前全局主题的处理后主题对象
     * 等同于 `theme.computedThemes.value[theme.global.name.value]`
     */
    readonly current: Ref<ThemeDefinition>
  }
}
```

## CSP Nonce

带有 `script-src` 或 `style-src`  的页面可能需要为嵌入式样标签指定一个 **nonce** 以启用的 CSP 规则。

```html
<!-- Use with script-src -->
Content-Security-Policy: script-src 'self' 'nonce-dQw4w9WgXcQ'

<!-- Use with style-src -->
Content-Security-Policy: style-src 'self' 'nonce-dQw4w9WgXcQ'
```

```ts
// src/plugins/vuetify.js

import {createVuetify} from 'vuetify'

export const vuetify = createVuetify({
  theme: {
    cspNonce: 'dQw4w9WgXcQ',
  },
})
```

## 实现

Vuetify generates theme styles at runtime according to the given configuration. The generated styles are injected into the `<head>` section of the DOM in a `<style>` tag with an **id** of `vuetify-theme-stylesheet`.
