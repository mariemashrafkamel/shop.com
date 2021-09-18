/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            id: "1601363",
            name: "",
            email: "",
            cart: 0,
        },
    },
    mutations: {
        INCREAMENT_CART(state) {
            state.cart += 1;
        },
        DECREAMENT_CART(state) {
            state.cart -= 1;
        }
    },
    actions: {},
    modules: {},
    getters: {
        nameLength: (state) => {
            return state.user.name.length;
        },
    },
});