<template>
  <div
    class="menu-wrapper group relative w-7 h-4 cursor-pointer"
    :class="[active && 'active-menu w-5 h-5']"
    @click="toggleMenu"
  >
    <div
      class="h-0.5 w-full bg-black relative top-1/2 -translate-y-0.5 group-hover:bg-accent transition-line duration-600 origin-center"
      :class="[active && 'scale-x-0 opacity-0 active-line ']"
    ></div>
  </div>
</template>

<script>
export default {
  name: "NavMenu",

  data() {
    return {
      active: false,
    };
  },

  methods: {
    toggleMenu() {
      this.active = !this.active;
      this.$emit("click");
    },
  },
};
</script>

<style>
.menu-wrapper::before,
.menu-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 0.125rem;
  background: #000;
  transform: translateY(-0.125rem);
  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 0.25s,
    background cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.menu-wrapper::after {
  top: 100%;
}

.menu-wrapper:hover:after,
.menu-wrapper:hover:before {
  background: #f6b736;
}

.menu-wrapper.active-menu::before {
  transform: rotate(315deg) translate(0.5px, -1.5px) scaleX(1.5);
  transform-origin: top right;
  background: #f6b736;
}

.menu-wrapper.active-menu::after {
  transform: rotate(44deg) translate(0.6px, -1px) scaleX(1.5);
  transform-origin: top right;
  background: #f6b736;
}
</style>
