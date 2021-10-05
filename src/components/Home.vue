<template>
  <main>
    <Header />
    <Comments />
    <section v-for="(event, title) in events" :key="title" class="eventCard">
      <h4>{{ event.title }}</h4>
      <p>{{ event.date }}</p>
      <p>{{ event.location }}</p>
      <div>
        {{ event.numberOfAttendees }}
      </div>
      <button
        v-show="!event.joinForm"
        @click="event.joinForm = !event.joinForm"
        class="Btn"
      >
        Join
      </button>
      <div v-show="event.joinForm" class="joinForm">
        <h4>Please enter name and email to join event</h4>
        <input
          type="text"
          placeholder="Name"
          class="inputField"
          v-model="event.userName"
        />
        <input
          type="text"
          placeholder="Email"
          class="inputField"
          v-model="event.userEmail"
        />
        <button
          @click="
            (event.numberOfAttendees = event.numberOfAttendees + 1),
              saveUserToStorage(),
              saveUserToEvent(
                event.userName,
                event.userNames,
                event.userEmail,
                event.userEmails,
                event.numberOfAttendees
              )
          "
          class="joinBtn"
        >
          Join
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Comments from "../components/Comments.vue";
import { add, format } from "date-fns";

export default {
  name: "Home",
  components: {
    Header,
    Comments,
  },

  data() {
    return {
      names: [],
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

    saveUserToStorage() {
      const parsed = JSON.stringify(this.events);
      localStorage.setItem("events", parsed);
    },

    saveUserToEvent(userName, userNames, userEmail, userEmails) {
      userNames.push(userName), userEmails.push(userEmail);
    },

    /*getEvents() {
      if (this.loadedEvents !== null) {
        console.log("getting events from loadedEvents");
        return this.loadedEvents;
      } else {
        console.log("getting events from events");
        return this.events;
      }
    },*/
    getFutureDate(days) {
      return format(add(new Date(), { days }), "dd MMM yyyy");
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.eventCard {
  border-style: solid;
  border-color: #ffff;
  border-width: 3px;
  border-radius: 4px;
  background-color: whitesmoke;
  width: 90%;
  max-height: 50%;
  margin-top: 1.5rem;
}
.joinForm {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
.inputField {
  width: 80%;
  height: 1.5rem;
  margin-top: 10px;
  font-family: "Open Sans", sans-serif;
  border-width: 1px;
  border-style: none;
  align-self: center;
  font-family: "Raleway", sans-serif;
}
.joinBtn {
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
