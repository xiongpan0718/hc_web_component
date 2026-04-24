<template>
  <div class="vehicle-schema-page">
    <section class="vehicle-schema-demo">
      <h3 class="vehicle-schema-demo__title">
        Default 模式
      </h3>
      <HcVehicleSchema
        v-model:select-list="selectList"
        :axle-data="axleData"
        :spare-list="spareListDefault"
        :tire-data="defaultTireData"
        :unit="unit"
        :wheel-type="wheelType"
      />
    </section>
    <section class="vehicle-schema-demo">
      <h3 class="vehicle-schema-demo__title">
        Simple 模式
      </h3>
      <HcVehicleSchema
        v-model:select-list="selectListSimple"
        schema-type="simple"
        :axle-data="axleData"
        :spare-list="simpleSpareList"
        :tire-data="simpleTireData"
        :unit="unit"
        :wheel-type="wheelType"
        @delete="onTireDelete"
      />
    </section>
  </div>

</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type {
    HcTireData,
    HcSpareTireData,
    HcVehicleSchemaTireData,
  } from '../../../src/components/custom/HcVehicleSchema/hc-vehicle-schema-types'

  const wheelType = ref('2-2-2-4-4')
  const selectList = ref([])
  const selectListSimple = ref([{ wheel_place: '1L' }, { wheel_place: 'SP3' }])
  const simpleTireData = {
    '1L': {
      wheel_place: '1L',
      observation_level: 0,
      pressure: null,
      rtd: null,
      CAI: null,
      disabled: true,
    },
    '1R': {
      wheel_place: '1R',
      observation_level: 0,
      pressure: null,
      rtd: 1,
      CAI: null,
      is_regroove: 1,
      disabled: true,
    },
    '2L': {
      wheel_place: '2L',
      observation_level: 0,
      pressure: null,
      rtd: null,
      CAI: 242552,
      brand: 'Michelin',
      description: '13R22.5 XZH2 R TL 154/150G MS MI',
      disabled: true,
    },
    '2R': {
      wheel_place: '2R',
      observation_level: 0,
      pressure: null,
      rtd: null,
      CAI: null,
      disabled: true,
    },
    '3L': {
      wheel_place: '3L',
      observation_level: 0,
      pressure: 6,
      rtd: 4,
      CAI: 242252,
      brand: 'LAURENT',
      description: '265/70 R 19.5 PLDE2+ TL LA/MI',
    },
    '3R': {
      wheel_place: '3R',
      observation_level: 0,
      pressure: 6,
      rtd: 4,
      CAI: 242252,
      brand: 'Laurent',
      description: '265/70 R 19.5 PLDE2+ TL LA/MI',
    },
    '4LO': {
      wheel_place: '4LO',
      observation_level: 1,
      pressure: 2,
      rtd: 1,
      CAI: 242252,
      is_regroove: 1,
      brand: 'Michelin',
      description: '13R22.5 XZH2 R TL',
    },
    '4LI': {
      wheel_place: '4LI',
      observation_level: 0,
      pressure: null,
      rtd: null,
      CAI: null,
    },
    '4RI': {
      wheel_place: '4RI',
      observation_level: 0,
      pressure: null,
      rtd: null,
      CAI: null,
    },
    '4RO': {
      wheel_place: '4RO',
      observation_level: 0,
      pressure: null,
      rtd: 5,
      CAI: 242252,
      brand: 'Michelin',
      description: '13R22.5 XZH2 R TL',
      disabled: true,
    },
    '5LO': {
      wheel_place: '5LO',
      observation_level: 0,
      pressure: 4,
      rtd: 3,
      CAI: 242252,
      brand: 'Michelin',
      description: '13R22.5 XZH2 R TL 154/150G MS MI',
    },
    '5LI': {
      wheel_place: '5LI',
      observation_level: 1,
      pressure: null,
      rtd: 5,
      CAI: 242252,
      brand: 'Michelin',
      description: '13R22.5 XZH2 R TL 154/150G MS MI',
    },
    '5RI': {
      wheel_place: '5RI',
      observation_level: 2,
      pressure: 2,
      rtd: 3,
      CAI: 242252,
      brand: 'Michelin',
      description: '13R22.5 XZH2 R TL 154/150G MS MI',
    },
    '5RO': {
      wheel_place: '5RO',
      observation_level: 3,
      pressure: null,
      rtd: 5,
      CAI: 242252,
      brand: 'Michelin',
      description: '13R22.5 XZH2 R TL 154/150G MS MI',
    },
  } satisfies HcVehicleSchemaTireData

  // remove all disabled fields for default mode
  const defaultTireData = Object.values(simpleTireData).reduce((acc: HcVehicleSchemaTireData, item: HcTireData) => {
    return {
      ...acc,
      [item.wheel_place]: {
        ...item,
        disabled: false,
      },
    }
  }, {} as HcVehicleSchemaTireData)

  const spareListDefault = ref<HcSpareTireData[]>([
    { rtd: 1, pressure: 2, wheel_place: 'SP1' },
    { rtd: null, pressure: null, wheel_place: 'SP2' },
    { rtd: 1, pressure: 2, observation_level: 2, wheel_place: 'SP3', dismount: true },
    { rtd: 1, pressure: 2, wheel_place: 'SP4', dismount: true },
    { rtd: 1, pressure: 2, wheel_place: 'SP5' },
  ])

  const simpleSpareList = ref<HcSpareTireData[]>([
    { rtd: null, pressure: null, observation_level: 0, wheel_place: 'SP1', deletable: true },
    { rtd: null, pressure: null, observation_level: 0, wheel_place: 'SP2', deletable: true },
    { rtd: 1, pressure: 2, observation_level: 0, CAI: 242252, brand: 'Michelin', description: '13R22.5 XZH2 R TL 154/150G MS MI', wheel_place: 'SP3', deletable: true },
    { rtd: 1, pressure: 2, observation_level: 0, temp_cai_id: 242252, brand: 'Michelin', description: '13R22.5 XZH2 R TL 154/150G MS MI', wheel_place: 'SP4', deletable: true },
    { rtd: 1, pressure: 2, observation_level: 0, wheel_place: 'SP5', deletable: true },
  ])

  const unit = ref({
    pressure_unit: 'bar',
    rtd_unit: 'mm',
  })
  const axleData = ref({
    /** New leading axle / 最前新增轴：等级 0 */
    0: {
      observationLevel: 0,
      recommendPressure: null,
      recommendSize: null,
      type: 'D2',
    },
    1: {
      observationLevel: 0,
      recommendPressure: 1,
      recommendSize: null,
      type: 'D2',
    },
    2: {
      observationLevel: 1,
      recommendPressure: 0,
      recommendSize: '315/80R22.5',
      type: 'S2',
    },
    3: {
      observationLevel: 2,
      recommendPressure: 8.8,
      recommendSize: '315/80R22.5',
      type: 'S4',
    },
    4: {
      observationLevel: 3,
      recommendPressure: 8.8,
      recommendSize: '315/80R22.5',
      type: 'S4',
    },
  })

  const onTireDelete = (wheelPlace: string) => {
    simpleSpareList.value = simpleSpareList.value.filter((item) => item.wheel_place !== wheelPlace)
  }

</script>

<style scoped lang="less">
  /** Demo layout / 演示页双列布局 */
  .vehicle-schema-page {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .vehicle-schema-demo {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    &__title {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #1a1a1a;
      width: 100%;
      text-align: center;
    }
  }
</style>
