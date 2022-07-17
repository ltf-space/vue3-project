<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Vue 3 + Vite" @count="count" />
  <Project1></Project1>
  <button @click="changeName">更改project1组件名字</button>
</template>

<script setup>
import { provide, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Project1 from "./components/Project1.vue";
function count(val) {
  console.log("父组件val", val);
}
// 此时name不具有响应式
provide("name", "张三provide");

// 此时name2具有响应式
const name2 = ref("张三provide");
provide("name2", name2);
function changeName() {
  // name.value = "Lisi";
  name2.value = "Lisi";
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
