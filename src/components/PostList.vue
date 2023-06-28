<!-- Принимает посты и все что он делает это их отрисовывает -->
<template>
  <div v-if="posts.length > 0">
    <h3>Список пользователей</h3>
    <post-item 
      class="post" 
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h3 v-else="" style="color: teal;">
    Список пользователей пуст
  </h3>

</template>


<script>
  import PostItem from './PostItem.vue';
  export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: { PostItem }
}
</script>

<!-- scoped стили будут примененены только к этому компоненту -->
<style scoped>


</style>