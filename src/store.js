import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: [],
    limit: 10
  },
  mutations: {
    pushList (state, res) {
      for (let i = 0; i < state.limit; i++) {
        state.list.push(res)
      }
    }
  },
  actions: {
    request (context) {
      // 模拟 http 请求，result 是返回结果
      let result = {
        name: '列表'
      }
      context.commit('pushList', result)
    }
  }
})

export default store
