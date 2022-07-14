<template>
  <div class="copyright">
    <div class="details">
      <p>
        Local: (612) 615-9394 | Local: (305) 812-5999 | Email:
        Steve.Mengelkoch@gmail.com
        <br />
        <em>© Copyright 2013 - 2022</em> | Designed by
        <a
          href="https://finalwebdesign.com"
          title="Final Web Design"
          target="_blank"
          >Final Web Design</a
        >, Inc.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Copyright",
});
</script>

<style scoped>
.copyright {
  background-color: #1a1e1f;
  width: 100%;
  float: left;
  margin-left: -10px;
  padding: 10px;
  color: white;
  height: 200px;
  font-style: "Montserrat", sans-serif;
  padding: 10px;
}
.details {
  padding-top: 60px;
}
</style>
