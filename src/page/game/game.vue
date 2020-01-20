<template>
  <div class='game'>
    <el-tabs v-model="activeTab"
             @tab-click="changeGroup">
      <el-tab-pane label="A组"
                   :name="AGroup">
        <gametable :data="gamedata"></gametable>
      </el-tab-pane>
      <el-tab-pane label="B组"
                   :name="BGroup">
        <gametable :data="gamedata"></gametable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import getGroupData from '@/api/game'
import gametable from './gametable'

export default {
  data () {
    return {
      AGroup: '392',
      BGroup: '393',
      activeTab: '392',
      gamedata: [],
      gameId: 'D001802'
    }
  },
  components: {
    gametable
  },
  methods: {
    changeGroup () {
      this.getRank(this.gameId, this.activeTab)
    },
    getRank (gameId, groupId) {
      const data = {}
      data['group'] = groupId
      data['t'] = Date.now()
      getGroupData(gameId, data).then(resp => {
        const { data } = resp
        if (!data) {
          this.$msg('error', 'Get game data failed.')
        }
        this.gamedata = data.data.rank
      }).catch(error => {
        this.$msg('error', 'Get game data failed.')
      })
    }
  },
  created () {
    this.getRank(this.gameId, this.AGroup)
  }
}
</script>

<style lang="stylus" scoped>
.game >>> .el-tabs__nav-wrap {
  padding-left: 20px;
}
</style>
