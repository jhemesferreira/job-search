<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="h-full px-8 flex items-center">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon
          :icon="['fa', 'search']" class="mr-3 text-brand-gray-2 font-normal text-base"
        />
        <span>
          <span class="text-brand-green-1">6701</span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subnav",
  data() {
    return {
      onJobResultsPage: true,
    };
  },
};
</script>

<style>
</style>