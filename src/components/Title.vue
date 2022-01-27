<template>
  <div class="title">
    <h1>PROFESSIONAL WEBMASTER STEVE MENGELKOCH</h1>
    <h2>{{ msg }}</h2>
    <a href="contact"><button>CONTACT STEVE NOW</button></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Title",
});
</script>
