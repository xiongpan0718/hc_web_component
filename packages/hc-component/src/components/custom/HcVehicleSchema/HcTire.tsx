import type { PropType } from 'vue'
import { computed, defineComponent, toRef } from 'vue'
import './HcTire.scss'
import { HcTireIcon } from './hc-tire-icon'
import type { HcTireData, HcTireMode } from './hc-vehicle-schema-types'
import { useI18n } from 'vue-i18n'

export const HcTire = defineComponent({
  name: 'HcTire',
  props: {
    tireData: {
      type: Object as PropType<Partial<HcTireData>>,
      default: () => ({}),
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
    /** default：轮位在上、胎压/rtd 在轮胎框内；simple：图标与轮位居中置于轮胎框内 */
    mode: {
      type: String as () => HcTireMode,
      default: 'default',
      validator: (v: string) => v === 'default' || v === 'simple',
    },
  },
  emits: ['delete'],
  setup (props, { emit }) {
    const { t } = useI18n()
    const tireData = toRef(props, 'tireData')
    const rtdUnit = toRef(props, 'rtdUnit')
    const pressureUnit = toRef(props, 'pressureUnit')
    const isSelect = toRef(props, 'isSelect')
    const isSpare = toRef(props, 'isSpare')
    const showComments = toRef(props, 'showComments')
    const isSimple = computed(() => props.mode === 'simple')
    const isSpareDismount = computed(() => isSpare.value && !!tireData.value.dismount)
    const isTireDisabled = computed(() => !!tireData.value.disabled)
    const showDeleteIcon = computed(() => !!tireData.value.deletable)

    const onDeleteClick = (e: MouseEvent) => {
      e.stopPropagation()
      emit('delete', tireData.value.wheel_place as string)
    }

    const isUnsetValue = (v: unknown): boolean => {
      if (v === 0 || v === '0') {
        return false
      }
      return v === null || v === undefined || v === ''
    }

    const observationLevel = computed(() => {


      const raw = tireData.value.observation_level
      const isZeroObs = raw === 0 || raw === '0'

      /** default mode: obs 0 + both pressure & rtd unset → level 4 / 默认模式：等级 0 且两侧无读数 → 显示 4 */
      if (!isSimple.value) {
        if (
          isZeroObs
          && isUnsetValue(tireData.value.pressure)
          && isUnsetValue(tireData.value.rtd)
        ) {
          return 4
        }
        return raw
      }

      /** simple mode: empty CAI or temp_cai_id → level 4 / 简单模式：无 CAI 或 temp_cai_id → 显示 4 */
      if (isUnsetValue(tireData.value.CAI) && isUnsetValue(tireData.value.temp_cai_id)) {
        return 4
      }
      return raw
    })
    const className = computed(() => {
      return {
        ['observation-level-' + observationLevel.value]: true,
        'hc-tire-item': true,
        'is-tire-disabled': isTireDisabled.value,
        'is-select': isSelect.value,
        'is-spare': isSpare.value,
        'is-spare-dismount': isSpareDismount.value,
        'is-simple': isSimple.value,
        'show-comments': showComments.value,
      }
    })

    const wheelPlaceLabel = computed(
      () => tireData.value.translated_wheel_place || tireData.value.wheel_place,
    )

    return () => (
      <div class={ className.value }>
        { !isSimple.value && (
          <div class="wheel-place">
            { isSpareDismount.value ? null : <HcTireIcon level={ observationLevel.value }></HcTireIcon> }
            { wheelPlaceLabel.value }
          </div>
        ) }
        <div class="wheel-tire">
          { isSpareDismount.value ? (
            <div class="spare-dismount-tire">
              { t('public.dismounted') }
            </div>
          ) : isSimple.value ? (
            <div class="wheel-place-simple">
              <HcTireIcon level={ observationLevel.value } size={ 16 }></HcTireIcon>
              { wheelPlaceLabel.value }
            </div>
          ) : (
            <>
              <div class="wheel-tire-value">
                <div class="model-value" style={{ 'line-height': isUnsetValue(tireData.value.pressure) ? 'unset' : '' }}>
                  { tireData.value.pressure || '--' }
                </div>
                <div class="model-unit">{ pressureUnit.value || tireData.value.pressure_unit }</div>
              </div>
              <div class="wheel-tire-value">
                <div class="model-value" style={{ 'line-height': isUnsetValue(tireData.value.rtd) ? 'unset' : '' }}>
                  {
                    tireData.value.is_regroove ? (
                      <span class="is-regroove">R</span>
                    ) : null
                  }
                  { tireData.value.rtd || '--' }
                </div>
                <div class="model-unit">{ rtdUnit.value || tireData.value.rtd_unit }</div>
              </div>
            </>
          ) }
          { showDeleteIcon.value ? (
            <div class="hc-tire-delete" onClick={ onDeleteClick }>
              <v-icon
                color="#B71C1C"
                fill
                icon="remove_circle"
                size={ 24 }
              />
            </div>
          ) : null }
        </div>
      </div>
    )
  },
})
