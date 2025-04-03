<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 10:56:30
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-02 15:22:14
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/home.vue
 * @Description  :
-->
<template>
  <v-app>
    <v-navigation-drawer>
      <v-card
        style="height: 100%"
      >
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <h3>Vuetify</h3>
            </v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list
          :items="items"
          item-title="name"
          item-value="id"
          @click:select="select"
        >
          <template #prepend="{item}">
            <v-icon :color="item.color" :icon="item.icon" />
          </template>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar :title="name" />
    <v-main>
      <v-container style="height: 100%">
        <component :is="list[key]" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import EmptyState from './components/empty-state.vue'
  import Alert from './components/alert.vue'
  import Snackbar from './components/snackbar.vue'
  import Radio from './components/radio.vue'
  import AutoComplete from './components/autocomplete.vue'
  import Chip from './components/chip.vue'
  import ExpansionPanels from './components/expansion-panels.vue'
  import Button from './components/button.vue'
  import Badge from './components/badge.vue'
  import Divider from './components/divider.vue'
  import Tooltips from './components/tooltips.vue'
  import Textareas from './components/textareas.vue'
  import Tabs from './components/tabs.vue'
  import Icons from './components/icons.vue'
  import Checkbox from './components/checkbox.vue'
  import Select from './components/select.vue'

  const items = ref([
    { name: 'EmptyState (空状态)', id: 'EmptyState', icon: '$delimiter', color: 'blue' },
    { name: 'Alert (警告框)', id: 'Alert', icon: '$delimiter', color: 'green' },
    { name: 'Snackbar (消息条)', id: 'Snackbar', icon: '$delimiter', color: 'green' },
    { name: 'Radio (单选按钮)', id: 'Radio', icon: '$delimiter', color: 'green' },
    { name: 'AutoComplete (自动补全)', id: 'AutoComplete', icon: '$delimiter', color: '#b80b0b' },
    { name: 'Icons (图标)', id: 'Icons', icon: '$delimiter', color: 'green' },
    { name: 'Chip (纸片)', id: 'Chip', icon: '$delimiter', color: 'green' },
    { name: 'ExpansionPanels (扩展面板)', id: 'ExpansionPanels', icon: '$delimiter', color: 'green' },
    { name: 'Button (按钮)', id: 'Button', icon: '$delimiter', color: '#615ced' },
    { name: 'Badge (徽章)', id: 'Badge', icon: '$delimiter', color: '#615ced' },
    { name: 'Divider (分隔线)', id: 'Divider', icon: '$delimiter', color: '#615ced' },
    { name: 'Tooltips (提示)', id: 'Tooltips', icon: '$delimiter', color: 'green' },
    { name: 'Textareas (多行文本框)', id: 'Textareas' },
    { name: 'Tabs (选项卡)', id: 'Tabs' },
    { name: 'Checkboxs (复选框)', id: 'Checkbox', icon: '$delimiter', color: '#615ced' },
    { name: 'Selects (下拉选择框)', id: 'Select', icon: '$delimiter', color: '#615ced' },
  ])

  const list = {
    EmptyState,
    Alert,
    Snackbar,
    Radio,
    Chip,
    ExpansionPanels,
    AutoComplete,
    Button,
    Badge,
    Divider,
    Tooltips,
    Textareas,
    Tabs,
    Icons,
    Checkbox,
    Select,
  }
  const key = ref('Select')

  const select = ({ id }) => {
    key.value = id
  }
  const name = computed(() => {
    return items.value.find(item => item.id === key.value).name
  })

</script>

<style scoped lang="less">

</style>
