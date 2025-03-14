<template>
  <v-app>
    <v-navigation-drawer>
      <v-card
        class="mx-auto"
        max-width="300"
        style="height: 100%">
        <v-list
          :items="items"
          item-title="name"
          item-value="id"
        />
      </v-card>
    </v-navigation-drawer>
    <v-app-bar :title="key" />
    <v-main>
      <v-container style="height: 100%">
        <component :is="list[key]"></component>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import Btn from './components/Btn.vue'

  const items = ref([
    { name: 'Btn (按钮)', id: '1' },
  ])

  const list = {
    Btn: Btn,
  }
  const key = ref('Btn')

</script>

<style scoped lang="less">

</style>
