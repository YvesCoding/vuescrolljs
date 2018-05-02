<template>
    <div class="wrap">
        <div class="wrap-part">
            <span class="demo-title">Vuescroll With Transition-group</span>
            <div class="parent" ref="parentElm">
                <vue-scroll :ops="ops" ref="vs">
                <template
                v-for= "item in itemArray"
                >
                <BaseChild 
                style="display: block"
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
                               <button @click="add(true)">add a item</button>
                               <button @click="add(false)">remove a item</button>
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
                scrollContent: {
                    tag: 'transition-group', // content tag is transition-group
                    // because transition-group is a component, we send props to it
                    props:{
                        tag: 'div',
                        name: 'group-animate'
                    }
                },
                scrollPanel: {
                    scrollingX: false
                }
            },
            width: ''
        }
    },
    methods: {
        add(flag) {
            if(flag) {
                this.itemArray.push(this.itemArray.length);
                this.$refs['vs'].scrollTo({y: '100%'});
            } 
            else {
                this.itemArray.splice(0,1);
                this.$refs['vs'].scrollTo({y: '0'});
            }
        }
    },
    mounted() {
        this.width = this.$refs['parentElm'].clientWidth / 16 + "rem";
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
.group-animate-enter 
    transform: translateX(-400px)
.group-animate-leave-to 
    transform: translateX(400px)
.child
    transition: all 2s;
</style>