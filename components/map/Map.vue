<template>
  <div id="map-wrap" style="height: 100vh">
    <client-only>
      <l-map :zoom="zoom" :center="[centerLat || 0, centerLng || 0]" @click="handleClickMap">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="[centerLat || 0, centerLng || 0]">
          <l-tooltip :content="'Your address'"></l-tooltip>
        </l-marker>
        <l-marker v-for="(point, index) in points" :key="index" :lat-lng="{ lat: point.lat, lng: point.lng }">
          <l-tooltip :content="point?.name"></l-tooltip>
          <l-icon
            icon-url="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
            :icon-size="[30, 50]" />
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>
    
<script lang="ts" setup>
import { defineProps } from 'vue';
import type { Point } from '~/types/map'
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const props = defineProps({
  centerLat: Number,
  centerLng: Number,
  points: Array<Point>,
  zoom: Number
})

const emits = defineEmits(['updateLatLng'])

const handleClickMap = (e: any) => {
  emits('updateLatLng', e.latlng.lat, e.latlng.lng)
}
</script>
    