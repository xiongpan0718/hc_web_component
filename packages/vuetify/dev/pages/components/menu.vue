<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-18 10:26:42
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/menu.vue
 * @Description  :
-->
<template>
  <v-row>
    <v-col cols="6">
      <v-menu>
        <template #activator="{ props }">
          <v-btn color="primary" v-bind="props">
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :value="index">
            <v-list-item-title style="display: flex; align-items: center;">
              <v-checkbox :label="item.title" :model-value="index === 0" style="height: 24px;" />
              <!-- <v-checkbox /> -->
              <!-- <div style="flex: 1; padding: 0 12px;">{{ item.title }}</div> -->
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
    <v-col cols="6">
      <v-menu>
        <template #activator="{ props }">
          <v-btn color="primary" v-bind="props">
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :value="index">
            <v-list-item-title style="display: flex; align-items: center;">
              <v-icon icon="info" />
              <div style="flex: 1; padding: 0 12px;">{{ item.title }}</div>
              <v-icon icon="arrow_forward_ios" size="small" />
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script setup>
  // import { ref } from 'vue'

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
