/* eslint-disable no-undef */
<template>
  <div class="Employee">
    <h1>store: {{ userId }}</h1>
    <p>{{ getLength }}</p>
    <table>
      <tr>
        <td>Name</td>
        <td>Salary</td>
        <td>Age</td>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.employee_name }}</td>
        <td>{{ item.employee_salary }}</td>
        <td>{{ item.employee_age }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import VueAxios from "vue-axios";
import Datepicker from "vue-datepicker";
Vue.use(VueAxios, axios);

export default {
  name: "Employee",
  components: Datepicker,
  data() {
    return { list: undefined };
  },
  methods: {
    incremeantCart(){
      this.$store.commit('INCREAMENT_CART');
    },
    decremeantCart(){
      this.$store.commit('DECREAMENT_CART');
    }
  },

  mounted() {
    // eslint-disable-next-line prettier/prettier
    Vue.axios.get(" http://localhost:3000/data").then((response) => {
      this.list = response.data;
      console.log(response.data);
    });
  },
  computed: {
    userId() {
      return this.$store.state.user.id;
    },
    getLength() {
      return this.$store.getters.nameLength;
    },
  },
};
</script>
