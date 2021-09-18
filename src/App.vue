/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
<template>
  <div id="app">
    <Header/>
    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signin">Sign In</router-link> |
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/settings">Settings</router-link> |
      <router-link to="/help">Help</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {app} from "./main.js";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    
    Header,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #000102;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #e61717;
      text-decoration: none;
    }
  }
}
</style>
