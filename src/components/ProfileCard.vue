<template>
     <div class="card elevation-4 profile-design m-5">
                <div class="card-body d-flex justify-content-around">
                     <img class="img-shit" :src="profile?.picture" alt="">
                     <div>
                         <div class="container-fluid ">
                             <p><b>NAME:</b> {{ profile?.name }}</p>
                             <p>Bio: {{ profile?.bio }}</p>
                             <p>Linkedin: {{ profile?.linkedin }}</p>
                             <p>Github: {{ profile?.github }}</p>
                             <p>Class: {{ profile?.class }}</p>
                             <p>Graduated: {{ profile?.graduated }}</p>
                         </div>
                     </div>
                 
                    </div>
                </div>

</template>


<script>
import { Profile } from '../models/Profile'
import { AppState } from '../AppState';
import { Account } from '../models/Account';
import { computed } from 'vue';
export default {
    props:{
        profile:{type:[Profile, Account], required:true}
    },
    setup(props){
        return {
            coverImg:computed(()=> `url(${props.profile?.coverImg})`)
        }
    }
}
</script>


<style lang="scss" scoped>
.card-body{
    background-image: v-bind(coverImg);
    aspect-ratio: 1/1;
    max-height: 400px;
    min-width: 100%;
    background-size:cover;
    color: rgb(255, 253, 253);
    text-shadow:2px 2px rgb(9, 9, 9);

}

.img-shit{
    aspect-ratio: 1/1;
    max-height: 80px;
}
</style>