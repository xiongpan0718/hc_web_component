import { computed, defineComponent, toRef } from 'vue'
import './HcTire.scss'
import { HcTireIcon } from './hc-tire-icon'
import { useI18n } from 'vue-i18n'

export const HcTire = defineComponent({
  name: 'HcTire',
  props: {
    tireData: { // 轮胎数据
      type: Object,
      default: () => {},
    },
    rtdUnit: { // rtd 单位
      type: String,
      default: '',
    },
    pressureUnit: { // 压力单位
      type: String,
      default: '',
    },
    isSelect: { // 是否选中
      type: Boolean,
      default: false,
    },
    isSpare: { // 是否是备胎
      type: Boolean,
      default: false,
    },
    showComments: { // 是否显示评论图标
      type: Boolean,
      default: false,
    },
    spareDismount: { // 备胎是否卸下
      type: Boolean,
      default: false,
    },
  },
  emits: [],
  setup (props) {
    const { t } = useI18n()
    const tireData = toRef(props, 'tireData')
    const rtdUnit = toRef(props, 'rtdUnit')
    const pressureUnit = toRef(props, 'pressureUnit')
    const isSelect = toRef(props, 'isSelect')
    const isSpare = toRef(props, 'isSpare')
    const showComments = toRef(props, 'showComments')
    const spareDismount = toRef(props, 'spareDismount')
    // if spareDismount or pressure/rtd is not set, set observationLevel to 4
    const observationLevel = computed(() => {
      if (spareDismount.value || (tireData.value.observation_level == '0' && !(tireData.value.pressure || tireData.value.rtd ))) {
        return 4
      }
      return tireData.value.observation_level
    })
    const className = computed(() => {
      return {
        ['observation-level-' + observationLevel.value]: true,
        'hc-tire-item': true,
        'is-select': isSelect.value,
        'is-spare': isSpare.value,
        'show-comments': showComments.value,
        'spare-dismount': isSpare.value && spareDismount.value,
      }
    })
    return () => (
      <div class={ className.value }>
        <div class="wheel-place">
          <HcTireIcon level={ observationLevel.value }></HcTireIcon>
          { tireData.value.translated_wheel_place || tireData.value.wheel_place }
        </div>
        <div class="wheel-tire">
          <div class="wheel-tire-value">
            <div class="model-value" style={{ 'line-height': !tireData.value.pressure ? 'unset' : '' }}>
              { tireData.value.pressure || '--' }
            </div>
            <div class="model-unit">{ pressureUnit.value || tireData.value.pressure_unit }</div>
          </div>
          <div class="wheel-tire-value">
            <div class="model-value" style={{ 'line-height': !tireData.value.rtd ? 'unset' : '' }}>
              {
                tireData.value.is_regroove ? (
                  <span class="is-regroove">R</span>
                ) : null
              }
              { tireData.value.rtd || '--' }
            </div>
            <div class="model-unit">{ rtdUnit.value || tireData.value.rtd_unit }</div>
          </div>
          <div class="spare-dismount-tire">
            { t('public.dismounted') }
          </div>
        </div>
      </div>
    )
  },
})
