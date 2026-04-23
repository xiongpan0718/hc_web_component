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
  HcVehicleSchemaTireData,
} from './hc-vehicle-schema-types'

export const HcVehicleSchema = defineComponent({
  name: 'HcVehicleSchema',
  props: {
    selectList: {
      // 选中的轮胎列表,传了这个参数就表示可选中
      type: Array as PropType<HcTireData[]>,
      default: () => [],
    },
    tireData: {
      type: Object as PropType<HcVehicleSchemaTireData>,
      default: () => ({}),
    },
    wheelType: { // 2-4-4
      type: String,
      default: '',
    },
    unit: { // rtd_unit 和 pressure_unit
      type: Object,
      default: () => ({}),
    },
    axleData: { // 车轴数据   对象的key是车轴索引（0开始），value是{observationLevel观察等级（1是error，2是warning，3是info),recommendPressure建议胎压,recommendSize建议CAI,type：轴类型}
      type: Object,
      default: () => ({}),
    },
    spareList: {
      // 备胎列表
      type: Array as PropType<HcSpareTireData[]>,
      default: () => [],
    },
    /** 传给每个 HcTire：`simple` 为胎压/rtd 隐藏、图标与轮位居轮胎框内（见 HcTire mode） */
    tireMode: {
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
    const tireMode = toRef(props, 'tireMode')
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
      rtdUnit: unit.value.rtd_unit,
      pressureUnit: unit.value.pressure_unit,
    }

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
            mode={ tireMode.value }
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
            mode={ tireMode.value }
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
            mode={ tireMode.value }
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
            mode={ tireMode.value }
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
                    {
                      axleData.value[index] ? (
                        <HcWheelAxle type={ axleData.value[index]?.type } level={ axleData.value[index]?.observationLevel }></HcWheelAxle>
                      ) : (
                        <HcWheelAxle type={ axleData.value[index]?.type } ></HcWheelAxle>
                      )
                    }
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
                      { axleData.value[index]?.recommendPressure } { bindData.pressureUnit }
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
