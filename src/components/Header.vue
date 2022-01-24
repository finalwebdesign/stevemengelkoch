<template>
  <header>
    <div class="logo">
      <a href="/" title="Steve Mengelkoch"
        ><img alt="Steve Mengelkoch Logo" src="../assets/logo.png"
      /></a>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/certificates">Certificates</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/contact"> <button>Contact Steve</button></router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
header {
  background-color: rgb(233, 232, 232);
  margin: -10px -10px 0px -10px;
  padding: 10px 0px;
}

nav {
  padding-top: 55px 0px 0px 0px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #be8619;
}
.logo {
  float: left;
  padding: 40px 40px 0px 60px;
}
</style>
