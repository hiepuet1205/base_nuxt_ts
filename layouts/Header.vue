<template>
  <v-toolbar color="#0D47A1" dark>
    <v-toolbar-title>My App</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="!isAuthenticated && !isLogin">
      <router-link to="/login">
        <v-btn variant="flat" color="#0D47A1">
          Login
        </v-btn>
      </router-link>
    </template>
    <template v-if="!isAuthenticated && !isRegister">
      <router-link to="/register">
        <v-btn variant="flat" color="#0D47A1">
          Register
        </v-btn>
      </router-link>
    </template>
    <template v-if="isAuthenticated"> 
      <v-btn variant="flat" color="#0D47A1">
        {{ user.name }}
      </v-btn>
      <v-btn variant="flat" color="#0D47A1" @click="logout">
        Logout
      </v-btn>
    </template>
  </v-toolbar>
</template>

<script lang="ts" setup>
import { useAuthStore } from '../store/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { logout } = authStore
const {user, isAuthenticated} = storeToRefs(authStore)

const route = useRoute()
console.log('current name', route.name)

const isLogin = route.name == 'login'
const isRegister = route.name == 'register'

</script>