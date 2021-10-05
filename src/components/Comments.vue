<template>
  <main>
    <div class="comments">
      <input v-model="newCommentName" type="text" placeholder="name" />
      <input v-model="newComment" type="text" placeholder="comment" />
      <button @click="createComment()">Comment a event</button>
      <div v-for="comment in comments" :key="comment.name">
        <h4>{{ comment.name }}</h4>
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Comments",

  data() {
    return {
      newCommentName: "",
      newComment: "",
      comments: [],
    };
  },

  methods: {
    createComment() {
      const newComment = {
        name: this.newCommentName,
        comment: this.newComment,
      };
      this.comments.push(newComment);
      (this.newCommentName = ""), (this.newComment = "");
    },
  },
};
</script>

<style></style>
