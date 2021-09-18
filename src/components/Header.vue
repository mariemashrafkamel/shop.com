/* eslint-disable no-undef */
<template>
  <div>
    <div class="header">
      <Dashboard />
      <a href="#">Home</a>
      <a href="#/supermarket">Supermarket</a>
      <a href="#">Mobile & Tablets</a>
      <a href="#">TVs</a>
      <a href="#">Home & Kitchen</a>
      <a href="#">Health & Beauty</a>
      <a href="#">Toys</a>
      <a href="#">Sports</a>
      <a href="#">Clothes</a>
      <a href="#">Computer</a>
      <img src="../assets/cart.png">
      <button class="cart">0</button>
      
    </div>
  </div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
export default {
  name: "Header",
  components: {
    Dashboard,
  },
};
</script>

<style scoped>
.header {
  background-color: red;
  width: 100%;
  color: white;
  display: flex;
  margin: -1px;
  padding: 5px;
  font-size: 15px;
  height: 50px;
}
.header > * {
  margin: 10px;
}
.header a:checked {
  color: rgb(248, 253, 253);
}
.header a:hover {
  color: #fffafa;
}
.header a:active {
  color: #f8f0f0;
}
a {
  font-size: 20px;
  color: black;
  text-decoration: none;
}
.cart{
  border-radius: 50%;
  border-color:rgb(231, 21, 21);
}
</style>
