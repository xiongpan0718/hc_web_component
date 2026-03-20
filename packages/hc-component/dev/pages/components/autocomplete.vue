<template>
  <div class="d-flex" style="width: 100%; gap: 20px; margin-bottom: 20px">
    <div style="flex: 1">
      <h4>单选</h4>
      <hc-autocomplete
        :max-display-items="5"
        :items="stateItems"
        item-title="title"
        item-value="value"
        label="Label"
        variant="outlined"
        clearable
      />
    </div>
    <div style="flex: 1">
      <h4>多选,内容纸片显示,max-lenght控制数量</h4>
      <hc-autocomplete
        :items="stateItems"
        item-title="title"
        item-value="value"
        append-inner-icon="search"
        label="Label"
        variant="outlined"
        chips
        clearable
        closable-chips
        multiple
      />
    </div>
  </div>
  <div class="d-flex" style="width: 100%; gap: 20px; margin-bottom: 20px">
    <div style="flex: 1">
      <h4>Disabled1</h4>
      <v-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" label="Label" variant="outlined" disabled />
    </div>
    <div style="flex: 1">
      <h4>Disabled2</h4>
      <v-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" label="Label" variant="outlined" disabled v-model="Disabled" />
    </div>
  </div>
  <div class="d-flex" style="width: 100%; gap: 20px; margin-bottom: 20px">
    <div style="flex: 1">
      <h4>Disabled3</h4>
      <hc-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" append-inner-icon="search" label="Label" variant="outlined" chips clearable
        multiple disabled :closable-chips="false" v-model="Disableds" />
    </div>
    <div style="flex: 1">
      <h4>多选 Error</h4>
      <hc-autocomplete
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        label="Label"
        chips
        closable-chips
        clearable
        multiple
        :rules="[(v) => v.length > 0 || 'Field is required']"
        v-model="Error"
        validate-on="eager"
      />
    </div>
  </div>
  <div class="d-flex" style="width: 100%; gap: 20px; margin-bottom: 20px">
    <div style=" flex: 1">
      <h4>Error</h4>
      <hc-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" error-messages="There is an error message" label="Label" variant="outlined" error
        clear-icon="close" />
    </div>
    <div style="flex: 1">
      <h4>No Data</h4>
      <hc-autocomplete label="Label" :items="[]" no-data-text="No result" variant="outlined" clearable />
    </div>
  </div>
  <div class="d-flex" style="width: 100%; gap: 20px; margin-bottom: 20px">
    <div style="flex: 1">
      <h4>Single Advance Search ({{ advanceSearch ? 'on' : 'off' }})</h4>
      <hc-autocomplete
        v-model:advance-search="advanceSearch"
        show-advance-search
        :items="stateItems"
        item-title="title"
        item-value="value"
        :max-display-items="10"
        clearable
      />
    </div>
    <div style="flex: 1">
      <h4>Multiple Advance Search ({{ advanceSearch ? 'on' : 'off' }})</h4>
      <hc-autocomplete
        v-model:advance-search="advanceSearch"
        show-advance-search
        :items="stateItems"
        item-title="title"
        item-value="value"
        :max-display-items="10"
        chips
        clearable
        multiple />
    </div>
  </div>
  <div style="margin-top: 50px">
    <h3>Style that cannot be modified</h3>
    <p>1、When the input box of Chips is wide enough, it needs to display all the information and should not be abbreviated as "..." Only when the input box is fully covered but still cannot be displayed completely will "... "be shown. The maximum width of the chip is 100px, which cannot handle dynamic lengths.</p>
    <p>2、When the dropdown list is empty, the style of "no data" needs to be modified in the source code</p>
    <p>3、The right icon when the dropdown list is selected cannot be modified, which needs to be modified in the source code</p>
  </div>
  <div style="margin-top: 50px">
    <h3>无法修改的样式</h3>
    <p>1、Chips在输⼊框够宽的情况下，需要展示全部的信息，不要缩略成“…”，只有平铺满输⼊框还不能全部展示时，才显示“……”，无法处理动态长度 现chip的最大宽度为150px;</p>
    <p>2、下拉列表为空时，显示no data的样式，需修改源码</p>
    <p>3、下拉列表选中时的右侧图标，需修改源码</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const stateItems = [
  { title: "California", value: "California" },
  { title: "Colorado", value: "Colorado" },
  { title: "Florida", value: "Florida" },
  { title: "Georgia", value: "Georgia" },
  { title: "Texas", value: "Texas" },
  { title: "Wyoming", value: "Wyoming" },
  { title: "New York", value: "New York" },
  { title: "New Jersey", value: "New Jersey" },
  { title: "New Mexico", value: "New Mexico" },
  { title: "New Hampshire", value: "New Hampshire" },
  { title: "Nevada", value: "Nevada" },
  { title: "Nepal", value: "Nepal" },
  { title: "Nicaragua", value: "Nicaragua" },
  { title: "Niger", value: "Niger" },
  { title: "Nigeria", value: "Nigeria" },
  { title: "Norway", value: "Norway" },
  { title: "Oman", value: "Oman" },
  { title: "Pakistan", value: "Pakistan" },
  { title: "Palau", value: "Palau" },
  { title: "Palestine", value: "Palestine" },
  { title: "Panama", value: "Panama" },
  { title: "Papua New Guinea", value: "Papua New Guinea" },
  { title: "Paraguay", value: "Paraguay" },
  { title: "Peru", value: "Peru" },
  { title: "Philippines", value: "Philippines" },
  { title: "Poland", value: "Poland" },
  { title: "Portugal", value: "Portugal" },
  { title: "Qatar", value: "Qatar" },
  { title: "Romania", value: "Romania" },
];

const Disabled = ref("Disabled");
const Disableds = ref(["Disabled1", "Disabled2", "Disabled3", "Disabled4"]);
const Error = ref([]);
const advanceSearch = ref(false);
</script>

<style scoped lang="scss">
h4 {
  margin-bottom: 10px;
}
</style>
