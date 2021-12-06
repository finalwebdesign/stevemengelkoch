<template>
  <div class="header">
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
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
.header {
  padding-bottom: 70px;
}
nav{
  padding-top: 40px
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
  color: #f9950b;
}
.logo {
  float: left;
  padding: 40px;
}
</style>
