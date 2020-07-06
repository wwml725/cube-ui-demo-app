<template>
    <div class="cube-page" :class="type">
        <header class="header">
            <h1>{{title}}</h1>
            <!--cubeic-back:是cube-ui中的style模块内置icon-->
            <i @click="back" class="cubeic-back"></i>
        </header>
        <div class="wrapper">
            <!--<section v-show="desc" class="desc">-->
                <!--<slot name="desc">{{desc}}</slot>-->
            <!--</section>-->
            <!---->
            <main class="content">
                <slot name="content">{{content}}</slot>
            </main>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            title: {
                type: String,
                default: '',
                required: true
            },
            type: {
                type: String,
                default: ''
            },
            //下面的两个属性暂时没什么用处
            desc: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            }
        },
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable.styl"

    .cube-page
        position: absolute
        z-index: 10
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: #efeff4

        .header
            position: relative
            height: 44px
            line-height: 44px
            text-align: center
            background-color: #edf0f4
            box-shadow: 0 1px 6px #ccc
            /*使元素背面不可见背面*//*就目前来说 还没什么用处*/
            -webkit-backface-visibility: hidden
            backface-visibility: hidden
            z-index: 5

            h1
                font-size: 16px
                font-weight: 700

            .cubeic-back
                position: absolute
                top: 0
                left: 0
                padding: 0 15px
                color: #fc9153

        > .wrapper
            /*calc是css3的语法*/
            height: calc(100% - 44px)
            overflow-x: hidden
            overflow-y: auto
            // -webkit-overflow-scrolling: touch

            .desc
                padding: 10px
                margin: 10px 0
                line-height: 20px
                font-size: 14px

            .content
                margin: 10px

        /*下面是为某一些子组件比如scroll-default  比如input组件使用*/
        /*前几个页面没有使用到下面的css样式*/
        &.option-demo
            .wrapper
                background-color: $color-white

            .title
                font-size: $fontsize-large
                font-weight: 500
                color: $color-dark-grey
                padding: 15px
                border-bottom: 1px solid rgba(0, 0, 0, .1)
                margin-bottom: 15px

            .options
                margin-bottom: 15px

            .option-list
                .group
                    margin-bottom: 15px
                    border: 1px solid rgba(0, 0, 0, 1)
                    border-radius: $radius-size-medium

                .item
                    height: 52px
                    border-bottom: 1px solid rgba(0, 0, 0, .1)

                    &.sub
                        font-size: $fontsize-medium
                        background-color: $color-light-grey-opacity

                        &.first
                            box-shadow: 0 1px 1px 1px #eee inset

                        &.last
                            border-bottom: none

            .demo
                margin-bottom: 15px

            .methods
                .method-list
                    .group
                        margin-bottom: 15px
                        border: 1px solid rgba(0, 0, 0, .1)
                        border-radius: $radius-size-medium

                    .item
                    button
                        height: 40px
                        font-size: $fontsize-large

                    .item
                        background-color: $color-active-light-gray
                        border-bottom: 1px solid rgba(0, 0, 0, .1)

                    button
                        width: 100%
                        border-bottom-left-radius: $radius-size-medium
                        border-bottom-right-radius: $radius-size-medium
                        background-color: $color-orange
                        box-shadow: 0 0 0 1px $color-orange
                        border: none
                        outline: none
                        color: $color-white
</style>
