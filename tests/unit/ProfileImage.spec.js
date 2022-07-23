import { mount } from "@vue/test-utils";
import ProfileImage from "@/components/ProfileImage.vue";

describe("Profile Image", () => {
  it("renders", () => {
    const wrapper = mount(ProfileImage);

    expect(wrapper.exists()).toBe(true);
  });
});
