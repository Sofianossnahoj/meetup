import { shallowMount } from "@vue/test-utils";
import Home from "@/components/Home.vue";

describe("Home.vue sign up", () => {
  /*it("Should add attendee to event", async () => {
    const init = jest.spyOn(Home.methods, "init");
    const wrapper = shallowMount(Home);
    await expect(init).toBeCalled();
    const event = wrapper.findAll("div.eventCard");
    expect(event).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1 }),
        expect.objectContaining({ id: 2 }),
        expect.objectContaining({ id: 3 }),
      ])
    );
  });
  it("Should add attendee to event", async () => {
    const init = jest.spyOn(Home.methods, "init");
    const wrapper = shallowMount(Home);
    await expect(init).toBeCalled();
    const event = wrapper.findAll("div.eventCard");
    expect(wrapper.find(event).exists()).toBe(true);
  });

  it("should show events", async () => {
    const wrapper = shallowMount(Home);
    const event = wrapper.findAll("div.eventCard").length;
    expect(event).toBe(3);
  });*/

  it("test tes test", () => {
    const events = [
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
    expect(events).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1 }),
        expect.objectContaining({ id: 2 }),
      ])
    );
  });

  it("should check that mounted runs", () => {
    const Method = jest.spyOn(Home.methods, "init");
    shallowMount(Home);

    expect(Method).toBeCalled();
  });
});
