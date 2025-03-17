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
  import EmptyState from './components/empty-state.vue'
  import Alert from './components/alert.vue'
  import Snackbar from './components/snackbar.vue'

  const items = ref([
    { name: 'EmptyState (空状态)', id: 'EmptyState' },
    { name: 'Alert (警告框)', id: 'Alert' },
    { name: 'Snackbar (消息条)', id: 'Snackbar' },
  ])

  const list = {
    EmptyState,
    Alert,
    Snackbar
  }
  const key = ref('Snackbar')

  const select = ({ id }) => {
    key.value = id
  }
  const name = computed(() => {
    return items.value.find(item => item.id === key.value).name
  })

</script>

<style scoped lang="less">

</style>
