<template>
  <section
    class="
      hero
      h-auto
      pt-20
      pb-20
      bg-afridex-blue-300
      px-10
      md:px-5 md:pl-88px md:pr-101
      w-full
    "
  >
    <div class="flex flex-col md:flex-row w-full items-center justify-between">
      <div class="left mb-16 md:mb-0">
        <h1
          class="
            text-black
            buy-header
            font-bold
            text-left text-5xl
            leading-71px
            md:text-54px
            max-w-55rems
            mt-5
          "
        >
          Buy AFRIDEX Governance Token $AFDT via AFRIDEX PAY.
        </h1>
        <p class="text-afridex-gray-200 text-2xl mt-6 max-w-lg">Listing soon</p>
        <router-link
          to="#"
          class="
            py-4
            px-12
            rounded-lg
            bg-afridex-blue
            text-lg
            font-bold
            leading-4
            text-white
            mt-12
            inline-block
          "
        >
          <span> Buy now </span>
        </router-link>
      </div>
      <div class="right">
        <inline-svg :src="buybannerSvg"></inline-svg>
        <img :src="buybannerSvg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BuyBanner",
  data() {
    return {
      buybannerSvg: require("@/assets/images/buybanner.png"),
    };
  },
};
</script>

<style lang="scss">
section {
  .buy-header {
    max-width: 650px;
  }
}
</style>
