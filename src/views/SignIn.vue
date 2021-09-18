<template>
  <div>
    <div class="signin">
      <div class="mb-3">
        <label class="form-label">Email:</label>
        <input type="email" class="form-control" v-model="inputEmail" />
      </div>

      <div class="mb-3">
        <label class="form-label">Password:</label>
        <input type="password" class="form-control" v-model="inputPassword" />
        <a href="javascript:void(0)">forgot password?</a>
      </div>
      <button type="button" class="btn btn-info" v-on:click="check">
        Sign In
      </button>
    </div>
    <div class="create">
      <p><span>New to Shop.com?</span></p>

      <button type="button" class="btn btn-danger" v-on:click="signup">Create An Account</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "SignIn",
  data() {
    return {
      list: undefined,
      inputEmail: "",
      inputPassword: "",
    };
  },
  methods: {
    check: function () {
     // console.log("hi");
      //restartLoop:
      for (var i = 0; i < this.list.length; i++) {
        if (this.inputEmail == this.list[i].email) {
          if (this.inputPassword == this.list[i].password) {
            this.$store.state.user.email = this.list[i].email;
            this.$store.state.user.name = this.list[i].username;
            this.$router.push("user");
            break;
          } else {
            alert("Wrong Password");
            break;
            //continue restartLoop;
            
            
            //break;
          }
        } else if(this.inputEmail != this.list[i].email) {
          alert("Wrong Email");
          break;
          //continue restartLoop;
          
        }
      }
    },
    signup: function () {{
      this.$router.push("signup");

    }}
  },

  mounted() {
    // eslint-disable-next-line prettier/prettier
    Vue.axios.get(" http://localhost:3000/users").then((response) => {
      this.list = response.data;
      console.log(response.data);
    });
  },
  computed: {},
};
</script>

<style scoped>
.signin {
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
.create {
  margin: 15px;
  width: 20%;
  margin-right: auto;
  margin-left: auto;
}
p {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

p span {
  background: #fff;
  padding: 0 10px;
}
</style>
