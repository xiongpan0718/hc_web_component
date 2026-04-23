<template>
  <div class="filters-container">
    <HcFilter>
      <template #filter-input>
        <div>
          <v-text-field label="111" v-model="a"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a"></v-text-field>
        </div>
      </template>
    </HcFilter>
    <HcFilter background-color="#fff" column-count="2" allow-collapse :collapse-rows="2" :default-collapsed="false" v-model:is-expand="isExpand" @search="search">
      <template #filter-input>
        <div>
          <v-text-field label="111" v-model="a" :rules="[required]"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a" :rules="[required]"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a" :rules="[required]"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a" :rules="[required]"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a" :rules="[required]"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a" :rules="[required]"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a" :rules="[required]"></v-text-field>
        </div>
      </template>
    </HcFilter>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const a = ref('')
const isExpand = ref(true)

const required = v => !!v || 'required';

const search = () => {
  isExpand.value = false;
}
</script>

<style scoped lang="scss">
.filters-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #999;
  padding: 24px;
}
</style>