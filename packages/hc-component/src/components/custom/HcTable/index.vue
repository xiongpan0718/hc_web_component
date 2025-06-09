<template>
  <div>
    <div class="table-toolbar">
      <div class="table-toolbar-left">
        <div>111<span class="text-primary">{{ count }}</span> 222</div>
        <v-divider class="table-toolbar-divider" length="16" vertical />
        <div>333 <span class="text-primary">{{ total }}</span> 444</div>
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
      :headers="localColumns"
      :items="[]"
      density="compact"
      item-key="name"
      hide-default-footer
      show-select>
    </v-data-table>
  </div>
  
</template>

<script setup>
  import { computed, ref, toRaw, watch } from 'vue'

  const props = defineProps({
    total: Number,
    count: Number,
    columns: Array,
  })
  const emit = defineEmits(['update:showColumns'])
  const menu = ref(false)
  const localColumns = ref(props.columns.map(col => ({ ...col })))

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
  border-radius: 4px;
  background: #F5F6FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 3px;
  background-color: #F2F2F2;
  border-radius: 1px;
  margin-bottom: 3px;
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
</style>
