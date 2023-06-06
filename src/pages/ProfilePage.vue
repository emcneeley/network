<template>
<section class="row my-3">
    <div class="mb-3">
      <button :disabled="!olderUrl" @click="changePage(olderUrl)" class="btn btn-light">Older</button>
          <button :disabled="!newerUrl" @click="changePage(newerUrl)" class="btn btn-light">Newer</button>
     </div>
    <div class="col-9 container">

        <ProfileCard :profile="profile"/>
        <!-- <div class="card elevation-4 profile-design m-5 ">

            <div class="card-body d-flex justify-content-around">
                 <img class="img-shit" :src="profile?.picture" alt="">
                 <div class="p-3">
                     <p>Name: {{ profile?.name }}</p>
                     <p>Bio: {{ profile?.bio }}</p>
                     <a>Linkedin: {{ profile?.linkedin}}</a>
                 </div>
                 
                </div>
            </div> -->
<div v-for="p in posts" :key="p.id">
    <PostCard :post="p"/>
</div>
    </div>
        <div class="col-3 p-1">
            <div v-for="b in banner" :key="b.title" class="banner-bod card">
             <Banner :banner="b"/>
            </div>
        </div>
        
</section>

</template>


<script>
import { useRoute } from 'vue-router'
import Pop from '../utils/Pop'
import { profileService } from '../services/ProfileService'
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { Profile } from '../models/Profile'
import { Account } from '../models/Account'
import { postsService } from '../services/PostsService'
import { bannerService } from '../services/BannerService'


export default {
   
    setup(){
        const route=useRoute()

async function getProfile(){
    try {
        await profileService.getProfileById(route.params.id)
    } catch (error) {
        Pop.error(error, ['GETTING PROFILE'])
    }
}

// TODO pagination on profile page: just reference your buttonns and the changePage method on the home page
// NOTE now that you are saving the URLs when you get profile posts...this should work here too

async function getPostsByProfile(){
    try {
        await postsService.getPostsByProfile(route.params.id)
    } catch (error) {
       Pop.error (error) 
    }
}
        async function getAllBanners() {
            try {
                await bannerService.getAllBanners()
            } catch (error) {
                Pop.error(error)
            }
        }


onMounted(()=>{
    getProfile()
    getPostsByProfile()
    getAllBanners()
})
        return {
profile:computed(()=> AppState.profile),
posts: computed(()=> AppState.posts),
banner: computed(()=> AppState.banner),
olderUrl: computed(() => AppState.olderPageUrl),
newerUrl: computed(() => AppState.newerPageUrl),

            async changePage(url) {
                try {
                    await postsService.changePage(url)
                } catch (error) {
                    Pop.error(error)
                }
            }





        }
    }
}
</script>


<style lang="scss" scoped>

.img-shit{
    max-height: 90px;
    max-width: 90px;

}



</style>