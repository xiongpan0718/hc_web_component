<!--
  HcTreeView demo / HcTreeView 演示
-->
<template>
  <v-container class="pa-6" max-width="960">
    <h1 class="text-h5 mb-4">HcTreeView</h1>

    <h2 class="text-subtitle-1 mb-2">branch-selection（默认 true）</h2>
    <p class="text-body-2 text-medium-emphasis mb-2">
      默认不写即 branch：v-model 含 on 与 indeterminate 节点 id / Default branch payload.
    </p>
    <HcTreeView
      v-model:selected="selectionBranch"
      :items="items"
      default-expand-all
      selectable
    />
    <pre class="text-body-2 mt-2 mb-8">{{ selectionBranch }}</pre>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  type DemoTreeItem = {
    id: string
    title: string
    children?: DemoTreeItem[]
  }

  const selectionClassic = ref<(string | number)[]>([])
  const selectionBranch = ref<(string | number)[]>([])

  // Three-level mock tree: L1 root → L2 group → L3 leaf / 三层假数据：根 → 分组 → 叶子
  const items = ref<DemoTreeItem[]>([
    {
      id: 'fleet-ops',
      title: 'Fleet operations',
      children: [
        {
          id: 'add-vehicle',
          title: 'Add vehicle',
          children: [
            { id: 'switch-odometer', title: 'Switch odometer type' },
            { id: 'import-vin', title: 'Import VIN batch' },
            { id: 'duplicate-check', title: 'Duplicate plate check' },
          ],
        },
        {
          id: 'update-vehicle',
          title: 'Update vehicle',
          children: [
            { id: 'vehicle-config', title: 'Vehicle configuration' },
            { id: 'tire-spec', title: 'Tire specification' },
            { id: 'service-dates', title: 'Service dates' },
          ],
        },
        {
          id: 'transfer-vehicle',
          title: 'Transfer vehicle',
          children: [
            { id: 'internal-transfer', title: 'Internal depot transfer' },
            { id: 'external-transfer', title: 'External company transfer' },
          ],
        },
      ],
    },
    {
      id: 'status-workflow',
      title: 'Status & workflow',
      children: [
        {
          id: 'change-status',
          title: 'Change vehicle status',
        },
        {
          id: 'approvals',
          title: 'Approvals',
        },
      ],
    },
    {
      id: 'reporting',
      title: 'Reporting',
      children: [
        {
          id: 'summaries',
          title: 'Summaries',
        },
        {
          id: 'exports',
          title: 'Exports',
          children: [
            { id: 'csv-export', title: 'CSV export' },
            { id: 'pdf-export', title: 'PDF export' },
          ],
        },
      ],
    },
    {
      id: 'search-tools',
      title: 'Search tools',
      children: [
        {
          id: 'global-search',
          title: 'Global search',
          children: [
            { id: 'search-by-plate', title: 'By license plate' },
            { id: 'search-by-vin', title: 'By VIN' },
            { id: 'search-by-driver', title: 'By driver' },
          ],
        },
        {
          id: 'saved-filters',
          title: 'Saved filters',
          children: [
            { id: 'filter-favorites', title: 'Favorite filters' },
            { id: 'filter-shared', title: 'Team shared filters' },
          ],
        },
      ],
    },
    { id: 'quick-help', title: 'Quick help (leaf at root)' },
  ])
</script>
