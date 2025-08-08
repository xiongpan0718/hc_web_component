<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-08 09:25:01
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/select.vue
 * @Description  :
-->
<template>
  <v-expansion-panels v-model="isShow">
    <v-expansion-panel value="state">
      <template #title>
        <h2>States</h2>
      </template>
      <template #text>
        <h3>Select</h3>
        <v-row>
          <v-col cols="6">
            <h4>Default</h4>
            <v-select
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              label="Select"
              :rules="[(v) => !v || 'You entered a wrong value']"
            />
          </v-col>
          <v-col cols="6">
            <h4>Disabled</h4>
            <v-select
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              label="Disabled"
              disabled
            />
          </v-col>
        </v-row>
        <h3>Autocomplete</h3>
        <v-row>
          <v-col cols="6">
            <h4>Default</h4>
            <v-autocomplete 
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              label="Label"
              variant="outlined"
              :rules="[(v) => !v || 'You entered a wrong value']"
              clearable
              chips
            />
          </v-col>
          <v-col cols="6">
            <h4>Disabled</h4>
            <hc-autocomplete 
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
              label="Label"
              disabled
            />
          </v-col>
        </v-row>
        <h3>Text Field</h3>
        <v-row>
          <v-col cols="6">
            <h4>Default</h4>
            <v-text-field 
              variant="outlined" 
              label="Label" 
              :rules="[(v) => !v || 'You entered a wrong value']"
            />
          </v-col>
          <v-col cols="6">
            <h4>Disabled</h4>
            <v-text-field variant="outlined" label="Label" disabled />
          </v-col>
        </v-row>
        <h3>Date Input</h3>
        <v-row>
          <v-col cols="6">
            <h4>Default</h4>
            <v-date-input
              label="Date Input"
              prepend-icon=""
              prepend-inner-icon="$calendar"
              variant="outlined"
              multiple="range"
              :rules="[(v) => !v || 'You entered a wrong value']"
            />
          </v-col>
          <v-col cols="6">
            <h4>Disabled</h4>
            <v-date-input
              label="Date Input"
              prepend-icon=""
              prepend-inner-icon="$calendar"
              variant="outlined"
              multiple="range"
              disabled
            />
          </v-col>
        </v-row>
      </template>
      <div class="description">
        <ul>
          <li>该页面仅用于对比不同input组件的样式，以保证样式一致</li>
          <li>This page is only used to compare the styles of different input components to ensure consistency.</li>
        </ul>
      </div>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
  import { VDateInput } from 'vuetify/labs/VDateInput'
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
}
</style>
