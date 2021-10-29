<template>
  <section>
    <hero></hero>
    <TradingTable></TradingTable>
    <BuyBanner></BuyBanner>
    <WhyUs></WhyUs>
    <list-banner></list-banner>
    <eco-system />
  </section>
</template>

<script>
import Hero from "../components/Hero.vue";
import TradingTable from "@/components/TradingTable";
import BuyBanner from "@/components/BuyBanner";
import WhyUs from "@/components/WhyUs";
import ListBanner from "../components/ListBanner.vue";
import EcoSystem from "@/components/EcoSystem.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { WhyUs, BuyBanner, TradingTable, Hero, ListBanner, EcoSystem },
};
</script>
