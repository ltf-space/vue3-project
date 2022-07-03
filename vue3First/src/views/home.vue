<template>
  <div>{{count}}</div>
</template>

<script setup>
 import { ref } from 'vue'
 defineProps({
  msg: String
 })
 let count = ref(0)
</script>
<style scoped>

</style>