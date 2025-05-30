# @michelin/hc-component

Michelin 的 Vuetify 组件库扩展，提供了一系列基于 Vuetify 的定制组件和样式。

## 安装

```bash
pnpm add vuetify
pnpm add @michelin/hc-component
```

## 快速开始

### 引入组件库

```typescript
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createHcComponent, createThemeConfig, createIconConfig } from '@michelin/hc-component'
import '@michelin/hc-component/dist/styles/index.css'
import 'vuetify/styles'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  theme: createThemeConfig(),
  icons: createIconConfig({
    size: 20 // Optional: Custom icon size
  })
})

app.use(vuetify)
app.use(createHcComponent())
app.mount('#app')
```

## 主题配置

组件库提供了默认的主题配置，你可以通过 `createThemeConfig()` 进行自定义：

```typescript
const theme = createThemeConfig({
  // Custom theme configuration
})
```

## 图标配置

组件库使用 Material Symbols 图标，你可以通过 `createIconConfig()` 进行配置：

```typescript
const icons = createIconConfig({
  size: 20 // Custom icon size
})
```
