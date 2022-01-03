<template>
  <v-container>
    <v-flex xs12 sm8 md12>
      <div class="indigo white--text">
        <h1 class="ml-5">Registro de Usuario</h1>
      </div>
      <div>
        <v-form class="mt-10" @submit.prevent="createUserWithEmailAndPassword">
          <v-text-field
            v-model="register.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="register.password"
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
              Registrar
            </v-btn>
            <router-link :to="{ name: 'LogIn' }">
              <v-btn color="primary" type="submit">Volver atrás </v-btn>
            </router-link>
          </v-container>
          <v-flex class="text-center text-h6"
            >Una vez registrado, debes volver a la pantalla de ingreso
          </v-flex>
        </v-form>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    register: {
      email: "",
      password: "",
    },
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
    createUserWithEmailAndPassword() {
      console.log("click on register");
      console.log(this.register);
      this.$store.dispatch("userModule/signUp", this.register).then(
        () => {
          this.$swal.fire({
            position: "top-end",
            title: "Registro exitoso",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$router.push("/login");
        },
        () => {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: `El correo o la contraseña son incorrectos. Intente Nuevamente`,
          });
        }
      );
    },
  },
};
</script>

<style></style>
