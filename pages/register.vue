<template>
  <Base>
  <template v-slot:content>
    <register-form></register-form>
  </template>
  </Base>
</template>
      
<script lang="ts" setup>
import RegisterForm from '~/components/register/RegisterForm.vue';
import Base from '@/layouts/Base.vue';
</script>