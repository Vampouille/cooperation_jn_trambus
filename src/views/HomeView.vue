<script setup lang="ts">
import { onMounted } from 'vue'

import LineDescriptions from '@/components/home/LineDescriptions.vue'
import TravelTimes from '@/components/home/TravelTimes.vue'
import UiTrambusTitle from '@/components/ui/UiTrambusTitle.vue'

import { useLayersStore } from '@/stores/layers'
import { useViewsStore } from '@/stores/views'
import { useMap3dStore } from '@/stores/map'
import { useLineInteractionStore } from '@/stores/interactionMap'
import { FooterArea } from '@sigrennesmetropole/cooperation_jn_common_ui'
import SkipLinksHome from '@/components/accessibility/SkipLinksHome.vue'
import { usePanelsStore } from '@/stores/panels'

const layerStore = useLayersStore()
const viewStore = useViewsStore()
const map3dStore = useMap3dStore()
const lineInteractionStore = useLineInteractionStore()
const panelsStore = usePanelsStore()

onMounted(() => {
  viewStore.setHomeAsCurrentView()
  lineInteractionStore.resetLinesLabels()
  layerStore.setVisibilities(map3dStore.is3D(), {
    trambusLines: true,
    trambusStops: false,
    parking: true,
    poi: true,
    metro: false,
    bus: false,
    bike: false,
    _traveltimeArrow: false,
  })
  panelsStore.toggleGallery()
})
</script>

<template>
  <SkipLinksHome></SkipLinksHome>
  <section id="reseau-trambus" class="flex flex-col p-0 gap-3 font-dm-sans">
    <UiTrambusTitle></UiTrambusTitle>
  </section>
  <section id="travel-times" class="flex flex-col gap-2">
    <TravelTimes></TravelTimes>
  </section>
  <section id="line-descriptions">
    <LineDescriptions
      class="grow border-b border-neutral-300"
    ></LineDescriptions>
  </section>
  <FooterArea></FooterArea>
</template>
