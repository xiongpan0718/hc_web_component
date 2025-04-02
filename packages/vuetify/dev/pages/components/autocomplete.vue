<template>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <h4>单选状态</h4>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        clearable
      />
    </div>
    <div style="flex: 1">
      <h4>多选状态,增加checkbox效果，内容样式默认显示</h4>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        clearable
        focused
        multiple
      />
    </div>
  </div>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <h4>Disabled</h4>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        clearable
        disabled
      />
    </div>
    <div style="flex: 1">
      <h4>多选状态，搜索图标，内容纸片显示</h4>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        :menu-icon="null"
        append-inner-icon="mdi-magnify"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        chips
        clearable
        closable-chips
        multiple
      />
    </div>
  </div>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <h4>error状态</h4>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        error-messages="There is an error message"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        clearable
        error
      />
    </div>
    <div style="flex: 1">
      <h4>No Data</h4>
      <v-autocomplete
        :items="[]"
        no-data-text="No result"
        placeholder="please enter"
        variant="outlined"
        clearable
      />
    </div>
  </div>
  <div style="margin-top: 50px;">
    <h3>Style that cannot be modified</h3>
    <p>1、Cannot modify the position of the label</p>
    <p>2、The icon selected on the right side of the dropdown list cannot be modified</p>
    <p>3、Multiple selection, if the number exceeds a certain limit, hide and display the remaining part. The remaining number displayed cannot be modified</p>
    <p>4、Multiple selection. The close icon is inconsistent with the prototype and cannot be modified</p>
    <p>5、The close icon is inconsistent with the prototype and cannot be modified</p>
    <p>6、The up and down arrow icons on the right cannot be modified</p>
    <p>7、The initial state label is displayed in the center of the input box, while the placeholder (please enter) attribute value cannot be displayed，</p>
    <p style="text-indent: 25px">The placeholder will only display when the input box value is empty after obtaining the focus, and the label position will change from the middle to the top;</p>
    <p>8、Error status form, cannot automatically add red additional internal icon display</p>
    <p>9、The default text prompt cannot be modified without displaying the text as a result, but the property (no data text) can be used to specify the text to be displayed when there is no data</p>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
h4{
  margin-bottom: 10px;
}
</style>
