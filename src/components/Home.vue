<template>
  <main>
    <section v-for="(event, title) in events" :key="title" class="eventCard">
      <h4>{{ event.title }}</h4>
      <p>date: {{ event.date }}</p>
      <p>time: {{ event.time }}</p>
      <p>location: {{ event.location }}</p>
      <p>participant: {{ event.numberOfAttendees }}</p>
      <button
        v-show="!event.joinForm"
        @click="event.joinForm = !event.joinForm"
        class="btn"
      >
        Join
      </button>
      <div v-show="event.joinForm" class="joinForm">
        <h4>Please enter name and email to join event</h4>
        <input
          type="text"
          placeholder="Name"
          class="input-field-name"
          v-model="event.userName"
        />
        <input
          type="text"
          placeholder="Email"
          class="input-field"
          v-model="event.userEmail"
        />
        <button
          @click="
            (event.numberOfAttendees = event.numberOfAttendees + 1),
              saveUserToEvent(
                event.userName,
                event.userNames,
                event.userEmail,
                event.userEmails,
                event.numberOfAttendees
              ),
              saveUserToStorage(),
              (event.userName = ''),
              (event.userEmail = '')
          "
          class="join-btn"
        >
          Join
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import { add, format } from "date-fns";

export default {
  name: "Home",
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

    saveUserToStorage() {
      const parsed = JSON.stringify(this.events);
      localStorage.setItem("events", parsed);
    },

    saveUserToEvent(userName, userNames, userEmail, userEmails) {
      userNames.push(userName), userEmails.push(userEmail);
    },

    getFutureDate(days) {
      return format(add(new Date(), { days }), "dd MMM yyyy");
    },
  },
};
</script>

<style scoped></style>
