<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,100;1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Molle:ital@1&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(224, 224, 224);
  min-height: 700px;
  height: 100vh;
  min-width: 375px;
}
</style>
