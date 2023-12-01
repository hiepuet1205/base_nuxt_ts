<template>
  <v-app>
    <div>
      <Header></Header>
      <main>
        <slot name="content"></slot>
      </main>
      <Footer></Footer>
    </div>
  </v-app>
</template>
    
<script lang="ts" setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>