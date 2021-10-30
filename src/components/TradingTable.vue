<template>
  <section
    class="pt-16 pb-12 2xl:pt-5 md:pl-88px md:pr-101 px-5 md:px-0 w-full"
  >
    <div class="heading text-center">
      <h2
        class="
          text-black
          font-bold
          mb-1
          text-3xl
          md:text-54px
          leading-relaxed
          md:leading-56px
        "
      >
        Start Trading Crypto Assets
      </h2>
      <p class="text-afridex-gray-100 text-2xl leading-relaxed md:leading-56px">
        Trade With Safety, Ease & Convenience
      </p>

      <div
        class="
          table-wrapper
          mt-8
          w-full
          overflow-x-scroll
          lg:overflow-x-hidden
          pb-6
        "
      >
        <table class="w-full items-center table-auto">
          <thead>
            <tr
              class="
                font-normal
                text-afridex-gray-100
                leading-4
                border-b
                text-base
                leading-5
              "
            >
              <th class="px-3">
                <span>#</span>
              </th>
              <th class="px-3 text-left">Name</th>
              <th class="px-3 text-left">Price</th>
              <th class="px-3">24th change</th>
            </tr>
          </thead>
          <tbody class="">
            <tr
              v-for="(coin, index) in coins"
              :key="`coin-${index}`"
              class="cursor-pointer odd:bg-gray-100 mb-5"
            >
              <td class="px-3 pt-4 md:mr-0 block whitespace-nowrap">
                {{ index + 1 }}
              </td>
              <td class="pt-3 px-3 whitespace-nowrap pr-10">
                <div class="flex justify-start items-center space-x-4">
                  <img
                    :src="require(`@/assets/images/coins/${coin.desc}.png`)"
                    :alt="coin.name"
                    class="w-10 h-10"
                  />
                  <div class="name flex items-center space-x-2">
                    <span
                      class="text-lg leading-5 font-normal text-bizz-black-100"
                      >{{ coin.name }}</span
                    >
                    <span
                      class="text-lg leading-5 capitalize text-afridex-gray-100"
                      >{{ coin.desc }}</span
                    >
                  </div>
                </div>
              </td>
              <td
                class="
                  text-lg
                  px-3
                  leading-5
                  text-left
                  whitespace-nowrap
                  text-bizz-black-100
                  font-medium
                "
              >
                $66,201.34
              </td>
              <td
                class="
                  text-lg
                  px-3
                  leading-5
                  text-center
                  whitespace-nowrap
                  text-afridex-green-100
                  font-medium
                "
              >
                +1.71%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TradingTable",
  data() {
    return {
      coins: [
        {
          name: "Bitcoin",
          desc: "btc",
        },
        {
          name: "Ethereum",
          desc: "eth",
        },
        {
          name: "Afridex",
          desc: "afdt",
        },
        {
          name: "Binance",
          desc: "bnb",
        },
        {
          name: "Ripple",
          desc: "xrp",
        },
        {
          name: "Dogecoin",
          desc: "doge",
        },
        {
          name: "Polkadot",
          desc: "dot",
        },
        {
          name: "Litecoin",
          desc: "ltc",
        },
      ],
    };
  },
  methods: {
    imageUrl(value) {
      return require(`@/assets/svg/coins/${value}.svg`);
    },
  },
};
</script>

<style scoped>
section th {
  font-weight: normal !important;
  padding-bottom: 20px;
}
section td {
  padding-bottom: 10px;
}
</style>
