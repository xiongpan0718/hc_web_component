<template>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <h4>3 rows (default)</h4>
      <v-textarea
        :maxlength="300"
        clear-icon="delete"
        label="label"
        messages="This is a helper message"
        placeholder="please enter"
        variant="outlined"
        clearable
        counter
      />
    </div>
    <div style="flex: 1">
      <h4>4 rows (default)</h4>
      <v-textarea
        clear-icon="delete"
        label="label"
        placeholder="please enter"
        rows="4"
        variant="outlined"
      />
    </div>
  </div>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <h4>Disabled</h4>
      <v-textarea
        label="label"
        placeholder="please enter"
        variant="outlined"
        disabled
        persistent-placeholder
      />
    </div>
    <div style="flex: 1">
      <h4>hover</h4>
      <v-textarea
        clear-icon="delete"
        label="label"
        placeholder="please enter"
        variant="outlined"
        clearable
        persistent-placeholder
      />
    </div>
  </div>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <h4>error状态</h4>
      <v-textarea
        append-inner-icon="warning"
        clear-icon="delete"
        error-messages="There is an error message"
        label="label"
        placeholder="please enter"
        variant="outlined"
        clearable
        error
        persistent-placeholder
      />
    </div>
    <div style="flex: 1">
      <h4>error状态(4 rows)</h4>
      <v-textarea
        append-inner-icon="warning"
        clear-icon="delete"
        error-messages="There is an error message"
        label="label"
        placeholder="please enter"
        rows="4"
        variant="outlined"
        clearable
        error
        persistent-placeholder
      />
    </div>
  </div>
  <div style="margin-top: 50px;">
    <h3>Style that cannot be modified</h3>
    <p>1、Cannot modify the position of the label</p>
    <p>2、The position of icon in the lower right corner cannot be modified</p>
    <h3>无法修改的样式</h3>
    <p>1、无法修改label的位置</p>
    <p>2、右下角的icon的位置，无法修改</p>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
h4{
  margin-bottom: 10px;
}
.label {
  color: #1A1A1A;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 2px;
}
</style>
