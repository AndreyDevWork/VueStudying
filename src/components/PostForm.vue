<!-- Отвечает только за то что бы создать новый пост и отдать его куда-то наверх -->
<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input 
      v-model="post.title"
      placeholder="Название"
      type="text"> 
    </my-input>
    <my-input 
      v-model="post.body"
      placeholder="Описание"
      type="text">
    </my-input>
    <my-button class="btn" 
      @click="createPost">
      Создать
    </my-button>
  </form>
</template>


<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: '',
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: '',
        }
      },
    },
  }
</script>


<style scoped>
  form {
    display: flex;
    flex-direction: column;

  }

  .btn {
    margin-top: 15px;
    align-self: flex-end;
  }
</style>