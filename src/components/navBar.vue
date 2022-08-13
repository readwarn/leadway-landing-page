<template>
  <header class="fixed w-full z-10" :class="[active && 'h-screen']">
    <!-- DESKTOP NAVIGATIONS -->

    <div class="desktop-nav px-3 sm:px-8 py-4 lg:px-14 large:px-16 xl:px-18">
      <!-- LEFT SIDE NAVIGATIONS -->
      <ul class="flex items-center gap-x-6 xl:gap-x-10">
        <li>
          <img
            :src="getStaticImg('brand-logo.png')"
            alt="logo"
            class="h-4 sm:h-5 md:h-7 min-w-max"
          />
        </li>

        <custom-dropdown
          title="Why Leapsail"
          class="text-sm hidden large:list-item"
        >
          <leadsail-benefits slot="options" />
        </custom-dropdown>

        <li
          class="hidden large:list-item text-sm hover:text-black hover:large:text-accent"
        >
          <a href="#">Products</a>
        </li>

        <custom-dropdown title="Pricing" class="text-sm hidden large:list-item">
        </custom-dropdown>

        <custom-dropdown title="Learn" class="text-sm hidden large:list-item">
        </custom-dropdown>
      </ul>

      <!-- RIGHT NAVIGATIONS -->
      <ul class="flex items-center gap-x-6 xl:gap-x-10 justify-end">
        <custom-dropdown title="Contact" class="text-sm hidden large:list-item">
        </custom-dropdown>

        <custom-dropdown title="Support" class="text-sm hidden large:list-item">
        </custom-dropdown>

        <li class="hidden sm:list-item text-sm hover:text-accent">
          <a href="#">Login</a>
        </li>

        <button
          class="hidden sm:flex items-center bg-accent px-4 py-1.5 rounded-3xl text-white text-sm justify-center hover:drop-shadow-md"
        >
          <span class="ml-2">Create Account</span>
          <span class="icon icon-caret-down ml-0.5 mt-0.5 -rotate-90"></span>
        </button>

        <nav-menu class="large:hidden" @click="active = !active" />
      </ul>
    </div>

    <!-- MOBILE NAVIGATIONS -->
    <ul
      :class="[
        active &&
          'scale-y-100 opacity-100 duration-700 h-full flex items-start gap-y-6 sm:gap-y-8 flex-col',
        !active && 'scale-y-0 duration-500 h-0',
      ]"
      class="relative bg-accent transition-line large:hidden origin-top px-8 py-8"
    >
      <custom-dropdown
        title="Why Leapsail"
        class="text-white text-md sm:text-lg"
      >
        <leadsail-benefits
          slot="options"
          position="left"
          class="text-black -left-6"
        />
      </custom-dropdown>

      <li class="text-md text-white sm:text-lg hover:text-black">
        <a href="#">Products</a>
      </li>

      <li class="text-md text-white sm:text-lg hover:text-black">
        <a href="#">Pricing</a>
      </li>

      <custom-dropdown title="Learn" class="text-white text-md sm:text-lg">
      </custom-dropdown>

      <custom-dropdown title="Contact" class="text-white text-md sm:text-lg">
      </custom-dropdown>

      <custom-dropdown title="Support" class="text-white text-md sm:text-lg">
      </custom-dropdown>

      <li class="sm:hidden text-md text-white sm:text-lg hover:text-black">
        <a href="#">Login</a>
      </li>

      <div class="w-full bx-shadow p-3 absolute left-0 sign-up-cta sm:hidden">
        <button
          class="flex items-center w-full border-white border-2 px-4 py-1.5 rounded-3xl text-white text-sm justify-center hover:text-black hover:border-black transition-colors"
        >
          <span class="ml-2">Create Account</span>
          <span class="icon icon-caret-down ml-0.5 mt-0.5 -rotate-90"></span>
        </button>
      </div>
    </ul>
  </header>
</template>

<script>
import navMenu from "@/components/nav-menu";
import customDropdown from "@/components/custom-dropdown";
import leadsailBenefits from "@/components/leadsail-benefits";

export default {
  name: "NavBar",

  components: {
    navMenu,
    customDropdown,
    leadsailBenefits,
  },

  data() {
    return {
      active: false,
    };
  },

  methods: {
    getStaticImg(src) {
      return require(`@/assets/images/${src}`);
    },
  },
};
</script>

<style scoped>
header {
  display: grid;
  grid-template-rows: auto 1fr;
}

header .desktop-nav {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.05);
}

.sign-up-cta {
  top: 100%;
  transform: translateY(-100%);
}

.bx-shadow {
  box-shadow: 0 -1px 6px 0 rgb(0 0 0 / 30%);
}

@media screen and (min-width: 1024px) {
  header .desktop-nav {
    grid-template-columns: 6fr 5fr;
  }
}
</style>
