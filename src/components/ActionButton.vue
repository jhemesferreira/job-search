<template>
  <button :class="buttonClass">
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        //type can be: primary, secondary...
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply h-9 rounded border-0;
}
.primary {
  @apply bg-brand-blue-1 hover:shadow-blue;
}
.primary > span {
  @apply text-white py-3 px-4 text-xs font-medium tracking-[.25px];
}
.secondary {
  @apply bg-transparent hover:bg-brand-blue-2 hover:shadow-blue;
}
.secondary > span {
  @apply text-brand-blue-1  py-3 px-4 text-xs hover:text-white;
}
.secondary:hover > span {
  @apply text-white;
}
</style>