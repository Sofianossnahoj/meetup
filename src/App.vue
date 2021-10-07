<template>
  <div id="app">
    <Header v-on:toggleHome="goHome" v-on:toggleComments="goComments" />
    <Home v-if="isVisible" />
    <Comments v-if="!isVisible" />
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

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.eventCard {
  border-style: solid;
  border-color: #ffff;
  border-width: 3px;
  border-radius: 2px;
  background-color: whitesmoke;
  width: 90%;
  max-height: 50%;
  margin-top: 1.5rem;
}
.joinForm {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
.input-field-name {
  width: 80%;
  height: 1.5rem;
  margin-top: 10px;
  border-width: 1px;
  border-style: none;
  align-self: center;
  font-family: "Raleway", sans-serif;
}
.input-field {
  width: 80%;
  height: 1.5rem;
  margin-top: 10px;
  border-width: 1px;
  border-style: none;
  align-self: center;
  font-family: "Raleway", sans-serif;
}
.join-btn {
  border-style: none;
  background-color: #f6b092;
  width: 125px;
  height: 2rem;
  border-radius: 12px;
  margin: 10px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  align-self: center;
}
.join-btn:focus {
  background-color: rgb(224, 224, 224);
}
.btn {
  border-style: none;
  background-color: #f6b092;
  width: 125px;
  height: 2rem;
  border-radius: 12px;
  margin: 10px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  align-self: center;
}
</style>
