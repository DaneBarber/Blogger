<template>
  <div class="component">
    <div class="card selectable">
      <div class="card-body">
        <!-- Add post image, and author PFP and date/time -->
        <h3 class="card-title">{{post.title}}</h3>
        <!-- Add PFP later -->
        <h4 class="card-subtitle">
          <img :src="post.creator.picture" :alt="post.creator.name" class="pfp">
          {{post.creator.name}}
        </h4>
        <img :src="post.imgUrl" alt="" class="card-img">
        <p class="card-text">{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<!-- 
  props: { project: { type: Object, required: true } },
  setup(props) { -->

<script>
export default {
  props: {post: {type: Object, required: true}},
  setup(props){
    return {
      
    }
  }
}
</script>


<style lang="scss" scoped>
  .component {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  .card-body {
    min-height: 60vh;
  }

  .card-img {
    max-height: 20vh;
    object-fit: contain;
  }

  .pfp {
    height: 48px;
    width: 48px;
    object-fit: cover;
    border-radius: 50%;
  }
</style>