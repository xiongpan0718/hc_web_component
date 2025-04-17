<template>
  <div class="tabs">
    <div class="text-subtitle-2 mb-2">Anatomy</div>
    <v-tabs v-model="tab">
      <v-tab class="text-none" prepend-icon="list" value="one" variant="text">
        <span>Item</span>
        <!-- <span class="v-tabs__badge v-tabs__badge--blue">99</span> -->
        <template #append>
          <v-badge
            color="blue"
            content="99"
            inline
          />
        </template>
      </v-tab>
      <v-tab value="two">Card</v-tab>
      <v-tab value="three">Schedule</v-tab>
    </v-tabs>
    <div class="tab_item">
      <v-tabs v-model="tabItem">
        <v-tab class="text-none" value="one" variant="text">
          Item
          <template #append>
            <v-badge
              color="blue"
              content="99"
              inline
            />
          </template>
        </v-tab>
      </v-tabs>
      <v-tabs v-model="tabItem">
        <v-tab class="text-none" value="one" variant="text">
          Item
          <template #append>
            <v-badge
              color="grey"
              content="99"
              inline
            />
          </template>
        </v-tab>
      </v-tabs>
      <v-tabs v-model="tabItem">
        <v-tab class="text-none" value="one" variant="text">
          Item
          <template #append>
            <v-badge
              color="red"
              content="99"
              inline
            />
          </template>
        </v-tab>
      </v-tabs>
      <v-tabs v-model="tabItem">
        <v-tab class="text-none" value="one" variant="text">
          Item
          <template #append>
            <v-badge
              color="yellow"
              content="99"
              inline
            />
          </template>
        </v-tab>
      </v-tabs>
      <v-tabs v-model="tabItem">
        <v-tab class="text-none" value="one" variant="text">
          Item
          <template #append>
            <v-badge
              color="green"
              content="99"
              inline
            />
          </template>
        </v-tab>
      </v-tabs>
    </div>
    <div class="tab_item">
      <div>
        <div class="text-subtitle-2 mb-2">MAX WIDTH</div>
        <v-tabs v-model="tabItem">
          <v-tab class="text-none" value="one" variant="text" width="200">
            <v-tooltip
              activator="parent"
              location="top"
            >Tab with truncated text samTab with truncated</v-tooltip>
            <span class="text-overflow">Tab with truncated text samTab with truncated text samTab with truncated text sam</span>
          </v-tab>
        </v-tabs>
      </div>
      <div>
        <div class="text-subtitle-2 mb-2">Text only</div>
        <v-tabs v-model="tabItem">
          <v-tab class="text-none" value="one" variant="text">
            Item
          </v-tab>
        </v-tabs>
      </div>
      <div>
        <div class="text-subtitle-2 mb-2">Icon + Text</div>
        <v-tabs v-model="tabItem">
          <v-tab class="text-none" prepend-icon="list" value="one" variant="text">
            Item
            <template #badge>
              <v-badge content="99" />
            </template>
          </v-tab>
        </v-tabs>
      </div>
      <div>
        <div class="text-subtitle-2 mb-2">Icon only</div>
        <v-tabs v-model="tabItem" stacked>
          <v-tab class="text-none" prepend-icon="list" value="one" variant="text" />
        </v-tabs>
      </div>
      <div>
        <div class="text-subtitle-2 mb-2">disabled</div>
        <v-tabs v-model="tabItem">
          <v-tab class="text-none" prepend-icon="list" variant="text" disabled>
            list
          </v-tab>
        </v-tabs>
      </div>
    </div>
    <div class="text-subtitle-2 mb-2">Pagination</div>
    <v-tabs bg-color="white" center-active>
      <v-tab>One</v-tab>
      <v-tab>Two</v-tab>
      <v-tab>Three</v-tab>
      <v-tab>Four</v-tab>
      <v-tab>Five</v-tab>
      <v-tab>Six</v-tab>
      <v-tab>Seven</v-tab>
      <v-tab>Eight</v-tab>
      <v-tab>Nine</v-tab>
      <v-tab>Ten</v-tab>
      <v-tab>Eleven</v-tab>
      <v-tab>Twelve</v-tab>
      <v-tab>Thirteen</v-tab>
      <v-tab>Fourteen</v-tab>
      <v-tab>Fifteen</v-tab>
      <v-tab>Sixteen</v-tab>
      <v-tab>Seventeen</v-tab>
      <v-tab>Eighteen</v-tab>
      <v-tab>Nineteen</v-tab>
      <v-tab>Twenty</v-tab>
    </v-tabs>
    <div>
      <div class="text-subtitle-2 mb-2">left alignment</div>
      <v-tabs align-tabs="start">
        <v-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-tab>
        <v-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-tab>
        <v-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-tab>
        <v-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-tab>
        <v-tab class="text-none" prepend-icon="list" variant="text">
          list
        </v-tab>
      </v-tabs>
    </div>
    <div>
      <div class="text-subtitle-2 mb-2">fill container</div>
      <v-tabs>
        <v-tab class="text-none" prepend-icon="list" variant="text" width="20%">
          list
        </v-tab>
        <v-tab class="text-none" prepend-icon="list" variant="text" width="20%">
          list
        </v-tab>
        <v-tab class="text-none" prepend-icon="list" variant="text" width="20%">
          list
        </v-tab>
        <v-tab class="text-none" prepend-icon="list" variant="text" width="20%">
          list
        </v-tab>
        <v-tab class="text-none" prepend-icon="list" variant="text" width="20%">
          list
        </v-tab>
      </v-tabs>
    </div>
    <div style="margin-top: 50px;">
      <h3>Self added code implementation</h3>
      <p>1、Maximum width omission and v-tooltip</p>
      <p>2、badge</p>
      <h3>自己加的代码实现</h3>
      <p>1、最大宽度省略和v-tooltip</p>
      <p>2、badge</p>
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

.text-overflow {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
}
</style>
