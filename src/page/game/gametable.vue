<template>
  <el-table :data="data"
            stripe>
    <el-table-column label="队伍">
      <template slot-scope="scope">
        <img :src='scope.row.logo'
             class="game-logo">
        <span>{{scope.row.abbr}}</span>
      </template>
    </el-table-column>
    <el-table-column label="胜"
                     prop="win"></el-table-column>
    <el-table-column label="平"
                     prop="draw"></el-table-column>
    <el-table-column label="负"
                     prop="lose"></el-table-column>
    <el-table-column label="积分"
                     prop="integral"></el-table-column>
  </el-table>
</template>


<script>


export default {
  props: ['data'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.game-logo {
  max-width: 40px;
  max-height: 35px;
}
</style>