<!-- Принимает посты и все что он делает это их отрисовывает -->
<template>
  <div v-if="posts.length > 0">
    <h3>Список пользователей</h3>
    <TransitionGroup name="post-list">
      <post-item 
        class="post" 
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </TransitionGroup>
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
  .post-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .post-list-enter-active,
  .post-list-leave-active {
    transition: all 0.4s ease;
  }
  .post-list-enter-from,
  .post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }
  .post-list-move {
  transition: transform 0.8s ease;
  }

</style>