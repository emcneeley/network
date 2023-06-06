<template>
<div>
    <form @submit.prevent="createPost()">
    
        <input name="body" type="text" placeholder="whats on your mind..." v-model="editable.body">
    <button type="submit" class="btn btn-primary"> post your thoughts</button>
    </form>
</div>
</template>


<script>
import { ref } from 'vue';
import { Post } from '../models/Post';
import { postsService } from '../services/PostsService';
import Pop from '../utils/Pop';

export default {
    
    setup(props){
        const editable = ref({})
        // TODO need ref for the v-model and create our placeholder object 
        return {
            editable,
            async createPost(){
                try {
                    const formData = editable.value
                    // TODO take the value of the placeholder object to send to the server for POST req
                    await postsService.createPost(formData)
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