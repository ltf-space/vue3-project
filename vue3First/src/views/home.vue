<template>
  <div>
    <maptool @evtParams="evtParams"></maptool>
    <mapDialog
      ref="mapDialogs"
      @close="showDialog = false"
      v-if="showDialog"
    ></mapDialog>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";
import maptool from "../map/index.vue";
import mapDialog from "./mapDialog.vue";
defineProps({
  msg: String,
});
// 弹窗显示
const mapDialogs = ref(null);
let showDialog = ref(false);
const evtParams = (evt) => {
  console.log("evt", evt);
  showDialog.value = true;
  nextTick(() => {
    const el = mapDialogs.value.$el;
    const overlay = window.lMap.addPopup(el);
    overlay.setPosition(evt);
  });
};
</script>
<style scoped></style>
