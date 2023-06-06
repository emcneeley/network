<template>
    <form @submit.prevent="searchPosts()">
            <input class="w-100" type="text" v-model="search" placeholder="Search..." />
        </form>

</template>


<script>
import { ref } from 'vue'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
export default {
    
    
    setup(){
        const search = ref('')
        return {
            search, 
            async searchPosts(){
                try {
                    const searchTerm = search.value
                    await postsService.searchPosts(searchTerm)
                } catch (error) {
                   Pop.error(error) 
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>