import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(ActionButton, {
      propsData: {
        title: "I'm so clickable",
        type: "primary",
      },
    });
  });

  it("display text", () => {
    const textButton = wrapper.text();
    expect(textButton).toMatch("I'm so clickable");
  });
  it("contains class named primary", () => {
    expect(wrapper.classes("primary")).toBe(true);
  });
});
