<template>
<div>
        <input name="body" type="text" placeholder="whats on your mind...">
    <button @click="createPost()" class="btn btn-primary"> post your thoughts</button>
</div>
</template>


<script>
import { postsService } from '../services/PostsService';
import Pop from '../utils/Pop';

export default {
    
    
    setup(){

        return {
            async createPost(){
                try {
                    await postsService.createPost()
                    console.log('This button is working')
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