<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import type { Ref } from 'vue'
import ItemPOI from '@/components/station/ItemPOI.vue'
import { getPoiFeaturesOfStations } from '@/services/station'

const props = defineProps<{
  nameStation: string
}>()

const pointsOfInterests: Ref<
  { name: string; distance: number; img: string }[]
> = ref([])

onBeforeMount(async () => {
  const poiFeatures = await getPoiFeaturesOfStations(props.nameStation)
  poiFeatures.forEach((poi) => {
    pointsOfInterests.value.push({
      name: poi.getProperty('site_nom'),
      distance: poi.getProperty('distance'),
      img: '',
    })
  })
})
</script>

<template>
  <template v-if="pointsOfInterests.length > 0">
    <h2 class="font-dm-sans font-bold text-lg leading-6 mb-2 mt-3">
      Centres d'intérêt
    </h2>

    <ItemPOI
      v-for="poi in pointsOfInterests"
      :key="poi.name"
      :img="poi.img"
      :name="poi.name"
      :distance="poi.distance"
    />
  </template>
</template>
