<template>
    <div class="contact">
    <Header />
    <h1>Contact Steve Mengelkoch</h1>
    <Footer />
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue";
export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
  },
});
</script>