---
meta:
  title: Material 调色板
  description: Learn about the colors of Material Design. Consume the javascript color pack directly in your application.
  keywords: 颜色，material design 颜色，vuetify 颜色包，material 颜色类
related:
  - /features/theme/
  - /resources/themes/
  - /getting-started/wireframes/
---

# 颜色

Out of the box you get access to all colors in the [Material Design specification](https://material.io/design/color/the-color-system.html) through **sass** and **javascript**. These values can be used within your style sheets, your component files and on actual components via the **color** prop.

<PageFeatures />

<PromotedEntry />

## 类

Each color from the specification gets converted to a **background** and **text** variant for styling within your application through a class, e.g. `<div class="bg-red">` or `<span class="text-red">`. These class colors are defined [here](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/styles/settings/_colors.scss).

<ExamplesExample file="color/classes" />

Text colors also support **darken** and **lighten** variants using `text-{color}-{lighten|darken}-{n}`

<ExamplesExample file="color/text-classes" />

## Javascript 色彩包

Vuetify has an optional javascript color pack that you can import and use within your application. This can also be used to help define your application's theme.

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'

import colors from 'vuetify/util/colors'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          ...
        }
      },
    },
  },
})
```

## Sass 颜色包

While convenient, the color pack increases the CSS export size by ~30kb. Some projects may only require the classes that are created at runtime from the Vuetify **theme** system. To disable the color pack feature, follow [sass variables](/features/sass-variables) and set `$color-pack: false`{.text-no-wrap}.

```scss { resource="main.scss" }
@use 'vuetify' with (
  $color-pack: false,
);
```

## Material 色彩表

以下是按原色分组的 Material Design 调色板列表。

<FeaturesColorPalette />
