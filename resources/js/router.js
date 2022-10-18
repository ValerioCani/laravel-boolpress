import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import AboutUsPage from './pages/AboutUsPage.vue';
import NotFound from './pages/NotFound.vue';



const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path:'/',
            name:'Homepage',
            component: HomePage
        },
        {
            path:'/Blog',
            name:'Blog',
            component: BlogPage
        },
        {
            path:'/AboutUs',
            name:'AboutUs',
            component: AboutUsPage
        },
        {
            path:'/Contacts',
            name:'Contacts',
            component: ContactsPage
        },
        {
            path:'/*',
            name:'NotFound',
            component: NotFound
        },
    ]

})

export default router;
