<!-- Чем слабо связаннее компоненты , тем масштабируемее будет приложение -->
<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button
    @click="fetchPosts"
    >
      Получить посты
    </my-button>
    <my-button
      class="app__btn"
      @click="showDialog"
    >
      Создать пользователя
    </my-button>
    <my-dialog 
      v-model:show="dialogVisible">
      <PostForm
        @create="createPost"
      >
      </PostForm>
    </my-dialog>
    <PostList 
      :posts="posts"
      @remove="removePost"
      >      
    </PostList>


  </div>
</template>

<script>
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import axios from 'axios';

export default {

  components: {

    PostList, PostForm

  },

  data() {
    return {

      posts: [
        
      ],
      dialogVisible: false,
      modificatorValue: '',
    }
  },

  methods: {

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data;
      } catch (e) {
        alert('ошибка')
      }
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

.app__btn {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
}

</style>