<template>
  <section
    class="
      pt-16
      pb-8
      2xl:pt-5
      px-10
      md:px-0 md:pl-88px md:pr-101
      w-full
      bg-black
    "
  >
    <div class="grid md:grid-cols-4 gap-8 pb-10 border-b border-gray-500 mb-8">
      <div class="flex flex-col">
        <div class="mb-8">
          <img src="@/assets/images/Logo.png" alt="" class="h-6" />
        </div>
        <div class="text-sm text-white">
          AFRIDEX is leveraging the benefits that the change through blockchain
          technology has offered to revolutionize the future of finance.
        </div>
      </div>
      <div class="space-y-4">
        <div class="text-gray-500 text-sm font-semibold">About</div>
        <div class="text-white font-medium">support:</div>
        <div class="text-white font-light text-base hover:text-afridex-blue cursor-pointer ">
          <a href="mailto:support@afridex.io">support@afridex.io</a>
        </div>
      </div>
      <div class="space-y-4">
        <div class="text-gray-500  text-sm font-semibold">Services</div>
        <div class="text-white hover:text-afridex-blue cursor-pointer text-base font-light">
          <a href="mailto:listing@afridex.io">Listing</a>
        </div>
        <div class="text-white hover:text-afridex-blue cursor-pointer text-base font-light">
          <a href="mailto:business@afridex.io"
            >Partnerships/Institutional Services</a
          >
        </div>
        <div class="text-white hover:text-afridex-blue cursor-pointer text-base font-light">
          <a href="mailto:investment@afridex.io ">Investment Offers</a>
        </div>
      </div>
      <div class="space-y-4">
        <div class="text-gray-500 text-sm font-semibold">
          <div>Legal</div>
        </div>
        <div class="text-white hover:text-afridex-blue cursor-pointer text-base  font-light">
          <a
            href="https://docs.google.com/document/d/12O_OnkRXQ0lBF4c_5UxT4tBIA-hKWhN6F-ZHSLSKDhI/edit "
            >Privacy and Policy</a
          >
        </div>
        <div class="text-white hover:text-afridex-blue cursor-pointer text-base  font-light">
          <a
            to="https://docs.google.com/document/d/14KDMkbTQCXbCxXDUJyyzDK7Ijk6SS3_7QtRuL-RTvZM/edit"
            >Terms of Use</a
          >
        </div>
      </div>
    </div>
    <div
      class="
        flex-items-center flex flex-col
        md:flex-row
        justify-between
        text-gray-500
      "
    >
      <div class="text-base">
        &copy; {{ getYear }} Afridex Exchange. All rights reserved.
      </div>
      <div class="space-x-4">
        <a class="hover:text-afridex-blue" href=" https://twitter.com/afridexfinance ">
          <i class="fab fa-twitter"></i
        ></a>
        <a class="hover:text-afridex-blue"
          href="https://www.linkedin.com/company/afridex-finance-blockchain-company"
        >
          <i class="fab fa-linkedin"></i
        ></a>
        <a class="hover:text-afridex-blue" href="https://facebook.com/afridexfinance/"
          ><i class="fab fa-facebook"></i
        ></a>
        <a class="hover:text-afridex-blue" href="https://www.youtube.com/channel/UCr4aopcKIc2HbxbhHEcVbLQ"
          ><i class="fab fa-youtube"></i
        ></a>
        <a class="hover:text-afridex-blue" href="https://t.me/afridexfinance"
          ><i class="fab fa-telegram"></i
        ></a>
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
