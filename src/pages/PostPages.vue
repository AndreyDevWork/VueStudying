<!-- Чем слабо связаннее компоненты , тем масштабируемее будет приложение -->
<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Поиск...."
    />
    <div class="app__btns">
      <my-button
        @click="showDialog"
      >
        Создать пользователя
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog 
      v-model:show="dialogVisible">
      <PostForm
        @create="createPost"
      >
      </PostForm>
    </my-dialog>
    <PostList 
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />     
    <div v-else>Идет загрузка...</div> 
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MySelect from "@/components/UI/MySelect.vue";
import axios from 'axios';

export default {

  components: {

    PostList, PostForm, MySelect,

  },

  data() {
    return {

      posts: [
        
      ],
      dialogVisible: false,
      modificatorValue: '',
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 0,
      limit: 10,
      totaPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'}
      ]
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
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
          _page: this.page,
          _limit: this.limit,
          }
        });
        this.totaPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        alert('ошибка')
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
          _page: this.page,
          _limit: this.limit,
          }
        });
        this.totaPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('ошибка')
      }
    },
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {

  }

}

</script>

<style> 

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid teal;
  padding: 10px;
  margin-left: 5px;
}

.current-page {
  border: 2px solid rgb(0, 0, 0);
}

.observer {
  height: 30px;
  background-color: teal;
}

</style>