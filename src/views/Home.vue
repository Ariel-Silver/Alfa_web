<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-container>
        <Card></Card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Card,
  },
};
</script>

<style></style>
