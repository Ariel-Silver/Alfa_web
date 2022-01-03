<template>
  <v-container>
    <v-flex xs12 sm8 md12>
      <div class="deep-purple white--text">
        <h1 class="ml-5">Ingreso de Usuario</h1>
      </div>
      <div>
        <v-form class="mt-10" @submit.prevent="signInWithEmailAndPassword">
          <v-text-field
            v-model="logInForm.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="logInForm.password"
            :counter="20"
            :rules="passwordRules"
            label="Password"
            required
            type="password"
          ></v-text-field>
          <v-container
            class="
              mt-5
              d-flex
              justify-center
              align-content-center
              flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row
            "
          >
            <v-btn
              type="submit"
              color="deep-purple"
              class="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mx-4 white--text"
            >
              Ingresar
            </v-btn>
            <router-link :to="{ name: 'Register' }">
              <v-btn color="primary" type="submit">Regístrate Aquí </v-btn>
            </router-link>
          </v-container>

          <v-card
            elevation="24"
            outlined
            shaped
            class="mt-10 mx-auto"
            max-width="344"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-h5 mb-4">Prueba Ariel Abarca P.</div>
                <v-list-item-title class="font-weight-black mb-1">
                  Datos login:
                </v-list-item-title>
                <v-list-item-subtitle class="text-h6 font-weight-medium"
                  >prueba@test.com</v-list-item-subtitle
                >
                <v-list-item-subtitle class="text-h6 font-weight-medium"
                  >123456</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-form>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "LogIn",
  data: () => ({
    logInForm: {
      email: "",
      password: "",
    },
    email: "",
    emailRules: [
      (v) => !!v || "Este campo es requerido",
      (v) => /.+@.+\..+/.test(v) || "El correo debe ser válido",
    ],
    passwordRules: [
      (v) => !!v || "Este campo es requerido",
      (v) =>
        v.length >= 6 || "La contraseña debe contener al menos 6 caracteres",
    ],
  }),
  methods: {
    signInWithEmailAndPassword() {
      console.log("click on submit");
      console.log(this.logInForm);
      this.$store.dispatch("userModule/logIn", this.logInForm).then(
        () => {
          this.$swal.fire({
            position: "top-end",
            title: "Haz iniciado sesión",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$router.push("/home");
        },
        () => {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: `El correo o la contraseña son incorrectos. Vuelve a intentar`,
          });
        }
      );
      this.$store.dispatch("userModule/subscribeToAuthStateChange");
    },
  },
};
</script>

<style></style>
