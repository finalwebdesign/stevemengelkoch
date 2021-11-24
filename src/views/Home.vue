<template>
  <div class="home">
    <Header msg="Welcome to Steve Mengelkoch's Portfolio" />
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
