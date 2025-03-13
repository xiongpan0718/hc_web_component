---
meta:
  title: 国际化 (i18n)
  description: Vuetify 支持不同地域的语言国际化 (i18n)，并且轻松集成 vue-i18n。
  keywords: i18n, 语言国际化
related:
  - /features/accessibility/
  - /components/locale-providers/
  - /getting-started/browser-support/
features:
  report: true
---

# 国际化 (i18n)

Vuetify 支持其组件的语言国际化（i18n）。

<PageFeatures />

<PromotedEntry />

When bootstrapping your application you can specify available locales and the default locale with the **defaultLocale** option. The **locale** service also supports easy integration with [vue-i18n](https://vue-i18n.intlify.dev/). Using a locale that has an RTL (right-to-left) language also affects the directionality of the Vuetify components.

## 快速入门

To set the available locale messages or the default locale, supply the **locale** option when installing Vuetify.

```js { resource="main.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

// Translations provided by Vuetify
import { pl, zhHans } from 'vuetify/locale'

// Your own translation file
import sv from './i18n/vuetify/sv'

const app = createApp()

const vuetify = createVuetify({
  locale: {
    locale: 'zhHans',
    fallback: 'sv',
    messages: { zhHans, pl, sv },
  },
})

app.use(vuetify)

app.mount('#app')
```

You can change the locale during runtime by using the `useLocale` composable.

```html { resource="Composition.vue" }
<script setup>
  import { useLocale } from 'vuetify'

  const { current } = useLocale()

  function changeLocale (locale) {
    current.value = locale
  }
</script>
```

If you are still using the Options API, you can access the locale settings on `this.$vuetify.locale`.

```html { resource="Options.vue" }
<script>
  export default {
    methods: {
      changeLocale (locale) {
        this.$vuetify.locale.current = locale
      },
    },
  }
</script>
```

## API

| 产品特点                                         | 描述                            |
| -------------------------------------------- | ----------------------------- |
| [useLocale](/api/use-locale/)                | The locale composable is used |
| [v-locale-provider](/api/v-locale-provider/) | 本地化供应者组件用于将应用的一部分设置为另一种语言     |

<ApiInline hide-links />

## 为一定范围设置语言

Using the `v-locale-provider` component it is possible to scope a portion of your application to a different locale than the default one.

```html { resource="src/App.vue" }
<template>
  <v-app>
    <v-select></v-select> <!-- 将会使用默认语言 -->

    <v-locale-provider locale="ja">
      <v-select></v-select> <!-- 将会使用 ja（日语）语言 -->
    </v-locale-provider>
  </v-app>
</template>
```

## RTL

RTL (Right To Left) support is built in for all localizations that ship with Vuetify. If a [supported language](#supported-languages) is flagged as RTL, all content directions are automatically switched. See the [next section](#creating-a-custom-locale) for information on how to add RTL support to a custom locale.

The following example demonstrates how to force RTL for a specific section of your content, without switching the current language, by using the `v-locale-provider` component:

```html { resource="src/App.vue" }
<v-app>
  <v-card>...</v-card> <!-- 此处使用默认本地化语言 -->

  <v-locale-provider rtl>
    <v-card>...<v-card> <!-- 此处使用默认本地化语言，但是启用了 RTL -->
  </v-locale-provider>
</v-app>
```

## 创建自定义本地化语言

To create your own locale messages, copy and paste the content of `vuetify/src/locale/en.ts` to a new file, and change the localized strings. You can also specify if they should be displayed RTL or not by using the `rtl` property of the locale options.

```js { resource="src/locales/customLocale.js" }
export default {
  badge: '...',
  close: '...',
  ...
}
```

```js { resource="src/main.js" }
import { createVuetify } from 'vuetify'
import customLocale from './locales/customLocale'

const vuetify = createVuetify({
  locale: {
    locale: 'customLocale',
    messages: { customLocale },
    rtl: {
      customLocale: true,
    },
  },
})
```

## 自定义 Vuetify 组件

If you are building custom Vuetify components that need to hook into the locale service, you can use the `t` function from the **useLocale** composable, or the `$vuetify.locale` property when using Options API.

```html { resource="Component.vue" }
<template>
  <div class="my-component">
    {{ text }}
  </div>
</template>

<script setup>
  import { useLocale } from 'vuetify'

  const { t } = useLocale()
  const text = t('$vuetify.my-component.text')
</script>
```

::: warning
The Vuetify locale service only provides a basic translation function `t`, and should really only be used for internal or custom Vuetify components. It is recommended that you use a proper i18n library such as [vue-i18n](https://vue-i18n.intlify.dev/) in your own application. Vuetify does provide support for integrating with other libraries.
:::

## vue-i18n

If you are using the vue-i18n library, you can very easily integrate it with Vuetify. This allows you to keep all of your translations in one place. Simply create an entry for $vuetify within your messages and add the corresponding language changes. Then hook up vue-i18n to Vuetify by using the provided adapter function (as seen in the example below).

```js { resource="src/main.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import { en, sv } from 'vuetify/locale'

const messages = {
  en: {
    $vuetify: {
      ...en,
      dataIterator: {
        rowsPerPageText: 'Items per page:',
        pageText: '{0}-{1} of {2}',
      },
    },
  },
  sv: {
    $vuetify: {
      ...sv,
      dataIterator: {
        rowsPerPageText: 'Element per sida:',
        pageText: '{0}-{1} av {2}',
      },
    },
  },
}

const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'sv',
  fallbackLocale: 'en',
  messages,
})

const vuetify = createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
})

const app = createApp()

app.use(i18n)
app.use(vuetify)

app.mount('#app')
```

## 已支持语言

目前，Vuetify 提供以下语言的翻译：

- **af** - Afrikaans (Afrikaans)
- **ar** - 阿拉伯语 (العربية)
- **az** - 阿塞拜疆语 (Azərbaycan)
- **bg** - 保加利亚语 (български)
- **ca** - 加泰罗尼亚语 (català)
- **ckb** - 中库尔德语 (کوردی)
- **cs** - 捷克语 (čeština)
- **da** - 丹麦语 (Dansk)
- **de** - 德语 (Deutsch)
- **el** - 希腊语 (Ελληνικά)
- **en** - 英语 (English)
- **es** - 西班牙语 (Español)
- **et** - 爱沙尼亚语 (eesti)
- **fa** - 波斯语 (فارسی)
- **fi** - 芬兰语 (suomi)
- **fr** - 法语 (Français)
- **he** - 希伯来语 (עברית)
- **hr** - 克罗地亚语 (hrvatski jezik)
- **hu** - 匈牙利语 (magyar)
- **id** - 印度尼西亚语 (Indonesian)
- **it** - 意大利语 (Italiano)
- **ja** - 日语 (日本語)
- **km** - Khmer (ខ្មែរ)
- **ko** - 韩语 (한국어)
- **lt** - 立陶宛语 (lietuvių kalba)
- **lv** - 拉脱维亚语 (latviešu valoda)
- **nl** - 荷兰语 (Nederlands)
- **no** - 挪威语 (Norsk)
- **pl** - 波兰语 (język polski)
- **pt** - 葡萄牙语 (Português)
- **ro** - 罗马尼亚语 (Română)
- **ru** - 俄语 (Русский)
- **sk** - 斯洛伐克语 (slovenčina)
- **sl** - 斯洛文尼亚语 (slovenski jezik)
- **srCyrl** - 塞尔维亚语 (српски језик)
- **srLatn** - 塞尔维亚语 (srpski jezik)
- **sv** - 瑞典语 (svenska)
- **th** - 泰国语 (ไทย)
- **tr** - 土耳其语 (Türkçe)
- **uk** - 乌克兰语 (Українська)
- **vi** - 越南语 (Tiếng Việt)
- **zhHans** - 简体中文
- **zhHant** - 繁体中文 (正體中文)
