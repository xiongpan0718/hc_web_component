<template>
  <div style="display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; align-items: flex-start">
    <HcWheelSchema :axle-type-list="axleTypeList" :spare-list="spareList" size="large" wheel-type="2-4-4" />
    <HcWheelSchema :axle-type-list="axleTypeList" :spare-list="spareList" size="medium" wheel-type="2-4-4" />
    <HcWheelSchema :axle-type-list="axleTypeList" :spare-list="spareList" size="small" wheel-type="2-4-4" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const spareList = ref([
    { rtd: '1', pressure: '2', wheel_place: 'SP1' },
    { rtd: '', pressure: '', wheel_place: 'SP2' },
    { rtd: '1', pressure: '2', wheel_place: 'SP3', dismount: true },
    { rtd: '1', pressure: '2', wheel_place: 'SP4', dismount: true },
    { rtd: '1', pressure: '2', wheel_place: 'SP5' },
  ])

  const axleTypeList = ref(['D2', 'S4', 'S4'])
</script>
