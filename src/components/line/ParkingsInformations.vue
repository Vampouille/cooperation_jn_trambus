<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import type { PropType } from 'vue'
import UiParkingInformation from '@/components/ui/UiParkingInformation.vue'
import type { ParkingModel } from '@/model/parkings.model'
import { getParkingFeaturesOfLine } from '@/services/parking'
import type { LineNumber } from '@/model/lines.model'

const props = defineProps({
  line: {
    type: Number as PropType<LineNumber>,
    required: true,
  },
})

const parkings: Ref<ParkingModel[]> = ref([])

onMounted(async () => {
  const parkingFeatures = await getParkingFeaturesOfLine(props.line)
  parkingFeatures.forEach((feature) => {
    parkings.value.push({
      id: feature.get('id'),
      arret_nom: feature.get('arret_nom'),
      li_code: feature.get('li_code'),
      nom: feature.get('nom'),
      nb_max_places: feature.get('nb_max_places'),
      nb_min_places: feature.get('nb_min_places'),
    })
  })
})
</script>

<template>
  <div>
    <UiParkingInformation
      v-for="parking in parkings"
      :key="parking.id"
      :name="parking.nom"
      :station="parking.arret_nom"
      :place="parking.nb_max_places"
    />
  </div>
</template>
