<template>
  <header
    class="
      py-6
      fixed
      text
      top-0
      bg-transparent
      flex
      items-center
      justify-between
      pl-88px
      pr-101
      w-full
    "
  >
    <router-link to="/" class="mr-20">
      <img src="../assets/images/Logo.png" alt="site logo" />
    </router-link>

    <nav class="flex w-full justify-between items-center">
      <div class="left">
        <router-link
          to="/"
          class="
            text-white text-sm
            font-bold
            leading-4
            mr-50px
            hover:text-afridex-blue
          "
          >Home</router-link
        >
        <router-link
          to="/"
          class="
            text-white text-sm
            font-bold
            leading-4
            mr-50px
            hover:text-afridex-blue
          "
          >Buy Crypto</router-link
        >
        <router-link
          to="/"
          class="
            text-white text-sm
            font-bold
            leading-4
            mr-50px
            hover:text-afridex-blue
          "
          >Spot Trading</router-link
        >
      </div>
      <div class="right flex space-x-4">
        <button
          class="
            signup
            py-2
            px-4
            rounded-lg
            bg-afridex-blue
            text-sm
            font-bold
            leading-4
            text-white
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
            bg-white
          "
        >
          <span> Login </span>
        </button>
      </div>
    </nav>
    <div class="hamburger ml-8">
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
};
</script>

<style></style>
