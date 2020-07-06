<template>
    <cube-page type="scroll-tab-view" title="ScrollTab2">
        <div slot="content">
            <div class="top-panel">
                <cube-scroll
                        direction="horizontal"
                        class="horizontal-scroll-list-wrap"
                        :options="scrollOptions"
                        ref="scroll"
                        @scroll="aaa"
                        :scroll-events="['scroll']"
                >
                    <cube-tab-bar
                            v-model="selectedLabel"
                            :data="tabs"
                            @change="changeHandler"
                            show-slider
                    >

                    </cube-tab-bar>
                </cube-scroll>
            </div>
        </div>
    </cube-page>
</template>

<script type="text/ecmascript-6" scoped>
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
                tabs: genTabLabels,
                scrollOptions: {
                    listenScroll: true,
                    probeType: 3,
                    directionLockThreshold: 0
                    /*默认值：5（不建议修改）
          作用：当我们需要锁定只滚动一个方向的时候，我们在初始滚动的时候根据横轴和纵轴滚动的绝对值做差，当差值大于 directionLockThreshold 的时候来决定滚动锁定的方向。*/
                },

            }
        },
        created() {
            this.scrollData = DATA_MAP[this.selectedLabel]
        },
        methods: {
            changeHandler(label) {
                console.log(this.$refs.scroll);
            },
            aaa(pos){
                console.log(pos);

                console.log(1);
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
<style lang="stylus" scoped>
    .top-panel
        position: absolute
        top: 44px
        left: 0
        right: 0
        /*width: 80px*/
        background-color: #ffffff
        height: 40px

        >>> .cube-scroll-content
            .cube-scroll-list-wrapper
                .cube-tab-bar
                    /*width: 1000px*/
                    height: 40px

                    .cube-tab
                        width: 60px
                        flex-basis: unset
                        height: 40px
                        line-height: 40px
                        font-size: 14px
                        color: #db8931
                        transition: all .3s ease-in


    /*.right-panel*/
    /*position: absolute*/
    /*top: 44px*/
    /*left: 80px*/
    /*right: 0*/
    /*bottom: 0*/
    /*background-color: #171819*/
    /*li*/
    /*height: 80px*/
    /*display: flex*/
    /*align-items: center*/
    /*background-color: #171819*/
    /*img*/
    /*width: 102px*/
    /*margin: 0 10px 0 20px*/
    /*border: 1px solid #ff9f38*/
    /*border-radius: 3px*/
    /*box-shadow: 0 1px 5px 0 #000*/
    /*span*/
    /*color: #db8931*/
</style>

