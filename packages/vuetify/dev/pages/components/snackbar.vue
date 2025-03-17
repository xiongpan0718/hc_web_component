<template>
  <div class="text-center ma-2">
    <v-btn
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>
    <v-snackbar
      v-model="snackbar"
    >
      <v-icon icon="$hollowInfo" />
      {{ text }}
      <template #actions>
        <v-btn
          variant="text"
          @click="snackbar = false"
        >
          action
        </v-btn>
        <v-btn
          variant="text"
          @click="snackbar = false"
        >
          close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const snackbar = ref(true)
  const text = ref('Hello, I\'m a snackbar')

</script>

<style scoped lang="less">

</style>
