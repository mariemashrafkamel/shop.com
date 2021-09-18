/* eslint-disable prettier/prettier */
<template>
  <div>
    <div class="signup">
      <div class="mb-3">
        <label class="form-label">User Name:</label>
        <input type="email" class="form-control" v-model="inputName" />
      </div>

      <div class="mb-3">
        <label class="form-label">Email:</label>
        <input type="email" class="form-control" v-model="inputEmail" />
      </div>

      <div class="mb-3">
        <label class="form-label">Password:</label>
        <input type="password" class="form-control" v-model="inputPassword" />
      </div>
      <button type="button" class="btn btn-info" v-on:click="create">
        Sign Up
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "SignUp",
  data() {
    return {
      list: [],
      inputEmail: "",
      inputPassword: "",
      inputName: "",
      user: {},
    };
  },
  methods: {
    create: function () {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].email != this.inputEmail) {
          if (this.inputName != "") {
            if (this.inputPassword != "") {
              this.$store.state.user.email = this.inputEmail;
              this.$store.state.user.name = this.inputName;
              this.user.id = this.list.length;
              this.user.email = this.inputEmail;
              this.user.password = this.inputPassword;
              this.user.username = this.inputName;
              this.user.cart = 0;

              this.list.push(this.user);

              this.postapi();

              this.$router.push("user");

              break;
            }
          }
        }
      }
    },
    async postapi() {
      const res = await axios.post("http://localhost:3000/users", this.user);
      this.list = [res.data];
    },
  },
  mounted() {
    Vue.axios.get(" http://localhost:3000/users").then((response) => {
      this.list = response.data;
      //console.log(response.data);
    });
  },
};
</script>

<style scoped>
.signup {
  display: table;
  margin-right: auto;
  margin-left: auto;
  border: 2px white;
  background-color: rgb(228, 44, 44);
  padding: 30px;
}
.form-label {
  padding: 10px;
  font-size: 20px;
}
</style>
