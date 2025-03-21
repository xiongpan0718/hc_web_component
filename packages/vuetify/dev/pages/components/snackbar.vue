<template>
  <div class="text-center ma-2">
    <v-btn
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>
    <v-snackbar
      icon="$hollowInfo"
      :timeout="10000000"
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
  <div style="margin-top: 50px;">
    <h3>无法修改的样式</h3>
    <p>1.组件不支持通过属性在文本前自定义icon标签</p>
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
