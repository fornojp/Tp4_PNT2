<template>
  <div>
    <div class="container mt-3 div1">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="css">
h1 {
  text-align: center;
}
body {
  background-color: #dee2e6 !important;
}
</style>
