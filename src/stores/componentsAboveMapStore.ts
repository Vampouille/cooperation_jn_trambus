import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { Cartesian2 } from '@vcmap/cesium'
import type { GeoJSONLayer } from '@vcmap/core'
import { VcsApp } from '@vcmap/core'
import { RENNES_LAYERS } from '@/stores/layers'
import type { Feature, Geometry } from 'ol'
import { getCartesianPositionFromFeature } from '@/helpers/featureHelper'
import { useStationsStore } from '@/stores/stations'
import { VcsMap } from '@vcmap/core'

export const useComponentAboveMapStore = defineStore(
  'component-above-map',
  () => {
    const vcsApp: Ref<VcsApp | null> = ref(null)
    const cartesian: Ref<Cartesian2 | null> = ref(null)
    const labelsStationsList: Ref<
      {
        stationName: string
        feature: Feature<Geometry>
        cartesian: Cartesian2
      }[]
    > = ref([])

    function setVcsApp(app: VcsApp) {
      vcsApp.value = app
    }

    function stationIsInList(stationName: string) {
      return (
        labelsStationsList.value.filter(
          (label) => label.stationName == stationName
        ).length > 0
      )
    }

    function addLabelStationToList(
      feature: Feature<Geometry>,
      stationName: string
    ) {
      if (vcsApp.value === null) {
        return
      }
      if (!stationIsInList(stationName)) {
        labelsStationsList.value.push({
          stationName: stationName,
          feature: feature,
          cartesian: getCartesianPositionFromFeature(vcsApp.value, feature),
        })
      }
    }

    async function updateListLabelsStations() {
      if (vcsApp.value === null) {
        return
      }
      const stationsStore = useStationsStore()
      //Add new station to list
      const layer: GeoJSONLayer = vcsApp.value.layers.getByKey(
        RENNES_LAYERS[6]
      ) as GeoJSONLayer
      await layer.fetchData()
      layer.getFeatures().forEach((feature) => {
        const stationInclude: boolean =
          stationsStore.stationsToDisplay.includes(feature.get('nom'))
        if (stationInclude) {
          addLabelStationToList(feature, feature.get('nom'))
        }
      })

      //Delete unused stations
      labelsStationsList.value = labelsStationsList.value.filter((label) =>
        stationsStore.stationsToDisplay.includes(label.stationName)
      )
    }

    function setCartesian(new_cartesian: Cartesian2 | null) {
      cartesian.value = new_cartesian
    }

    function updatePositionsComponents() {
      if (vcsApp.value === null) {
        return
      }
      labelsStationsList.value.map((label) => {
        const cartesian = getCartesianPositionFromFeature(
          vcsApp.value,
          label.feature
        )
        label.cartesian = cartesian
        return label
      })
    }

    function addListenerForUpdatePositions() {
      if (vcsApp.value?.maps?.activeMap) {
        const map: VcsMap = vcsApp.value?.maps?.activeMap
        map.postRender.addEventListener(({ map }) => {
          const vp = map.getViewpointSync()
          if (vp && vp.isValid()) {
            updatePositionsComponents()
          }
        })
      }
    }

    return {
      cartesian,
      labelsStationsList,
      setCartesian,
      setVcsApp,
      updatePositionsComponents,
      updateListLabelsStations,
      addListenerForUpdatePositions,
    }
  }
)
