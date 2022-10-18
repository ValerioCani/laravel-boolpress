<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Boolpress</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-for="(link, index) in links" :key="index" class="nav-item active">
                        <router-link class="nav-link" :to="{name: link.link}">{{link.label}}</router-link>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/register">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name:'MyHeader',
        data(){
            return{
                links:[
                    {
                        label: 'Home',
                        link: 'Homepage'
                    },
                    {
                        label: 'Blog',
                        link: 'Blog'
                    },
                    {
                        label: 'About Us',
                        link: 'AboutUs'
                    },
                    {
                        label: 'Contacts',
                        link: 'Contacts'
                    },
                ]
            }
        }
    }
</script>

<style>

</style>
