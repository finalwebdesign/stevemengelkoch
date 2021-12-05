<template>
    <div class="contact">
    <Header />
    <h1>Contact Steve Mengelkoch</h1>
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