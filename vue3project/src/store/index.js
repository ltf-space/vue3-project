import { createStore } from "vuex";

export default createStore({
  state: {
    count:1
  },
  mutations: {
    SET_COUNT(state,props){
      state.count += props
    }
  },
  actions: {},
  modules: {},
});
