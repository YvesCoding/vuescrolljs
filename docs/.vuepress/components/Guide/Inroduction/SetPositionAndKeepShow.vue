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
                :width="width"
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
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Position</th>
                            <th>keepShow</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>hBar</td>
                            <td>
                                top:<input type="radio" value="top" v-model="ops.rail.hRail.pos"/>
                                bottom:<input type="radio" value="bottom" v-model="ops.rail.hRail.pos"/>
                            </td>
                            <td>
                                yes:<input type="radio" :value="true" v-model="ops.bar.hBar.keepShow"/>
                                no:<input type="radio" :value="false" v-model="ops.bar.hBar.keepShow"/>
                            </td>
                        </tr>
                        <tr>
                            <td>vBar</td>
                            <td>
                                left:<input type="radio" value="left" v-model="ops.rail.vRail.pos"/>
                                right:<input type="radio" value="right" v-model="ops.rail.vRail.pos"/>
                            </td>
                            <td>
                                yes:<input type="radio" :value="true" v-model="ops.bar.vBar.keepShow"/>
                                no:<input type="radio" :value="false" v-model="ops.bar.vBar.keepShow"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                rail: {
                    vRail: {
                        pos: 'right'
                    },
                    hRail: {
                        pos: 'bottom'
                    },
                },
                bar: {
                    vBar: {
                        keepShow: false
                    },
                    hBar: {
                        keepShow: false
                    }
                }
            },
            width: ''
        }
    },
    mounted() {
        this.width = this.$refs['parentElm'].clientWidth + "px";
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
</style>