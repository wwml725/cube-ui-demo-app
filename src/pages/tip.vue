<template>
  <cube-page type="tip-view" title="tip">
    <template slot="content">
      <p class="tip-eg">
        <cube-button
                :inline="true"
                :outline="true"
                :primary="true"
                @click="$refs.tip.show()"
        >Show Tip
        </cube-button>
        <cube-tip ref="tip" direction="bottom" style="left:115px;top:-50px">tip</cube-tip>
      </p>
      <p class="tip-eg">
        <cube-button
                :inline="true"
                :outline="true"
                :primary="true"
                @click="$refs.tip2.show()"
        >Show Tip
        </cube-button>
        <cube-tip ref="tip2" direction="top" style="left:115px;top:40px">tip</cube-tip>
      </p>
      <p class="tip-eg">
        <cube-button
                :inline="true"
                :outline="true"
                :primary="true"
                @click="$refs.tip3.show()"
        >Show Tip
        </cube-button>
        <cube-tip ref="tip3" direction="left" style="left:195px;top:-5px">tip</cube-tip>
      </p>
      <p class="tip-eg">
        <cube-button
                :inline="true"
                :outline="true"
                :primary="true"
                @click="$refs.tip4.show()"
        >Show Tip
        </cube-button>
        <cube-tip ref="tip4" direction="right" style="left:35px;top:-5px">tip</cube-tip>
      </p>



      <p class="tip-eg">
        <cube-button
                :inline="true"
                :outline="true"
                :primary="true"
                @click="showTip('bottom')">cube-ui</cube-button>
        <cube-tip
                ref="tip5"
                :direction="direction"
                :style="tipStyle"
                @close="close"
                @click="clickHandler">
          <div>Awesome!</div>
        </cube-tip>
      </p>
      <cube-button-group>
        <cube-button @click="showTip('bottom')">top</cube-button>
        <cube-button @click="showTip('top')">bottom</cube-button>
        <cube-button @click="showTip('right')">left</cube-button>
        <cube-button @click="showTip('left')">right</cube-button>
      </cube-button-group>
    </template>
  </cube-page>
</template>

<script>
  import cubePage from "components/cube-page.vue"
  import CubeButtonGroup from 'components/cube-button-group.vue'


  export default {
    name: "test",
    data() {
      return {
        msg: "hello",
        direction: '',
        tipStyle: ''
      }
    },
    methods: {
      showTip(direction) {
        this.direction = direction
        this.$refs.tip5.show()

        switch (direction) {
          case 'bottom':
            this.tipStyle = 'left: 96px; top: -50px;'
            break
          case 'top':
            this.tipStyle = 'left: 96px; top: 40px;'
            break
          case 'right':
            this.tipStyle = 'left: -2px; top: -5px;'
            break
          case 'left':
            this.tipStyle = 'left: 190px; top: -5px;'
            break
        }
      },

    },
    components: {
      cubePage,CubeButtonGroup
    }
  }
</script>

<style lang="stylus" scoped>
  .tip-view
    .tip-eg
      position: relative
      width: 300px
      margin: 70px auto
      text-align: center

    .cube-btn
      margin-bottom: 10px
</style>