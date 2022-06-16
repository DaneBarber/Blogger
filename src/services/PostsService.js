import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class PostsService {

  async getPosts() {
    const res = await api.get('api/blogs')
    logger.log(res.data)
    AppState.posts = res.data
  }

  async getProfilePosts(profileId) {
    const res = await api.get(`api/blogs?creatorId=${profileId}`)
    logger.log('-getProfilePosts-', res.data)
    AppState.posts = res.data
  }

  async createPost(postData) {
    const res = await api.post('api/blogs', postData)
    logger.log('-createPost-', res.data)
    AppState.posts.push(res.data)
  }

  async deletePost(id) {
    const res = await api.delete('api/blogs/' + id)
    logger.log('-createPost-', res.data)
    AppState.posts.delete(res.data)
  }

  setActive(post) {
    AppState.activePost = post
  }

}

export const postsService = new PostsService()
