<template>
  count: {{ count }}
  <v-btn @click="add" active/>
</template>

<script setup>
  // Utilities
  import { ref } from 'vue'
  const count = ref(0)
  const add = () => {
    count.value++
  }
</script>
