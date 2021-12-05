<template>
    <div class="certificates">
    <Header />
    <h1>Steve Mengelkoch's Certificates</h1>
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
