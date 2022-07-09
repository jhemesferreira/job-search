import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(MainNav);
  });
  it("display compay name", () => {
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("display menu item for navgation", async () => {
    await wrapper.setData({
      listNavLinks: [
        {
          title: "Teams",
          url: "",
        },
        {
          title: "Locations",
          url: "",
        },
      ],
    });
    const listNavLinks = wrapper.findAll("[data-test='main-nav-list-item']");
    const listNavLinksTexts = listNavLinks.map((link) => link.text());

    expect(listNavLinksTexts).toEqual(["Teams", "Locations"]);
  });

  describe("when user is logged out", () => {
    it("display button sign in", () => {
      const siginButton = wrapper.find("[data-test='action-button']");

      expect(siginButton.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("display profile image when clicking in sign in button", async () => {
      const siginButton = wrapper.find("[data-test='action-button']");

      await siginButton.trigger("click");

      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(profileImage.exists()).toBe(true);
    });
  });
});
