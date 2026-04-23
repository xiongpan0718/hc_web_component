import type { PropType } from 'vue'
import { defineComponent, toRef } from 'vue'
import './HcVehicleSchema.scss'
import { HcTire } from './HcTire'
import { HcWheelAxle } from './HcWheelAxle'
import { HcTireIcon } from './hc-tire-icon'
import type {
  HcSpareTireData,
  HcTireData,
  HcTireMode,
  HcVehicleSchemaAxleData,
  HcVehicleSchemaTireData,
  HcVehicleSchemaUnit,
} from './hc-vehicle-schema-types'

export const HcVehicleSchema = defineComponent({
  name: 'HcVehicleSchema',
  props: {
    /** Selected tires (`v-model:select-list`); when bound, tires become selectable / 选中轮位列表（v-model），传入后可点击选择 */
    selectList: {
      type: Array as PropType<HcTireData[]>,
      default: () => [],
    },
    /** Main axles keyed by wheel_place / 主轴轮位数据，键为轮位字符串 */
    tireData: {
      type: Object as PropType<HcVehicleSchemaTireData>,
      default: () => ({}),
    },
    /** Wheel layout pattern, counts per axle separated by `-`, e.g. `2-4-4` / 轮距排布，各轴位数用 `-` 连接如 2-4-4 */
    wheelType: {
      type: String,
      default: '',
    },
    /** Shared `pressure_unit` & `rtd_unit` for tires / 全局胎压与 RTD 单位 */
    unit: {
      type: Object as PropType<HcVehicleSchemaUnit>,
      default: () => ({}),
    },
    /** Axle strip data by index (center column) / 中间车轴列数据，键为轴序号 */
    axleData: {
      type: Object as PropType<HcVehicleSchemaAxleData>,
      default: () => ({}),
    },
    /** Spare tire rows below the axle table / 主轴下方的备胎列表 */
    spareList: {
      type: Array as PropType<HcSpareTireData[]>,
      default: () => [],
    },
    /**
     * Forwarded as each {@link HcTire} `type`. `simple` hides pressure/rtd and uses compact tire layout.
     * 传给每个 HcTire 的 `type`：`simple` 隐藏胎压与 RTD，使用简化胎块布局。
     */
    schemaType: {
      type: String as () => HcTireMode,
      default: 'default',
      validator: (v: string) => v === 'default' || v === 'simple',
    },
  },
  emits: ['update:selectList', 'delete', 'handleAxleClick'],
  setup (props, { emit, slots }) {
    const tireData = toRef(props, 'tireData')
    const wheelType = toRef(props, 'wheelType')
    const axleData = toRef(props, 'axleData')
    const unit = toRef(props, 'unit')
    const spareList = toRef(props, 'spareList')
    const schemaType = toRef(props, 'schemaType')
    const wheelTypeList = (wheelType.value || '').split('-')

    const selectList = toRef(props, 'selectList')

    const updateSelectList = (wheelData: Partial<HcTireData> | HcSpareTireData) => {
      if (wheelData.disabled) {
        return
      }
      const index = selectList.value.findIndex((item: any) => item.wheel_place === wheelData.wheel_place)
      let list = [...selectList.value]
      const row = { ...wheelData } as HcTireData
      if (index === -1) {
        list.push(row)
      } else {
        list = list.filter((item: any) => item.wheel_place !== wheelData.wheel_place)
      }
      emit('update:selectList', list, row)
    }

    const bindData = {
      rtdUnit: unit.value.rtd_unit ?? '',
      pressureUnit: unit.value.pressure_unit ?? '',
    }

    const isRecommendPressurePresent = (v: unknown) =>
      v !== null && v !== undefined && v !== ''

    const isSelect = (wheelPlace: string) => {
      return selectList.value?.findIndex((item: any) => item.wheel_place === wheelPlace) !== -1
    }

    const onTireDelete = (wheelPlace: string) => {
      emit('delete', wheelPlace)
    }

    /** Emit current row axle payload / 点击车轴区域抛出该行 axleData */
    const handleAxleClick = (index: number) => {
      emit('handleAxleClick', axleData.value[index])
    }

    const initTireTag = (wheelType: string, index: number, position: number) => {
      const tagList = []
      if (wheelType === '2') {
        const wheelPlace = (index + 1) + (position === 0 ? 'L' : 'R') as keyof typeof tireData.value
        const tire = tireData.value[wheelPlace] as any
        const tag = (
          <HcTire
            type={ schemaType.value }
            tireData={ tire }
            { ...bindData }
            isSelect={ isSelect(wheelPlace as string) }
            onClick={ () => updateSelectList(tire) }
            onDelete={ onTireDelete }
          ></HcTire>
        )
        tagList.push(tag)
      } else {
        const wheelPlaceLeft = (index + 1) + (position === 0 ? 'LO' : 'RI') as keyof typeof tireData.value
        const tire = tireData.value[wheelPlaceLeft] as any
        tagList.push(
          <HcTire
            type={ schemaType.value }
            tireData={ tire }
            { ...bindData }
            isSelect={ isSelect(wheelPlaceLeft as string) }
            onClick={ () => updateSelectList(tire) }
            onDelete={ onTireDelete }
          ></HcTire>
        )
        const wheelPlaceRight = (index + 1) + (position === 0 ? 'LI' : 'RO') as keyof typeof tireData.value
        const tireRightData = tireData.value[wheelPlaceRight] as any
        tagList.push(
          <HcTire
            type={ schemaType.value }
            tireData={ tireRightData }
            { ...bindData }
            isSelect={ isSelect(wheelPlaceRight as string) }
            onClick={ () => updateSelectList(tireRightData) }
            onDelete={ onTireDelete }
          ></HcTire>
        )
      }
      return tagList
    }

    const initSpareTire = () => {
      return spareList.value.map((tire: any) => {
        return (
          <HcTire
            type={ schemaType.value }
            isSpare
            tireData={ tire }
            { ...bindData }
            isSelect={ isSelect(tire.wheel_place) }
            onClick={ () => updateSelectList(tire) }
            onDelete={ onTireDelete }
          ></HcTire>
        )
      })
    }

    return () => (
      <div class="hc-vehicle-schema">
        <div class="wheel-table">
          {
            wheelTypeList.map((wheelType: string, index: number) => {
              return (
<div class="wheel-row">
                <div class="tire-section">
                  { initTireTag(wheelType, index, 0) }
                </div>
                <div class="wheel-axle" onClick={ () => handleAxleClick(index) }>
                  <div class="wheel-axle-img">
                    <HcWheelAxle axleData={ axleData.value[index] } />
                  </div>
                  {
                    axleData.value[index]?.observationLevel ? (
                      <div class="recommend-icon" key={ index }>
                        <HcTireIcon level={ axleData.value[index]?.observationLevel }></HcTireIcon>
                      </div>
                    ) : null
                  }
                  <div class="recommend-text">
                    <div class="pressure-recommend">
                      { isRecommendPressurePresent(axleData.value[index]?.recommendPressure)
                        ? `${axleData.value[index]?.recommendPressure}${bindData.pressureUnit ? ` ${bindData.pressureUnit}` : ''}`
                        : null }
                    </div>
                    <div class="cai-recommend">
                      { axleData.value[index]?.recommendSize }
                    </div>
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
