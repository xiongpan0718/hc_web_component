import { defineComponent, toRef } from 'vue'
import './HcVehicleSchema.scss'
import { HcTire } from './HcTire'
import { HcWheelAxle } from './HcWheelAxle'
import { HcTireIcon } from './hc-tire-icon'

export const HcVehicleSchema = defineComponent({
  name: 'HcVehicleSchema',
  props: {
    selectList: { // 选中的轮胎列表,传了这个参数就表示可选中
      type: Array,
      default: () => [],
    },
    tireData: { // 轮胎数据
      type: Object,
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
    spareList: { // 备胎列表
      type: Array,
      default: () => [],
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:selectList'],
  setup (props, { emit, slots }) {
    const tireData = toRef(props, 'tireData')
    const wheelType = toRef(props, 'wheelType')
    const axleData = toRef(props, 'axleData')
    const unit = toRef(props, 'unit')
    const disabled = toRef(props, 'disabled')
    const spareList = toRef(props, 'spareList')
    const wheelTypeList = (wheelType.value || '').split('-')

    const selectList = toRef(props, 'selectList')

    const updateSelectList = (wheelData: any) => {
      if (disabled.value) {
        return
      }
      const index = selectList.value.findIndex((item: any) => item.wheel_place === wheelData.wheel_place)
      let list = [...selectList.value]
      if (index === -1) {
        list.push({ ...wheelData })
      } else {
        list = list.filter((item: any) => item.wheel_place !== wheelData.wheel_place)
      }
      emit('update:selectList', list, { ...wheelData })
    }

    const bindData = {
      rtdUnit: unit.value.rtd_unit,
      pressureUnit: unit.value.pressure_unit,
    }

    const isSelect = (wheelPlace: string) => {
      return selectList.value?.findIndex((item: any) => item.wheel_place === wheelPlace) !== -1
    }

    const initTireTag = (wheelType: string, index: number, position: number) => {
      const tagList = []
      if (wheelType === '2') {
        const wheelPlace = (index + 1) + (position === 0 ? 'L' : 'R') as keyof typeof tireData.value
        const tire = tireData.value[wheelPlace] as any
        const tag = (
          <HcTire
            tireData={ tire }
            { ...bindData }
            isSelect={ isSelect(wheelPlace as string) }
            onClick={ () => updateSelectList(tire) }
          ></HcTire>
        )
        tagList.push(tag)
      } else {
        const wheelPlaceLeft = (index + 1) + (position === 0 ? 'LO' : 'RI') as keyof typeof tireData.value
        const tire = tireData.value[wheelPlaceLeft] as any
        tagList.push(
          <HcTire
            tireData={ tire }
            { ...bindData }
            isSelect={ isSelect(wheelPlaceLeft as string) }
            onClick={ () => updateSelectList(tire) }
          ></HcTire>
        )
        const wheelPlaceRight = (index + 1) + (position === 0 ? 'LI' : 'RO') as keyof typeof tireData.value
        const tireRightData = tireData.value[wheelPlaceRight] as any
        tagList.push(
          <HcTire
            tireData={ tireRightData }
            { ...bindData }
            isSelect={ isSelect(wheelPlaceRight as string) }
            onClick={ () => updateSelectList(tireRightData) }
          ></HcTire>
        )
      }
      return tagList
    }

    const initSpareTire = () => {
      return spareList.value.map((tire: any) => {
        return (
          <HcTire
            isSpare
            spareDismount={ tire.dismount }
            tireData={ tire }
            { ...bindData }
            isSelect={ isSelect(tire.wheel_place) }
            onClick={ () => updateSelectList(tire) }
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
                <div class="wheel-axle">
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
