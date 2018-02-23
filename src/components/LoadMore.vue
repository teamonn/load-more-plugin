<template>
  <p class="no-more" v-show="isLoading || loaded">
    <img :src="loadingIcon" alt="" v-show="isLoading">
    {{isLoading? '加载中...' : '没有更多了'}}
  </p>
</template>
<script type="text/javascript">
import LoadingIcon from '../../assets/loading.svg'

export default {
  props: ['wrap', 'request'],
  mounted () {
    this.$nextTick(() => {
      let wraper = document.getElementById(this.wrap)
      let offset = wraper.offsetTop
      let reserveHeight = 50
      // 滚动区域的高度 = 视口高度 - 偏移高度
      wraper.style.height = (window.innerHeight - offset) + 'px'
      wraper.addEventListener('scroll', (event) => {
        let scrollY = event.target.scrollTop
        let clientHeight = event.target.clientHeight
        let docHeight = Math.max(event.target.scrollHeight, event.target.clientHeight)
        if (docHeight - (scrollY + clientHeight) < reserveHeight) {
          if (!this.isLoading && !this.loaded) {
            console.log('开始request')
            this.isLoading = true
            this.request().then((res) => {
              console.log('回调')
              if (res.data && res.data.length > 0) {
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
      }, false)
    })
  },
  data: function () {
    return {
      loadingIcon: LoadingIcon,
      isLoading: false,
      loaded: false
    }
  }
}
</script>

<style lang="scss">
.no-more {
  display: flex;
  justify-content: center;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #9E9E9E;
  img {
    width: 0.8rem;
    padding: 0.15rem;
  }
}
</style>
