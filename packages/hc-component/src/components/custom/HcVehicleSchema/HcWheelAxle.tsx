import { defineComponent, toRef, computed } from 'vue'
import images from '../../../assets/axle-icon'

export const HcWheelAxle = defineComponent({
  name: 'HcWheelAxle',
  props: {
    type: {
      type: String,
      default: '',
    },
    level: {
      type: [String, Number],
      default: '',
    },
  },
  emits: [],
  setup (props, { emit, slots }) {
    const type = toRef(props, 'type')
    const level = toRef(props, 'level')
    
    const imgType = computed(() => {
      if (type.value?.startsWith('DL')) {
        return 'DL'
      } else if (type.value?.startsWith('SD')) {
        return 'SD'
      } else if (type.value?.startsWith('Steer & Lift')) {
        return 'Steer & Lift'
      } else if (type.value?.startsWith('Self Steer & Liftable') || type.value?.startsWith('CSSL')) {
        return 'CSSL'
      } else if (type.value?.startsWith('Self Steer') || type.value?.startsWith('CSS')) {
        return 'CSS'
      } else if (type.value?.startsWith('S') || type.value?.startsWith('CS')) {
        return 'S'
      } else if (type.value?.startsWith('Liftable') || type.value?.startsWith('CL')) {
        return 'CL'
      } else if (type.value?.startsWith('D') || type.value?.startsWith('CD')) {
        return 'D'
      } else if (type.value?.startsWith('C')) {
        return 'C'
      }
      return ''
    })

    const mappedLevel = computed(() => {
      if (level.value == '3') {
        return '2'
      } else if (level.value == '1' || level.value == '2') {
        return '1'
      }
      return undefined
    })

    const src = computed(() => {
      return mappedLevel.value
        ? images[`${imgType.value}-${mappedLevel.value}` as keyof typeof images]
        : images[imgType.value as keyof typeof images]
    })

    return () => (
      <>
        <img src={src.value} style="width:100%;" alt="" />
      </>
    )
  },
})
