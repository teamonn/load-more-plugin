<template>
  <p class="load-more">
    <img :src="loadingIcon" alt="" v-show="isLoading === undefined || isLoading">
    {{text}}
  </p>
</template>

<script type="text/javascript">
export default {
  name: 'load-more-plugin',
  data () {
    return {
      winHeight: window.innerHeight || document.documentElement.clientHeight // 浏览器视口高度
    }
  },
  props: {
    loadingIcon: {
      type: String,
      required: false,
      default: 'http://oz12kvgi5.bkt.clouddn.com/loading.svg'
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: undefined
    },
    text: {
      type: String,
      required: true
    },
    reserveDistance: { // 不触发回调的最大距离
      type: Number,
      required: false,
      default: 200
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.check()
      window.addEventListener('scroll', (event) => {
        // getBoundingClientRect().top: 获取某个dom节点顶部距离视口最顶部的距离
        let distance = this.$el.getBoundingClientRect().top - this.winHeight
        if (distance < this.reserveDistance) {
          // 执行父组件回调方法
          this.$emit('load')
        }
      })
    })
  },
  updated () {
    this.check()
  },
  methods: {
    check () {
      // 获取当前dom节点顶部距离视口最顶部的距离
      let distance = this.$el.getBoundingClientRect().top - this.winHeight
      if (distance < 0) {
        console.log('距离是负数')
        // 主动执行父组件回调方法
        this.$emit('load')
      }
    }
  }
}
</script>

<style>
.load-more {
  display: flex;
  justify-content: center;
  height: 40px;
  line-height: 40px;
  color: #9E9E9E;
}
.load-more img {
  width: 25px;
  height: 25px;
  padding: 7.5px;
}
</style>
