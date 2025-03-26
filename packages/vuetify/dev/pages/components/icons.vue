<template>
  <div style="display: flex;flex-direction: column;width: 200px;margin: 50px;border-bottom: 1px solid #ccc">
    <div class="icons">
      <v-icon icon="$plus" size="x-small" />
      x-small
    </div>
    <div class="icons">
      <v-icon icon="$plus" size="small" />
      small
    </div>
    <div class="icons">
      <v-icon icon="$plus" size="default" />
      default
    </div>
    <div class="icons">
      <v-icon icon="$plus" size="large" />
      large
    </div>
    <div class="icons">
      <v-icon icon="$plus" size="x-large" />
      x-large
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.icons{
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 20px;
}
</style>
