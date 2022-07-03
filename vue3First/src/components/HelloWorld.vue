<template>
  <div>{{ count }}</div>
  <button @click="handleCount">增加count</button>
  <div>{{ obj.name }}</div>
  <div>{{ arr1[0] }}</div>
  <button @click="handleArr1">监听数组变化</button>
  <div>{{ count2 }}</div>
</template>

<script>
import { ref, reactive, watch, computed ,onMounted,toRefs} from "vue";
export default {
  props:{
    msg:{
      type:String,
      default:'你好'
    }
  },
  setup(props,context) {
    const count = ref(0);
    function handleCount() {
      // count是一个对象，值在value里
      count.value+=1;
      // 通过context参数向父组件传递事件
      context.emit('count',count.value)
    }
    // 响应式对象
    let obj = reactive({
      name: "zhansan",
      age: "20",
      sex: "男",
    });
    let arr1 = reactive(["lisi", "zhansan"]);
    // 定义一个数组

    arr1.push("wangwu");
    console.log("arr1", arr1);
    // 监听基本类型count
    watch(count, (newValue) => {
      console.log("newValue监听到发生变化了", newValue);
    });
    // 监听数组
    watch(arr1, (newValue) => {
      console.log("监听数组-增加了", arr1);
    });
    function handleArr1() {
      arr1.push("xiaoming");
      console.log("监听数组-增加了", arr1);
    }
    // 计算属性
    const count2 = computed(() => {
      return count.value+=1;
    });

    // 生命周期钩子
    onMounted(() => {
      console.log('1',1)
      handleCount()
      handleArr1()
    })

    console.log('props',props)
    // props本身具有响应式，但解构赋值导致响应式失效
    // 使用toRefs将结构赋值的结果变为响应式
    const {msg} = toRefs(props)
    console.log('msg',msg)
    // 通过props参数拿到父组件传过来的值
    console.log('props',props.msg)

    return { count, handleCount, obj, arr1, handleArr1, count2 };
  },
};
</script>

<style scoped>
</style>
