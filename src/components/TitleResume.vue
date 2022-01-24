<template>
<el-container>
  <h1>
    VIEW STEVE'S PORTFOLIO<br />
    OF WEBSITE DEVELOPMENT
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

el-button {
    font-family: "Montserrat", Sans-serif;
    font-size: 20px;
    font-weight: 700;
    background-color: #BE8619;
    padding: 20px 40px 20px 40px;
    border-radius: 25px;
}
</style>