<template>
    <div>
        <div>
            <h2>{{post.title}}</h2>
            <p>{{truncateText(post.content, 100)}}</p>
            <h4>{{(post.category)?post.category.name:'Nessuna categoria'}}</h4>
            <ul>
                <li v-for="(tag, index) in post.tags" :key="index">{{tag.name}}</li>
            </ul>
            <a class="btn btn-info" href="#">Read More</a>
        </div>
    </div>
</template>

<script>
    export default {
        name:"SinglePost",
        props: {post:Object},
        methods:{
            truncateText(text, maxlength){
                if(text.length > maxlength){
                    return text.substring(0, maxlength) + '...';
                }else{
                    return text;
                }
            }
        },
    }
</script>

<style>

</style>
