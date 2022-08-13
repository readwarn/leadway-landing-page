<template>
  <section class="mx-auto self-center h-full w-full">
    <div v-if="title" class="flex justify-center h-full flex-col">
      <h4 class="text-center md:text-left text-2xl font-semibold mb-2">
        {{ title }}
      </h4>
      <p class="text-sm md:text-md text-center md:text-left mb-4">
        {{ subTitle }}
      </p>
      <a
        :href="link"
        class="text-accent text-sm md:text-md text-center md:text-left"
        >learn more</a
      >
    </div>

    <div v-else class="h-full aspect-rect max-w-full mx-auto">
      <img :src="getStaticImg(src)" alt="image" class="h-full w-full" />
    </div>
  </section>
</template>

<script>
export default {
  name: "OptionSummaryDetails",

  props: {
    src: {
      type: String,
      default: "invest.png",
    },

    title: {
      type: String,
      default: "",
    },

    subTitle: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },
  },

  methods: {
    getStaticImg(src) {
      return require(`@/assets/images/${src}`);
    },
  },
};
</script>

<style scoped></style>
