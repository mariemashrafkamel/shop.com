/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Settings from "../views/Settings.vue";
import Cart from "../views/Cart.vue";
import Profile from "../views/Profile.vue";
import Help from "../views/Help.vue";
import Supermarket from "../views/Supermarket.vue";
import User from "../views/User.vue";

// eslint-disable-next-line no-unused-vars
import app from '../main.js';

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/user",
        name: "User",
        component: User,
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/help",
        name: "Help",
        component: Help,
    },
    {
        path: "/supermarket",
        name: "Supermarket",
        component: Supermarket,
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;