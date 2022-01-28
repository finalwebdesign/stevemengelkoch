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
        <li>Buy Online Fragrances</li>
        <li>Code Clothing</li>
        <li>DJs Miami FL</li>
        <li>Hennepin Tech</li>
        <li>U Cardiology</li>
        <li>USA Grow Shop</li>
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
li {
  font-family: "Montserrat", Sans-serif;
  font-size: 17px;
  font-weight: 500;
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
