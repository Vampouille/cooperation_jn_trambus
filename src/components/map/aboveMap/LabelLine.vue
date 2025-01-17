<script setup lang="ts">
import { computed } from 'vue'
import { getColorLine } from '@/services/color'
import { useRouter } from 'vue-router'
import { useLineViewsStore } from '@/stores/views'
import type { LineNumber } from '@/model/lines.model'
import { usePanelsStore } from '@/stores/panels'

const props = defineProps<{
  lines: string[]
  topPosition: number
  leftPosition: number
}>()

const lineViewStore = useLineViewsStore()
const router = useRouter()
const panelStore = usePanelsStore()

const positionStyle = computed(() => {
  let style: string = ''
  const size_text = 9
  const label_height = 24
  if (
    props.topPosition + label_height > window.innerHeight ||
    props.leftPosition + size_text > window.innerWidth
  ) {
    style = 'display: none;'
  } else {
    style += 'top: ' + props.topPosition + 'px; '
    style += 'left: ' + props.leftPosition + 'px; '
  }
  return style
})

const goToLinePage = (line: string) => {
  const num_line = line.replace('T', '')
  if (parseInt(num_line) != lineViewStore.selectedLine) {
    router.push(`/line/${num_line}`)
    panelStore.isInformationPanelShown = true
  }
}

const getBgColorLine = (line: string) => {
  const num_line = parseInt(line.replace('T', '')) as LineNumber
  return getColorLine('bg', num_line, 600)
}
</script>

<template>
  <div
    class="absolute"
    :style="positionStyle"
    v-if="props.lines.length > 0"
    aria-hidden="true"
  >
    <div class="flex p-2 round-md">
      <div
        v-for="line in props.lines"
        :key="line"
        class="px-2 py-0 border cursor-pointer text-white rounded-md border-black mr-1 font-bold font-dm-sans text-sm text-center items-center"
        :class="getBgColorLine(line)"
        @click="goToLinePage(line)"
      >
        {{ line }}
      </div>
    </div>
  </div>
</template>
