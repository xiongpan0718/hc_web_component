<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-03-20 18:26:10
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/button.vue
 * @Description  :
-->
<template>
  <v-expansion-panels v-model="isShow">
    <v-expansion-panel title="Types" value="type">
      <template #text>
        <v-row>
          <v-col cols="4">
            <p>Button / Icon</p>
            <v-btn color="primary" density="compact" icon="mdi-plus" />
          </v-col>
          <v-col cols="4">
            <p>Button / Text</p>
            <v-btn color="primary">Button</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <p>Button / Icon + Text</p>
            <v-btn color="primary" prepend-icon="mdi-plus">Button</v-btn>
          </v-col>
          <v-col cols="4">
            <p>Button / Text + Icon</p>
            <v-btn append-icon="$expand" color="primary">Button</v-btn>
          </v-col>
          <v-col cols="4">
            <p>Button / Icon + Text + Icon</p>
            <v-btn append-icon="$expand" color="primary" prepend-icon="mdi-plus">Button</v-btn>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>

    <v-expansion-panel title="Variations" value="variant">
      <template #text>
        <v-row>
          <v-col cols="2">
            <p>text</p>
            <v-btn variant="text">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <p>flat</p>
            <v-btn variant="flat">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <p>elevated</p>
            <v-btn variant="elevated">Button</v-btn>
            <!-- <v-btn class="btn-control" color="#1A1A1A" variant="outlined">Button</v-btn> -->
          </v-col>
          <v-col cols="2">
            <p>tonal</p>
            <v-btn variant="tonal">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <p>outlined</p>
            <v-btn variant="outlined">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <p>plain</p>
            <v-btn variant="plain">Button</v-btn>
          </v-col>
        </v-row>
        <div class="description">
          <ul>
            <li>组件 variant 属性支持：'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'。</li>
            <li>如果要支持：Primary｜Secondary｜Control｜Tertiary，<strong>需要修改 css 和 javascript 才能支持</strong>。</li>
          </ul>
        </div>
      </template>
    </v-expansion-panel>

    <v-expansion-panel title="Size" value="size">
      <template #text>
        <v-row>
          <v-col cols="3">
            <p>Desktop - default</p>
            <v-btn color="primary">Button</v-btn>
          </v-col>
          <v-col cols="3">
            <p>Desktop - small</p>
            <v-btn color="primary">Button</v-btn>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>

    <v-expansion-panel title="States" value="state">
      <template #text>
        <v-row>
          <v-col cols="4" />
          <v-col cols="4">
            elevated
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <p style="text-align: right;">Default (enabled)</p>
          </v-col>
          <v-col cols="4">
            <v-btn variant="elevated">Button</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <p style="text-align: right;">Hover</p>
          </v-col>
          <v-col cols="4">
            <v-btn :active="true" variant="elevated">Button</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <p style="text-align: right;">Pressed</p>
          </v-col>
          <v-col cols="4">
            <p class="not-supported">Pressed is not supported</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <p style="text-align: right;">Disabled</p>
          </v-col>
          <v-col cols="4">
            <v-btn variant="elevated" disabled>Button</v-btn>
          </v-col>
        </v-row>
        <p class="not-supported">States is not supported</p>
        <div class="description">
          <ul>
            <li>组件不支持 States</li>
            <li>如果要支持：Primary｜Secondary｜Control｜Tertiary，<strong>需要修改 css 和 javascript 才能支持</strong>。</li>
            <li>如果要支持 Pressed，<strong>需要修改 css 和 javascript 才能支持</strong>。</li>
          </ul>
        </div>
      </template>
    </v-expansion-panel>

    <v-expansion-panel title="Icon position (type)" value="position">
      <template #text>
        <v-row>
          <v-col cols="3">
            <p>Text only</p>
          </v-col>
          <v-col cols="3">
            <p>Icon only</p>
          </v-col>
          <v-col cols="3">
            <p>Leading icon</p>
          </v-col>
          <v-col cols="3">
            <p>Trailing icon</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn>Save</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn color="primary" icon="mdi-plus" />
          </v-col>
          <v-col cols="3">
            <v-btn color="primary" prepend-icon="mdi-plus">Button</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn append-icon="$expand" color="primary">Button</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn variant="outlined">Save</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn icon="mdi-plus" variant="outlined" />
          </v-col>
          <v-col cols="3">
            <v-btn color="primary" prepend-icon="mdi-upload">Button</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn append-icon="$expand" color="primary">Button</v-btn>
          </v-col>
        </v-row>
        <p class="not-supported">Position is not supported</p>
        <div class="description">
          <ul>
            <li>组件不支持 Position，<strong>需要修改 css 和 javascript 才能支持</strong>。</li>
          </ul>
        </div>
      </template>
    </v-expansion-panel>

    <v-expansion-panel title="Menu button" value="menu">
      <template #text>
        <p class="not-supported">Menu button is not supported</p>
        <div class="description">
          <ul>
            <li>组件不支持 Menu，<strong>需要修改 css 和 javascript 才能支持</strong>。</li>
          </ul>
        </div>
      </template>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
  import { ref } from 'vue'
  const isShow = ref(['type', 'variant', 'size', 'state', 'position', 'menu'])
</script>

<style scoped lang="scss">
.v-expansion-panels {
  margin-bottom: 10px;
}

.btn-control {
  border-color: #CCCCCC;
  background-color: #F2F2F2 !important;
}

.description {
  padding: 15px;
  color: #FF0000;
}

.not-supported {
  padding: 15px 0;
  color: #FF0000;
}
</style>
