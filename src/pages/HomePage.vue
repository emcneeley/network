<template>
 <section class="row">
  <div class="col-8 m-3">
    <SearchBar/>
 <div class="mb-3">
  <button :disabled="!olderUrl" @click="changePage(olderUrl)" class="btn btn-light">Older</button>
      <button :disabled="!newerUrl" @click="changePage(newerUrl)" class="btn btn-light">Newer</button>
 </div>
 <CreatePost/>
   <div class=" mb-2" v-for="p in posts" :key="p.id">
     <PostCard :post="p"/>
   </div>
   </div>
   <div class="col-3 card container-fluid">
<div v-for="b in banner" :key = "b.title" >
<Banner :banner="b"/>
</div>
   </div>

 </section>

</template>

<script>
import Pop from '../utils/Pop';
import {postsService} from '../services/PostsService'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { bannerService } from '../services/BannerService';

export default {
  setup() {





onMounted(()=>getPosts())
getAllBanners()


async function getPosts(){
try {
  await postsService.getPosts()
} catch (error) {
  Pop.error(error)
}
}

    async function getAllBanners() {
      try {
        await bannerService.getAllBanners()
      } catch (error) {
        Pop.error(error)
      }
    }


    
    return {
posts: computed(()=>AppState.posts),
olderUrl:computed (()=> AppState.olderPageUrl),
newerUrl: computed (()=> AppState.newerPageUrl),
banner: computed(()=> AppState.banner),


async changePage(url){
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

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
