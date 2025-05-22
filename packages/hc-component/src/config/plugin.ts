import { App } from 'vue'
import { HcCheckboxGroup } from '../components'
import { HcAutocomplete } from 'vuetify-src/components'

export function createHcComponent() {
  return {
    install(app: App) {
      // 注册二次封装的组件
      app.component('HcCheckboxGroup', HcCheckboxGroup)
      // 注册基于vuetify源码的组件
      app.component('HcAutocomplete', HcAutocomplete)
      // TODO: 注册其他源码组件
    },
  }
}

// 导出所有内容
export * from './theme'
export * from './icon'
export * from '../components' 