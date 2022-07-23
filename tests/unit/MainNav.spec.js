import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(MainNav);
  });
  it("display company name", () => {
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("display menu item for navigation", async () => {
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
      const signinButton = wrapper.find("[data-test='action-button']");

      expect(signinButton.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("display profile image when clicking in sign in button", async () => {
      const signinButton = wrapper.find("[data-test='action-button']");

      await signinButton.trigger("click");

      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(profileImage.exists()).toBe(true);
    });
    it("display subnavgation menu with additional information", async () => {
      await wrapper.setData({
        isLoggedIn: false,
      });
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const signinButton = wrapper.find("[data-test='action-button']");

      await signinButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
