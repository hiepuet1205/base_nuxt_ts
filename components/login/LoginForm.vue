<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card elevation="24" class="rounded-xl" style="padding: 30px; border: 1px; border-radius: 50px;">
          <v-card-title class="text-center">
            <h1 class="display-2 font-weight-bold">Login</h1>
          </v-card-title>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="username" label="Username" required :rules="usernameRules"></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" required
              :rules="passwordRules"></v-text-field>
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
import { login } from '~/api/auth/auth';
import { useAuthStore } from '~/store/auth';

import { getAllProvinces } from '~/api/master/province';

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

const authStore = useAuthStore()
const { loginHandle } = authStore

const submit = () => {
  form.value?.validate().then(async ({ valid: isValid }) => {
    const data = await login({username: username.value, password: password.value});
    console.log(data)
    if(data.id_token){
      loginHandle(data.id_token)
      await navigateTo('/')
    }
  })
}

</script>
   
<style scoped>
.align-center {
  height: 70vh;
}
</style>