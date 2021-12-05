<template>
  <div class="home">
    <Header msg="Welcome to Steve Mengelkoch's Portfolio" />
    <div class="feature">
    <img src="../assets/steve-mengelkoch.jpg" />
    </div>
    <p>
      Steve Mengelkoch is a webmaster and inbound marketing professional. Over
      the past 15 years he has been responsible for the design, development and
      management of some of the internets most elaborate and successful
      websites. Working primarily with businessese in the South FL area, Steve
      has become a prominent voice in the local web and digital marketing scene.
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
    <a href="about" title="About Steve"><button>About Steve</button></a>
    <br />
    <a href="resume" title="Steve's Resume"><button>Steve's Resume</button></a>
    <br />
    <a href="contact" title="Contact Steve"><button>Contact Steve</button></a>
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

<style>
.feature {
 float: left;
}
button {
  padding: 10px;
  margin: 5px;
}
</style>