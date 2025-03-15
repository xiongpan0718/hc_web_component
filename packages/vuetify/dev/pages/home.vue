<template>
  <v-app>
    <v-navigation-drawer>
      <v-card
        style="height: 100%"
      >
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <h3>Veutify</h3>
            </v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list
          :items="items"
          item-title="name"
          item-value="id"
          @click:select="select"
        />
      </v-card>
    </v-navigation-drawer>
    <v-app-bar :title="name" />
    <v-main>
      <v-container style="height: 100%">
        <component :is="list[key]" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import Btn from './components/Btn.vue'
  import EmptyState from './components/empty-state.vue'

  const items = ref([
    { name: 'Btn (按钮)', id: 'Btn' },
    { name: 'EmptyState (空状态)', id: 'EmptyState' },
  ])

  const list = {
    Btn,
    EmptyState,
  }
  const key = ref('EmptyState')

  const select = ({ id }) => {
    key.value = id
  }
  const name = computed(() => {
    return items.value.find(item => item.id === key.value).name
  })

</script>

<style scoped lang="less">

</style>
