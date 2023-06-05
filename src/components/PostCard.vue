<template>
    <div class="card elevation-3 card-stuff ">
    <div>
<p>
{{ post?.body }}
</p>
<div class="img-change">
    <img class="img-fluid" :src="post?.imgUrl" alt="">
</div>
    </div>

    <div>
    <router-link :to="{name:'Profile', params: {id: post?.creatorId}}">
    <p>
    <img class="rounded-circle profile-pic" :src="post.creator?.picture" alt="">
     <em>
        posted by: {{ post.creator?.name }}
    </em>       
</p>
    </router-link>
    </div>
    </div>


</template>


<script>
import { AppState } from '../AppState.js';

import {Post} from '../models/Post.js';


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
            }


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