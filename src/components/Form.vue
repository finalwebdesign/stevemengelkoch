<template>
  <div class="form">
    <form>
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" /><br>
      <label for="email">Email:</label><br />
      <input type="mail" id="email" name="email" /><br />
       <label for="message">Message:</label><br />
      <input type="message" id="message" name="message" /><br />
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

<style scoped>
input {
  width: 80%;
}

form {
  border: solid, 1px black;
}
</style>
