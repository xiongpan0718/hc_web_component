<template>
  <div class="filters-container">
    <v-select 
      v-model="locale" 
      :items="locales" 
      item-title="text" 
      item-value="value" 
      density="compact"
      style="max-width: 160px"
    ></v-select>
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
        <div>
          <v-text-field label="111" v-model="a"></v-text-field>
        </div>
        <div>
          <v-text-field label="111" v-model="a"></v-text-field>
        </div>
      </template>
    </HcFilter>
    <HcFilter background-color="#fff" column-count="2" is-expand>
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
      </template>
    </HcFilter>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';

const a = ref('')
const { locale } = useI18n();

const required = v => !!v || 'required';

const locales = ref([
  { text: 'English', value: 'en' },
  { text: '简体中文', value: 'zhHans' },
  { text: 'Polski', value: 'pl' },
  { text: 'Português', value: 'pt' },
]);
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