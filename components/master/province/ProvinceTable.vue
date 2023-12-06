<template>
  <div>
    <list-item :items="items" :headers="headers" :sort="sortBy" :title="title"></list-item>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { storeToRefs } from 'pinia'
import { getAllProvinces, createProvince, updateProvince, deleteProvince } from '../../../api/master/province';
import type { Province, SortItem, DataTableHeader } from '~/types/master'
import ListItem from '../table/ListItem.vue';
import UpdateDialog from '../table/UpdateDialog.vue';
import CreateDialog from '../table/CreateDialog.vue';

const authStore = useAuthStore()
const { token } = storeToRefs(authStore)

const { data: items } = await useAsyncData(
  'provinces',
  async () => await getAllProvinces(token.value)
)

const headers: Array<DataTableHeader> = [
  {
    title: 'Id',
    align: 'start',
    sortable: true,
    key: 'id',
    width: 25
  },
  { title: 'Name', key: 'name', sortable: true, width: 25 },
  { title: 'Order Number', key: 'orderNumber', sortable: true, width: 25 },
  { title: 'Actions', key: 'action', sortable: false, width: 25 },
]
const sortBy: Array<SortItem> = [{ key: 'name', order: 'asc' }]
const title: string = "Province"
const editedItem = ref({
  id: 0,
  name: '',
  orderNumber: 0,
})
const defaultItem = ref({
  name: '',
  orderNumber: 0,
})
const editedIndex = ref(-1)
const isDialogCreateOpen = ref(false)
const isDialogUpdateOpen = ref(false)

const getAllItems = async () => {
  return await getAllProvinces(token.value);
}
const createItem = async (item: any) => {
  return await createProvince(token.value, item)
}
const updateItem = async (id: number, item: any) => {
  return await updateProvince(token.value, id, item);
}
const deleteItem = async (id: number) => {
  return await deleteProvince(token.value, id);
}
const handleCreateItem = async (item: any) => {
  const data = await createItem(item);
  editedItem.value = data;
  items.value = [editedItem.value];
  isDialogCreateOpen.value = false;
}
const handleUpdateItem = async (id: number, item: any) => {
  const data = await updateItem(id, item);
  editedItem.value = data;
  items.value.splice(editedIndex.value, 1, editedItem.value)
  // items.value[editedIndex.value] = editedItem;
  isDialogUpdateOpen.value = false;
}
const handleDeleteItem = async (item: any) => {
  const index = items.value.indexOf(item)
  if (confirm('Are you sure you want to delete item?')) {
    if (await deleteItem(item.id)) {
      reset();
    }
  }
}
const reset = async () => {
  items.value = await getAllItems();
}
const openCreateDialog = () => {
  isDialogCreateOpen.value = true;
  reset();
}
const openUpdateDialog = (item: any) => {
  editedIndex.value = items.value.indexOf(item)
  editedItem.value = {
    id: item.id,
    name: item.name || defaultItem.value.name,
    orderNumber: item.orderNumber || defaultItem.value.orderNumber,
  }
  isDialogUpdateOpen.value = true;
  reset();
}
const handleCloseCreateDialog = () => {
  isDialogCreateOpen.value = false;
}
const handleCloseUpdateDialog = () => {
  isDialogUpdateOpen.value = false;
}
</script>
  
