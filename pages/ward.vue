<template>
  <Base>
  <template v-slot:content>
    <ward-table></ward-table>
  </template>
  </Base>
</template>
      
<script lang="ts" setup>
import Base from '@/layouts/Base.vue';
import WardTable from '~/components/master/ward/WardTable.vue';
</script>