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
      :class="showAside ? 'left-0' : 'left-out'"
      class="
        nav-side
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
    <div
      @click="showAside = !showAside"
      class="hamburger absolute mt-20 -ml-1 cursor-pointer md:hidden ml-8 z-50"
    >
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
    <div class="dd-hamburger ml-8 relative z-50">
      <svg
        @click="toggleDropDown"
        width="37"
        class="currentColor cursor-pointer"
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

      <div
        :class="showDropDownMenu ? 'right-2 md:right-20' : 'right-out'"
        class="
          drop-down-menu
          bg-white
          shadow-lg
          right-0
          rounded-2xl
          transition-all
          duration-500
          ease-out
          fixed
          w-44
          -ml-10
          md:w-44 md:-mr-2
          px-2
          py-4
          mt-5
        "
      >
        <div class="assets mb-2 flex w-full relative">
          <div
            :class="
              activeMenu === 'asset' ? 'bg-afridex-blue text-white' : 'bg-white'
            "
            class="
              text-black
              hover:text-white hover:bg-afridex-blue
              font-bold
              leading-4
              text-xl
              md:text-sm
              w-full
              text-left
              mb-1
              cursor-pointer
              pl-2
              py-2
              rounded-lg
            "
            @mouseenter="activeMenu = 'asset'"
          >
            Assets
          </div>
          <div
            v-if="activeMenu === 'asset'"
            class="
              r-links
              absolute
              bg-white
              rounded-lg
              shadow-xl
              py-2
              px-2
              -ml-48
              mt-32s
              md:mt-0 md:-ml-44 md:mr-32
              flex flex-col
            "
          >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >Spot</router-link
            >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                max-w-sm
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >Transfer</router-link
            >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >P2P</router-link
            >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >Transaction History</router-link
            >
          </div>
        </div>

        <div class="orders mb-2">
          <h3
            :class="
              activeMenu === 'order' ? 'bg-afridex-blue text-white' : 'bg-white'
            "
            @mouseenter="activeMenu = 'order'"
            class="
              text-black
              hover:text-white hover:bg-afridex-blue
              font-bold
              leading-4
              text-xl
              md:text-sm
              bg-white
              w-full
              mb-1
              md:w-auto
              cursor-pointer
              pl-2
              py-2
              rounded-lg
            "
          >
            Orders
          </h3>
          <div
            v-if="activeMenu === 'order'"
            class="
              r-links
              flex flex-col
              absolute
              bg-white
              rounded-lg
              py-2
              px-2
              md:-ml-40
              -mt-5
              md:mt-0
              -ml-48
            "
          >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >Spot Order</router-link
            >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                max-w-sm
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >P2P History</router-link
            >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                hover:text-white hover:bg-afridex-blue
                pl-3
                py-1
                rounded-lg
              "
              to="#"
              >Spot Trade History</router-link
            >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >Voucher History</router-link
            >
          </div>
        </div>

        <div class="profile mb-2">
          <h3
            :class="
              activeMenu === 'profile'
                ? 'bg-afridex-blue text-white'
                : 'bg-white'
            "
            @mouseenter="activeMenu = 'profile'"
            class="
              text-black
              font-bold
              leading-4
              text-xl
              md:text-sm
              bg-white
              w-full
              mb-1
              md:w-auto
              hover:text-white hover:bg-afridex-blue
              cursor-pointer
              px-2
              py-2
              rounded-lg
            "
          >
            Profile
          </h3>
          <div
            v-if="activeMenu === 'profile'"
            class="
              r-links
              absolute
              bg-white
              rounded-lg
              py-2
              px-2
              md:-ml-40
              -mt-5
              md:mt-0
              -ml-48
              flex flex-col
            "
          >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >Dashboard</router-link
            >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                max-w-sm
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >Account Security</router-link
            >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >ID Verification</router-link
            >
            <router-link
              class="
                text-black
                font-normal
                leading-4
                text-lg
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >Sub Account</router-link
            >

            <router-link
              class="
                text-black
                font-bold
                leading-4
                text-xl
                md:text-sm
                bg-white
                w-full
                mb-2
                md:w-auto
                hover:text-white hover:bg-afridex-blue
                px-2
                py-1
                rounded-lg
              "
              to="#"
              >Logout</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showAside: true,
      showDropDownMenu: false,
      activeMenu: "",
    };
  },
  methods: {
    toggleDropDown() {
      this.activeMenu = "";
      this.showDropDownMenu = !this.showDropDownMenu;
    },
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

<style lang="scss">
section {
  .nav-side {
    transition: all 0.5s ease-in-out;
  }
  .right-out {
    right: -40rem;
  }

  .left-out {
    left: -40rem;
  }
}
</style>
