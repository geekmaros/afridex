<template>
  <section class="pt-24 pb-24 2xl:pt-5 pl-88px pr-101 w-full">
    <div class="heading text-center">
      <h2 class="text-black font-bold text-54px leading-56px">
        Why Use AFRIDEX
      </h2>
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
          bg-afridex-gray-300
          rounded-lg
          hover:-translate-y-2
          transform
          transition-all
          duration-500
          ease-in-out
        "
      >
        <img :src="imageUrl(why.imageUrl)" alt="" />

        <div class="text-area text-center">
          <h2 class="text-black font-bold text-lg leading-56px">
            {{ why.title }}
          </h2>

          <p class="text-afridex-gray-100 text-lg leading-30px max-w-266px">
            {{ why.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyUs",
  data() {
    return {
      whyUs: [
        {
          imageUrl: "feat1",
          title: "Fast Support",
          desc: "Got a problem? Just get in touch. Our support team is always available 24/7. Verification is within 6 hrs with a live chat to support",
        },
        {
          imageUrl: "feat2",
          title: "Transferable Assets",
          desc: "AFRIDEX is the first exchange globally that transfers your crypto assets to your next-of-kin, 18 months after your account is inactive, after sending series of emails to you.",
        },
        {
          imageUrl: "feat3",
          title: " Community Focused",
          desc: "AFRIDEX is a community exchange, with an active global community of representation from at least 20+ countries.",
        },
      ],
    };
  },
  methods: {
    imageUrl(value) {
      return require(`@/assets/images/${value}.png`);
    },
  },
};
</script>

<style scoped></style>
