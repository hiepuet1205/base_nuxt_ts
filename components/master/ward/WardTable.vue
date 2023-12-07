<template>
  <div>
    <list-item :items="items" :headers="headers" :sort="sortBy" :title="title" @open-dialog-create="openCreateDialog"
      @open-dialog-update="openUpdateDialog" @delete-item="handleDeleteItem" @reset="reset"></list-item>
    <create-dialog :dialog="isDialogCreateOpen" :item="defaultItem" @save-item="handleCreateItem"
      @close="handleCloseCreateDialog"></create-dialog>
    <update-dialog :dialog="isDialogUpdateOpen" :item="editedItem" @save-item="handleUpdateItem"
      @close="handleCloseUpdateDialog"></update-dialog>
  </div>
</template>
  
<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { storeToRefs } from 'pinia'
import { getAllWards, createWard, updateWard, deleteWard } from '~/api/master/ward'
import type { SortItem, DataTableHeader } from '~/types/master'
import ListItem from '../table/ListItem.vue';
import UpdateDialog from '../table/UpdateDialog.vue';
import CreateDialog from '../table/CreateDialog.vue';

const authStore = useAuthStore()
const { token } = storeToRefs(authStore)

const { data: items } = await useAsyncData(
  'wards',
  async () => await getAllWards(token.value)
)

const headers: Array<DataTableHeader> = [
  {
    title: 'Id',
    align: 'start',
    sortable: true,
    key: 'id',
    width: 17
  },
  { title: 'Name', key: 'name', sortable: true, width: 17 },
  { title: 'Province Id', key: 'provinceId', sortable: true, width: 17 },
  { title: 'District Id', key: 'districtId', sortable: true, width: 17 },
  { title: 'Order Number', key: 'orderNumber', sortable: true, width: 17 },
  { title: 'Actions', key: 'action', sortable: false, width: 15 },
]
const sortBy: Array<SortItem> = [{ key: 'name', order: 'asc' }]
const title: string = "Ward"
const editedItem = ref({
  id: 0,
  name: '',
  provinceId: 0,
  districtId: 0,
  orderNumber: 0,
})
const defaultItem = ref({
  name: '',
  provinceId: 0,
  districtId: 0,
  orderNumber: 0,
})
const editedIndex = ref(-1)
const isDialogCreateOpen = ref(false)
const isDialogUpdateOpen = ref(false)

const getAllItems = async () => {
  return await getAllWards(token.value);
}
const createItem = async (item: any) => {
  return await createWard(token.value, item)
}
const updateItem = async (id: number, item: any) => {
  return await updateWard(token.value, id, item);
}
const deleteItem = async (id: number) => {
  return await deleteWard(token.value, id);
}
const handleCreateItem = async (item: any) => {
  const data = await createItem(item);
  editedItem.value = data;
  items.value.push(editedItem.value);
  isDialogCreateOpen.value = false;
}
const handleUpdateItem = async (id: number, item: any) => {
  const data = await updateItem(id, item);
  editedItem.value = data;
  items.value.splice(editedIndex.value, 1, editedItem.value)
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
    provinceId: item.provinceId || defaultItem.value.provinceId,
    districtId: item.districtId || defaultItem.value.districtId,
    orderNumber: item.orderNumber || defaultItem.value.orderNumber,
  }
  isDialogUpdateOpen.value = true;
}
const handleCloseCreateDialog = () => {
  isDialogCreateOpen.value = false;
}
const handleCloseUpdateDialog = () => {
  isDialogUpdateOpen.value = false;
}
</script>
    
  