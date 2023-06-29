<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns fdf">
      <my-button 
        @click="$router.push('/posts')"
        style="margin-right: 20px;"
      >
        Посты
      </my-button>
      <my-button
        @click="$router.push('/about')"
      >
        О сайте
      </my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar {
    height: 50px;
    background-color: white;
    display: flex;
    border: 2px solid teal;
    align-items: center;
    padding: 0 15px;
  }
  .navbar__btns {
    margin-left: auto;
  }

</style>