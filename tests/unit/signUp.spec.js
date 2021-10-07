import { shallowMount } from "@vue/test-utils";
import Home from "@/components/Home.vue";

describe("Home.vue event attendence", () => {
  it("should add attendence to localStorage", async () => {
    let wrapper = shallowMount(Home);
    const input = wrapper.find("input.input-field-name");
    await input.setValue("Anna");

    expect(input.element.value).toBe("Anna");
  });

  it("should check that saveUserToEvent runs", async () => {
    const Method = jest.spyOn(Home.methods, "saveUserToEvent");
    let wrapper = shallowMount(Home);
    const button = wrapper.find("button.join-btn");
    await button.trigger("click");
    expect(Method).toBeCalled();
  });
});
