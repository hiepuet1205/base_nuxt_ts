<template>
  <Base>
    <template v-slot:content>
      <login-form></login-form>
    </template>
  </Base>
</template>
    
<script lang="ts" setup>
import LoginForm from '~/components/login/LoginForm.vue';
import Base from '@/layouts/Base.vue';
</script>