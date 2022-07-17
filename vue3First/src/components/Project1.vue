<template>
  <div>{{name}}</div>
  <div>{{name2}}</div>
</template>

<script >
 import { inject, ref } from 'vue'
 export default {
   setup(props,context){
    // 没有响应式
    const name = inject('name')
    // 具有响应式
    const name2 = inject('name2')
    return {name,name2}
   }
 }
</script>
<style scoped>

</style>