<template>
  <div id="app">
    <h2>load-more-plugin 插件实例</h2>
    <ul class="data-list" id="wrapper">
      <li v-for="(item, key) in list" :key="key">假数据 {{key+1}}</li>
    </ul>
    <!-- <img src="./assets/logo.png" @click="increment(count)"> -->
    <load-more wrap="wrapper" :request="request" />
  </div>
</template>

<script>
import LoadMore from './components/LoadMore'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: mapState({
    list: state => state.list
  }),
  created () {
    this.request()
    this.request()
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['request'])
    // add () {
    //   this.$store.commit('increment', this.count)
    // }
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
