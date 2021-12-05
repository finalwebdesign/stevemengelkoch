<template>
  <div class="mosaic">
    <div class="row">
      <div class="web-design">
        <a href="services/web-design" title="Web Design"
          ><h3>Website Design and Development</h3>
          <img src="../assets/certificates/css-sololearn-certificate-steve-mengelkoch.jpg" title="Web Design"
        /></a>
        <p>
          Work with the best professional webite design and development firm in
          the local Miami, FL area. Miami Marketing Company works closly with
          local Miami, FL businesses both large and small. Find out what makes
          the professional deisgn and development of Miami Marketing Comapny the
          best in the USA.
        </p>
        <button><a href="services/web-design" title="Web Design">Learn More: Web Development</a></button>
      </div>
      <div class="marketing">
        <a href="services/marketing" title="Marketing"
          ><h3>Digital and Online Marketing</h3>
          <img src="../assets/certificates/css-sololearn-certificate-steve-mengelkoch.jpg" title="Portfolio"
        /></a>
        <p>
          Miami Marketing Company is the digital and online marketing company
          for businesess in the Miami, FL area. If you are interested in
          learning more about digital and online marketing services. If you are
          a local Miami business be sure to work with Miami Marketing Company
          for the best services available!
        </p>
        <button><a href="services/marketing" title="Marketing">Learn More: Marketing</a></button>
      </div>
      <div class="hosting">
        <a href="services/hosting" title="Hosting"
          ><h3>Hosting Services</h3>

          <img src="../assets/certificates/css-sololearn-certificate-steve-mengelkoch.jpg" title="Portfolio"
        /></a>
                <p>
          Miami Marketing Company is the digital and online marketing company
          for businesess in the Miami, FL area. If you are interested in
          learning more about digital and online marketing services. If you are
          a local Miami business be sure to work with Miami Marketing Company
          for the best services available!
        </p>
        <button><a href="services/hosting" title="Hosting">Learn More: Hosting</a></button>
      </div>
      <div class="potfolio">
        <a href="portfolio" title="Portfolio">
          <h3>View Portfolio</h3>

          <img src="../assets/certificates/css-sololearn-certificate-steve-mengelkoch.jpg" title="Portfolio"
        /></a>
                <p>
          Miami Marketing Company is the digital and online marketing company
          for businesess in the Miami, FL area. If you are interested in
          learning more about digital and online marketing services. If you are
          a local Miami business be sure to work with Miami Marketing Company
          for the best services available!
        </p>
        <button><a href="portfolio" title="Portfolio">Learn More: Portfolio</a></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Mosaic",
  props: {
    msg: String,
  },
});
</script>

<style scoped>
.row {
  width: 100%;
  padding: 10px 5px 45px 5px;
  margin: 10px 0px 10px 0px;
}
.web-design {
  width: 25%;
  float: left;
}
.marketing {
  width: 25%;
  float: left;
}
.hosting {
  width: 25%;
  float: left;
}
.portfolio {
  width: 25%;
  float: left;
}
button {
  color:red;
}
</style>
