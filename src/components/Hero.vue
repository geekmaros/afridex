<template>
  <section
    class="
      hero
      pb-44
      bg-no-repeat lg:bg-bottom bg-cover
      pl-5
      pr-5
      lg:pl-88px lg:pr-101
      w-full
      relative
    "
    :style="cssProps"
  >
    <nav-bar></nav-bar>
    <div class="flex items-center pt-20 md:pt-10 h-auto lg:h-screens justify-between">
      <div class="left">
        <span class="leading-5 font-bold text-afridex-blue-200"
          >TRADE SMARTER, NOT HARDER</span
        >
        <h1 class="text-white font-black leading-76px text-6xl md:max-w-md mt-5">
          Crypto Trading for Everyone
        </h1>
        <p class="text-white text-2xl mt-6 max-w-lg">
          A Tokenized Exchange for Products, Startups, and Businesses with Much
          More Options.
        </p>
        <router-link
          to="#"
          class="
            py-4
            px-6
            rounded-lg
            text-afridex-blue
            font-bold
            leading-4
            bg-white
            mt-10
            inline-block
            capitalize
          "
        >
          <span> GET STARTED </span>
        </router-link>
      </div>
      <div class="right">
        <inline-svg :src="heroSvg"></inline-svg>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: { NavBar },
  name: "Hero",
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/images/herobg.png")})`,
      },
      heroSvg: `${require("@/assets/svg/heroasset.svg")}`,
      showAside: true,
    };
  },
};
</script>

<style lang="scss"></style>
