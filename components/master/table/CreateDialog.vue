<template>
  <v-dialog v-model="dialogCreate" max-width="500px" @click:outside="handleClose">
    <v-card>
      <v-card-title>
        <span class="headline">Create item</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <!-- <v-col v-for="(value, key) in item" :key="key" cols="12" sm="6" md="4">
              <v-text-field v-model="item?.[key]" :label="capitalizeFirstLetter(key)"></v-text-field>
            </v-col> -->
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#0D47A1" @click="handleClose">Cancel</v-btn>
        <v-btn color="#0D47A1" @click="handleSave">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  dialog: Boolean,
  item: Object,
  save: Function
})

const dialogCreate = computed(() => props.dialog)

const emits = defineEmits(['save-item', 'close'])

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const handleSave = async (item: any) => {
  await emits('save-item', item);
}
const handleClose = () => {
  emits('close');
}
</script>