<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-card class="d-flex flex-column h-100">
        <div class="flex-shrink-0">
          <div class="pa-4 text-h6">Vuetify</div>
          <v-divider />
          <v-tabs
            v-model="navTab"
            grow
          >
            <v-tab value="native">
              <div class="d-flex flex-column">
                <span class="text-body-1 font-weight-bold">{{ $t('devHome.native') }}</span>
                <span class="text-body-2">{{ $t('devHome.components') }}</span>
              </div>
            </v-tab>
            <v-tab value="custom">
              <div class="d-flex flex-column">
                <span class="text-body-1 font-weight-bold">{{ $t('devHome.custom') }}</span>
                <span class="text-body-2">{{ $t('devHome.components') }}</span>
              </div>
            </v-tab>
          </v-tabs>
        </div>
        <div class="flex-grow-1 overflow-y-auto">
          <v-window v-model="navTab">
            <v-window-item value="native">
              <v-list
                :items="itemsNative"
                item-title="name"
                item-value="id"
                @click:select="select"
              >
                <template #prepend="{ item }">
                  <v-icon :color="item.color" :icon="item.icon" fill />
                </template>
              </v-list>
            </v-window-item>
            <v-window-item value="custom">
              <v-list
                :items="itemsCustom"
                item-title="name"
                item-value="id"
                @click:select="select"
              >
                <template #prepend="{ item }">
                  <v-icon :color="item.color" :icon="item.icon" fill />
                </template>
              </v-list>
            </v-window-item>
          </v-window>
        </div>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar :title="name" app>
      <template #append>
        <v-select
          v-model="locale"
          :items="locales"
          item-title="text"
          item-value="value"
          density="compact"
          style="max-width: 160px"
          hide-details
        />
      </template>
    </v-app-bar>
    <v-main>
      <v-container style="width: 100%;height: 100%; margin: 0;">
        <component :is="list[key]" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

/** 与 hc-filter / hc-table-bar 等演示页共用，全局切换 vue-i18n + Vuetify 语言 */
const locales = [
  { text: 'English', value: 'en' },
  { text: '简体中文', value: 'zhHans' },
  { text: '繁體中文', value: 'zhHant' },
  { text: 'Polski', value: 'pl' },
  { text: 'Português', value: 'pt' },
  { text: 'Español', value: 'es' },
  { text: 'Français', value: 'fr' },
  { text: 'Deutsch', value: 'de' },
  { text: 'Română', value: 'ro' },
]
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
import Switch from './components/switch.vue'
import TextFields from './components/text-fields.vue'
import Pagination from './components/pagination.vue'
import Menu from './components/menu.vue'
import DateInput from './components/date-input.vue'
import HcFilter from './components/hc-filter.vue'
import HcTableBar from './components/hc-table-bar.vue'
import Stepper from './components/stepper.vue'
import OverallInputs from './components/overall-inputs.vue'
import HcVehicleSchema from './components/hc-vehicle-schema.vue'
import HcWheelSchema from './components/hc-wheel-schema.vue'
import ButtonToggle from './components/button-toggle.vue'
import HcExpansionPanels from './components/hc-expansion-panels.vue'
import HcDialog from './components/hc-dialog.vue'
import HcProgressLinear from './components/hc-progress-linear.vue'
import HcTreeViewDemo from './components/hc-tree-view.vue'

/** 演示页仅使用 Vuetify 原生组件（未使用 src/components/custom、source 封装） */
const itemsNative = ref([
  { name: 'Alert (警告框)', id: 'Alert', icon: 'circle', color: 'green' },
  { name: 'Radio (单选按钮)', id: 'Radio', icon: 'circle', color: 'green' },
  { name: 'Icons (图标)', id: 'Icons', icon: 'circle', color: 'green' },
  { name: 'Chip (纸片)', id: 'Chip', icon: 'circle', color: 'green' },
  { name: 'ExpansionPanels (扩展面板)', id: 'ExpansionPanels', icon: 'circle', color: 'green' },
  { name: 'Button (按钮)', id: 'Button', icon: 'circle', color: 'green' },
  { name: 'Badge (徽章)', id: 'Badge', icon: 'circle', color: 'green' },
  { name: 'Divider (分隔线)', id: 'Divider', icon: 'circle', color: 'green' },
  { name: 'Tooltips (提示)', id: 'Tooltips', icon: 'circle', color: 'green' },
  { name: 'Selects (下拉选择框)', id: 'Select', icon: 'circle', color: 'red' },
  { name: 'Switch (开关)', id: 'Switch', icon: 'circle', color: 'green' },
  { name: 'Pagination (分页)', id: 'Pagination', icon: 'circle', color: 'purple' },
  { name: 'Menu (菜单)', id: 'Menu', icon: 'circle', color: 'green' },
  { name: 'DateInput (日期选择)', id: 'DateInput', icon: 'circle', color: 'green' },
  { name: 'Stepper (步骤条)', id: 'Stepper', icon: 'circle', color: 'green' },
  { name: 'ButtonToggle (按钮组)', id: 'ButtonToggle', icon: 'circle', color: 'green' },
])

/** 演示页使用了 custom / source 下的封装组件（hc-*、Hc* 等） */
const itemsCustom = ref([
  { name: 'EmptyState (空状态)', id: 'EmptyState', icon: 'circle', color: 'purple' },
  { name: 'HcVehicleSchema (轮位图)', id: 'HcVehicleSchema', icon: 'circle', color: 'green' },
  { name: 'HcWheelSchema (车桥简图)', id: 'HcWheelSchema', icon: 'circle', color: 'green' },
  { name: 'Snackbar (消息条)', id: 'Snackbar', icon: 'circle', color: 'green' },
  { name: 'AutoComplete (自动补全)', id: 'AutoComplete', icon: 'circle', color: 'red' },
  { name: 'Textareas (多行文本框)', id: 'Textareas', icon: 'circle', color: 'red' },
  { name: 'Tabs (选项卡)', id: 'Tabs', icon: 'circle', color: 'red' },
  { name: 'Checkboxs (复选框)', id: 'Checkbox', icon: 'circle', color: 'green' },
  { name: 'TextFields (单行文本框)', id: 'TextFields', icon: 'circle', color: 'red' },
  { name: 'HcFilter (筛选)', id: 'HcFilter', icon: 'circle', color: 'green' },
  { name: 'HcTableBar (表格工具栏)', id: 'HcTableBar', icon: 'circle', color: 'green' },
  { name: 'HcExpansionPanels (带激活按钮的扩展面板)', id: 'HcExpansionPanels', icon: 'circle', color: 'green' },
  { name: 'HcDialog (对话框)', id: 'HcDialog', icon: 'circle', color: 'green' },
  { name: 'HcProgressLinear (进度条)', id: 'HcProgressLinear', icon: 'circle', color: 'green' },
  { name: 'HcTreeView (树形选择)', id: 'HcTreeViewDemo', icon: 'circle', color: 'green' },
  { name: 'OverallInputs (整体输入)', id: 'OverallInputs', icon: 'circle', color: 'green' },
])

const customIds = new Set(itemsCustom.value.map((i) => i.id))

const list = {
  HcTreeViewDemo,
  HcExpansionPanels,
  HcDialog,
  HcProgressLinear,
  ButtonToggle,
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
  Switch,
  TextFields,
  Pagination,
  Menu,
  DateInput,
  HcFilter,
  HcTableBar,
  Stepper,
  OverallInputs,
  HcVehicleSchema,
  HcWheelSchema,
}

/** 无有效 localStorage 或 id 已失效时的默认演示页 */
const DEFAULT_PAGE_ID = 'HcFilter'

const savedId = localStorage.getItem('selectedId')
const initialKey = savedId && savedId in list ? savedId : DEFAULT_PAGE_ID
const key = ref(initialKey)

/** 与当前演示页同组：原生 / 自定义 */
const navTab = ref(customIds.has(initialKey) ? 'custom' : 'native')

const allMenuItems = computed(() => [
  ...itemsNative.value,
  ...itemsCustom.value,
])

const select = ({ id }) => {
  key.value = id
  localStorage.setItem('selectedId', id)
  navTab.value = customIds.has(id) ? 'custom' : 'native'
}

const name = computed(() => {
  return allMenuItems.value.find(item => item.id === key.value)?.name ?? ''
})

</script>

<style scoped lang="less">
</style>
