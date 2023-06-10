<template>
  <div class="wrapper_md">
    <div class="close" @click="handleClose"></div>
    我是地图弹窗
  </div>
</template>

<script setup>
 import { ref } from 'vue'
 defineProps({
  msg: String
 })
 const emit = defineEmits('close')
 const handleClose = () => {
  emit('close')
 }
</script>
<style scoped>
.wrapper_md{
  width: 400px;
  height: 300px;
  background: #fee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: yellowgreen;
  position: absolute;
  left: 30%;
  top: 30%;
}
.close{
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.close::after{
  content: 'X';
}
</style>