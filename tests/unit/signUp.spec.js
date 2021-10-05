import { shallowMount } from "@vue/test-utils";
import Home from "@/components/Home.vue";

describe("Home.vue event attendence", () => {
  it("should add attendence to localStorage", async () => {
    let wrapper = shallowMount(Home);
    const input = wrapper.find("input.inputField");
    await input.setValue("Anna");

    const button = wrapper.find("button.joinBtn");
    await button.trigger("click");

    expect(input.userName).toMatch("Anna");
  });

  //it("should add attendence to localStorage", () => {});

  it("should check that saveUserToEvent runs", () => {
    const Method = jest.spyOn(Home.methods, "saveUserToEvent");
    shallowMount(Home);

    expect(Method).toBeCalled();
  });
});
