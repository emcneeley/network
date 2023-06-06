import { applyStyles } from "@popperjs/core"
import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { api } from "./AxiosService"

class PostsService {
    async getPosts() {
        const res = await api.get('/api/posts')
        console.log(['this is the data'], res.data)
        AppState.olderPageUrl = res.data.older
        AppState.newerPageUrl = res.data.newer
        AppState.posts = res.data.posts.map(p => new Post(p))
    }

    async getPostsByProfile(id) {
        AppState.posts = []
        const res = await api.get('/api/posts', {
            params: {
                creatorId: id
            }
        })
        AppState.olderPageUrl = res.data.older
        AppState.newerPageUrl = res.data.newer
        AppState.posts = res.data.posts.map(p => new Post(p))
    }


    async changePage(url) {
        const res = await api.get(url)
        AppState.posts = res.data.posts
        AppState.olderPageUrl = res.data.older
        AppState.newerPageUrl = res.data.newer
    }

    async searchPosts(searchTerm) {
        const res = await api.get('/api/posts', {
            params: {
                query: searchTerm
            }
        })
        AppState.query = searchTerm
        AppState.posts = res.data.posts.map(p => new Post(p))
    }

    async createPost(formData) {
        const res = await api.post('/api/posts', formData)
        console.log(res.data, '[IM TRYING TO CREATE Stuff]')
    }

    async deletePost(postId) {
        const res = api.delete(`/api/posts/${postId}`)
        console.log(res.data, 'deleting shit')
        AppState.posts = AppState.posts.filter(p => p.id != postId)
    }
}

export const postsService = new PostsService()