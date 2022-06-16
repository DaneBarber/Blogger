<template>
  <post v-for="p in AppState.posts" :key="p.id" :post="p" />
</template>

<script>
export default {
  name: 'Home',
  setup() {

    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
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
