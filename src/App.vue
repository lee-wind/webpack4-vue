<template>
  <div id="app">
      <h1 style="font-size: 24px;">App</h1>
      <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
#app {
    width: 100%;
    height: 400px;
    background-color: pink;
}
</style>
