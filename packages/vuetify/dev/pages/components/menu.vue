<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-17 18:09:32
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/menu.vue
 * @Description  :
-->
<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn color="primary" v-bind="props">
        Menu
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :value="index">
        <v-list-item-title>
          <v-checkbox :model-value="true" label="Checkbox label" />
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
  import { ref } from 'vue'
  const isShow = ref([
    'type',
    'orientation',
    'variant',
    'size',
    'state',
    'position',
    'menu',
  ])
  const page = ref(1)

  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
</script>

<style scoped lang="scss">
.v-expansion-panels {
  margin-bottom: 10px;
}

.btn-control {
  border-color: #cccccc;
  background-color: #f2f2f2 !important;
}

.description {
  padding: 15px;
  color: #ff0000;
}

.not-supported {
  padding: 15px 0;
  color: #ff0000;
}
</style>
