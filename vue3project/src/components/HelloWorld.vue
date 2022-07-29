<template>
  <div class="hello">
    hello world
    <p>{{count}}</p>
    <button @click="changeCount">改变count值</button>
    <button @click="changeRouter">路由跳转</button>
  </div>
</template>

<script>
import { reactive, toRefs,ref} from '@vue/reactivity';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: "HelloWorld",
  setup() {
    const store = useStore()
    const router = useRouter()
    const count = store.state.count
    const data = reactive({
      count
    })
    const changeCount = () => {
      const temp = ref(5)
      store.commit('SET_COUNT',temp.value)
      // 不能响应式改变
      console.log('count',data.count)
      // 能响应式改变
      console.log('count',store.state.count)
    }
    // 路由跳转
    const changeRouter = () => {
      router.push('/testRouter')
    }
    return {...toRefs(data),changeCount,changeRouter}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
