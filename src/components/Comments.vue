<template>
  <main>
    <section v-for="(event, title) in events" :key="title" class="comments">
      <div v-if="event.userNames.length !== 0" class="comments-card">
        <h4>{{ event.title }}</h4>
        <p>{{ event.date }}</p>
        <p>{{ event.location }}</p>
        <h4>write a comment</h4>
        <div v-show="event.joinForm" class="comment-form">
          <input
            type="text"
            placeholder="Name"
            class="input-field"
            v-model="event.userComment"
          />
          <input
            type="text"
            placeholder="write a comment"
            class="input-field"
            v-model="event.userComment"
          />
          <button
            @click="
              saveUserCommentToEvent(event.userComment, event.userComments),
                saveToStorage(),
                (event.userComment = null)
            "
            class="comment-btn"
          >
            comment
          </button>
        </div>
        <div class="comments">
          <ul id="userComments">
            <li
              v-for="($value, index) in event.userComments"
              :key="index"
              class="comments-list"
            >
              {{ $value }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { add, format } from "date-fns";

export default {
  name: "Comments",
  components: {},

  data() {
    return {
      names: [],
      events: [
        {
          id: 1,
          title: "Goat yoga",
          location: "Meadow of the goats",
          date: this.getFutureDate(7),
          time: "12:00",
          numberOfAttendees: 0,
          joinForm: false,
          userNames: [],
          userEmails: [],
          userComments: [],
        },
        {
          id: 2,
          title: "Constellation walk",
          location: "the park",
          date: this.getFutureDate(3),
          time: "22:00",
          numberOfAttendees: 0,
          joinForm: false,
          userNames: [],
          userEmails: [],
          userComments: [],
        },
        {
          id: 3,
          title: "Picnic",
          location: "the other park",
          date: this.getFutureDate(4),
          time: "15:00",
          numberOfAttendees: 0,
          joinForm: false,
          userNames: [],
          userEmails: [],
          userComments: [],
        },
      ],
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const events = JSON.parse(localStorage.getItem("events"));
      if (events !== null) {
        this.events = events;
      }
    },

    saveToStorage() {
      const parsed = JSON.stringify(this.events);
      localStorage.setItem("events", parsed);
    },

    saveUserCommentToEvent(userComment, userComments) {
      userComments.push(userComment);
    },
    getFutureDate(days) {
      return format(add(new Date(), { days }), "dd MMM yyyy");
    },
  },
};
</script>

<style scoped>
.comments {
  width: 90%;
  max-height: 50%;
  margin-top: 1.5rem;
}

.comments-card {
  border-style: solid;
  border-color: #ffff;
  border-width: 3px;
  border-radius: 2px;
  background-color: whitesmoke;
}

.comment-form {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}

.comments-list {
  list-style-type: none;
}

.comment-btn {
  border-style: none;
  background-color: #f6b092;
  width: 125px;
  height: 2rem;
  border-radius: 12px;
  margin: 10px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  align-self: center;
}
</style>
