<template>
  <main class="relative font-sans overflow-x-hidden">
    <NavBar class="sticky hidden top-0"></NavBar>
    <router-view />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Moderat";
  src: url("assets/font/Moderat-Black.woff") format("woff");
  font-style: normal;
  font-weight: 900;
}
@font-face {
  font-family: "Moderat";
  src: url("assets/font/Moderat-Bold.woff") format("woff");
  font-style: normal;
  font-weight: 700;
}
@font-face {
  font-family: "Moderat";
  src: url("assets/font/Moderat-Medium.woff") format("woff");
  font-style: normal;
  font-weight: 600;
}
@font-face {
  font-family: "Moderat";
  src: url("assets/font/Moderat-Regular.woff") format("woff");
  font-style: normal;
  font-weight: 400;
}
</style>
