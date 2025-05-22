import type { IconOptions, IconSet } from 'vuetify'
import type { HcIconProps, HcIconOptions } from './types'
import { googleAliases } from './iconsets/google'
import { defaultIcons } from './iconsets/default'
import { h } from 'vue'

// 创建 Google Material Icons 配置
const google: IconSet = {
  component: (props: HcIconProps) => {
    let iconName = props.icon
    let iconClass = 'material-symbols-outlined'
    
    // 检查 fill 属性，支持布尔值、字符串 'true' 和空值
    if (props.fill === true || props.fill === 'true' || props.fill === '') {
      iconClass = 'material-symbols-filled'
    } else if (String(iconName).endsWith('_fill')) {
      const index = String(iconName).lastIndexOf('_fill')
      iconName = String(iconName).slice(0, index)
      iconClass = 'material-symbols-filled'
    }

    return h('span', {
      class: [iconClass],
      textContent: iconName,
    })
  },
}

export const defaultIconConfig: IconOptions = {
  defaultSet: 'google',
  aliases: {
    ...defaultIcons,
    ...googleAliases,
  },
  sets: {
    google,
  },
}

export function createIconConfig(options?: HcIconOptions): IconOptions {
  // 如果提供了 size，创建并插入样式
  if (options?.size) {
    const style = document.createElement('style')
    console.log(options.size)
    style.textContent = `
      :root {
        --hc-icon-size: ${typeof options.size === 'number' ? `${options.size}px` : options.size};
      }
    `
    document.head.appendChild(style)
  }

  // 从选项中移除 size，因为它不是 Vuetify IconOptions 的一部分
  const { size, ...vuetifyOptions } = options || {};

  return {
    ...defaultIconConfig,
    ...vuetifyOptions,
  }
}

export * from './types'