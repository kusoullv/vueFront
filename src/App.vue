<template>
  <div id="app">
    <keep-alive v-if="false">
      <router-view />
    </keep-alive>
    <router-view v-else />
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 65px;
}
</style>
