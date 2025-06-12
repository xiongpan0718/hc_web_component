<template>
  <div>
    <div class="table-toolbar">
      <div class="table-toolbar-left">
        <div>Total<span class="text-primary">{{ count }}</span> items</div>
        <!-- <v-divider class="table-toolbar-divider" length="16" vertical />
        <div>333 <span class="text-primary">{{ total }}</span> 444</div> -->
      </div>
      <div>
        <v-menu v-model="menu" :close-on-content-click="false" offset-y>
          <template #activator="{ props: activatorProps }">
            <v-icon icon="settings" v-bind="activatorProps" size="20" />
          </template>
          <v-list>
            <v-list-item v-for="col in localColumns" :key="col.key">
              <v-checkbox
                v-model="col.visible"
                :disabled="col.locked"
                :label="col.title"
                hide-details
              />
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <v-data-table
      :headers="showColumns"
      :items="items"
      :items-length="count"
      density="compact"
      item-key="name"
      hide-default-footer
      show-select
    >
    <template v-slot:bottom>
      <div class="pagination-content">
        <div class="pagination-content-left">
          <label class="pagination-content-left-label" for="items-per-page">Items per page</label>
          <v-select
            id="items-per-page"
            v-model="dataPagesize"
            :items="dataPagesizeOptions"
            density="compact"
            max-width="100"
            hide-details
            @update:model-value="pagesizeChange"
          />
        </div>
        <div class="pagination-content-right">
          <v-pagination
            v-model="dataPage"
            class="pagination-content-right-pagination"
            :length="pageCount"
            @update:model-value="pageChange"
          ></v-pagination>
        </div>
      </div>
    </template>
    </v-data-table>
  </div>
</template>

<script setup>
  import { computed, ref, toRaw, watch } from 'vue'
  import { VDataTable } from 'vuetify/components'

  const props = defineProps({
    total: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    },
    dataPagesizeOptions: {
      type: Array,
      default: () => [
        { title: '10', value: 10 },
        { title: '20', value: 20 },
        { title: '50', value: 50 },
        { title: '100', value: 100 },
      ]
    }
  })
  
  const emit = defineEmits(['update:showColumns', 'update:pageChange', 'update:pagesizeChange'])
  
  const menu = ref(false)
  const localColumns = ref(props.columns.map(col => ({ ...col })))

  const dataPage = ref(1)
  const dataPagesize = ref(10)
  const pageCount = computed(() => {
    if (!dataPagesize.value) return 0
    return Math.ceil(props.count / dataPagesize.value)
  })

  const pagesizeChange = pagesize => {
    emit('update:pagesizeChange', pagesize)
  }

  const pageChange = page => {
    emit('update:pageChange', page)
  }
  
  watch(() => props.columns, newVal => {
    localColumns.value = newVal.map(col => ({ ...col }))
  }, { immediate: true })

  const showColumns = computed(() => localColumns.value.filter(col => col.visible))

  watch(showColumns, val => {
    emit('update:showColumns', toRaw(val))
  }, { immediate: true })

</script>

<style scoped>
.table-toolbar {
  display: flex;
  padding: var(--size-spacing-8-px, 8px) var(--size-spacing-12-px, 12px);
  align-items: center;
  justify-content: space-between;
  gap: var(--size-spacing-12-px, 12px);
  align-self: stretch;
  border-radius: 3px;
  background: var(--Surface-info-bg, #D9E3F7);
}

.table-toolbar-left{
  display: flex;
  align-items: center;
}

.text-primary {
  color: #27509B;
  font-weight: bold;
}

.table-toolbar-divider{
  margin: auto 2px;
}

.pagination-content{
  display: flex;
  justify-content: space-between;
  gap: 4px;
}

.pagination-content-left{
  display: flex;
  align-items: center;
}

.pagination-content-left-label{
  margin-right: 4px;
}

.pagination-content-right{
  margin-top: 3px;
  flex: 1;
  max-width: 50%;
}

.pagination-content-right-pagination{
  margin-right: 4px;
}
</style>
