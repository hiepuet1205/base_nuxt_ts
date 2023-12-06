<template>
  <v-data-table :headers="headers" :items="items" :sort-by="sort">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <!-- <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="props"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
      </v-toolbar>
    </template>
    <template v-slot:item="{ item }">
    <tr>
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.orderNumber }}</td>
      <td>
        <v-btn color="primary" @click="editItem(item)">Edit</v-btn>
        <v-btn color="error" @click="deleteItem(item)">Delete</v-btn>
      </td>
    </tr>
  </template>
    <!-- <template v-slot:item.actions="{ item }">
      <v-btn>created button</v-btn>
      <v-icon size="small" class="me-2" @click="editItem(item)" :icon="mdiPencil">
      </v-icon>
      <v-icon size="small" @click="deleteItem(item)" icon="mdi-delete">
      </v-icon>
    </template> -->
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { SortItem, DataTableHeader } from '~/types/master';
import {mdiPencil} from '@mdi/js'

const props = defineProps({
  headers: Array<DataTableHeader>,
  items: Array,
  sort: Array<SortItem>,
  title: String,
})

const editItem = (item: any) => { }
const deleteItem = (item: any) => { }
const initialize = () => { }
</script>


<!-- <template>
  <div>
    <v-data-table :items="items" class="elevation-1">
      <template #top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn dark class="mb-2" @click="openDialogCreate">New Item</v-btn>
        </v-toolbar>
      </template>
      <template #item.action="{ item }">
        <v-icon small class="mr-2" @click="openDialogUpdate(item)">
          edit
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          delete
        </v-icon>
      </template>
      <template #no-data>
        <v-btn color="primary" @click="reset">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  items: Array,
  headers: Array,
  sortBy: String,
  title: String,
  editedItem: Object,
  defaultItem: Object,
})

const emits = defineEmits(['reset', 'open-dialog-create', 'open-dialog-update', 'delete-item'])

const reset = async () => {
  await emits('reset')
}

const openDialogCreate = () => {
  emits('open-dialog-create')
}

const openDialogUpdate = (item: any) => {
  emits('open-dialog-update', item)
}

const deleteItem = (item: any) => {
  emits('delete-item', item)
}
</script>
     -->