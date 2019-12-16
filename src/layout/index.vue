<template>
  <div class="aster-container">
    <asterHead></asterHead>
    <asterAside></asterAside>
    <asterMain></asterMain>
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
