<template>
    <div class="wrap">
        <div class="wrap-part">
             <span class="demo-title">Vuescroll</span>
            <div class="parent" ref="parentElm">
                <vue-scroll :ops="ops">
                <template
                v-for="item in 64"
                >
                <BaseChild 
                :key="item"
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
                        <label>snappingWidth: {{ops.vuescroll.snapping.width}}</label>
                        <br />
                        <input type="range" min="100" max="1000" v-model="ops.vuescroll.snapping.width">
                        <br />
                        <label>snappingHeight: {{ops.vuescroll.snapping.height}}</label>
                        <br />
                        <input type="range" min="100" max="1000" v-model="ops.vuescroll.snapping.height">
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
                vuescroll: {
                    snapping: {
                        enable: true,
                        width: 100,
                        height: 100
                    },
                    mode: 'slide'
                }
            }
        }
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
</style>