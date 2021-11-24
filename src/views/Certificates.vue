<template>
  <div class="certificates">
    <Header />
    <h1>This is an Certificates page</h1>
  </div>
</template>

<style scoped>

</style>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "Certificates",
  components: {
    Header,
  },
});
</script>
