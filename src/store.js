import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 限制模拟请求的最大数据量
let TOTAL = 60
let currentNum = 0

const store = new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    pushList (state, res) {
      state.list = state.list.concat(res)
    }
  },
  actions: {
    request (context, limit) {
      let result = {
        success: true,
        data: []
      }
      if (currentNum >= TOTAL) {
        return new Promise((resolve, reject) => {
          resolve(result.data)
        })
      }
      for (let i = 0; i < limit; i++) {
        result.data.push({
          name: '列表'
        })
      }
      return new Promise((resolve, reject) => {
        // 模拟 http 请求，result 是返回结果
        setTimeout(function () {
          if (result.success) {
            context.commit('pushList', result.data)
            currentNum += limit
            resolve(result.data)
          } else {
            reject(result.error)
          }
        }, 1500)
      })
    }
  }
})

export default store
