<template>
Count: {{ count }}
  <v-btn @click="add" active>Add</v-btn>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: String
})

const count = ref(0)
const add = () => {
  count.value++
}
</script>

<style scoped lang="less">

</style>
