<template>
    <div class="portfolio">
    <Header />
    <h1>Steve Mengelkoch's Portfolio:</h1>
    <Mosaic />
    <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Mosaic from "@/components/Mosaic.vue";

export default defineComponent({
  name: "Portfolio",
  components: {
    Header,
    Mosaic,
    Footer,
  },
});
</script>