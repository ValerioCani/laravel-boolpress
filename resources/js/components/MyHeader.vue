<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Boolpress</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-for="(link, index) in links" :key="index" class="nav-item active">
                        <a class="nav-link" :href="link.link">{{link.label}}</a>
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
                        link: '#'
                    },
                    {
                        label: 'Blog',
                        link: '#'
                    },
                    {
                        label: 'About Us',
                        link: '#'
                    },
                    {
                        label: 'Login',
                        link: '#'
                    },
                    {
                        label: 'Register',
                        link: '#'
                    },
                ]
            }
        }
    }
</script>

<style>

</style>
