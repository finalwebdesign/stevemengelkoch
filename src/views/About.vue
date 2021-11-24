<template>
  <div class="about">
    <Header />
    <h1>This is an about page</h1>
  </div>
</template>

<style scoped>

</style>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src

export default defineComponent({
  name: "About",
  components: {
    Header,
  },
});
</script>
