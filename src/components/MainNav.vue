<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a href="" class="font-bold flex items-center h-full text-xl">{{
          company
        }}</a>
        <nav class="h-full ml-20">
          <ul class="h-full flex justify-between items-center gap-x-10">
            <li
              v-for="(link, index) in listNavLinks"
              :key="link.title + '-' + index"
              class="h-full flex justify-between items-center"
              data-test="main-nav-list-item"
            >
              <a class="h-full flex items-center" :href="link.url">{{
                link.title
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ActionButton
            v-if="!isLoggedIn"
            title="Sign in"
            type="primary"
            data-test="action-button"
            @click="isLoggedIn = true"
          />
          <ProfileImage v-else data-test="profile-image" />
        </div>
      </div>
      <Subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import Subnav from "@/components/Subnav.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      company: "Bobo Careers",
      listNavLinks: [
        {
          title: "Teams",
          url: "",
        },
        {
          title: "Locations",
          url: "",
        },
        {
          title: "Benefits",
          url: "",
        },
        {
          title: "Jobs",
          url: "",
        },
        {
          title: "Students",
          url: "",
        },
      ],
      isLoggedIn: false,
    };
  },
};
</script>
