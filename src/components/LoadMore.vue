<template>
  <p class="no-more" v-show="isLoading || loaded">
    <img :src="loadingIcon" alt="" v-show="isLoading">
    {{isLoading? '加载中...' : '没有更多了'}}
  </p>
</template>

<script type="text/javascript">
import LoadingIcon from '../assets/loading.svg'

export default {
  name: 'load-more-plugin',
  data () {
    return {
      loadingIcon: LoadingIcon,
      isLoading: false,
      loaded: false
    }
  },
  props: ['wrap', 'request'], // wrap: 滚动列表容器ID, request: 滚动加载需要执行的方法
  mounted () {
    this.$nextTick(() => {
      let wrapper = document.getElementById(this.wrap)
      // 滚动容器自身高度
      let wrapperHeight = wrapper.clientHeight
      // 滚动容器相对于页面顶部偏移的 Y 值
      let offsetY = wrapper.offsetTop
      // 浏览器视口高度
      let windowHeight = window.innerHeight || document.documentElement.clientHeight
      // 规定距离滚动列表底部距离小于该值，则开始加载下一页
      let reserveHeight = 200
      // 页面滚动距离
      let scrollY = 0
      window.addEventListener('scroll', (event) => {
        scrollY = document.documentElement.scrollTop || document.body.scrollTop
        if (wrapperHeight + offsetY - scrollY - windowHeight < reserveHeight) {
          if (!this.isLoading && !this.loaded) {
            console.log('开始request')
            this.isLoading = true
            this.request().then((res) => {
              console.log('回调', res)
              if (res && res.length > 0) {
                console.log('结束request')
                this.isLoading = false
                return
              }
              console.log('结束request，返回无数据')
              this.loaded = true
              this.isLoading = false
            })
          }
        }
      })
    })
  }
}
</script>

<style>
.no-more {
  display: flex;
  justify-content: center;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #9E9E9E;
}
.no-more img {
  width: 0.8rem;
  padding: 0.15rem;
}
</style>
