<template>
  <div>
    <Navbar></Navbar>
    <div>
      <AddForm></AddForm>
      <Administration></Administration>
      <Info></Info>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AddForm from "../components/AddForm.vue";
import Administration from "../components/Administration.vue";
import Info from "../components/Info.vue";
export default {
  components: {
    Navbar,
    AddForm,
    Administration,
    Info,
  },
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style></style>
