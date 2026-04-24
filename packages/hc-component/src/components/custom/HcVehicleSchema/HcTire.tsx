import type { PropType } from 'vue'
import { computed, defineComponent, toRef } from 'vue'
import './HcTire.scss'
import { HcTireIcon } from './hc-tire-icon'
import type { HcTireData, HcTireMode } from './hc-vehicle-schema-types'
import { useI18n } from 'vue-i18n'
import { VTooltip } from '@/components/VTooltip/VTooltip'

export const HcTire = defineComponent({
  name: 'HcTire',
  props: {
    /** Partial tire row for this slot / 该轮位轮胎数据 */
    tireData: {
      type: Object as PropType<Partial<HcTireData>>,
      default: () => ({}),
    },
    /** Global RTD unit label (suffix) / 全局 RTD 单位展示 */
    rtdUnit: {
      type: String,
      default: '',
    },
    /** Global pressure unit label (suffix) / 全局胎压单位展示 */
    pressureUnit: {
      type: String,
      default: '',
    },
    /** Whether this tire is in the current selection / 是否处于当前选中 */
    isSelect: {
      type: Boolean,
      default: false,
    },
    /** Spare-tire row layout (wider block) / 是否备胎行（宽向块） */
    isSpare: {
      type: Boolean,
      default: false,
    },
    /** Show top-right comment corner marker on the tire box / 是否在胎块右上显示评论角标 */
    showComments: {
      type: Boolean,
      default: false,
    },
    /**
     * `default`: label on top, pressure & RTD inside the box. `simple`: icon + label centered in the box.
     * 与 HcVehicleSchema `schemaType` 一致；`default` 轮位在上、胎压与 RTD 在框内；`simple` 图标与轮位居中于框内。
     */
    type: {
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
    const isSimple = computed(() => props.type === 'simple')
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

    /**
     * Tooltip when `brand` and/or `description` is set; join non-empty parts with a space / 品牌与描述任一有值则展示，空格拼接。
     */
    const brandDescriptionTooltip = computed(() => {
      const b = tireData.value.brand
      const d = tireData.value.description
      if (isUnsetValue(b) && isUnsetValue(d)) {
        return ''
      }
      return [b, d].filter((p) => !isUnsetValue(p)).join(' ')
    })

    return () => (
      <div class={ className.value }>
        { brandDescriptionTooltip.value ? (
          /** Tooltip content width cap / tooltip 内容最大宽度 */
          <VTooltip activator="parent" location="top" maxWidth={ 300 } offset={ 4 }>
            { brandDescriptionTooltip.value }
          </VTooltip>
        ) : null }
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
