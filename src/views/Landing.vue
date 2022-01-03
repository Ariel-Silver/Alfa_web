<template>
  <div>
    <v-main>
      <v-container class="mt-10" fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="mt-5">
                <v-img
                  max-height="300"
                  max-width="500"
                  src="../assets/alfa.jpg"
                ></v-img>
              </v-card-text>
              <v-container class="text-center">
                <router-link :to="{ name: 'LogIn' }">
                  <v-btn
                    rounded
                    x-large
                    class="mb-5"
                    color="primary"
                    type="submit"
                    >Entrar</v-btn
                  >
                </router-link>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>

<script>
</script>

<style>
</style>
