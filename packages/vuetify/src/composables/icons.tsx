// Icons
import { aliases, mdi } from '@/iconsets/mdi'
import { googleAliases } from '@/iconsets/google'
import { defaultIcons } from '@/iconsets/default'

// Utilities
import { computed, inject, unref } from 'vue'
import { consoleWarn, defineComponent, genericComponent, mergeDeep, propsFactory } from '@/util'

// Types
import type { ComponentPublicInstance, FunctionalComponent, InjectionKey, PropType, Ref } from 'vue'

export type JSXComponent<Props = any> =
  | { new (): ComponentPublicInstance<Props> }
  | FunctionalComponent<Props>

export type IconValue =
  | string
  | (string | [path: string, opacity: number])[]
  | JSXComponent
export const IconValue = [String, Function, Object, Array] as PropType<IconValue>

export interface IconAliases {
  [name: string]: IconValue
  complete: IconValue
  cancel: IconValue
  close: IconValue
  delete: IconValue
  clear: IconValue
  success: IconValue
  info: IconValue
  warning: IconValue
  error: IconValue
  prev: IconValue
  next: IconValue
  checkboxOn: IconValue
  checkboxOff: IconValue
  checkboxIndeterminate: IconValue
  delimiter: IconValue
  sortAsc: IconValue
  sortDesc: IconValue
  expand: IconValue
  menu: IconValue
  subgroup: IconValue
  dropdown: IconValue
  radioOn: IconValue
  radioOff: IconValue
  edit: IconValue
  ratingEmpty: IconValue
  ratingFull: IconValue
  ratingHalf: IconValue
  loading: IconValue
  first: IconValue
  last: IconValue
  unfold: IconValue
  file: IconValue
  plus: IconValue
  minus: IconValue
  calendar: IconValue
}

export interface IconProps {
  tag: string
  icon?: IconValue
  disabled?: Boolean
}

type IconComponent = JSXComponent<IconProps>

export interface IconSet {
  component: IconComponent
}

export type InternalIconOptions = {
  defaultSet: string
  aliases: Partial<IconAliases>
  sets: Record<string, IconSet>
}

export type IconOptions = Partial<InternalIconOptions>

type IconInstance = {
  component: IconComponent
  icon?: IconValue
}

export const IconSymbol: InjectionKey<InternalIconOptions> = Symbol.for('vuetify:icons')

export const makeIconProps = propsFactory({
  icon: {
    type: IconValue,
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: true,
  },
  viewBox: {
    type: String,
    default: '0 0 24 24',
  },
  fill: {
    type: Boolean,
    default: false,
  },
}, 'icon')

export const VComponentIcon = genericComponent()({
  name: 'VComponentIcon',

  props: makeIconProps(),

  setup (props, { slots }) {
    return () => {
      const Icon = props.icon as JSXComponent
      return (
        <props.tag>
          { props.icon ? <Icon /> : slots.default?.() }
        </props.tag>
      )
    }
  },
})
export type VComponentIcon = InstanceType<typeof VComponentIcon>;

export const VGoogleIcon = genericComponent()({
  name: 'VGoogleIcon',
  props: makeIconProps(),

  setup (props, { slots }) {
    const icons = inject(IconSymbol)
    if (!icons) throw new Error('Missing Vuetify Icons provide!')
    return () => {
      let iconName = props.icon || slots.default?.()
      const classList = ['material-symbols-outlined']
      if (props.fill) {
        classList.push('material-symbols-outlined-fill')
      } else if (String(iconName).startsWith('$')) {
        iconName = icons.aliases?.[String(iconName).slice(1)]
      } else if (String(iconName).endsWith('_fill')) {
        const index = String(iconName).lastIndexOf('_fill')
        iconName = String(iconName).slice(0, index)
        classList.push('material-symbols-outlined-fill')
      }
      return (
        <props.tag class={ classList } >
          { iconName }
        </props.tag>
      )
    }
  },
})
export type VGoogleIcon = InstanceType<typeof VGoogleIcon>

export const VSvgIcon = defineComponent({
  name: 'VSvgIcon',

  inheritAttrs: false,

  props: makeIconProps(),

  setup (props, { attrs }) {
    const data = (() => {
      if (typeof props.icon === 'object' && 'd' in props.icon) {
        return {
          ...props,
          icon: props.icon.d,
          viewBox: (props.icon as { viewBox?: any }).viewBox || props.viewBox,
        }
      } else {
        return props
      }
    })()
    const viewBox = (data.viewBox || '0 0 24 24') as string
    return () => {
      return (
        <props.tag { ...attrs } style={ null }>
          <svg
            class="v-icon__svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={ viewBox }
            role="img"
            aria-hidden="true"
          >
            { Array.isArray(data.icon)
              ? data.icon.map(path => (
                Array.isArray(path)
                  ? <path d={ path[0] as string } fill-opacity={ path[1] }></path>
                  : <path d={ path as string }></path>
              ))
              : <path d={ data.icon as string }></path>
            }
          </svg>
        </props.tag>
      )
    }
  },
})
export type VSvgIcon = InstanceType<typeof VSvgIcon>

export const VLigatureIcon = defineComponent({
  name: 'VLigatureIcon',

  props: makeIconProps(),

  setup (props) {
    return () => {
      return <props.tag>{ props.icon }</props.tag>
    }
  },
})
export type VLigatureIcon = InstanceType<typeof VLigatureIcon>

export const VClassIcon = defineComponent({
  name: 'VClassIcon',

  props: makeIconProps(),

  setup (props) {
    return () => {
      return <props.tag class={ props.icon }></props.tag>
    }
  },
})
export type VClassIcon = InstanceType<typeof VClassIcon>

function genDefaults (): Record<string, IconSet> {
  return {
    svg: {
      component: VSvgIcon,
    },
    class: {
      component: VClassIcon,
    },
    google: {
      component: VGoogleIcon,
    },
  }
}

// Composables
export function createIcons (options?: IconOptions) {
  const sets = genDefaults()
  const defaultSet = options?.defaultSet ?? 'google'
  let aliaseData: IconAliases = {} as IconAliases
  if (defaultSet === 'mdi' && !sets.mdi) {
    sets.mdi = mdi
    aliaseData = aliases
  } else if (defaultSet === 'google') {
    aliaseData = googleAliases
  }
  return mergeDeep({
    defaultSet,
    sets,
    aliases: {
      ...aliaseData,
      /* eslint-disable max-len */
      ...defaultIcons,
      /* eslint-enable max-len */
    },
  }, options) as InternalIconOptions
}

export const useIcon = (props: Ref<IconValue | undefined>) => {
  const icons = inject(IconSymbol)
  if (!icons) throw new Error('Missing Vuetify Icons provide!')

  const iconData = computed<IconInstance>(() => {
    const iconAlias = unref(props)

    if (!iconAlias) return { component: VComponentIcon }

    let icon: IconValue | undefined = iconAlias

    if (typeof icon === 'string') {
      icon = icon.trim()
      if (icon.startsWith('$')) {
        icon = icons.aliases?.[icon.slice(1)]
      }
    }

    if (!icon) consoleWarn(`Could not find aliased icon "${iconAlias}"`)
    if (Array.isArray(icon) || (typeof icon === 'object' && (icon as {d: string}).d)) {
      return {
        component: VSvgIcon,
        icon,
      }
    } else if (typeof icon !== 'string') {
      return {
        component: VComponentIcon,
        icon,
      }
    }

    const iconSetName = Object.keys(icons.sets).find(
      setName => typeof icon === 'string' && icon.startsWith(`${setName}:`)
    )

    const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon
    const iconSet = icons.sets[iconSetName ?? icons.defaultSet]

    return {
      component: iconSet.component,
      icon: iconName,
    }
  })

  return { iconData }
}
