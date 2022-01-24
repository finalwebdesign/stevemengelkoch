<template>
  <div class="title">
    <h1>
      CONTACT<br />
      STEVE MENGELKOCH
    </h1>
    <a href="portfolio"><button>VISIT PORTFOLIO</button></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleContact",
});
</script>

<style scoped>
h1 {
  color: white;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  margin: -10px -10px 10px -10px;
}
</style>
