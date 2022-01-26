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
  border-width: 0px;
}
button:hover {
  color: #be8619;
  background-color: #02010100;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: #be8619;
  border-radius: 100px 100px 100px 100px;
}
h1 {
  color: #ffffff;
  font-family: "Montserrat", Sans-serif;
  font-size: 72px;
  font-weight: 800;
  line-height: 72px;
  text-shadow: 0px 0px 10px rgb(0 0 0 / 96%);
}
h3 {
  color: #3e6d78;
  font-family: "Montserrat", Sans-serif;
  font-size: 54px;
  font-weight: 800;
  line-height: 61px;
}
</style>
