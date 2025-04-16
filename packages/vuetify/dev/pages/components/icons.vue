<template>
  <div style="display: flex;">
    <div style="display: flex;flex-direction: column;width: 200px;margin: 50px;border-bottom: 1px solid #ccc">
      <div class="icons">
        <v-icon icon="add" size="x-small" />
        x-small
      </div>
      <div class="icons">
        <v-icon icon="add" size="small" />
        small
      </div>
      <div class="icons">
        <v-icon icon="add" size="default" />
        default
      </div>
      <div class="icons">
        <v-icon icon="add" size="large" />
        large
      </div>
      <div class="icons">
        <v-icon icon="add" size="x-large" />
        x-large
      </div>
    </div>
    <div style="flex: 1;">
      <v-switch v-model="fill" label="FILL" />
      <div>
        <v-text-field variant="outlined" clearable @update:model-value="search" />
      </div>
    </div>
  </div>
  <div class="icon-list">
    <div v-for="item in list" :key="item.name" class="icon-item" @click="selectItem(item.name)">
      <v-icon :fill="fill" :icon="item.name" size="35" />
    </div>
  </div>
  <v-snackbar
    v-model="copyVisible"
    icon="content_copy"
  >
    {{ copyText }}
    <v-icon :icon="selectIcon" />
  </v-snackbar>
</template>

<script setup>
  import { computed, ref, unref } from 'vue'
  import { iconList } from '../assets/icons'
  const fill = ref(false)
  const copyVisible = ref(false)
  const copyText = ref(undefined)
  const searchText = ref('')
  const selectIcon = ref(undefined)

  const list = computed(() => {
    return iconList.filter(item => item.version === 325 && (searchText.value.toLowerCase() ? item.name.includes(searchText.value.toLowerCase()) : true))
  })

  const copyTextLegacy = text => {
    let copy = '<v-icon'
    if (fill.value) {
      copy += ' fill'
    }
    copy += ` icon="${text}" />`
    navigator.clipboard.writeText(copy).then(() => {
      selectIcon.value = text
      copyText.value = copy
      copyVisible.value = true
    })
  }

  const debounce = (fn, delay) => {
    let timeoutId = 0
    const wrap = function () {
      const _len = arguments.length
      const args = new Array(_len)
      let _key = 0
      for (; _key < _len; _key++) {
        args[_key] = arguments[_key]
      }
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => fn(...args), unref(delay))
    }
    wrap.clear = () => {
      clearTimeout(timeoutId)
    }
    wrap.immediate = fn
    return wrap
  }

  const selectItem = data => {
    copyTextLegacy(data)
  }

  const search = debounce(data => {
    searchText.value = data
  }, 1000)

</script>

<style scoped lang="scss">
.icons{
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 20px;
}
.icon-list{
  display: grid;
  grid-template-columns: repeat(15,1fr);
  grid-auto-rows: 80px;
  .icon-item{
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      background: #cccccc;
      border-radius: 4px;
    }
  }
}
</style>
