<template>
    <div class="wrap">
        <div class="wrap-part">
             <span class="demo-title">Vuescroll</span>
            <div class="parent" ref="parentElm">
                <vue-scroll :ops="ops" @handle-resize="handleResize">
                <template
                v-for="item in 64"
                >
                <BaseChild 
                :key="item"
                :style="{width: contentWidth + 'rem', height: contentHeight + 'rem'}"
                :index="item"
                />
                <br v-if="item % 8 == 0" />
                </template>
                </vue-scroll>
            </div>
        </div>
        <div class="wrap-part">
             <span class="demo-title">Operation</span>
            <div class="parent">
                <vue-scroll>
                    <div class="operation-area">
                        <label>contentWidth: {{contentWidth}}rem</label>
                        <br />
                        <input type="range" min="18" max="62.5" v-model="contentWidth">
                        <br />
                        <label>contentHeight: {{contentHeight}}rem</label>
                        <br />
                        <input type="range" min="18" max="62.5" v-model="contentHeight">
                    </div>
                    <div class="log">
                        logs:
                        <div
                        class="item"
                        v-for="log in logs"
                        >
                            size changes! width:{{log.width / 16 }}rem, height:{{log.height / 16}} rem
                        </div>
                    </div>
                </vue-scroll>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ops: {
                vRail: {
                    pos: 'right'
                },
                hRail: {
                    pos: 'bottom'
                },
                vBar: {
                    keepShow: false
                },
                hBar: {
                    keepShow: false
                }
            },
            contentHeight: 25,
            contentWidth: '',
            logs: []
        }
    },
    methods: {
        handleResize(...args) {
            this.logs.push({
                width: args[2].width,
                height: args[2].height
            })
        }
    },
    mounted() {
        this.contentWidth = this.$refs['parentElm'].clientWidth / 16;
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
</style>