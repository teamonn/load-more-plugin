<template>
  <div id="app">
    <img src="./assets/logo.png" @click="increment(count)">
    <h2>{{count}}</h2>
    <!-- <load-more/> -->
  </div>
</template>

<script>
// import LoadMore from './components/LoadMore'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  computed: mapState({
    count: state => state.count
  }),
  methods: {
    ...mapMutations(['increment']),
    add () {
      this.$store.commit('increment', this.count)
    }
  },
  components: {
    // LoadMore
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
