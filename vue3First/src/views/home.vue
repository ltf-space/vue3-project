<template>
  <div>
    <maptool @evtParams="evtParams"></maptool>
    <mapDialog ref="mapDialog" @close="showDialog = false" v-if="showDialog"></mapDialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import maptool from '../map/index.vue'
import mapDialog from './mapDialog.vue'
defineProps({
  msg: String
})
// 弹窗显示
let showDialog = ref(false)
const evtParams = (evt) => {
  console.log('evt', evt)
  showDialog = true
  const mapDialog = ref(null)
  console.log('mapDialog',mapDialog)
  const overlay = window.lMap.addPopup(mapDialog.$el)
  overlay.setPosition(evt)
}
</script>
<style scoped></style>