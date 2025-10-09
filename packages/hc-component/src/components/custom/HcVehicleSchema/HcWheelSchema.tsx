import { defineComponent, toRef } from 'vue'
import './HcWheelSchema.scss'
import images from '../../../assets/axle-icon'

export const HcWheelSchema = defineComponent({
  name: 'HcWheelSchema',
  props: {
    wheelType: {
      type: String,
      default: '',
    },
    spareList: { // 备胎列表
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: '', // small large
    },
  },
  setup (props) {
    const wheelType = toRef(props, 'wheelType')
    const spareList = toRef(props, 'spareList')
    const wheelTypeList = (wheelType.value || '').split('-')

    const initTireTag = (wheelType: string, index: number, position: number) => {
      const tagList = []
      if (wheelType === '2') {
        const wheelPlace = (index + 1) + (position === 0 ? 'L' : 'R')
        const tag = (
          <div class="tire-wheel"></div>
        )
        tagList.push(tag)
      } else {
        const wheelPlaceLeft = (index + 1) + (position === 0 ? 'LO' : 'RI')
        tagList.push(
          <div class="tire-wheel"></div>
        )
        const wheelPlaceRight = (index + 1) + (position === 0 ? 'LI' : 'RO')
        tagList.push(
          <div class="tire-wheel"></div>
        )
      }
      return tagList
    }

    const initSpareTire = () => {
      return spareList.value.map((tire: any) => {
        return (
          <div class="tire-wheel is-spare"></div>
        )
      })
    }
    const src = images[`S-3` as keyof typeof images]
    const className = {
      'hc-wheel-schema': true,
      'size-medium': props.size === 'medium',
    }
    return () => (
      <div class={ className }>
        <div class="wheel-table">
          {
            wheelTypeList.map((wheelType: string, index: number) => {
              return (
<div class="wheel-row">
                <div class="tire-section">
                  { initTireTag(wheelType, index, 0) }
                </div>
                <div class="wheel-axle">
                  <div class="wheel-axle-img">
                    <img src={ src } style="width:100%;height:100%;" alt="" />
                  </div>
                </div>
                <div class="tire-section">
                  { initTireTag(wheelType, index, 1) }
                </div>
              </div>
              )
            })
          }
        </div>
        {
          spareList.value.length ? (
            <div>
              <div class="split-line">
                <v-divider style={{ opacity: 1 }} />
              </div>
              <div class="spare-list">
                { initSpareTire() }
              </div>
            </div>
          ) : null
        }
      </div>
    )
  },
})
