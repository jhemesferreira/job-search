import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("display compay name", () => {
    const wrapper = mount(MainNav);

    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("display menu item for navgation", () => {
    const wrapper = mount(MainNav, {
      data() {
        return {
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
        };
      },
    });
    const listNavLinks = wrapper.findAll("[data-test='main-nav-list-item']");
    const listNavLinksTexts = listNavLinks.map((link) => link.text());

    expect(listNavLinksTexts).toEqual(["Teams", "Locations"]);
  });
});
