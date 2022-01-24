<template>
  <el-container>
    <h1>
      PROFESSIONAL WEBMASTER<br />
      STEVE MENGELKOCH
    </h1>
    <a href="contact"><el-button>CONTACT STEVE NOW</el-button></a>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitlePortfolio",
});
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
el-button {
  font-family: "Montserrat", Sans-serif;
  font-size: 20px;
  font-weight: 700;
  background-color: #be8619;
  padding: 20px 40px 20px 40px;
  border-radius: 25px;
}
</style>
