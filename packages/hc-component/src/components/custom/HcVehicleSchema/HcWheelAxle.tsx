import { defineComponent, toRef } from 'vue'
import images from '../../../assets/axle-icon'

export const HcWheelAxle = defineComponent({
  name: 'HcWheelAxle',
  props: {
    type: { // 车轴类型
      type: String,
      default: '',
    },
    level: { // 观察结果等级
      type: [String, Number],
      default: '',
    },
  },
  emits: [],
  setup (props, { emit, slots }) {
    const type = toRef(props, 'type')
    const level = toRef(props, 'level')
    let imgType = ''
    if (type.value.startsWith('DL')) {
      imgType = 'DL'
    } else if (type.value.startsWith('SD')) {
      imgType = 'SD'
    } else if (type.value.startsWith('Steer & Lift')) {
      imgType = 'Steer & Lift'
    } else if (type.value?.startsWith('Self Steer & Liftable') || type.value?.startsWith('CSSL')) {
      imgType = 'CSSL'
    } else if (type.value?.startsWith('Self Steer') || type.value?.startsWith('CSS')) {
      imgType = 'CSS'
    } else if (type.value?.startsWith('S') || type.value?.startsWith('CS')) {
      imgType = 'S'
    } else if (type.value?.startsWith('Liftable') || type.value?.startsWith('CL')) {
      imgType = 'CL'
    } else if (type.value?.startsWith('D') || type.value?.startsWith('CD')) {
      imgType = 'D'
    } else if (type.value?.startsWith('C')) {
      imgType = 'C'
    }
    const src = level.value
      ? images[`${imgType}-${level.value}` as keyof typeof images]
      : images[imgType as keyof typeof images]
    return () => (
      <>
        <img src={ src } style="width:100%;height:100%;" alt="" />
      </>
    )
  },
})
