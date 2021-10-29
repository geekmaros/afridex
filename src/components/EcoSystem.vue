<template>
  <section class="pt-24 pb-24  2xl:pt-5 pl-88px pr-101 w-full">
    <div class="heading text-center">
      <span class="eco text-sm font-semibold px-4 text-afridex-blue p-2"
        >The Ecosystem</span
      >
      <h2 class="text-black mt-4 font-bold text-34px leading-56px">
        AFRIDEX ECOSYSTEM
      </h2>
      <p class="text-afridex-gray-200 mx-auto text-xl mt-6 max-w-3xl">
        AFRIDEX will release exciting products into the blockchain ecosystem
        that will aid the company’s vision of deploying blockchain solutions to
        enhance cross-utilization and improve the customer journey in the
        cryptocurrency revolution.
      </p>
    </div>

    <div class="grid grid-cols-3 gap-8 mt-42px">
      <div
        v-for="(why, index) in whyUs"
        :key="`why-${index}`"
        class="
          card
          max-w-xs
          flex flex-col
          items-center
          rounded-lg
          hover:-translate-y-2
          transform
          transition-all
          duration-500
          ease-in-out
        "
      >
        <div class="align-center">
          <img :src="require(`@/assets/svg/ecosystem/images/${why.imageUrl}.png`)" :alt="why.title" class="w-10 h-10" /> 
        </div>
        <!-- <inline-svg :src="why.path()"></inline-svg>
        <img :src="imageUrl(why.imageUrl)" alt="" /> -->
        

        <div class="text-area text-center">
          <h2 class="text-black font-bold text-lg leading-56px">
            {{ why.title }}
          </h2>

          <p class="text-afridex-gray-100 text-lg leading-30px max-w-266pxs">
            {{ why.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EcoSystem",
  data() {
    return {
      whyUs: [
        {
          imageUrl: 10,
          svg: '<img src="@/assets/svg/ecosystem/exchange.svg" alt="">',
          title: "AFRIDEX Exchange",
          desc: "AFRIDEX Exchange will allow customers to trade cryptocurrencies or digital assets, such as conventional FIAT money or other digital currencies.",
        },
        {
          imageUrl: 11,
          svg: '<img src="@/assets/svg/ecosystem/pay.svg" alt="">',
          title: "AFRIDEX Pay",
          desc: "The AFRIDEX payment solution will help facilitate global remittance, business-to-business and business-to-customer transactions globally.",
        },
        {
          imageUrl: 12,
          svg: '<img src="@/assets/svg/ecosystem/finance.svg" alt="">',
          title: "AFRIDEX Finance",
          desc: "AFRIDEX Finance is a borrowing and lending platform that enables users to provide financing for willing borrowers without the need for traditional collateral.",
        },
        {
          imageUrl: 13,
          svg: '<img src="@/assets/svg/ecosystem/chain.svg" alt="">',
          title: "AFRIDEX Smart Chain",
          desc: "This platform focuses on providing a space to create dApps, other DEFI products and also enable transactions in the blockchain network.",
        },
        {
          imageUrl: 14,
          svg: '<img src="@/assets/svg/ecosystem/eduxtra.svg" alt="">',
          title: "AFRIDEX EduXtra",
          desc: "AFRIDEX Eduxtra will help with human capital development by creating learning hubs across Africa dedicated to training the youth to become Blockchain skilled experts.",
        },
        {
          imageUrl: 15,
          svg: '<img src="@/assets/svg/ecosystem/nft.svg" alt="">',
          title: "AFRIDEX NFT MarketPlace",
          desc: "AFRIDEX NFT Marketplace is a platform that will be used to trade Non-Fungible Tokens (NFTs) or digital assets, which can be anything from objects like art, music, and videos to memes.",
        },
      ],
    };
  },
  methods: {
    imageUrl(value) {
      return require(`@/assets/svg/ecosystem/${value}.svg`);
    },
  },
};
</script>

<style scoped>
section .eco {
  background: #f5fbff;
  border-radius: 16px;
}
</style>
