<script setup>
  import EmptyState from './components/empty-state.vue'
  import Snackbar from './components/snackbar.vue'
  import { ref } from 'vue';
  const selected = ref([]);
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
</script>

<template>
  <v-app>
    <v-container>
      <Snackbar />
      <EmptyState />
      <h1>Vuetify's Autocomplete</h1>
      <hc-tabs>
        <hc-tab
          badge-color="green"
          badge-number="99"
          class="text-none"
          value="one"
          variant="text"
          tooltipText="99999ss"
        >
          Item
        </hc-tab>
      </hc-tabs>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        clearable
        :maxLength="2"
        focused
        multiple
        chips
      />
      <h1>HC-component's Autocomplete</h1>
      <hc-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        clearable
        :maxLength="2"
        focused
        multiple
        chips
      />
      <h1>Icon Demo</h1>
      <v-icon icon="22mp" size="small" fill />
      <v-icon icon="22mp" size="large" fill />
      <v-icon icon="22mp" size="x-large" fill />
      <v-icon icon="22mp" fill />
      <h1>Checkbox Group Example</h1>
      <hc-checkbox-group 
        v-model="selected"
        hide-details
        show-all inline :options="options" label="Select Options" all-label="Select All" />
      <p>Selected: {{ selected }}</p>
      <v-row>
        <v-col cols="6">
          <v-alert
            text="Lorem ipsum dolor sit amet, consectetur adi"
            title="I’m an alert"
            type="info"
            variant="tonal"
          />
        </v-col>
        <v-col cols="6">
          <v-alert
            text="Lorem ipsum dolor sit amet, consectetur adi"
            title="I’m an alert"
            type="error"
            variant="tonal"
            closable
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style>
.gap-4 {
  gap: 1rem;
}
</style>
