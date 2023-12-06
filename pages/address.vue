<template>
  <Base>
  <template v-slot:content>
    <v-row>
      <v-col cols="12" md="9">
        <Map :zoom="15" :centerLat="centerLat" :centerLng="centerLng" :points="[]" @updateLatLng="updateLatLng"></Map>
      </v-col>
      <v-col cols="12" md="3">
        <h1>Address</h1>
        <v-autocomplete v-model="provinceId" :items="provinces" item-title="text" item-value="value" label="Province"
          outlined dense clearable hide-details class="my-4"></v-autocomplete>
        <v-autocomplete v-model="districtId" :items="districts" item-title="text" item-value="value" label="District"
          outlined dense clearable hide-details class="my-4"></v-autocomplete>
        <v-autocomplete v-model="wardId" :items="wards" item-title="text" item-value="value" label="Ward" outlined dense
          clearable hide-details class="my-4"></v-autocomplete>
        <v-btn class="mb-4" @click="submit">submit</v-btn>
        <div class="my-4">
          <p>provinceId: {{ provinceId }}</p>
          <p>districtId: {{ districtId }}</p>
          <p>wardId: {{ wardId }}</p>
          <p>centerLat: {{ centerLat }}</p>
          <p>centerLng: {{ centerLng }}</p>
        </div>
      </v-col>
    </v-row>
  </template>
  </Base>
</template>
    
<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { storeToRefs } from 'pinia'
import { getAllProvinces } from '~/api/master/province';
import { getAllDistricts } from '~/api/master/district';
import { getAllWards } from '~/api/master/ward';
import Base from '~/layouts/Base.vue';
import Map from '~/components/map/Map.vue';

const authStore = useAuthStore()
const { token } = storeToRefs(authStore)

const provinceId = ref(0)
const districtId = ref(0)
const wardId = ref(0)

const { data: provinces } = await useAsyncData(
  'provinces',
  async () => {
    const data = await getAllProvinces(token.value)
    return data.map((province: { name: any; id: any; }) => {
      return {
        text: province.name,
        value: province.id,
      }
    })
  }
)

const { data: districts } = await useAsyncData(
  'districts',
  async () => {
    const data = await getAllDistricts(token.value)
    return data.map((district: { name: any; id: any; }) => {
      return {
        text: district.name,
        value: district.id,
      }
    })
  }
)

const { data: wards } = await useAsyncData(
  'wards',
  async () => {
    const data = await getAllWards(token.value)
    return data.map((ward: { name: any; id: any; }) => {
      return {
        text: ward.name,
        value: ward.id,
      }
    })
  }
)

const centerLat = ref(21.02825017475128)
const centerLng = ref(105.79028819198643)

const updateLatLng = (lat: number, lng: number) => {
  centerLat.value = lat
  centerLng.value = lng
}

const submit = () => {
  console.log(provinceId.value, districtId.value, wardId.value, centerLat.value, centerLng.value)
}

</script>