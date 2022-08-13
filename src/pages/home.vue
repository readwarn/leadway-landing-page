<template>
  <div class="banner">
    <section
      class="grid grid-cols-2 gap-y-6 sm:gap-y-0 sm:gap-x-20 lg:gap-x-40 mb-20 sm:mb-40 px-3 sm:px-8 py-4 lg:px-14 large:px-16 xl:px-18"
    >
      <div class="col-span-full sm:col-span-1 order-2 sm:order-1 self-center">
        <h2
          class="font-extrabold text-xl text-center sm:text-left md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6"
        >
          We are revolutionising your concept of comfort.
        </h2>

        <p
          class="text-xs sm:text-sm text-center sm:text-left lg:text-md text-soft-black mb-10"
        >
          Created with a can do and achievers mindset. A self-onboarding
          application with features that open you to a new way.
        </p>

        <button
          class="rounded-3xl px-6 py-2 w-2/3 sm:w-auto text-white bg-accent text-sm hover:shadow-xl hover:brightness-110 transition-all block mx-auto sm:mx-0"
        >
          Get Started
        </button>

        <div
          class="flex justify-center gap-x-4 sm:justify-start items-center mt-6"
        >
          <div class="w-32 h-10">
            <img
              :src="getStaticImg('apple-store.png')"
              alt="apple"
              class="sm:-ml-3 -mt-0.5"
            />
          </div>

          <div class="w-32 h-10">
            <img
              :src="getStaticImg('google-play.png')"
              alt="google"
              class="sm:-ml-3"
            />
          </div>
        </div>
      </div>

      <div
        class="gallery border order-1 sm:order-2 col-span-full sm:col-span-1 sm:rotate-5 md:rotate-12 lg:rotate-20 sm:-translate-x-5 lg:-translate-x-8 justify-end"
      >
        <div
          class="relative row-start-3 row-end-5 col-start-1 col-end-3 rotate-330"
        >
          <img
            :src="getStaticImg('illustration.png')"
            alt="illustration"
            class="w-full h-full"
          />
        </div>

        <div
          class="relative row-start-1 row-end-3 col-start-1 col-end-3 rotate-330"
        >
          <img
            :src="getStaticImg('camera.png')"
            alt="wowan"
            class="w-full h-full"
          />
        </div>

        <div class="relative row-start-1 row-end-3 col-start-3 col-end-6">
          <img
            :src="getStaticImg('woman.png')"
            alt="wowan"
            class="w-full h-full"
          />
        </div>

        <div class="relative row-start-4 row-end-6 col-start-3 col-end-5">
          <img
            :src="getStaticImg('woman.png')"
            alt="wowan"
            class="w-full h-full"
          />
        </div>

        <div
          class="relative row-start-3 row-end-4 col-start-4 col-end-6 rotate-330"
        >
          <img
            :src="getStaticImg('gas-baloon.png')"
            alt="wowan"
            class="w-full h-full"
          />
        </div>
        <div v-for="i in 5" :key="i" class="border border-gray-300"></div>
      </div>
    </section>

    <section class="px-3 sm:px-8 py-4 lg:px-14 large:px-16 xl:px-18">
      <h2
        class="font-extrabold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-4"
      >
        Work in the way that works for you!
      </h2>

      <p
        class="text-xs sm:text-sm text-center lg:text-md text-soft-black mb-10"
      >
        What would you like to manage with Leapsail.com?
      </p>

      <div class="flex justify-center flex-wrap gap-5 mt-12 sm:w-3/4 mx-auto">
        <option-chip
          v-for="({ title, ringColor }, index) in options"
          :key="index"
          :title="title"
          :ring-color="ringColor"
        />
      </div>

      <button
        class="mt-14 rounded-3xl px-6 sm:px-20 py-2 w-2/3 sm:w-auto text-white bg-accent text-sm hover:shadow-xl hover:brightness-110 transition-all block mx-auto"
      >
        Get Started
      </button>
    </section>

    <section
      ref="wrapper"
      class="bg-light-grey mt-32 px-5 sm:px-8 py-10 lg:px-32 relative border-3 border-green-500"
    >
      <div
        class="border-1.5 border-border-grey rounded-full w-10 h-10 left-0 translate-x-2 sm:translate-x-1/3 top-1/2 -translate-y-1/2 absolute"
      >
        <span
          @click="slideCard(1)"
          class="icon icon-caret-down text-3xl rotate-90 font-light ml-0.5 cursor-pointer hover:scale-110 transition-transform"
        ></span>
      </div>

      <div
        class="border-1.5 border-border-grey rounded-full w-10 h-10 top-1/2 -translate-x-2 sm:-translate-x-1/3 -translate-y-1/2 right-0 absolute"
      >
        <span
          @click="slideCard(-1)"
          class="icon icon-caret-down text-3xl rotate-270 font-light ml-1 cursor-pointer hover:scale-110 transition-transform"
        ></span>
      </div>

      <div class="gridder" ref="gridder">
        <option-summary-details
          v-for="({ src, title, subTitle }, index) in plans"
          :src="src"
          :title="title"
          :subTitle="subTitle"
          :key="index"
          :class="`md:order-${8 - index}`"
        />
      </div>
    </section>

    <section class="bg-white py-5 sm:py-10 px-5 sm:px-10 md:px-20 lg:px-32">
      <p class="text-md mb-2 sm:mb-3 font-semibold">Why Leapsail?</p>
      <h3
        class="text-md sm:text-xl md:text2xl font-semibold text-gray-400 font-plafair"
      >
        Excellent customer relations?
        <span class="text-accent font-plafair"> Of course!</span>
      </h3>
    </section>

    <section
      class="px-10 sm:px-16 md:px-16 lg:px-28 py-16 md:py-18 bg-light-grey grid grid-cols-2 gap-12"
    >
      <div class="col-span-2 md:col-span-1 h-80">
        <img
          :src="getStaticImg('steps.png')"
          alt="steps"
          class="h-full aspect-square mx-auto md:mx-0 block"
        />
      </div>

      <div class="col-span-2 md:col-span-1">
        <div class="w-full h-full">
          <p
            class="font-semibold text-center md:text-left text-xl md:text-2xl mb-8"
          >
            3 steps to get you started
          </p>

          <div class="grid gap-y-2">
            <div class="flex items-center flex-wrap gap-x-4">
              <p class="text-md md:text-lg text-accent font-medium">01</p>
              <p
                class="font-semibold text-sm md:text-lg col-start-2 col-end-11"
              >
                Create an account
              </p>
            </div>

            <div class="flex items-start flex-wrap gap-x-8">
              <div
                class="w-0.5 h-full bg-accent relative translate-x-2 translate-y-1.5"
              ></div>
              <p class="text-sm w-10/12">
                Signup for an account with your name, best email address and
                phone number.
              </p>
              <p class="h-10"></p>
            </div>

            <div class="flex items-center flex-wrap gap-x-4 mt-4">
              <p class="text-md md:text-lg text-accent font-medium">02</p>
              <p class="font-semibold text-sm md:text-lg">Book a slot</p>
            </div>

            <div class="flex items-start flex-wrap gap-x-8">
              <div
                class="w-0.5 h-full bg-accent relative translate-x-2 translate-y-1.5"
              ></div>
              <p class="text-sm w-10/12">
                You can speak with us or visit our office on appointment.
              </p>
              <p class="h-10"></p>
            </div>

            <div class="flex items-center flex-wrap gap-x-4 mt-4">
              <p class="text-md md:text-lg text-accent font-medium">03</p>
              <p class="font-semibold text-sm md:text-lg">Grow with Leapsail</p>
            </div>

            <div class="flex items-start flex-wrap gap-x-8">
              <div
                class="w-0.5 h-full bg-transparent relative translate-x-2 translate-y-1.5"
              ></div>
              <p class="text-sm w-10/12">
                Watch your investment grow, realise your dreams and begin your
                new life.
              </p>
              <p class="h-10"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="flex justify-center px-4 sm:px-8 md:px-16 lg:px-28 py-10 md:py-12 bg-dark-grey gap-x-10"
    >
      <div></div>

      <div class="w-28 h-28 sm:w-48 sm:h-48">
        <img
          :src="getStaticImg('cc.png')"
          alt="cc"
          class="w-full h-full rounded-full"
        />
      </div>

      <div class="w-7/12">
        <p class="text-md md:text-lg lg:text-xl mb-5 font-semibold">
          24/7 customer support
        </p>

        <p class="text-sm">
          Our team is here to give you personalized support within the hour -
          available 24/7. Join daily live webinars, watch our tutorials, or
          browse through our knowledge base
        </p>
      </div>
    </section>

    <section class="bg-accent md:p-10 p-5 relative">
      <img
        :src="getStaticImg('zig-zag.png')"
        alt="overlay"
        class="absolute inset-0 w-full h-10"
      />

      <h3
        class="text-white text-xl md:text-4xl mt-6 font-extrabold text-center"
      >
        Try leapsail.com for your comfort
      </h3>

      <p class="text-white text-sm md:text-md text-center mt-2">
        Coman buy our market | Debit card go dey needed
      </p>

      <button
        class="px-8 py-3 block mx-auto mt-4 mb-10 text-accent bg-white rounded-3xl"
      >
        Get Started
      </button>

      <img
        :src="getStaticImg('zig-zag.png')"
        alt="overlay"
        class="absolute inset-0 w-full h-10 top-full -translate-y-full rotate-180"
      />
    </section>

    <footer
      :style="{ background: getStaticImg('wavy.png') }"
      class="grid grid-cols-2 px-5 py-12 md:px-12 gap-y-12 md:gap-y-0"
    >
      <div class="col-span-2 md:col-span-1 grid gap-y-3">
        <img
          :src="getStaticImg('brand-logo.png')"
          alt="logo"
          class="block mx-auto md:mx-0"
        />

        <p class="md:text-sm text-xs text-center md:text-left">
          All Rights Reserved c Leapsail.com
        </p>

        <p class="md:text-sm text-xs font-semibold text-center md:text-left">
          Address:
        </p>

        <p class="md:text-sm text-xs text-center md:text-left">
          23, Ezekiel street, Off Toyin street, Ikeja
        </p>

        <!-- <div class="flex items-center">
              <img s:c="" alt="">
          </div> -->
      </div>

      <div
        class="col-span-2 md:col-span-1 grid grid-cols-3 gap-x-5 text-center md:text-left"
      >
        <div class="col-span-1 grid gap-y-3">
          <p class="font-semibold text-md">Product</p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Product
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Pricing
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Partners
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Affliates
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Students
          </p>
        </div>

        <div class="col-span-1 grid gap-y-3">
          <p class="font-semibold text-md">Team</p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            About us
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Contact us
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Careers
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Find a partner
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            in the News
          </p>
        </div>

        <div class="col-span-1 grid gap-y-3">
          <p class="font-semibold text-md">Resources</p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Knowledge Base
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Guides
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Daily Webinars
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Community
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Customer Stores
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Video Tutorials
          </p>
        </div>
      </div>

      <div
        class="col-span-2 mt-20 grid grid-cols-12 gap-x-0 gap-y-10 large:gap-y-0 items-center footer-links px-0 md:px-4 py-3"
      >
        <div
          class="col-span-12 large:col-span-9 flex gap-x-4 gap-y-4 flex-wrap justify-center large:justify-start md:gap-x-10"
        >
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Status
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Security
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Term of service
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Private policy
          </p>
          <p
            class="text-xs md:text-sm hover:text-accent transition-colors cursor-pointer"
          >
            Accessibility Statement
          </p>
          <div
            class="flex gap-x-2 hover:text-accent transition-colors cursor-pointer"
          >
            <span class="icon icon-caret-down text-sm"></span>
            <span class="text-xs md:text-sm">English</span>
            <span class="icon icon-caret-down text-sm"></span>
          </div>
        </div>

        <div
          class="col-span-12 large:col-span-3 flex gap-x-6 justify-center large:justify-end w-full"
        >
          <div
            class="w-8 h-8 ring-1 ring-black rounded-full flex justify-center items-center hover:ring-accent transition-all cursor-pointer"
          >
            <span
              class="icon icon-caret-down relative hover:text-accent transition-colors cursor-pointer"
            ></span>
          </div>
          <div
            class="w-8 h-8 ring-1 ring-black rounded-full flex justify-center items-center hover:ring-accent transition-all cursor-pointer"
          >
            <span
              class="icon icon-caret-down relative hover:text-accent transition-colors cursor-pointer"
            ></span>
          </div>
          <div
            class="w-8 h-8 ring-1 ring-black rounded-full flex justify-center items-center hover:ring-accent transition-all cursor-pointer"
          >
            <span
              class="icon icon-caret-down relative hover:text-accent transition-colors cursor-pointer"
            ></span>
          </div>

          <div
            class="w-8 h-8 ring-1 ring-black rounded-full flex justify-center items-center hover:ring-accent transition-all cursor-pointer"
          >
            <span
              class="icon icon-caret-down relative hover:text-accent transition-colors cursor-pointer"
            ></span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import optionChip from "@/components/option-chip";
import optionSummaryDetails from "@/components/option-summary-details";
export default {
  name: "HomePage",

  components: {
    optionChip,
    optionSummaryDetails,
  },

  data() {
    return {
      options: [
        {
          title: "tour",
          ringColor: "#F84D4D",
        },
        {
          title: "webinar",
          ringColor: "#0033C7",
        },
        {
          title: "educational",
          ringColor: "#F6B736",
        },
        {
          title: "finance",
          ringColor: "#B277B1",
        },
        {
          title: "investment",
          ringColor: "#6CC3C1",
        },
        {
          title: "real estate",
          ringColor: "#FF6B00",
        },
        {
          title: "ticketing",
          ringColor: "#455A64",
        },
        {
          title: "visa",
          ringColor: "#A1BBFF",
        },
        {
          title: "hotel",
          ringColor: "#FFD4E7",
        },
        {
          title: "reservation",
          ringColor: "#102770",
        },
        {
          title: "event",
          ringColor: "#8798C6",
        },
        {
          title: "entertainment",
          ringColor: "#0FBEE7",
        },
        {
          title: "charity",
          ringColor: "#F6B736",
        },
        {
          title: "hub",
          ringColor: "#C7874C",
        },
        {
          title: "Immigration",
          ringColor: "#15A481",
        },
      ],

      plans: [
        {
          src: "invest.png",
          order: 8,
        },

        {
          title: "Investment",
          subTitle:
            "Reap enticing investment rewards! Be confident in your investment because of the security we provide you.",
          order: 4,
        },

        {
          src: "webinar.png",
          order: 6,
        },

        {
          title: "Webinar",
          subTitle:
            "There are so many immigration questions begging to be answered. So many people are confused about how to process their immigration...",
          order: 2,
        },
        {
          title: "Pay small small",
          subTitle:
            "No matter how solid your plans are, sometimes you don’t have all the money. ",
          order: 3,
        },
        {
          src: "pay.png",
          order: 7,
        },

        {
          title: "Education",
          subTitle:
            "To be honest, we’re not interested in the course you want to study. That is your decision. But we can guide you on how to make the best decision...",
          order: 1,
        },

        {
          src: "education.png",
          order: 5,
        },
      ],

      plans_web: [
        {
          src: "invest.png",
          order: 8,
        },

        {
          title: "Investment",
          subTitle:
            "Reap enticing investment rewards! Be confident in your investment because of the security we provide you.",
          order: 4,
        },

        {
          src: "webinar.png",
          order: 6,
        },

        {
          title: "Webinar",
          subTitle:
            "There are so many immigration questions begging to be answered. So many people are confused about how to process their immigration...",
          order: 2,
        },
        {
          title: "Pay small small",
          subTitle:
            "No matter how solid your plans are, sometimes you don’t have all the money. ",
          order: 3,
        },
        {
          src: "pay.png",
          order: 7,
        },

        {
          title: "Education",
          subTitle:
            "To be honest, we’re not interested in the course you want to study. That is your decision. But we can guide you on how to make the best decision...",
          order: 1,
        },

        {
          src: "education.png",
          order: 5,
        },
      ],
    };
  },

  methods: {
    getStaticImg(src) {
      return require(`@/assets/images/${src}`);
    },

    slideCard(direction) {
      const wrapper = this.$refs.wrapper;

      const { width } = wrapper.getBoundingClientRect();

      const slider = this.$refs.gridder;
      slider.scrollLeft += direction * width;
    },
  },
};
</script>

<style scoped>
.banner {
  padding-top: 120px;
}

.gridder {
  display: grid;
  grid-template-columns: repeat(4, 98%);
  grid-template-rows: repeat(2, 220px);
  overflow-x: scroll;
  gap: 40px 8%;
  scroll-behavior: smooth;
}

.gridder::-webkit-scrollbar {
  height: 2px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 80px);
  width: 100%;
  margin: auto;
}

.footer-links {
  border-top: 1px solid #000;
}

@media screen and (min-width: 640px) {
  .gallery {
    grid-template-rows: repeat(5, 80px);
    max-width: 280px;
    margin-left: auto;
  }

  .gridder {
    grid-template-rows: repeat(2, 250px);
    grid-template-columns: repeat(4, 98%);
  }
}

@media screen and (min-width: 768px) {
  .gallery {
    grid-template-rows: repeat(5, 100px);
    max-width: 370px;
  }

  .gridder {
    grid-template-columns: repeat(4, 49%);
    gap: 50px 2%;
    grid-template-rows: repeat(2, 280px);
  }
}
</style>
