<template>
  <v-data-table :headers="headers" :items="items" :sort-by="sort">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark class="mb-2" @click="openDialogCreate">New Item</v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td v-for="(value, key) in item" :key="key">
          {{ item[key] }}
        </td>
        <td>
          <v-icon size="small" class="me-2" @click="editItem(item)" :icon="mdiPencil">
          </v-icon>
          <v-icon size="small" @click="deleteItem(item)" :icon="mdiDelete">
          </v-icon>
        </td>
      </tr>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="reset">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { SortItem, DataTableHeader } from '~/types/master';
import { mdiPencil, mdiDelete } from '@mdi/js'

const props = defineProps({
  headers: Array<DataTableHeader>,
  items: Array,
  sort: Array<SortItem>,
  title: String,
})

const emits = defineEmits(['reset', 'open-dialog-create', 'open-dialog-update', 'delete-item'])

const openDialogCreate = () => {
  emits('open-dialog-create')
}
const editItem = (item: any) => {
  emits('open-dialog-update', item)
}
const deleteItem = (item: any) => {
  emits('delete-item', item)
}
const reset = () => {
  emits('reset')
}
</script>
