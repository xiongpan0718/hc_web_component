<template>
  <div class="tabs">
    <div class="text-subtitle-2 mb-2">Anatomy</div>
    <v-hc-tabs v-model="tab">
      <v-hc-tab
        badge-color="blue"
        badge-number="99"
        class="text-none"
        prepend-icon="list"
        value="one"
        variant="text"
      >
        <span>Item</span>
      </v-hc-tab>
      <v-hc-tab value="two">Card</v-hc-tab>
      <v-hc-tab value="three">Schedule</v-hc-tab>
    </v-hc-tabs>
    <div class="tab_item">
      <v-hc-tabs v-model="tabItem">
        <v-hc-tab
          badge-color="blue"
          badge-number="99"
          class="text-none"
          value="one"
          variant="text"
        >
          Item
        </v-hc-tab>
      </v-hc-tabs>
      <v-hc-tabs v-model="tabItem">
        <v-hc-tab
          badge-color="grey"
          badge-number="99"
          class="text-none"
          value="one"
          variant="text"
        >
          Item
        </v-hc-tab>
      </v-hc-tabs>
      <v-hc-tabs v-model="tabItem">
        <v-hc-tab
          badge-color="red"
          badge-number="99"
          class="text-none"
          value="one"
          variant="text"
        >
          Item
        </v-hc-tab>
      </v-hc-tabs>
      <v-hc-tabs v-model="tabItem">
        <v-hc-tab
          badge-color="yellow"
          badge-number="99"
          class="text-none"
          value="one"
          variant="text"
        >
          Item
        </v-hc-tab>
      </v-hc-tabs>
      <v-hc-tabs v-model="tabItem">
        <v-hc-tab
          badge-color="green"
          badge-number="99"
          class="text-none"
          value="one"
          variant="text"
        >
          Item
        </v-hc-tab>
      </v-hc-tabs>
    </div>
    <div class="tab_item">
      <div>
        <div class="text-subtitle-2 mb-2">MAX WIDTH</div>
        <v-hc-tabs v-model="tabItem">
          <v-hc-tab
            class="text-none"
            tooltip-text="Tab with truncated text samTab with truncated text samTab with truncated text sa"
            value="one"
            variant="text"
          >
            <span class="text-overflow">Tab with truncated text samTab with truncated text samTab with truncated text sam</span>
          </v-hc-tab>
        </v-hc-tabs>
      </div>
      <div>
        <div class="text-subtitle-2 mb-2">Text only</div>
        <v-hc-tabs v-model="tabItem">
          <v-hc-tab class="text-none" value="one" variant="text">
            Item
          </v-hc-tab>
        </v-hc-tabs>
      </div>
      <div>
        <div class="text-subtitle-2 mb-2">Icon + Text</div>
        <v-hc-tabs v-model="tabItem">
          <v-hc-tab class="text-none" prepend-icon="list" value="one" variant="text">
            Item
          </v-hc-tab>
        </v-hc-tabs>
      </div>
      <div>
        <div class="text-subtitle-2 mb-2">Icon only</div>
        <v-hc-tabs v-model="tabItem" stacked>
          <v-hc-tab class="text-none" prepend-icon="list" value="one" variant="text" />
        </v-hc-tabs>
      </div>
      <div>
        <div class="text-subtitle-2 mb-2">disabled</div>
        <v-hc-tabs v-model="tabItem">
          <v-hc-tab class="text-none" prepend-icon="list" variant="text" disabled>
            list
          </v-hc-tab>
        </v-hc-tabs>
      </div>
    </div>
    <div class="text-subtitle-2 mb-2">Pagination</div>
    <v-hc-tabs bg-color="white" center-active>
      <v-hc-tab>One</v-hc-tab>
      <v-hc-tab>Two</v-hc-tab>
      <v-hc-tab>Three</v-hc-tab>
      <v-hc-tab>Four</v-hc-tab>
      <v-hc-tab>Five</v-hc-tab>
      <v-hc-tab>Six</v-hc-tab>
      <v-hc-tab>Seven</v-hc-tab>
      <v-hc-tab>Eight</v-hc-tab>
      <v-hc-tab>Nine</v-hc-tab>
      <v-hc-tab>Ten</v-hc-tab>
      <v-hc-tab>Eleven</v-hc-tab>
      <v-hc-tab>Twelve</v-hc-tab>
      <v-hc-tab>Thirteen</v-hc-tab>
      <v-hc-tab>Fourteen</v-hc-tab>
      <v-hc-tab>Fifteen</v-hc-tab>
      <v-hc-tab>Sixteen</v-hc-tab>
      <v-hc-tab>Seventeen</v-hc-tab>
      <v-hc-tab>Eighteen</v-hc-tab>
      <v-hc-tab>Nineteen</v-hc-tab>
      <v-hc-tab>Twenty</v-hc-tab>
    </v-hc-tabs>
    <div>
      <div class="text-subtitle-2 mb-2">left alignment</div>
      <v-hc-tabs align-tabs="start">
        <v-hc-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-hc-tab>
        <v-hc-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-hc-tab>
        <v-hc-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-hc-tab>
        <v-hc-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-hc-tab>
        <v-hc-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-hc-tab>
      </v-hc-tabs>
    </div>
    <div>
      <div class="text-subtitle-2 mb-2">fill container</div>
      <v-hc-tabs align-tabs="center">
        <v-hc-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-hc-tab>
        <v-hc-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-hc-tab>
        <v-hc-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-hc-tab>
        <v-hc-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-hc-tab>
        <v-hc-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-hc-tab>
      </v-hc-tabs>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const tab = ref('one')
  const tabItem = ref('two')
</script>

<style scoped>
.tabs {
  height: 100%;
  background-color: #F9F9F9;
  padding-left: 20px;
}

.tab_item {
  display: flex;
  margin: 20px 0;
  &>div {
    margin-right: 30px
  }
}
</style>
