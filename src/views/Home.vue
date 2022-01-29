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
    </div>
    <div class="content">
      <p>
        <strong>Steve Mengelkoch</strong> is a webmaster, software engineer and
        inbound marketing professional. Throughoout the past 15 years, Steve has
        been responsible for the design, development and management of a handful
        of the internets most elaborate and successful websites. Working
        primarily with businesses in the South Florida area.
        <strong>Steve Mengelkoch</strong> has become a prominent voice in the
        local web and digital marketing scene helping clients throughout the
        USA.
      </p>
      <p>
        Steve is always looking to expand his web and marketing knowledge. Steve
        is aggressively seeking new connections in the South Florida area and
        throughout the United States. If you are interested in learning more
        abouot
        <strong
          >professional website design, development, app development, coding or
          SEO</strong
        >
        (Search Engine Optimization)
        <a href="/contact" title="Contact">contact Steve here</a>. Steve is
        alawys excited to work with new client and customers on helping them
        grow and impove their online presence.
      </p>
    </div>

    <div class="full-width">
      <div class="about-button">
        <a href="https://stevemengelkoch.com/about" title="About Steve"
          ><button>About Steve</button></a
        >
      </div>
    </div>

    <div class="full-width-2">
      <div class="resume-styles">
        <div class="resume-image"></div>
        <img src="../assets/gallery/el-salvador.jpg" />
        <div class="resume-button">
          <a href="https://stevemengelkoch.com/resume" title="Steve's Resume"
            ><button>Steve's Resume</button></a
          >
        </div>
      </div>
    </div>
    <div class="full-width-3">
      <div class="certificates-button">
        <a
          href="https://stevemengelkoch.com/certificates"
          title="Steve's Certificates"
          ><button>Steve's Certificates</button></a
        >
      </div>
    </div>

    <Footer />
    <Copyright />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Copyright from "@/components/Copyright.vue";
import Title from "@/components/Title.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
    Copyright,
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
  margin-bottom: 10px;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content {
  margin: 20px;
}
.full-width {
  width: 100%;
  height: 500px;
  background-color: #dfdede;
  float: left;
  margin-left: -10px;
  padding: 10px;
}
.full-width-2 {
  width: 100%;
  height: 500px;
  background-color: #a7a7a7;
  float: left;
  margin-left: -10px;
  padding: 10px;
}
.full-width-3 {
  width: 100%;
  height: 500px;
  float: left;
  margin-left: -10px;
  padding: 10px;
}
</style>
