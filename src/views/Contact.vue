<template>
  <div class="contact">
    <Header />
    <div class="feature">
      <TitleContact />
      <img
        src="../assets/banners/contact.jpg"
        title="Steve Mengelkoch"
        alt="Steve Mengelkoch"
      />
    </div>
    <h1>Contact Steve Mengelkoch</h1>
    <Form />
    <Footer />
    <Copyright />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Copyright from "@/components/Copyright.vue";
import Form from "@/components/Form.vue";
import TitleContact from "@/components/TitleContact.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Form,
    Footer,
    Copyright,
    TitleContact,
  },
});
</script>
