<template>
  <div class="filters-container">
    <v-select 
      v-model="locale" 
      :items="locales" 
      item-title="text" 
      item-value="value" 
      density="compact"
      style="max-width: 160px"
    ></v-select>

    <HcTableBar
      v-model:value="tableBarData.showColumnList"
      :column-list="tableBarData.columnList"
      :filter-count="tableBarData.filterCount"
      :total="tableBarData.total"
      @setColumnCache="setColumnCache"
    />

    <HcTableBar
      v-model:value="tableBarData.showColumnList"
      :column-list="tableBarData.columnList"
      :total="tableBarData.total"
      @setColumnCache="setColumnCache"
    />

    <HcTableBar
      v-model:value="tableBarData.showColumnList"
      :column-list="tableBarData.columnList"
      :filter-count="tableBarData.filterCount"
      @setColumnCache="setColumnCache"
    />
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();
  const locales = ref([
        { text: 'English', value: 'en' },
        { text: '简体中文', value: 'zhHans' },
        { text: 'Polski', value: 'pl' },
        { text: 'Português', value: 'pt' },
    ]);
  const tableBarData = ref({
    total: 20,
    filterCount: 10,
    showColumnList: [],
    columnList: [
      { title: '111', align: 'start', key: 'vehicle_reg_no', sortable: true, disabled: true },
      { title: '2222', align: 'start', key: 'vehicle_fleet_no', sortable: true, disabled: true },
      { title: '333', align: 'start', key: 'vehicle_status', sortable: true },
      { title: '4444', align: 'start', key: 'recommended_inspection_type', sortable: true },
      { title: '55555', align: 'start', key: 'last_inspection_date', sortable: true },
      { title: '66666', align: 'start', key: 'days_to_last_inspection', sortable: true },
      { title: '777777', align: 'start', key: 'next_inspection_date', sortable: true },
      { title: '88888', align: 'start', key: 'days_to_next_inspection', sortable: true },
      { title: '999999', align: 'start', key: 'vehicle_type', sortable: true },
      { title: '10101010', align: 'start', key: 'wheel_position', sortable: true },
      { title: '111100000', align: 'start', key: 'make', sortable: true },
      { title: '23232323', align: 'start', key: 'model', sortable: true },
    ],
  })

  const setColumnCache = newValue => {
    console.log('setColumnCache', newValue)
    if (newValue && Array.isArray(newValue)) {
      localStorage.setItem('tableBarColumns', newValue)
    }
  }

  onMounted(() => {
    const stored = localStorage.getItem('tableBarColumns')
    tableBarData.value.showColumnList = stored ? stored.split(',') : tableBarData.value.columnList.map(item => item.key)
  })

</script>

<style scoped lang="scss">
.filters-container {
  padding: 24px;
}
</style>