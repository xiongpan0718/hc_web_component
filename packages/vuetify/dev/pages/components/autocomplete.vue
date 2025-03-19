<template>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="outlined"
        clearable
      />
    </div>
    <div style="flex: 1">
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        :menu-icon="null"
        append-inner-icon="mdi-magnify"
        variant="outlined"
        clearable
        multiple
      />
    </div>
  </div>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="outlined"
        clearable
        disabled
      />
    </div>
    <div style="flex: 1">
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        :menu-icon="null"
        append-inner-icon="mdi-magnify"
        variant="outlined"
        chips
        clearable
        closable-chips
        multiple
      />
    </div>
  </div>
  <div style="position: fixed;bottom: 200px">
    <h3>无法修改的样式</h3>
    <p>无法修改label的位置</p>
    <p>下拉列表选中后的右侧图标，无法修改</p>
    <p>多选，超出一定个数，隐藏显示剩余未显示的个数，无法修改</p>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">

</style>
