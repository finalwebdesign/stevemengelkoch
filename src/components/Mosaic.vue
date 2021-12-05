<template>
  <div class="mosaic">
    <div class="row">
      <div class="css-certificate">
        <h3>CSS SoloLean Certificate</h3>
        <img
          src="../assets/certificates/css-sololearn-certificate.jpg"
          title="CSS Certificate"
        />
        <p>
          Work with the best professional webite design and development firm in
          the local Miami, FL area. Miami Marketing Company works closly with
          local Miami, FL businesses both large and small. Find out what makes
          the professional deisgn and development of Miami Marketing Comapny the
          best in the USA.
        </p>
        <button>CSS SoloLean Certificate</button>
      </div>
      <div class="html-certificate">
        >
        <h3>HTML SoloLearn Certificate</h3>
        <img
          src="../assets/certificates/html-sololearn-certificate.jpg"
          title="HTML Certificate"
        />
        <p>
          Miami Marketing Company is the digital and online marketing company
          for businesess in the Miami, FL area. If you are interested in
          learning more about digital and online marketing services. If you are
          a local Miami business be sure to work with Miami Marketing Company
          for the best services available!
        </p>
        <button>HTML SoloLean Certificate</button>
      </div>

      <div class="javascript">
        <h3>JavaScript SoloLearn ceertificate</h3>

        <img
          src="../assets/certificates/javascript-sololearn-certificate.jpg"
          title="javascript"
        />
        <p>
          Miami Marketing Company is the digital and online marketing company
          for businesess in the Miami, FL area. If you are interested in
          learning more about digital and online marketing services. If you are
          a local Miami business be sure to work with Miami Marketing Company
          for the best services available!
        </p>
        <button>
          <a href="services/hosting" title="Hosting">Learn More: Hosting</a>
        </button>
      </div>
      <div class="PHP">
        <a href="PHP" title="PHP">
          <h3>View Portfolio</h3>

          <img
            src="../assets/certificates/php-sololearn-certificate.jpg"
            title="PHP"
        /></a>
        <p>
          Miami Marketing Company is the digital and online marketing company
          for businesess in the Miami, FL area. If you are interested in
          learning more about digital and online marketing services. If you are
          a local Miami business be sure to work with Miami Marketing Company
          for the best services available!
        </p>
        <button>PHP SoloLearn Certificate</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Mosic",
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
</style>
