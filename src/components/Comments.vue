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
      events: [
        {
          id: 1,
          title: "Goat yoga",
          location: "Meadow of the goats",
          date: this.getFutureDate(7),
          time: "",
          numberOfAttendees: 0,
          joinForm: false,
          userNames: [],
          userEmails: [],
        },
        {
          id: 2,
          title: "Goat yoga",
          location: "Meadow of the goats",
          date: this.getFutureDate(3),
          time: "",
          numberOfAttendees: 0,
          joinForm: false,
          userNames: [],
          userEmails: [],
        },
        {
          id: 3,
          title: "Goat yoga",
          location: "Meadow of the goats",
          date: this.getFutureDate(4),
          time: "",
          numberOfAttendees: 0,
          joinForm: false,
          userNames: [],
          userEmails: [],
        },
      ],
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
