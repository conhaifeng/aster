<template>
  <div class="aster-aside">
    <el-scrollbar>
      <el-menu :background-color="menuStyle.bgColor"
               :text-color="menuStyle.textColor"
               :active-text-color="menuStyle.activeColor"
               :default-active="$route.name">
        <template v-for="item in routers">
          <template v-if="!item.hidden">

            <el-submenu v-if="hasMoreThanOneChild(item)"
                        :key="item.name"
                        :index="item.name">
              <template slot="title">{{item.meta.title}}</template>
              <template v-for="childItem in item.children">
                <el-menu-item :index="getPath(item.path, childItem.path)"
                              :key="childItem.name">
                  <router-link :to="getPath(item.path, childItem.path)">{{childItem.meta.title}}</router-link>
                </el-menu-item>
              </template>
            </el-submenu>

            <el-menu-item :index="item.path"
                          :key="item.name"
                          v-else-if="hasOneChild(item)">
              <router-link :to="getPath(item.path, item.children[0].path)">{{item.meta.title}}</router-link>
            </el-menu-item>

            <el-menu-item :index="item.path"
                          :key="item.name"
                          v-else>
              <router-link :to="item.path">{{item.meta.title}}</router-link>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      menuStyle: {
        width: '200px',
        bgColor: '#304156',
        textColor: '#eee',
        activeColor: '#4dbcff'
      }
    }
  },
  methods: {
    hasMoreThanOneChild: function (router) {
      return router.children && router.children.length > 1
    },
    hasOneChild: function (router) {
      return router.children && router.children.length == 1
    },
    getPath: function (parentPath, childPath) {
      return parentPath + '/' + childPath
    }
  },
  computed: {
    ...mapGetters({
      routers: 'permission/routers'
    })
  }
}
</script>

<style lang="stylus" scoped>
.aster-aside {
  width: 200px;
  height: 100%;
  background-color: #304156;
  float: left;
  // margin-right: 20px;
}
</style>
