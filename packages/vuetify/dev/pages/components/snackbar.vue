<template>
  <div class="text-center ma-2">
    <v-btn
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>
    <v-snackbar
      icon="$hollowInfo"
      v-model="snackbar"
    >
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
<!-- 增加icon属性用来增加content前的icon显示 -->
<script setup>
  import { ref } from 'vue'
  const snackbar = ref(true)
  const text = ref('Hello, I\'m a snackbar')

</script>

<style scoped lang="less">

</style>
