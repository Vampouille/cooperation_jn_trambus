import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useLinesStore = defineStore('lines', () => {
  const selectedLine: Ref<number> = ref(0)

  function selectLine(line: number) {
    selectedLine.value = line
  }

  return { selectLine, selectedLine }
})
