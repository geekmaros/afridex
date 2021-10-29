<template>
  <section class="hero h-auto pt-16 pb-16 bg-afridex-blue-300 bg-no-repeat bg-bottom bg-cover pl-88px pr-101 w-full" :style="cssProps">
    <div class="flex w-full items-center justify-between">
      <div class="left">
        <h1 class="text-white font-bold text-54px max-w-41rem mt-5">
          LIST your project token/coin on AFRIDEX exchange, it is a fast and easy process! 

        </h1>
        <router-link
          to="#"
          class="
            py-4
            px-12
            rounded-lg
            text-afridex-blue
            text-lg
            font-bold
            leading-4
            bg-white
            mt-12
            inline-block
          "
        >
          <span> Apply Here! </span>
        </router-link>
      </div>
      <div class="right">
        <img :src="listbannerSvg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ListBanner",
  data() {
    return {
      listbannerSvg: require("@/assets/images/illustration.png"),
      cssProps: {
        backgroundImage: `url(${require("@/assets/images/cup.png")})`,
      },
    };
  },
};
</script>

<style lang="scss"></style>
