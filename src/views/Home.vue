<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/shop.png" />
    <div class="search">
      <form>
        <input id="s" type="text" placeholder="Search.." name="search" />
        <button id="submit">search</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
<style scoped>
#s {
  width: 250px;
  height: 30px;
}
#submit {
  height: 35px;
  width: 70px;
  background-color: #c51212;
  color: aliceblue;
}
form {
  position: absolute;
  top: 65%;
  left: 39%;
}
</style>
