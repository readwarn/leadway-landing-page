<template>
  <div
    class="chip bg-soft-grey rounded-3xl pr-10 pl-12 py-1.5 text-xs font-medium sm:font-semibold sm:text-sm relative capitalize"
  >
    {{ title }}

    <div
      class="absolute inset-0 aspect-square rounded-full chip-ring bg-white border-5 sm:border-7"
      :style="{ borderColor: ringColor }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "OptionChip",

  props: {
    title: {
      type: String,
      default: "Title",
    },

    ringColor: {
      type: String,
      default: "black",
    },
  },
};
</script>

<style scoped>
.chip {
  display: inline-block;
}

.chip-ring {
  height: calc(100% - 3.5px);
  transform: translate(1px, 1.5px);
}
</style>
