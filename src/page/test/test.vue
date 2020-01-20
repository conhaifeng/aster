<template>
  <div class="super">
    <span>这是父组件</span>
    <it></it>
  </div>
</template>

<script>
import it from './IT'

export default {
  data () {
    return {
      image: require('@/assets/logo.jpg')
    }
  },
  components: {
    it
  }
}
</script>

<style lang="stylus" scoped>
.super {
  background-color: green;
}
.it-child {
  background-color: black;
}
.it {
  background-color: yellow;
}
.it-sp {
  background-color: white;
}
</style>
