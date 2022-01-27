<template>
  <div class="about">
    <Header />
    <div class="feature">
      <TitleAbout />
      <img
        src="../assets/banners/about.jpg"
        title="Steve Mengelkoch"
        alt="Steve Mengelkoch"
      />
    </div>

    <div class="portrait">
          <img src="../assets/steve-mengelkoch.jpg" />

    </div>
    <div class="content">
              <h1>More About<br>Steve Mengelkoch</h1>

    <p>
      Steve was born and raised in Minneapolis Minnesota. Upon Graduating with a
      bachelors degree from the University of Minnesota in business and
      marketing Steve relocated to sunny Miami, FL.
    </p>
    <p>
      Steve quickly became the lead marketer and webmaster at Final Web Design,
      Inc. headquartered in downtown Miami. The company Final Web Design has
      continued to grow and prosper as one of South Florida's most recognized
      web development and SEO companies.
    </p>
    <p>
      As a professional webmaster Steve has
      <a href="https://stevemengelkoch.com/resume" title="Experience and Skills"
        >extensive experience and skills</a
      >
      in all forms of website development. With multiple projects developed on
      todays most popular CMS systems such as Joomla, Wordpress, Drupal and
      Magento, as well as traditional html, java and php web development.
    </p>
    <p>
      Steve's skills are not limited to web development but rather expand into
      search engine optimization and online marketing. Steve has managed large
      corporate marketing campaigns including on-page SEO, content management,
      reputable link campaigns, Google Pay-Per-Click campaigns, social media
      marketing, lead generation and numerous other online marketing outlets.
    </p>
    <p>
      As an experience webmaster Steve Mengelkoch has proven himself one of
      South Florida best webmasters. He is currently a member of the Joomla
      development community and a responsive web development professional. If
      you are in need of services offered by Steve Mengelkoch feel free to
      <a href="https://stevemengelkoch.com/contact" title="Contact"
        >contact me</a
      >
      on my contact page.
    </p>
    </div>
    <Footer />
    <Copyright />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; // @ is an alias to /src
import Copyright from "@/components/Copyright.vue"; // @ is an alias to /src
import TitleAbout from "@/components/TitleAbout.vue"; // @ is an alias to /src

export default defineComponent({
  name: "About",
  components: {
    Header,
    Footer,
    Copyright,
    TitleAbout,
  },
});
</script>

<style scoped>

img {
  margin: -10px -10px 10px -10px;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.portrait {
  width: 45%;
  float: left;
}
.content {
  width: 45%;
  float: left;
  padding: 10px;
}
</style>
