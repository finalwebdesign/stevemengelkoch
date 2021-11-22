<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Header msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Header,
  },
});
</script>
