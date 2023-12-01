<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card elevation="24" class="rounded-xl" style="padding: 30px; border: 1px; border-radius: 50px;">
          <v-card-title class="text-center">
            <h1 class="display-2 font-weight-bold">Login</h1>
          </v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="username" label="Username" required :rules="usernameRules"></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" required :rules="passwordRules"></v-text-field>
          </v-form>
          <v-card-actions class="justify-center">
            <v-btn @click="submit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

   
<script lang="ts" setup>
const username = ref('')
const password = ref('')
const form = ref(null)
const usernameRules = [
  (value: string) => {
    if (value)
      return true;
    return "Username is required.";
  }
]

const passwordRules = [
  (value: string) => {
    if (value)
      return true;
    return "Password is required.";
  }
]

const submit: void = () => {
  form.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid);
  })
}

</script>

<!-- <script>
export default ({
  name: "LoginForm",
  data() {
    return {
      valid: false,
      username: "",
      usernameRules: [
        value => {
          if (value)
            return true;
          return "Username is required.";
        }
      ],
      password: "",
      passwordRules: [
        value => {
          if (value)
            return true;
          return "Password is required.";
        }
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("login", {
          username: this.username,
          password: this.password
        });
      }
    }
  },
})
</script> -->
   
<style scoped>
.align-center {
  height: 70vh;
}
</style>