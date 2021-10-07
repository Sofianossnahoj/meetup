import { shallowMount } from "@vue/test-utils";
import Home from "@/components/Home.vue";

describe("Home.vue events", () => {
  let wrapper, data;
  beforeEach(() => {
    data = [
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
    ];
    wrapper = shallowMount(Home, {
      data: () => {
        return {
          events: data,
        };
      },
    });
  });
  it("should find event", () => {
    const event = wrapper.findAll("section.eventCard").length;
    expect(event).toBe(data.length);
  });

  it("should check that mounted runs", () => {
    const Method = jest.spyOn(Home.methods, "init");
    shallowMount(Home);

    expect(Method).toBeCalled();
  });
});
