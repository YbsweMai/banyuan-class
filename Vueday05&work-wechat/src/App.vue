<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/header.vue"

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
