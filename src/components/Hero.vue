<template>
  <section class="hero h-screens pt-20 pb-44 bg-no-repeat bg-bottom bg-cover pl-88px pr-101 w-full" :style="cssProps">
    <div class="flex items-center h-screen justify-between">
      <div class="left">
        <span class="leading-5 font-bold text-afridex-blue-200"
          >TRADE SMARTER, NOT HARDER</span
        >
        <h1 class="text-white font-bold text-6xl max-w-md mt-5">
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
export default {
  name: "Hero",
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/images/herobg.png")})`,
      },
      heroSvg: `${require("@/assets/svg/heroasset.svg")}`,
    };
  },
};
</script>

<style lang="scss"></style>
