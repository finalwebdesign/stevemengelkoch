<template>
    <div class="portfolio">
    <Header />
    <h1>Steve Mengelkoch's Portfolio:</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Portfolio",
  components: {
    Header,
  },
});
</script>