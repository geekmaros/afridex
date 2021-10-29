<template>
  <header
    class="
      py-6
      bg-transparent
      relative
      flex
      items-center
      justify-between
      w-full
    "
  >
    <router-link to="/" class="mr-20 z-50">
      <img src="../assets/images/Logo.png" alt="site logo" />
    </router-link>

    <nav
      :class="showAside ? 'left-0' : '-left-96'"
      class="
        bg-afridex-blue
        md:bg-transparent
        fixed
        md:relative
        top-0
        left-0
        text-center
        md:text-left
        pt-32
        md:pt-0
        px-20
        md:px-0
        h-full
        w-full
        left-0
        top-0
        flex-col
        md:flex-row
        lg:flex
        w-full
        justify-between
        items-center
        flex-wrap
      "
    >
      <div
        class="
          left
          mb-10
          md:mb-0
          flex
          space-y-10
          items-center
          md:space-y-0
          flex-col
          md:flex-row
        "
      >
        <router-link
          to="/"
          class="
            text-white text-lg
            md:text-sm
            font-bold
            leading-4
            md:mr-50px
            hover:text-afridex-blue
          "
          >Home</router-link
        >
        <router-link
          to="/"
          class="
            text-white text-lg
            md:text-sm
            font-bold
            leading-4
            md:mr-50px
            hover:text-afridex-blue
          "
          >Buy Crypto</router-link
        >
        <router-link
          to="/"
          class="
            text-white text-lg
            md:text-sm
            font-bold
            leading-4
            md:mr-50px
            hover:text-afridex-blue
          "
          >Spot Trading</router-link
        >
      </div>
      <div
        class="
          right
          flex
          space-y-5
          md:space-y-0
          flex-col
          md:flex-row md:space-x-4
        "
      >
        <button
          class="
            signup
            py-2
            px-4
            rounded-lg
            bg-white
            md:bg-afridex-blue
            text-lg
            md:text-sm
            font-bold
            leading-4
            text-afridex-blue
            md:text-white
            w-full
            md:w-auto
          "
        >
          <span>Sign up</span>
        </button>
        <button
          class="
            login
            py-2
            px-4
            rounded-lg
            text-afridex-blue
            font-bold
            leading-4
            text-lg
            md:text-sm
            bg-white
            w-full
            md:w-auto
          "
        >
          <span> Login </span>
        </button>
      </div>
    </nav>
    <div @click="showAside = !showAside" class="hamburger md:hidden ml-8 z-50">
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.95776 18H31.9578M4.95776 9H31.9578M4.95776 27H31.9578"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showAside: true,
    };
  },
  mounted() {
    if (
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.showAside = false;
    }
  },
};
</script>

<style></style>
