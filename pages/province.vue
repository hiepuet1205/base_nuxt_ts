<template>
  <Base>
  <template v-slot:content>
    <province-table></province-table>
  </template>
  </Base>
</template>
  
<script lang="ts" setup>
import Base from '@/layouts/Base.vue';
import ProvinceTable from '~/components/master/province/ProvinceTable.vue';
</script>