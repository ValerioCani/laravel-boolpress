<template>
    <div class="container">
        <div v-if="this.loading" class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else class="card p-3" v-for="(post, index) in posts" :key="index">
            <h2>{{post.title}}</h2>
            <p>{{truncateText(post.content, 100)}}</p>
            <h4>{{(post.category)?post.category.name:'Nessuna categoria'}}</h4>
            <ul>
                <li v-for="(tag, index) in post.tags" :key="index">{{tag.name}}</li>
            </ul>
        </div>
        <nav>
            <ul class="pagination">
                <li class="page-item" :class="((currentPage == 1)?'disabled':'')"  >
                    <a class="page-link" @click="getPosts(currentPage - 1)">Previous</a>
                </li>
                <li class="page-item">
                    <a class="page-link" >{{currentPage + '/' + lastPage}}</a>
                </li>
                <li class="page-item" :class="((currentPage == lastPage)?'disabled':'')">
                    <a class="page-link" @click="getPosts(currentPage + 1)" >Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name:"BlogPage",
        data(){
            return{
                posts:[],
                currentPage: 1,
                lastPage: null,
                loading: true,
            }
        },
        methods:{
            getPosts(page){
                this.loading = true;
                axios.get('/api/posts', {
                    params: {
                        page: page
                    }
                })
                .then((response)=>{
                    this.posts = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
                });
            },

            truncateText(text, maxlength){
                if(text.length > maxlength){
                    return text.substring(0, maxlength) + '...';
                }else{
                    return text;
                }
            }
        },
        mounted(){
            this.getPosts(1);
        },
    }
</script>

<style>

</style>
