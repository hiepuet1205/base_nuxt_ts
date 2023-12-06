<template>
  <Base>
  <template v-slot:content>
    <v-row>
      <v-col cols="12" md="9">
        <Map :zoom="15" :centerLat="centerLat" :centerLng="centerLng" :points="(services as Array<Point>)"></Map>
      </v-col>
      <v-col cols="12" md="3">
        <h1>Service</h1>
        <v-autocomplete v-model="maxDistance" :items="distances" item-title="text" item-value="value" label="Distance"
          outlined dense clearable hide-details class="my-4"></v-autocomplete>
        <v-btn @click="search">Search</v-btn>
      </v-col>
    </v-row>
  </template>
  </Base>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { storeToRefs } from 'pinia'
import Base from '~/layouts/Base.vue';
import Map from '~/components/map/Map.vue';
import type { Point } from '~/types/map';
import { getConsumerAddressInfo, getServices } from '~/api/consumer/consumer'

const authStore = useAuthStore()
const { token } = storeToRefs(authStore)

const distances = [
  {
    text: '10 Km',
    value: 10
  },
  {
    text: '20 Km',
    value: 20
  },
  {
    text: '30 Km',
    value: 30
  }
]
const maxDistance = ref(10)
const centerLat = ref(21.02825017475128)
const centerLng = ref(105.79028819198643)

const { data: center } = useAsyncData<Point>('consumerAddress', () => getConsumerAddressInfo(token.value))

if (center.value) {
  centerLat.value = center.value.lat
  centerLng.value = center.value.lng
}

const { data: services } = useAsyncData('services', () => getServices(token.value, maxDistance.value))

const search = async () => {
  services.value = await getServices(token.value, maxDistance.value)
}
</script>
  
<!-- <script>
import { mapState } from 'vuex';
import Base from '~/layouts/Base.vue';
import Map from '~/components/Map.vue';
import { getConsumerAddressInfo, getServices } from '~/api/consumer';
export default {
  name: 'service',
  data() {
    return {
      maxDistance: 10,
      distances: [
        {
          text: '10 Km',
          value: 10
        },
        {
          text: '20 Km',
          value: 20
        },
        {
          text: '30 Km',
          value: 30
        }
      ],
      center: [],
      services: [],
    }
  },
  components: {
    Base,
    Map
  },
  computed: {
    ...mapState({
      token: state => state.auth.token,
    })
  },
  async fetch() {
    const data = await getConsumerAddressInfo(this.token);
    this.center.push(data.lat);
    this.center.push(data.lng);
    this.services = await getServices(this.token, this.maxDistance);
  },
  methods: {
    async search() {
      this.services = await getServices(this.token, this.maxDistance);
    }
  }
}
</script> -->