<template>
    <cube-page type="scroll-tab-view" title="ScrollTab">
        <div slot="content">
            <div class="left-panel">
                <cube-scroll>
                    <cube-tab-bar
                            v-model="selectedLabel"
                            :data="tabs"
                            @change="changeHandler">

                    </cube-tab-bar>
                </cube-scroll>
            </div>
            <div class="right-panel">
                <cube-scroll ref="scroll">
                    <ul>
                        <li v-for="(hero, index) in scrollData">
                            <img :src="hero.avatar" alt="">
                            <span>{{hero.name}}</span>
                        </li>
                    </ul>
                </cube-scroll>
            </div>
        </div>
    </cube-page>
</template>

<script type="text/ecmascript-6">
    import CubePage from 'components/cube-page.vue'
    import * as DATAS from 'data/tab-bar'

    const DATA_MAP = {
        '全部': DATAS.ALL_HEROES,
        '近战': DATAS.MELEE_HEROES,
        '远程': DATAS.REMOTE_HEROES,
        '辅助': DATAS.SUPPORT_HEROES,
        '法师': DATAS.MAGIC_HEROES,
        '打野': DATAS.JUNGLE_HEROES,
        '坦克': DATAS.TANK_HEROES,
        '隐身': DATAS.INVISIBLE_HEROES,
        '后期': DATAS.CARRY_HEROES,
        '闪烁': DATAS.BLINK_HEROES,
        '爆发': DATAS.HIGH_DAMAGE_HEROES,
        '召唤': DATAS.INVOKE_HEROES,
        '眩晕': DATAS.DIZZY_HEROES,
        '治疗': DATAS.HEALER_HEROES
    }
    const genTabLabels = Object.keys(DATA_MAP).map(label => ({
        label
    }))
    export default {
        data() {
            return {
                selectedLabel: '全部',
                scrollData: [],//右边的数据
                tabs: genTabLabels
            }
        },
        created() {
            this.scrollData = DATA_MAP[this.selectedLabel]
        },
        methods: {
            changeHandler(label) {
                this.scrollData = DATA_MAP[label];
                //页面渲染完之后才会执行这个函数
                this.$nextTick(() => {
                    // reset better-scroll'postion
                    this.$refs.scroll.scrollTo(0, 0)//因为右边的不同类别对应的数据，使用的是同一个页面，所以如果当前页面scroll值改变，会影响下一个类型的数据展示
                    // you need to caculate scroll-content height when your dom has changed in nextTick
                    this.$refs.scroll.refresh()//???作用：重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
                    //因为每次请求的数据数量可能不同，dom不同 占用的空间可能不同
                })
            }
        },
        components: {
            CubePage
        },
        watch: {
            selectedLabel(newV) {
                console.log(newV)
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

    .left-panel
        position: absolute
        top: 44px
        left: 0
        bottom: 0
        width: 80px
        background-color: #2d2d2d

        >>>.cube-scroll-list-wrapper
            .cube-tab-bar
                flex-wrap: wrap

                .cube-tab
                    width: 100%
                    flex-basis: unset
                    height: 40px
                    line-height: 40px
                    font-size: 14px
                    color: #db8931
                    transition: all .3s ease-in

                    &.cube-tab_active
                        color: #fff
                        font-size: 16px
                        background-color: #a74b00


    .right-panel
        position: absolute
        top: 44px
        left: 80px
        right: 0
        bottom: 0
        background-color: #171819

        li
            height: 80px
            display: flex
            align-items: center
            background-color: #171819

            img
                width: 102px
                margin: 0 10px 0 20px
                border: 1px solid #ff9f38
                border-radius: 3px
                box-shadow: 0 1px 5px 0 #000

            span
                color: #db8931
</style>

