/* eslint-disable no-undef */
<template>
  <div id="main">
    
    <div id="sidebar">
      <div id="part1">
      <h5>Hello, {{ this.$store.state.user.name }}</h5>
    </div>
      <a href="/">Home</a>
      <a href="/profile">Profile</a>
      <a href="/cart">Cart</a>
      <a href="/settings">Settings</a>
      <a href="/about">About</a>
    </div>
      <span style="font-size: 28px; cursor: pointer" v-on:click="openNav"
      >&#9776;
    </span>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openNav() {
      if (this.open == false) {
        document.getElementById("sidebar").style.width = "250px";
        // eslint-disable-next-line no-undef
        app.style.marginLeft = "250px";
        this.open = true;
      } else {
        document.getElementById("sidebar").style.width = "0";
        // eslint-disable-next-line no-undef
        app.style.marginLeft = "0";
        this.open = false;
      }
    },
  },
};
</script>
<style scoped>
#sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #d61e1e;
  overflow-x: hidden;
  transition: 0.2s;
  padding-top: 30px;
}

#sidebar a {
  padding: 8px 8px 0px 8px;
  text-decoration: none;
  font-size: 25px;
  color: #fff7f7;
  display: block;
  transition: 0.3s;
}

#sidebar a:hover {
  color: #000000;
}

#sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

</style>
