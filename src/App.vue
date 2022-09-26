<template>
  <div id="app" class="container">
    <Menue />
    <router-view />
  </div>
</template>

<script>
import Menue from "@/component/navbar/Menue.vue";
const components = {
  Menue,
};
export default {
  components,
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
