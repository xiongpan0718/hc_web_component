# HC Component Locale / 组件库国际化配置

## Usage / 使用方法

### 1. Get translation dictionary in main project / 在主项目中获取翻译字典

```typescript
// main.ts
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createHcI18nConfig } from '@michelin/hc-component'

// Get component library translation dictionary / 获取组件库的翻译字典
const messages = createHcI18nConfig()

// Create i18n instance / 创建 i18n 实例
const i18n = createI18n({
  locale: 'zhHans',
  fallbackLocale: 'en',
  legacy: false,
  messages
})

// Create Vuetify instance / 创建 Vuetify 实例
const vuetify = createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
})

const app = createApp(App)
app.use(i18n)
app.use(vuetify)
```

### 2. Use in components / 在组件中使用

```tsx
import { useI18n } from 'vue-i18n'

export const MyComponent = defineComponent({
  setup() {
    const { t } = useI18n()
    
    return () => (
      <div>
        <span>{t('common.filter')}</span>
        <span>{t('public.resetting')}</span>
      </div>
    )
  }
})
```

### 3. Switch language / 语言切换

```typescript
// Switch language in component / 在组件中切换语言
const { locale } = useI18n()
locale.value = 'zhHans'  // Switch to Chinese / 切换到中文
```

### 4. 项目已有 i18n 时 / When project has its own i18n

**中文**：项目若已有主应用 i18n，**必须**将 `createHcI18nConfig()` 合并进 messages，否则组件库翻译会 fallback 到英文。

**English**: If your project already has its own i18n, you **must** merge `createHcI18nConfig()` into messages, otherwise component translations will fallback to English.

```typescript
import { createHcI18nConfig } from '@michelin/hc-component'

/** 项目 locale → 组件库 locale */
const VUETIFY_LOCALE_MAP: Record<string, string> = {
  'en-US': 'en', 'en-GB': 'en', 'zh-CN': 'zhHans',
  'pt-BR': 'pt', 'pl-PL': 'pl', 'es-ES': 'es', 'fr-FR': 'fr',
}

const hcConfig = createHcI18nConfig()
const vLocale = VUETIFY_LOCALE_MAP[locale] || 'en'
const hcMessages = hcConfig[vLocale] ?? {}

return {
  locale,
  messages: { [locale]: { ...hcMessages, ...flattenMsg } },
  // ...
}
```

## Supported languages / 支持的语言

| Locale   | Language / 语言   |
| -------- | ----------------- |
| `en`     | English / 英语    |
| `zhHans` | Simplified Chinese / 中文简体 |
| `pt`     | Portuguese / 葡萄牙语 |
| `pl`     | Polish / 波兰语   |
| `es`     | Spanish / 西班牙语 |
| `fr`     | French / 法语     |

## Features / 特性

- ✅ **Auto merge / 自动合并**：Merges Vuetify and component library translations / 自动合并 Vuetify 和组件库翻译
- ✅ **Reactive switch / 响应切换**：Fully reactive to main project locale changes / 完全响应主项目的语言切换
- ✅ **Ready to use / 开箱即用**：Component library includes complete translations / 组件库自带完整翻译
