<script setup lang="ts">
import { onMounted, onUnmounted, inject } from 'vue'
import type { Layer, Viewpoint } from '@vcmap/core'
import UiMap from '@/components/ui/UiMap.vue'
import NavigationButtons from '@/components/map/buttons/NavigationButtons.vue'
import ComponentsAboveMap from '@/components/map/aboveMap/ComponentsAboveMap.vue'
import {
  useLayersStore,
  RENNES_LAYERNAMES,
  RENNES_LAYER,
} from '@/stores/layers'
import { useMap3dStore, useMapViewPointStore } from '@/stores/map'
import {
  useHomeViewsStore,
  useTravelTimesViewStore,
  useViewsStore,
} from '@/stores/views'
import { useStationsStore } from '@/stores/stations'
import { useComponentAboveMapStore } from '@/stores/componentsAboveMapStore'
import {
  useTravelTimeBoxesStore,
  useTraveltimeInteractionStore,
} from '@/stores/interactionMap'

import {
  tiltViewpoint,
  untiltViewpoint,
  getViewpointFromFeatureDistance,
} from '@/helpers/viewpointHelper'
import type { RennesApp } from '@/services/RennesApp'
import {
  updateLineViewStyle,
  updateTravelTimesViewStyle,
  updateStationViewStyle,
  updateHomeViewStyle,
} from '@/services/viewStyle'
import { updateTraveltimeArrow } from '@/services/arrow'
import { viewList } from '@/model/views.model'
import { poiStoreSubcribe } from '@/services/poi'
import { usePoiParkingStore } from '@/stores/poiParking'

const rennesApp = inject('rennesApp') as RennesApp

const layerStore = useLayersStore()
const poiStore = usePoiParkingStore()
const map3dStore = useMap3dStore()
const mapViewPointStore = useMapViewPointStore()
const homeViewStore = useHomeViewsStore()
const stationsStore = useStationsStore()
const travelTimesViewStore = useTravelTimesViewStore()
const viewStore = useViewsStore()
const componentAboveMapStore = useComponentAboveMapStore()
const traveltimeInteractionStore = useTraveltimeInteractionStore()
const travelTimeBoxesStore = useTravelTimeBoxesStore()

onMounted(async () => {
  await rennesApp.initializeMap()
  await updateLayersVisibility()
  await updateMapStyle()
  componentAboveMapStore.addListenerForUpdatePositions(rennesApp)
  travelTimeBoxesStore.addListenerForUpdatePositions(rennesApp)
})

// The following code is needed to cleanup resources we created
// (in this case, the rennesApp) once a component gets destroyed (unmounted).
// Otherwise, we will keep on rendering the rennesApp in its container after a hot reload.
onUnmounted(() => {
  rennesApp.destroy()
})

async function setLayerVisible(layerName: string, visible: boolean) {
  const layer: Layer = rennesApp.maps.layerCollection.getByKey(layerName)
  if (visible) {
    await layer?.activate()
  } else {
    layer?.deactivate()
  }
}

async function updateLayersVisibility() {
  for (const layer of RENNES_LAYERNAMES) {
    await setLayerVisible(layer, layerStore.visibilities[layer])
  }
}

async function updateViewPoint(viewPoint: string) {
  const activeMap = rennesApp.maps.activeMap
  if (viewPoint === viewList.station) {
    let featureStation = await rennesApp.getFeatureByAttributeFromLayer(
      RENNES_LAYER.trambusStops,
      'nom',
      stationsStore.currentStationView!
    )
    // 2000 is the distance where the view of the station looks good
    let viewpoint: Viewpoint | null = getViewpointFromFeatureDistance(
      featureStation,
      2000
    )
    if (map3dStore.is3D()) {
      viewpoint = tiltViewpoint(viewpoint!)
    }
    await activeMap.gotoViewpoint(viewpoint!)
  } else {
    let selectedViewPoint = rennesApp.viewpoints.getByKey(viewPoint)

    if (selectedViewPoint) {
      if (map3dStore.is3D()) {
        selectedViewPoint = tiltViewpoint(selectedViewPoint!)
      }
      await activeMap.gotoViewpoint(selectedViewPoint)
    } else {
      // go to home
      let homeViewPoint = rennesApp.viewpoints.getByKey('rennes')
      if (map3dStore.is3D()) {
        homeViewPoint = tiltViewpoint(homeViewPoint!)
      }
      await activeMap.gotoViewpoint(homeViewPoint!)
    }
  }
}

async function updateActiveMap() {
  // Notes(IS): Currently there is no way to set custom tilt when switch active map
  // Get current tilt
  const oldViewpoint = await rennesApp.maps.activeMap.getViewpoint()

  await rennesApp.maps.setActiveMap(map3dStore.activeMap)

  let newViewpoint
  if (map3dStore.is3D()) {
    newViewpoint = tiltViewpoint(oldViewpoint!)
  } else {
    newViewpoint = untiltViewpoint(oldViewpoint!)
  }
  await rennesApp.maps.activeMap.gotoViewpoint(newViewpoint)
}

async function updateMapStyle() {
  switch (viewStore.currentView) {
    case viewList.home:
      updateHomeViewStyle(rennesApp)
      break
    case viewList.line:
      await updateLineViewStyle(rennesApp)
      break
    case viewList.traveltimes:
      await updateTravelTimesViewStyle(rennesApp)
      break
    case viewList.station:
      await updateStationViewStyle(rennesApp)
      break
  }
}

layerStore.$subscribe(async () => {
  await updateLayersVisibility()
})

map3dStore.$subscribe(async () => {
  await updateActiveMap()
  await updateTraveltimeArrow(rennesApp)
  componentAboveMapStore.addListenerForUpdatePositions(rennesApp)
  if (traveltimeInteractionStore.displayedTravelTimes) {
    await travelTimeBoxesStore.setTravelTimeBoxes(
      rennesApp,
      traveltimeInteractionStore.displayedTravelTimes,
      map3dStore.is3D()
    )
  }
  travelTimeBoxesStore.addListenerForUpdatePositions(rennesApp)
})

mapViewPointStore.$subscribe(async () => {
  await updateViewPoint(mapViewPointStore.viewPoint)
})

viewStore.$subscribe(async () => {
  await updateMapStyle()
})

travelTimesViewStore.$subscribe(async () => {
  await updateTravelTimesViewStyle(rennesApp)
})

stationsStore.$subscribe(async () => {
  await componentAboveMapStore.updateListLabelsStations(rennesApp)
})

homeViewStore.$subscribe(async () => {
  await updateHomeViewStyle(rennesApp)
})

poiStore.$subscribe(async () => {
  poiStoreSubcribe(rennesApp)
})

traveltimeInteractionStore.$subscribe(async () => {
  await updateMapStyle()
  if (traveltimeInteractionStore.displayedTravelTimes) {
    await travelTimeBoxesStore.setTravelTimeBoxes(
      rennesApp,
      traveltimeInteractionStore.displayedTravelTimes,
      map3dStore.is3D()
    )
  }
})
</script>

<template>
  <UiMap></UiMap>
  <NavigationButtons />
  <ComponentsAboveMap />
</template>
