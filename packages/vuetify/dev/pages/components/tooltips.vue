<template>
  <div class="tooltips">
    <div class="text-subtitle-2 mb-2">Tooltips</div>
    <div style="background-color: #F9F9F9; padding:50px;">
      <div style="text-align: center;">
        Top
        <v-tooltip
          activator="parent"
          location="top"
        >Tooltip example</v-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .tooltips {
    margin-top: 15px;
  }
</style>
