<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 18px;
  text-transform: uppercase;
  margin: 0px 10px 0px 10px;
}
#nav a.router-link-exact-active {
  color: #be8619;
}
button {
  font-family: "Montserrat", Sans-serif;
  font-size: 20px;
  font-weight: 700;
  background-color: #be8619;
  padding: 20px 40px 20px 40px;
  border-radius: 25px;
  color: white;
}
</style>
