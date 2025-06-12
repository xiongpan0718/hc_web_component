<template>
  <div>
    <HcTable :columns="columns" :dataPagesizeOptions="dataPagesizeOptions" :items="dataList" :total="pagination.total" :count="pagination.count" @pageChange="pageChange" @pagesizeChange="pagesizeChange"/>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import HcTable from '../../../src/components/custom/HcTable/index.vue'
  const pagination = ref({
    total: 30,
    count: 12,
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
  const dataList = ref(Array(25).fill({}))
  const dataPagesizeOptions = ref([
    { title: '10', value: 10 },
    { title: '20', value: 20 },
    { title: '50', value: 50 },
    { title: '100', value: 100 },
  ])

  const pageChange = (page) => {
    console.log(page, 'page------------')
  }

  const pagesizeChange = (pagesize) => {
    console.log(pagesize, 'pagesize------------')
  }
</script>

<style scoped lang="scss">
</style>
