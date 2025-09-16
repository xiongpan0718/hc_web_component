# 组件库国际化配置

## 使用方法

### 1. 在主项目中获取翻译字典

```typescript
// main.ts
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createHcI18nConfig } from '@hc-component/config/locale'

// 获取组件库的翻译字典
const messages = createHcI18nConfig()

// 创建 i18n 实例
const i18n = createI18n({
  locale: 'zhHans',
  fallbackLocale: 'en',
  legacy: false,
  messages
})

// 创建 Vuetify 实例
const vuetify = createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
})

const app = createApp(App)
app.use(i18n)
app.use(vuetify)
```

### 2. 在组件中使用

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

### 3. 语言切换

```typescript
// 在组件中切换语言
const { locale } = useI18n()
locale.value = 'zhHans'  // 切换到中文
```

## 支持的语言

- `en` - 英语
- `zhHans` - 中文简体
- `pt` - 葡萄牙语
- `pl` - 波兰语

## 特性

- ✅ **自动合并**：自动合并 Vuetify 和组件库翻译
- ✅ **响应切换**：完全响应主项目的语言切换
- ✅ **开箱即用**：组件库自带完整翻译
