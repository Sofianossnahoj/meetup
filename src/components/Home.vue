<template>
  <main>
    <Header />
    <section
      v-for="(event, title) in loadedEvents"
      :key="title"
      class="eventCard"
    >
      <h4>{{ event.title }}</h4>
      <p>{{ event.date }}</p>
      <p>{{ event.location }}</p>
      <div>
        {{ event.numberOfAttendees }}
      </div>
      <button
        v-show="!event.joinForm"
        v-on:click="event.joinForm = !event.joinForm"
        class="btn"
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

export default {
  name: "Home",
  components: {
    Header,
  },

  data() {
    return {
      names: [],
      loadedEvents: [],
      events: [
        {
          id: 1,
          title: "Goat yoga",
          location: "Meadow of the goats",
          date: new Date(2021, 10, 4, 3, 12),
          numberOfAttendees: 0,
          joinForm: false,
          userNames: [],
          userEmails: [],
        },
        {
          id: 2,
          title: "Goat yoga",
          location: "Meadow of the goats",
          date: new Date(2021, 10, 4, 3, 12),
          numberOfAttendees: 0,
          joinForm: false,
          userNames: [],
          userEmails: [],
        },
        {
          id: 3,
          title: "Goat yoga",
          location: "Meadow of the goats",
          date: new Date(2021, 10, 4, 3, 12),
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
      this.loadedEvents = JSON.parse(localStorage.getItem("events"));
      console.log(this.loadedEvents);
    },

    saveUserToStorage() {
      const parsed = JSON.stringify(this.events);
      localStorage.setItem("events", parsed);
    },

    saveUserToEvent(userName, userNames, userEmail, userEmails) {
      userNames.push(userName), userEmails.push(userEmail);
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
