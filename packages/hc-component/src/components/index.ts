import type { App } from 'vue'
import * as sourceComponents from './source'
import * as customComponents from './custom'

// 导出所有组件
export * from './source'
export * from './custom'

// 注册所有组件
export function registerComponents(app: App) {
  // 注册所有组件
  Object.entries({ ...sourceComponents, ...customComponents }).forEach(([name, component]) => {
    if (component) {
      app.component(name, component)
    }
  })
}

export function createHcComponent() {
  return {
    install(app: App) {
      registerComponents(app)
    },
  }
}