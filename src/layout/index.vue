<template>
  <div class="aster-container">
    <aster-head></aster-head>
    <aster-aside></aster-aside>
    <aster-main></aster-main>
  </div>
</template>

<script>
import asterAside from './left-menu'
import asterMain from './main-content'
import asterHead from './head'

export default {
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  components: {
    asterAside,
    asterMain,
    asterHead
  }
}
</script>

<style lang="stylus" scoped>
.aster-container {
  height: 100%;
}
</style>
