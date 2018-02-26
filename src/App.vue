<template>
  <div id="app">
    <h2>load-more-plugin 插件实例</h2>
    <ul class="data-list">
      <li v-for="(item, key) in list" :key="key">{{`${item.name} ${key+1}`}}</li>
    </ul>
    <load-more
      :loadingIcon="loadingIcon"
      :loadingText="loadingText"
      :loadedText="loadedText"
      :status="status"
      :reserveDistance="reserveDistance"
      @load="loadNextPage"
    />
  </div>
</template>

<script>
import LoadMore from './components/LoadMore'
import { mapState, mapMutations, mapActions } from 'vuex'
import LoadingIcon from './assets/loading.svg'

export default {
  name: 'App',
  data () {
    return {
      loadingIcon: LoadingIcon,
      status: 0, // 0: 隐藏，1: 正在加载，2: 加载完成
      loadingText: '加载中...',
      loadedText: '没有更多了',
      limit: 15,
      reserveDistance: 200
    }
  },
  computed: mapState({
    list: state => state.list
  }),
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['request']),
    loadNextPage () {
      if (this.status === LoadMore.LOAD_STATUS.HIDE) {
        console.log('开始request')
        // 按照组件映射关系，更改为加载中状态
        this.status = LoadMore.LOAD_STATUS.LOADING
        this.request(this.limit).then((res) => {
          console.log('回调', res)
          if (res && res.length < this.limit) {
            // 当前页是最后一页
            console.log('结束request，返回无数据')
            // 按照组件映射关系，更改为加载完成状态
            this.status = LoadMore.LOAD_STATUS.LOADED
            return
          }
          console.log('结束request')
          // 按照组件映射关系，更改为隐藏状态
          this.status = LoadMore.LOAD_STATUS.HIDE
        })
      }
    }
  },
  components: {
    LoadMore
  }
}
</script>

<style src="./assets/css/reset.css"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h2 {
  font-size: 18px;
  text-align: center;
  line-height: 40px;
}
ul.data-list li {
  padding: 10px 12px;
  font-size: 17px;
}
</style>
