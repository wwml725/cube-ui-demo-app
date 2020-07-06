<template>
  <cube-page type="radio-view" title="Radio">
    <template slot="content">
      <cube-radio-group v-model="selected" :options="options" />
      <p>selected value: {{selected}}</p>
      <cube-radio-group v-model="selected2" :options="options2" position="right" :hollow-style="true" />
      <p>selected value: {{selected2}}</p>
      <cube-radio-group v-model="selected3" :options="options3" :horizontal="true" />
      <p>selected value: {{selected3}}</p>


      <cube-radio-group v-model="selected4">
        <cube-radio
          v-for="(option, index) in options4"
          :key="index"
          :option="option">
          <img :src="option.src">
        </cube-radio>
      </cube-radio-group>
      <p>selected img: {{selected4}}</p>
      <hr>
      <cube-input placeholder="Input column number" v-model="colNum">
        <div slot="prepend" style="paddingLeft: 10px"> Column number:</div>
      </cube-input>

      <cube-radio-group v-model="selected5" :options="options5" :col-num="Math.floor(colNum)" />
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'components/cube-page.vue'

  export default {
    data() {
      return {
        selected: '',
        options: ['Option1', 'Option2'],
        selected2: 3,
        options2: [
          {
            label: 'Option1',
            value: 1
          },
          {
            label: 'Option2',
            value: 2
          },
          {
            label: 'Option3',
            value: 3,
            disabled: true
          }
        ],
        selected3: '3',
        options3: [
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '3',
            value: '3',
            disabled: true
          }
        ],
        selected4: '1',
        options4: [
          {
            label: '1',
            value: '1',
            src: 'http://dota2dbpic.uuu9.com/73aa3fe9-be47-49e2-82b1-75d44d069c20Elder_Titan.png'
          },
          {
            label: '2',
            value: '2',
            src: 'http://dota2dbpic.uuu9.com/4c54e1ab-0c34-4f4a-8236-26e3ffa08274legion_commander_full.png'
          },
          {
            label: '3',
            value: '3',
            src: 'http://dota2dbpic.uuu9.com/d637e928-6289-4561-8c7d-b40d96c539d000.jpg',
            disabled: true
          }
        ],
        selected5: '6',
        options5: [
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '3',
            value: '3',
            disabled: true
          },
          {
            label: '4',
            value: '4'
          },
          {
            label: '5',
            value: '5'
          },
          {
            label: '6',
            value: '6',
            disabled: true
          },
          {
            label: '7',
            value: '7'
          },
          {
            label: '8',
            value: '8'
          }
        ],
        colNum: 3
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .radio-view
    .content
      >
        *
          margin: 10px 0
    img
      width: 100px
</style>
