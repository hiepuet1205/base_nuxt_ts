<template>
  <v-footer class="fixed-footer">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Nuxt 3</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
    
<script lang="ts" setup>
</script>
    
<style scoped>
.fixed-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>