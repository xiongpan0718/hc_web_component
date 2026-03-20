<template>
    <div class="tooltips">
      <div class="text-subtitle-2 mb-2">ButtonToggle Rounded</div>
      <v-btn-toggle v-model="toggle" rounded="true" mandatory>
        <v-btn value="left">
          <v-icon>table_chart</v-icon>
        </v-btn>
        <v-btn value="center">
          <v-icon>sort</v-icon>
        </v-btn>
        <v-btn value="right">
          <v-icon>bar_chart</v-icon>
        </v-btn>
      </v-btn-toggle>
      <div class="text-subtitle-2 mb-2">ButtonToggle Rounded disabled</div>
      <v-btn-toggle v-model="toggle" rounded="true" mandatory>
        <v-btn value="left" disabled>
          <v-icon>add</v-icon>Label
        </v-btn>
        <v-btn value="center" disabled>
          <v-icon>add</v-icon>Label
        </v-btn>
        <v-btn value="right" disabled>
          <v-icon>add</v-icon>Label
        </v-btn>
      </v-btn-toggle>
      <div class="text-subtitle-2 mb-2">ButtonToggle icon small</div>
      <v-btn-toggle v-model="toggle" size="small" mandatory>
        <v-btn value="left">
          <v-icon>table_chart</v-icon>
        </v-btn>
        <v-btn value="center">
          <v-icon>sort</v-icon>
        </v-btn>
        <v-btn value="right">
          <v-icon>bar_chart</v-icon>
        </v-btn>
      </v-btn-toggle>
      <div class="text-subtitle-2 mb-2">ButtonToggle</div>
      <v-btn-toggle v-model="toggle" size="default" mandatory>
        <v-btn value="left">
          Left
        </v-btn>
        <v-btn value="center">
          Center
        </v-btn>
        <v-btn value="right">
          Right
        </v-btn>
      </v-btn-toggle>
      <div class="text-subtitle-2 mb-2">ButtonToggle text Small</div>
      <v-btn-toggle v-model="toggle" size="small" mandatory>
        <v-btn value="left">
          Left
        </v-btn>
        <v-btn value="center">
          Center
        </v-btn>
        <v-btn value="right">
          Right
        </v-btn>
      </v-btn-toggle>
      <div class="text-subtitle-2 mb-2">icon + text</div>
      <v-btn-toggle v-model="toggle" mandatory>
        <v-btn value="left">
          <v-icon>table_chart</v-icon>Table
        </v-btn>
        <v-btn value="right">
          <v-icon>bar_chart</v-icon>Charts
        </v-btn>
      </v-btn-toggle>
      <div class="text-subtitle-2 mb-2">Multiple</div>
      <v-btn-toggle v-model="multiple" multiple>
        <v-btn value="left">
          Option 1
        </v-btn>
        <v-btn value="center">
          Option 2
        </v-btn>
        <v-btn value="right">
          Option 3
        </v-btn>
        <v-btn value="justify">
          Option 4
        </v-btn>
        <v-btn value="other">
          Option 5
        </v-btn>
      </v-btn-toggle>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'

  const toggle = ref('left')
  const multiple = ref(['left'])

  </script>
  
  <style scoped>
  </style>
  