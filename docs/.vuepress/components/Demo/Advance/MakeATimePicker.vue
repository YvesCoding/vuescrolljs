<template>
    <div class="wrap">
        <div class="one-third-wrap">
            <span class="demo-title">Hour:</span>
            <BasePicker :items="timeRange.hour" :currentValue.sync="hour"/> 
        </div>
        <div class="one-third-wrap">
            <span class="demo-title">Minute:</span>
            <BasePicker :items="timeRange.minute" :currentValue.sync="minute"/> 
        </div>
        <div class="one-third-wrap">
            <span class="demo-title">Second:</span>
            <BasePicker :items="timeRange.second" :currentValue.sync="second"/> 
        </div>
        <div class="mask-top"></div>
        <div class="mask-bottom"></div>
        <div class="result">
            Time: {{ nowTime }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timeRange: {
                hour: [],
                minute: [],
                second: []
            },
            hour:"",
            minute: "",
            second: ""
        }
    },
    computed: {
        nowTime() {
            let { hour, minute, second} = this;
            return hour + ": " + minute + ": " + second;
        }
    },
    created() {
        // init time 
        for (let index = 0; index < 60; index++) {
            if(index < 24) {
                 this.timeRange.hour.push(index < 10 ? "0" + index : index); 
            }
            this.timeRange.minute.push(index < 10 ? "0" + index : index);
            this.timeRange.second.push(index < 10 ? "0" + index : index);           
        }
        const date = new Date();
        this.hour = date.getHours() - 0;
        this.minute = date.getMinutes() - 0;
        this.second = date.getSeconds() - 0;
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
.one-third-wrap
    width 33%
    float left
.result
    clear both
    height 50px
    line-height 50px
    color #828282
    font-weight bold
    font-size 1.2em
    text-align center
.mask-top, .mask-bottom 
    position absolute
    margin 0
    width 100%
    height 100px
    z-index -1
.mask-top
    top 27px
    border-bottom 1px solid #e3e3e3
.mask-bottom
    bottom 50px
    border-top 1px solid #e3e3e3
</style>