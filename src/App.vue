<template>
  <div id="app">
    <Header v-on:toggleHome="goHome" v-on:toggleComments="goComments" />
    <Home v-show="isVisible" />
    <Comments v-show="!isVisible" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Comments from "./components/Comments.vue";

export default {
  name: "App",
  components: {
    Home,
    Header,
    Comments,
  },
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    goHome() {
      if (this.isVisible == false) {
        this.isVisible = !this.isVisible;
      }
    },
    goComments() {
      if (this.isVisible == true) {
        this.isVisible = !this.isVisible;
      }
    },
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
  flex-direction: column;
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
