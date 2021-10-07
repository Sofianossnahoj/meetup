import { shallowMount } from "@vue/test-utils";
import Comments from "@/components/Comments.vue";

describe("comments.vue", () => {
  it("should find comments list", () => {
    let wrapper = shallowMount(Comments);
    expect(wrapper.findAll("ul > li").exists());
  });

  it("calls saveUserCommentToEvent when button is clicked", async () => {
    const Method = jest.spyOn(Comments.methods, "saveUserCommentToEvent");
    const wrapper = shallowMount(Comments, {
      data() {
        return {
          events: [
            {
              id: 1,
              title: "Goat yoga",
              location: "Meadow of the goats",
              date: this.getFutureDate(7),
              time: "12:00",
              numberOfAttendees: 0,
              joinForm: false,
              userNames: ["anna"],
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
    });

    await wrapper.find("button.comment-btn").trigger("click");
    expect(Method).toHaveBeenCalled();
  });
});
