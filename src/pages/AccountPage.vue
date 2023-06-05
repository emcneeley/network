<template>
  <div class="about text-center account-page">
    <div class="container-fluid my-2">
      <div class="row">
        <div class="col-md-6 container-fluid">

          <ProfileCard :profile="account" />

        </div>
        <div class="col-md-6 m-auto">

          <AccountForm />


        </div>
      </div>
    </div>

  </div>

  <div class="col-4">
  <div v-for="b in banner" :key = "b.title" >
  <Banner :banner="b"/>
  </div>
     </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
export default {

  setup() {
onMounted(()=>getAllBanners())



    async function getAllBanners() {
      try {
        await bannerService.getAllBanners()
      } catch (error) {
        Pop.error(error)
      }
    }

    return {
      account: computed(() => AppState.account),
      banner:computed(()=> AppState.banner),
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
