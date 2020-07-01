<template>
  <cube-page type="recycle-list" title="RecycleList">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="goTo('default')">Default</cube-button>
        <cube-button @click="goTo('tombstone')">Infinite</cube-button>
      </cube-button-group>
      <cube-view></cube-view>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'components/cube-page.vue'
  import CubeButtonGroup from 'components/cube-button-group.vue'
  import CubeView from 'components/cube-view.vue'

  export default {
    components: {
      CubePage,
      CubeButtonGroup,
      CubeView
    },
    methods: {
      goTo(subPath) {
        this.$router.push('/recycle-list/' + subPath)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
