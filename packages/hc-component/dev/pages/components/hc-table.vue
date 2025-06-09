<template>
  <div>
    <HcTable :columns="columns" :total="pagination.total" count="12" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import HcTable from '../../../src/components/custom/HcTable/index.vue'
  const pagination = ref({
    total: 0,
    count: 0,
  })
  const columns = ref([
    {
      title: '111',
      dataIndex: 'CAI',
      key: 'CAI',
      width: 100,
      disabled: true,
    },
    {
      title: '222',
      dataIndex: 'MSPN',
      key: 'MSPN',
    },
    {
      title: '333',
      dataIndex: 'brand',
      key: 'brand',
      width: 220,
    },
    {
      title: '444',
      dataIndex: 'spec',
      key: 'spec',
    },
    {
      title: '555',
      dataIndex: 'pattern',
      key: 'pattern',
      width: 250,
    },
    {
      title: '666',
      dataIndex: 'name',
      key: 'name',
      width: 300,
    },
    {
      title: '777',
      dataIndex: 'tyre_life',
      key: 'tyre_life',
    },
    {
      title: '888',
      dataIndex: 'otd',
      key: 'otd',
    },
    {
      title: '999',
      dataIndex: 'source',
      key: 'source',
    },
])
</script>

<style scoped lang="scss">
</style>
