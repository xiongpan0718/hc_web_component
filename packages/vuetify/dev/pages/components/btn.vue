<template>
  <div class="body">
    <h3 style="margin-bottom: 20px">Default</h3>
    <div class="btn-list">
      <div class="btn-item">
        <v-btn prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
        <v-btn disabled prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
      </div>
      <div class="btn-item">
        <v-btn variant="outlined" prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
        <v-btn variant="outlined" disabled prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
      </div>
      <div class="btn-item">
        <v-btn variant="text" prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
        <v-btn variant="text" disabled prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
      </div>
      <div class="btn-item">
        <v-btn variant="empty" prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
        <v-btn variant="empty" disabled prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
      </div>
      <div class="btn-item">
        <v-btn variant="error" prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
        <v-btn variant="error" disabled prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
      </div>
      <div class="btn-item">
        <v-btn icon="mdi-plus"></v-btn>
        <v-btn disabled icon="mdi-plus"></v-btn>
      </div>
      <div class="btn-item">
        <v-btn variant="outlined" icon="mdi-plus"></v-btn>
        <v-btn disabled variant="outlined" icon="mdi-plus"></v-btn>
      </div>
      <div class="btn-item">
        <v-btn variant="text" icon="mdi-plus"></v-btn>
        <v-btn disabled variant="text" icon="mdi-plus"></v-btn>
      </div>
      <div class="btn-item">
        <v-btn variant="empty" icon="mdi-plus"></v-btn>
        <v-btn disabled variant="empty" icon="mdi-plus"></v-btn>
      </div>
    </div>
    <h3 style="margin: 30px 0">Small</h3>
    <div class="btn-list">
      <div class="btn-item">
        <v-btn size="small" prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
        <v-btn size="small" disabled prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
      </div>
      <div class="btn-item">
        <v-btn size="small" variant="outlined" prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
        <v-btn size="small" variant="outlined" disabled prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
      </div>
      <div class="btn-item">
        <v-btn size="small" variant="text" prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
        <v-btn size="small" variant="text" disabled prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
      </div>
      <div class="btn-item">
        <v-btn size="small" variant="empty" prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
        <v-btn size="small" variant="empty" disabled prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
      </div>
      <div class="btn-item">
        <v-btn size="small" variant="error" prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
        <v-btn size="small" variant="error" disabled prepend-icon="mdi-plus" append-icon="$expand">Button</v-btn>
      </div>
      <div class="btn-item">
        <v-btn size="small" icon="mdi-plus"></v-btn>
        <v-btn size="small" disabled icon="mdi-plus"></v-btn>
      </div>
      <div class="btn-item">
        <v-btn size="small" variant="outlined" icon="mdi-plus"></v-btn>
        <v-btn size="small" disabled variant="outlined" icon="mdi-plus"></v-btn>
      </div>
      <div class="btn-item">
        <v-btn size="small" variant="text" icon="mdi-plus"></v-btn>
        <v-btn size="small" disabled variant="text" icon="mdi-plus"></v-btn>
      </div>
      <div class="btn-item">
        <v-btn size="small" variant="empty" icon="mdi-plus"></v-btn>
        <v-btn size="small" disabled variant="empty" icon="mdi-plus"></v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
// btn variant属性 增加empty、error 状态 灰色状态\红色状态

</script>

<style scoped lang="scss">
.body{
  padding-top: 50px;
  .btn-list{
    display: flex;
    justify-content: space-between;
    .btn-item{
      width: 135px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }
}
</style>
