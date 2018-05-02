<template>
    <div class="wrap">
        <div class="wrap-part">
            <span class="demo-title">Vuescroll</span>
            <div class="parent" ref="parentElm">
                <vue-scroll :ops="ops" ref="vs">
                <template
                v-for= "item in itemArray"
                >
                <BaseChild 
                :key="item"
                :width="width"
                :index="item"
                />
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
                            <th>name</th>
                            <th>operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>add or remove</td>
                            <td>
                               <button @click="add(true)">add</button>
                               <button @click="add(false)">remove</button>
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
            itemArray: [0],
            ops: {
                 
            },
            width: ''
        }
    },
    methods: {
    },
    mounted() {
        this.width = this.$refs['parentElm'].clientWidth / 16 + "rem";
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
</style>