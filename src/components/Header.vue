<template>
  <header>
    <h1 class="logo">meetup</h1>
    <div class="nav">
      <button @click="toggleHome()" class="home-btn">Home</button>
      <button @click="toggleComments()" class="comments-btn">
        event comments
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleHome() {
      this.$emit("toggleHome");
    },
    toggleComments() {
      this.$emit("toggleComments");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3rem;
  background-color: whitesmoke;
  border-bottom: solid white;
}

.logo {
  font-family: "Molle", cursive;
  color: #f6b092;
  margin-left: 1.5rem;
  text-shadow: 2px 2px #ce7373;
  font-size: 2.2rem;
}

.nav {
  display: flex;
  width: 70%;
  margin-left: 1rem;
  margin-right: 1rem;
}

.home-btn {
  width: 40%;
  border-style: none;
  font-family: "Raleway", sans-serif;
  background-color: whitesmoke;
}

.comments-btn {
  width: 40%;
  border-style: none;
  font-family: "Raleway", sans-serif;
  background-color: whitesmoke;
}
</style>
