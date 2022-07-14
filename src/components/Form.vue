<template>
  <div class="form">
    <h1>Contact Steve Mengelkoch</h1>
    <form>
  <label·for="fname">First·name:</label><br>
  <input·type="text"·id="fname"·name="fname"·/><br>
  <label·for="lname">Last·name:</label><br>
  <input·type="text"·id="lname"·name="lname">
    </form>
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
