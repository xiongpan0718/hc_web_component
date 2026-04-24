import type { PropType } from 'vue'
import { defineComponent, toRef, computed } from 'vue'
import images from '../../../assets/axle-icon'
import type { HcVehicleSchemaAxleRow } from './hc-vehicle-schema-types'

/** Empty string / null / undefined → treat as missing / 视为无推荐文案 */
const isRecommendEmpty = (v: unknown): boolean =>
  v === null || v === undefined || v === ''

export const HcWheelAxle = defineComponent({
  name: 'HcWheelAxle',
  props: {
    /**
     * Axle strip row from parent (type + observation + recommendations drive asset).
     * 车轴列单行数据：`type` 决定轴型；等级与推荐文案决定 `-1`/`-2`/`-3`/无后缀资源。
     */
    axleData: {
      type: Object as PropType<Partial<HcVehicleSchemaAxleRow> | undefined>,
      default: undefined,
    },
  },
  emits: [],
  setup (props) {
    const axleData = toRef(props, 'axleData')

    /** Map API `type` label to asset family key / 轴类型文案映射到图标族名 */
    const imgType = computed(() => {
      const type = axleData.value?.type ?? ''
      if (type.startsWith('DL')) {
        return 'DL'
      }
      if (type.startsWith('SD')) {
        return 'SD'
      }
      if (type.startsWith('Steer & Lift')) {
        return 'Steer & Lift'
      }
      if (type.startsWith('Self Steer & Liftable') || type.startsWith('CSSL')) {
        return 'CSSL'
      }
      if (type.startsWith('Self Steer') || type.startsWith('CSS')) {
        return 'CSS'
      }
      if (type.startsWith('S') || type.startsWith('CS')) {
        return 'S'
      }
      if (type.startsWith('Liftable') || type.startsWith('CL')) {
        return 'CL'
      }
      if (type.startsWith('D') || type.startsWith('CD')) {
        return 'D'
      }
      if (type.startsWith('C')) {
        return 'C'
      }
      return ''
    })

    /**
     * Asset suffix: obs 3 → `-2`, obs 1/2 → `-1`; else missing both recommends → `-3`; else base asset.
     * 观察等级 3→-2，1/2→-1；否则双无推荐→-3，否则无后缀基础图。
     */
    const variantSuffix = computed((): '1' | '2' | '3' | undefined => {
      const row = axleData.value
      const obs = row?.observationLevel

      if (obs == '3') {
        return '2'
      }
      if (obs == '1' || obs == '2') {
        return '1'
      }

      const noPressure = isRecommendEmpty(row?.recommendPressure)
      const noSize = isRecommendEmpty(row?.recommendSize)
      if (noPressure && noSize) {
        return '3'
      }
      return undefined
    })

    const src = computed(() => {
      const base = imgType.value
      if (!base) {
        return ''
      }
      const suf = variantSuffix.value
      const key = suf !== undefined ? `${base}-${suf}` : base
      return (images as Record<string, string>)[key] ?? ''
    })

    return () => (
      <>
        <img src={ src.value } style="width:100%;" alt="" />
      </>
    )
  },
})
