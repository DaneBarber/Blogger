import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class PostsService {

  async getComments() {
    const res = await api.get('api/comments')
    logger.log(res.data)
    AppState.comments = res.data
  }

  async getProfilePosts(profileId) {
    const res = await api.get(`api/blogs?creatorId=${profileId}`)
    logger.log('-getProfilePosts-', res.data)
    AppState.posts = res.data
  }

  async getProfileComments(profileId) {
    const res = await api.get(`api/comments?creatorId=${profileId}`)
    logger.log('-getProfileComments-', res.data)
    AppState.comments = res.data
  }

  async createComment(commentData) {
    const res = await api.post('api/comments', commentData)
    logger.log('-createComment-', res.data)
    AppState.comments.push(res.data)
  }

  async deleteComment(id) {
    const res = await api.delete('api/comments/' + id)
    logger.log('-createComment-', res.data)
    AppState.comments.delete(res.data)
  }

}

export const commentsService = new CommentsService()
