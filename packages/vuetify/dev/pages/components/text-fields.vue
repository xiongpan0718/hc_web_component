<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-17 17:56:38
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/text-fields.vue
 * @Description  :
-->
<template>
  <v-expansion-panels v-model="isShow">
    <v-expansion-panel value="state">
      <template #title>
        <h2>States</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="3"> Default </v-col>
          <v-col cols="3">
            <v-text-field label="Label" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> Disabled </v-col>
          <v-col cols="3">
            <v-text-field label="Label" disabled />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> Hints </v-col>
          <v-col cols="3">
            <v-text-field
              hint="Enter your password to access this website"
              label="Password"
              type="input"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> Error </v-col>
          <v-col cols="3">
            <v-text-field
              error-messages="Enter your password to access this website"
              label="Password"
              type="input"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> Icon </v-col>
          <v-col cols="3">
            <v-text-field
              append-inner-icon="explore_nearby"
              label="Append inner"
              variant="underlined"
            />
          </v-col>
        </v-row>
      </template>
      <div class="description">
        <ul>
          <li>text-fields 组件 css 样式差距较大，做不到仅 css 调整，与设计稿一致</li>
          <li>text-fields component css style gap is large, can not do only css adjustment, consistent with the design of the draft.</li>
        </ul>
      </div>
    </v-expansion-panel>
  </v-expansion-panels>
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
