<template>
  <div class="header">
  <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/certficates">Certificates</router-link> |
    <router-link to="/portfolio">Portfolio</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    msg: String,
  },
});
</script>

<style scoped>
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
  color: #42b983;
}
</style>
