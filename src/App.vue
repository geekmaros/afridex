<template>
  <main class="relative">
    <NavBar class="sticky top-0"></NavBar>
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

<style></style>
