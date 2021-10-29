<template>
  <section class="pt-16 pb-8 2xl:pt-5 pl-88px pr-101 w-full bg-black">
    <div class="grid grid-cols-4 gap-8 pb-10 border-b border-gray-500 mb-8">
      <div class="flex flex-col">
        <div class="mb-8">
          <img src="@/assets/images/Logo.png" alt="" class="h-6">
        </div>
        <div class="text-sm text-white">
          AFRIDEX is leveraging the benefits that the change through blockchain
          technology has offered to revolutionize the future of finance.
        </div>
      </div>
      <div class="space-y-4">
        <div class="text-gray-500 text-base font-semibold">About $AFDT</div>
        <div class="text-white font-medium">support:</div>
        <div class="text-white font-light "> support@afridex.io $AFDT</div>
      </div>
       <div class="space-y-4">
        <div class="text-gray-500 text-sm font-semibold">Services</div>
        <div class="text-white font-light "> <router-link to='/'>Listing</router-link></div>
        <div class="text-white font-light "> <router-link to='/'>Partnerships/Institutional Services</router-link> </div>
        <div class="text-white font-light "> <router-link to='/'>Investment Offers</router-link> </div>
      </div>
      <div class="space-y-4">
        <div class="text-gray-500 text-base font-semibold"> <router-link to='/'>Legal</router-link> </div>
        <div class="text-white font-light "> <router-link to='/'>Privacy and Policy</router-link> </div>
        <div class="text-white font-light "> <router-link to='/'>Terms of Use</router-link></div>
      </div>
     
    </div>
    <div class="flex-items-center flex justify-between text-gray-500">
        <div class=" text-base">
            &copy; {{ getYear }} Afridex Exchange. All rights reserved.
        </div>
        <div class="space-x-4">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-facebook"></i>
        </div>
    </div>
  </section>
</template>

<script>
export default {
   computed: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style></style>
