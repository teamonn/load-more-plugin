<template>
  <div id="app">
    <ul class="data-list">
      <li v-for="(item, key) in list" :key="key">假数据 {{key}}</li>
    </ul>
    <!-- <img src="./assets/logo.png" @click="increment(count)"> -->
    <!-- <load-more/> -->
  </div>
</template>

<script>
// import LoadMore from './components/LoadMore'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: mapState({
    list: state => state.list
  }),
  created () {
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
    // LoadMore
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
ul.data-list li {
  padding: 8px 12px;
  font-size: 17px;
}
</style>
