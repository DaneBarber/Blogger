<template>
  <div class="big-padding">
    <post v-for="p in posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
import { AppState } from "../AppState";
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { postsService } from '../services/PostsService'

export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        AppState.posts = []
        await postsService.getPosts()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">
.big-padding {
  padding-left: 20vw;
  padding-right: 20vw;
}
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
