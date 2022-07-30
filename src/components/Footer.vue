<template>
  <div class="footer">
    <div class="main-navigation">
      <h2>Main Navigation:</h2>
      <ul class="main-menu">
        <li><a href="/" title="Home">Home</a></li>
        <li><a href="/about" title="About">About</a></li>
        <li><a href="/resume" title="Resume">Resume</a></li>
        <li><a href="/certificates" title="Certificates">Certificates</a></li>
        <li><a href="/portfolio" title="Portfolio">Portfolio</a></li>
        <li><a href="/contact" title="Contact">Contact</a></li>
      </ul>
    </div>
    <div class="portfolio-projects">
      <h2>Portfolio Projects:</h2>
      <ul class="portfolio-menu">
        <li><a href="https://buyonlinefragrances.com" title="Buy Online Fragrances" target="_blank">Buy Online Fragrances</a></li>
        <li><a href="https://coder.clothing" title="Coder Clothing" target="_blank">Code Clothing</a></li>
        <li><a href="https://djsmiamifl" title="DJs Miami FL" target="_blank">DJs Miami FL</a></li>
        <li><a href="https://hennepintech.edu" title="Hennepin Tech" target="_blank">Hennepin Tech</a></li>
        <li><a href="https://ucardiologyfellows.com" title="U Cardiology Fellows" target="_blank">U Cardiology</a></li>
        <li><a href="https:/usagrowstore.com" title="USA Grow Store" target="_blank">USA Grow Shop</a></li>
      </ul>
    </div>
    <div class="social-media">
      <h2>Social Media:</h2>
      <ul class="portfolio-menu">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>YouTube</li>
        <li>Portfoliio</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="certificates">
      <h2>Certificates:</h2>
      <ul class="portfolio-menu">
        <li>HTML</li>
        <li>CSS</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>Google Ads</li>
        <li>Bachelors Degree</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
h2 {
  text-transform: uppercase;
}
li {
  font-family: "Montserrat", Sans-serif;
  font-size: 17px;
  font-weight: 500;
  padding: 10px;
}
li:hover {
  color: #be8619;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
}
.footer {
  background-color: #cacaca;
  width: 100%;
  float: left;
  margin-left: -10px;
  padding: 10px;
  height: 400px;
}
.main-navigation {
  width: 25%;
  float: left;
}
.main-menu {
  float: left;
  text-align: left;
}
.portfolio-projects {
  width: 25%;
  float: left;
}
.portfolio-menu {
  float: left;
  text-align: left;
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
