import { useMapStore } from '@/stores/map'
import type { GeoJSONLayer } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import { filterFeaturesByAttribute } from '@/helpers/layerHelper'

export async function getParkingFeaturesOfLine(lineNumber: number) {
  const num_line = 'T' + lineNumber.toString()

  const mapStore = useMapStore()
  const parkingLayer: GeoJSONLayer = mapStore.vcsApp.layers.getByKey(
    RENNES_LAYER.parking
  ) as GeoJSONLayer
  await parkingLayer.fetchData()

  const parkingFeatures = await filterFeaturesByAttribute(
    'li_code',
    num_line,
    parkingLayer
  )
  return parkingFeatures
}
