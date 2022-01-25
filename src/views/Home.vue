<template>
  <div class="home">
    <Header />
    <div class="feature">
      <Title />
      <img
        src="../assets/banners/home.jpg"
        title="Steve Mengelkoch"
        alt="Steve Mengelkoch"
      />
      <img src="../assets/steve-mengelkoch.jpg" />
    </div>
    <p>
      <strong>Steve Mengelkoch</strong> is a webmaster and inbound marketing
      professional. Over the past 15 years he has been responsible for the
      design, development and management of some of the internets most elaborate
      and successful websites. Working primarily with businessese in the South
      FL area, Steve has become a prominent voice in the local web and digital
      marketing scene.
    </p>
    <p>
      Steve is always looking to expand his web and marketing knowledge. Stevee
      is aggresibely seeking new connections in the South Florida area and
      throughout the United States. If yoou are interested in learning more
      abouot professional website design, development, Digital Marketing and
      Search Engine Optimization contact Steve Mengelkoch here. Steve is highly
      educated in computer programing, coding, website development, graphic
      design, applications and digital consulting.
    </p>
    <a href="https://stevemengelkoch.com/about" title="About Steve"
      ><button>About Steve</button></a
    >
    <br />
    <a href="https://stevemengelkoch.com/resume" title="Steve's Resume"
      ><button>Steve's Resume</button></a
    >
    <br />
    <a href="https://stevemengelkoch.com/contact" title="Contact Steve"
      ><button>Contact Steve</button></a
    >
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Title from "@/components/Title.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
    Title,
  },
});
</script>

<style scoped>
img {
  float: left;
  margin: -10px -10px 10px -10px;
}
button {
  margin: 10xp 0px;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
