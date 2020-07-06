<template>
  <!--type：是给cube-page添加的一个类名-->
  <cube-page type="button-view" title="Button">
    <div slot="content">
      <form action="/">
        <!--row:横向-->
        <cube-button-group direction="row">
          <cube-button>Button</cube-button>
          <cube-button>Button</cube-button>
          <cube-button >Button</cube-button>
          <cube-button >Button</cube-button>
          <cube-button >Button</cube-button>
        </cube-button-group>
        <!--纵向，cube-button-group：组件中规定了btn样式-->
        <cube-button-group>
          <cube-button>Button</cube-button>
          <cube-button type="submit">Submit Button</cube-button>
        </cube-button-group>

        <cube-button-group>
          <!--默认样式：激活后颜色较深-->
          <cube-button :active="true">Active Button</cube-button>
          <!--禁用状态-->
          <cube-button :disabled="true">Disabled Button</cube-button>
        </cube-button-group>

        <cube-button-group>
          <!--cubeic-ok：是cube-ui内置icon。内置有65个。要考虑怎么新增才能更合适？-->
          <cube-button icon="cubeic-ok">Button With Icon</cube-button>
        </cube-button-group>

        <!--可以通过设置 light、inline、outline、primary 属性来改变按钮样子-->
        <cube-button-group>
          <!--light：亮色-->
          <cube-button :light="true">Light Button</cube-button>
          <!--inline：是否内联-->
          <cube-button :inline="true">Inline Button</cube-button>
          <!--outline：边框-->
          <cube-button :outline="true">Outline Button</cube-button>
          <!--primary：主要的-->
          <cube-button :primary="true">Primary Button</cube-button>
        </cube-button-group>

        <div>
          <cube-checkbox-group v-model="buttonStyle" :horizontal="true">
            <cube-checkbox label="inline">Inline</cube-checkbox>
            <cube-checkbox label="outline">Outline</cube-checkbox>
            <cube-checkbox label="primary">Primary</cube-checkbox>
          </cube-checkbox-group>

          <cube-button-group>
            <cube-button
                    :inline="inlineStyle"
                    :outline="outlineStyle"
                    :primary="primaryStyle">Demo Button</cube-button>
          </cube-button-group>
        </div>
      </form>

    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from 'components/cube-button-group.vue'
  import CubePage from 'components/cube-page.vue'
  export default {
    data() {
      return {
        buttonStyle: ['inline', 'outline', 'primary']
      }
    },
    computed: {
      inlineStyle() {
        return this.buttonStyle.indexOf('inline') >= 0
      },
      outlineStyle() {
        return this.buttonStyle.indexOf('outline') >= 0
      },
      primaryStyle() {
        return this.buttonStyle.indexOf('primary') >= 0
      }
    },
    components: {
      CubeButtonGroup,
      CubePage
    }
  }
</script>
