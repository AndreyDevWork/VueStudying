<!-- Чем слабо связаннее компоненты , тем масштабируемее будет приложение -->
<template>
  <div class="app">
    <PostForm
      @create="createPost"
      >
    </PostForm>
    <PostList 
      :posts="posts"
      >      
    </PostList>


  </div>
</template>

<script>
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";


export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'Описание поста'},
        {id: 2, title: 'JavaScript', body: 'Описание поста 2'},
        {id: 3, title: 'JavaScript', body: 'Описание поста 3'},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    }
  }
}

</script>

<style> 

* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

</style>