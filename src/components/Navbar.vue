<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      color="blue darken-4"
      class="white--text"
      ><v-row justify="space-around" class="mt-12">
        <v-avatar color="deep-purple accent-2" size="120">
          <v-icon dark size="100">mdi-account-circle</v-icon>
        </v-avatar>
      </v-row>
      <v-list class="white--text mt-8">
        <v-list-item
          v-for="(item, $index) in items"
          :key="$index"
          link
          :to="item.to"
          class="text-decoration-none"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="deep-purple" dark>
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>
      <v-spacer></v-spacer>
      {{ $store.getters["userModule/getUserEmail"] }}
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="signOut"
            ><v-icon class="white--text">mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Cerrar Sesión</span>
      </v-tooltip>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    user: null,
    drawer: false,
    items: [
      {
        title: "Listado",
        icon: "mdi-widgets",
        to: "/home",
      },
      {
        title: "Administración",
        icon: "mdi-wrench",
        to: "/admin",
      },
    ],
  }),
  methods: {
    signOut() {
      this.$store.dispatch("userModule/signOut").then(() => {
        this.$swal.fire({
          position: "top-end",
          title: "Haz cerrado sesión",
          showConfirmButton: false,
          timer: 2000,
        });
        this.$router.push(`/login`);
      });
    },
  },
};
</script>
