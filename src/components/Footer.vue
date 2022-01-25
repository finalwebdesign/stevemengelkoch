<template>
  <div class="footer">
    <p>
      Contact <strong>Steve Mengelkoch</strong> | Phone:
      <strong>(888) 674-7779</strong>
    </p>
    <p>
      Local: <strong>(612) 615-9394</strong> | Local:
      <strong>(305) 812-5999</strong>
    </p>
    <p>Email: <strong>Steve.Mengelkoch@Gmail.com</strong></p>
    <p>
      <em>© Copyright 2013 - 2022</em> | Designed by
      <a
        href="https://finalwebdesign.com"
        title="Final Web Design"
        target="_blank"
        >Final Web Design</a
      >, Inc.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
.footer {
  background-color: #be8619;
  width: 100%;
  float: left;
}
</style>
