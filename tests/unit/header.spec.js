import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Header);
  });

  it("should show home view on click", async () => {
    await wrapper.find(".home-btn").trigger("click");

    wrapper.vm.toggleHome();
    console.log(wrapper.emitted());
  });

  it("should show Comments view on click", async () => {
    await wrapper.find(".comments-btn").trigger("click");

    wrapper.vm.toggleComments();
    console.log(wrapper.emitted());
  });
});
