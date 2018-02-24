<template>
  <p class="no-more">
    <img :src="loadingIcon" alt="" v-show="isLoading === undefined || isLoading">
    {{text}}
  </p>
</template>

<script type="text/javascript">
export default {
  name: 'load-more-plugin',
  props: ['loadingIcon', 'isLoading', 'text', 'request'],
  mounted () {
    this.$nextTick(() => {
      // 浏览器视口高度
      let windowHeight = window.innerHeight || document.documentElement.clientHeight
      // 规定距离滚动列表底部距离小于该值，则执行回调方法
      let reserveHeight = 200
      window.addEventListener('scroll', (event) => {
        console.log(this.$el.getBoundingClientRect().top - windowHeight)
        if (this.$el.getBoundingClientRect().top - windowHeight < reserveHeight) {
          // 执行父组件回调方法
          this.$emit('load')
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
  height: 40px;
  line-height: 40px;
  color: #9E9E9E;
}
.no-more img {
  width: 25px;
  height: 25px;
  padding: 7.5px;
}
</style>
