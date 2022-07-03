<template>
  <div>{{count}}</div>
  <button @click="handleCount">增加count</button>
  <div>{{obj.name}}</div>
  <div>{{arr1[0]}}</div>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  setup(props) {
    const count = ref(0)
    function handleCount(){
      // count是一个对象，值在value里
      count.value++
    }
    // 响应式对象
    let obj = reactive({
      name:'zhansan',
      age:'20',
      sex:'男'
    })
    let arr1 = ref(['lisi','zhansan'])
    // arr1.push('lisi')
    return {count,handleCount,obj,arr1}
  }
}
</script>

<style scoped>
</style>
