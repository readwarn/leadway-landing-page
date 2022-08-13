<template>
  <div
    class="absolute gap-x-4 sm:gap-x-6 flex rounded-lg card border transition-transform"
    :class="[
      isCentered && 'center-card center-animation-drop',
      isLeft && 'animated-drop',
    ]"
  >
    <div class="px-3 py-4 sm:px-3 sm:py-5 left w-1/2">
      <div
        class="flex items-center gap-x-4"
        v-for="(benefit, index) in benefits"
        :key="index"
      >
        <div
          class="icon-wrapper bg-red-400 rounded-full"
          :class="benefit.icon_bg"
        >
          <img
            :src="getStaticImg(benefit.icon)"
            alt="icons"
            class="w-full h-full"
          />
        </div>
        <div>
          <p class="text-sm font-bold min-w-ma mb-1">{{ benefit.title }}</p>
          <p class="text-xs font-light">
            {{ benefit.subtitle }}
          </p>
        </div>
      </div>
    </div>

    <div class="right gap-y-2 sm:gap-y-6 px-3 py-4 sm:px-5 sm:py-5 left w-1/2">
      <div v-for="(category, index) in categories" :key="index">
        <h4 class="text-xs font-bold mb-1 uppercase">
          {{ category.title }}
        </h4>
        <ul class="text-xs font-light leading-5">
          <li v-for="(type, index) in category.types" :key="index">
            {{ type }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leadswayBenefits",

  props: {
    position: {
      type: String,
      default: "left",
    },
  },

  computed: {
    isLeft() {
      return this.position == "left";
    },

    isCentered() {
      return this.position == "center";
    },
  },

  data() {
    return {
      categories: [
        {
          title: "your growth stage",
          types: ["For Enterpreneurs", "For Corprates", "For Global Brands"],
        },

        {
          title: "your business type",
          types: ["For bloggers", "For Ticketers", "For Tourism"],
        },
      ],

      benefits: [
        {
          title: "Why Choose Leapsail?",
          icon_bg: "bg-blue-600",
          icon: "trophy.png",
          subtitle: " Over 8,000 Users trust Lit. Here's why.",
        },
        {
          title: "Success rates",
          icon_bg: "bg-accent",
          icon: "trophy.png",
          subtitle: "Get the best transactions success rates in the industry.",
        },
        {
          title: "Customer",
          icon_bg: "bg-blue-600",
          icon: "yellow-baloon.png",
          subtitle:
            "Customer See Lit's checkout form and  Dashboard in action.",
        },
      ],
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
.card {
  background: #ffffff;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.05);
  transform: translate(-0%, -0.2rem);
  z-index: 5;
  min-width: 500px;
  width: 500px;
}

.center-card {
  left: 50%;
  transform: translate(-50%, -0.5rem);
}

.icon-wrapper {
  min-width: 50px;
  min-height: 50px;
  width: 50px;
  height: 50px;
}

.left {
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 20px 0;
}

.right {
  background: #f5f5f5;
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
}

.animated-drop {
  animation: drop cubic-bezier(0, 0, 0.2, 1) 0.6s forwards;
}

.center-animation-drop {
  animation: center-drop cubic-bezier(0, 0, 0.2, 1) 0.6s forwards;
}

@keyframes drop {
  from {
    transform: translate(0%, -0.5rem);
  }
  to {
    transform: translate(0%, 1rem);
  }
}

@keyframes center-drop {
  from {
    transform: translate(-50%, -0.5rem);
  }
  to {
    transform: translate(-50%, 1rem);
  }
}

@media screen and (max-width: 550px) {
  .card {
    min-width: 98vw;
    max-width: 98vw;
  }

  .icon-wrapper {
    display: none;
  }
}
</style>
