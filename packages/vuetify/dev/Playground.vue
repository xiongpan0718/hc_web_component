<template>
  <home />
</template>

<script>

  import Home from './pages/home.vue'

  export default {
    name: 'Playground',
    components: { Home },
    setup () {
      return {
        //
      }
    },
  }
</script>

<style scoped>
.test-body{
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
