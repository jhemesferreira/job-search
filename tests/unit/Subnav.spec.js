import { mount } from "@vue/test-utils";
import Subnav from "@/components/Subnav.vue";

describe("Subnav", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(Subnav, {
      global: {
        stubs: {
          fontAwesomeIcon: true,
        },
      },
    });
  });
  describe("when user is in job page", () => {
    it("display job count", async () => {
      await wrapper.setData({
        onJobResultsPage: true,
      });
      const jobCount = wrapper.find("[data-test='job-count']");

      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not in job page", () => {
    it("not display job count", async () => {
      await wrapper.setData({
        onJobResultsPage: false,
      });

      const jobCount = wrapper.find("[data-test='job-count']");

      expect(jobCount.exists()).toBe(false);
    });
  });
});
