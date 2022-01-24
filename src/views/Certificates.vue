<template>
  <div class="certificates">
    <Header />
    <div class="feature">
      <TitleCertificates />
      <img
        src="../assets/banners/certificates.jpg"
        title="Steve Mengelkoch"
        alt="Steve Mengelkoch"
      />
      <img src="../assets/steve-mengelkoch.jpg" />
    </div>
    <h1>Steve Mengelkoch's Certificates</h1>
    <Mosaic />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; // @ is an alias to /src
import Mosaic from "@/components/Mosaic.vue"; // @ is an alias to /src
import TitleCertificates from "@/components/TitleCertificates.vue";

export default defineComponent({
  name: "Certificates",
  components: {
    Header,
    Footer,
    Mosaic,
    TitleCertificates,
  },
});
</script>
