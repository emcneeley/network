<template>
    <div class="card elevation-3 card-stuff">
        <div class="card-body d-flex justify-content-between">
            <div class="img-change">
                <img class="img-fluid" :src="post?.imgUrl" alt="">
                <p>{{ post?.body }}</p>
            </div>
            <div>
             <p> Likes:{{ post?.likeIds.length }}</p>
             <p>{{ new Date(post?.createdAt).toLocaleDateString() }}</p> 
            <div>

            </div>
        <router-link :to="{name:'Profile', params: {id: post?.creatorId}}">
            <img class="rounded-circle profile-pic" :src="post.creator?.picture" alt="">
    <!-- TODO add the created at -->
    <!-- TODO add a delete button...make sure this is only visible IF the creator of the post is the person logged in -->
        </router-link>
            <p>
                posted by: {{ post.creator?.name }}
            </p>
            <button @click="deletePost(post?.id)" v-if="post?.creatorId == account.id" class="mdi mdi-trash-can"></button>
        </div>
    </div>


        </div>

</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

import {Post} from '../models/Post.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';


export default {
    props:{
        post: {type: Post, required:true
        }
    },
    
    setup(props){



        return {
            goToProfilePage(){
                AppState.profile= props.post
                console.log('Im GOING!')
            },
            async deletePost(postId){
                try {
                    await postsService.deletePost(postId)
                } catch (error) {
                    Pop.error(error)
                }

            },

            account: computed(()=>AppState.account)
            // TODO deletepost() method... make sure to pass the id for the past
         }

         
    }
}
</script>


<style lang="scss" scoped>
.card-stuff{
    max-height: 200px;
}

.img-change{
    max-height:70px;
    aspect-ratio: 1/1;
}

.profile-pic{
    max-height:30px;
    aspect-ratio: 1/1
}
</style>