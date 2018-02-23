import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    increment (state) {
      // state.count++
    }
  },
  actions: {
    request (context) {
      // 模拟 http 请求，加入数据到 list
      for (let i = 0; i < 10; i++) {
        context.state.list.push({
          name: '列表'
        })
      }
    }
  }
})

export default store
