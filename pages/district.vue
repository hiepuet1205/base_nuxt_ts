<template>
  <Base>
  <template v-slot:content>
    <district-table></district-table>
  </template>
  </Base>
</template>
    
<script lang="ts" setup>
import Base from '@/layouts/Base.vue';
import DistrictTable from '~/components/master/district/DistrictTable.vue';
</script>