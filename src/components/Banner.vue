<template>
               <img :src="banner?.tall" alt="">
               
              


</template>


<script>
import { onMounted } from 'vue'
import { Banner } from '../models/Banner'
export default {
   props: {
    banner:{
        type:Banner, required:true
    }
   },
   
    setup(){


        return {



        }
    }
}
</script>


<style lang="scss" scoped>

</style>