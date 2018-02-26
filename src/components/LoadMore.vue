<template>
  <p class="load-more">
    <img :src="loadingIcon" alt="" v-show="status === 1">
    {{getText}}
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
    status: {
      type: Number,
      required: true
    },
    loadingText: {
      type: String,
      required: false,
      default: '加载中...'
    },
    loadedText: {
      type: String,
      required: false,
      default: '没有更多了'
    },
    reserveDistance: { // 不触发回调的最大距离
      type: Number,
      required: false,
      default: 200
    }
  },
  computed: {
    getText () {
      switch (this.status) {
        case 0:
          return ''
        case 1:
          return this.loadingText
        case 2:
          return this.loadedText
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.check()
      let timer = null
      window.addEventListener('scroll', (event) => {
        if (!timer) { // 函数节流，避免window滚动事件被触发太多次，限制300ms内的滚动再不执行后面代码
          timer = setTimeout(() => {
            let distance = this.$el.getBoundingClientRect().top - this.winHeight
            if (distance < this.reserveDistance) {
              // 执行父组件回调方法
              this.$emit('load')
            }
            timer = null
          }, 300)
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
        console.log('数据不足以产生滚动')
        // 主动执行父组件回调方法
        this.$emit('load')
      }
    }
  },
  LOAD_STATUS: { // 定义当前组件加载状态映射关系
    HIDE: 0,
    LOADING: 1,
    LOADED: 2
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
