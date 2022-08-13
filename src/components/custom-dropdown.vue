<template>
  <div class="relative cursor-pointer">
    <div
      class="flex items-center hover:text-black hover:large:text-accent"
      :class="[active && 'text-black large:text-accent']"
      @click="active = !active"
    >
      <span class="min-w-max transition-colors">{{ title }}</span>
      <span
        class="icon icon-caret-down ml-0.5 mt-0.5 transition-line"
        :class="[active && '-rotate-90']"
      ></span>
    </div>

    <slot name="options" v-if="active"></slot>
  </div>
</template>

<script>
export default {
  name: "CustomDropdown",

  props: {
    title: String,
  },

  data() {
    return {
      active: false,
    };
  },
};
</script>

<style></style>
