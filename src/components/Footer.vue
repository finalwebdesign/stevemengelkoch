<template>
  <div class="footer">
    <div class="main-navigation">
      <h2>Main Navigation:</h2>
    </div>
    <div class="portfolio-projects">
      <h2>Portfolio Projects:</h2>
    </div>
    <div class="social-media">
      <h2>Social Media:</h2>
    </div>
    <div class="certificates">
      <h2>Certificates:</h2>
    </div>
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
  background-color: #e9e8e8;
  width: 100%;
  float: left;
  margin-top: 30px;
}
.main-navigation {
  width: 25%;
  float: left;
}
.portfolio-projects {
  width: 25%;
  float: left;
}
.social-media {
  width: 25%;
  float: left;
}
.certificates {
  width: 25%;
  float: left;
}
</style>
