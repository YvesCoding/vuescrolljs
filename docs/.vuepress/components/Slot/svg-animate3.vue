<template>
    <div :class="{active}" class="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="30" viewBox="0 0 120 30" fill="#fff">
            <circle cx="15" cy="15" r="14.6636">
                <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="15" r="9.33642" fill-opacity="0.3">
                <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="105" cy="15" r="14.6636">
                <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
        </svg>
        {{tip}}
    </div>

</template>

<script>
export default {
  props: ['tip', 'active']
};
</script>

<style scoped lang="stylus" >
svg {
    margin-right: 5px !important;
    width: 30px !important;
    height: 30px !important;
    vertical-align: middle !important;

    rect, circle {
        fill: #20a0ff;
    }
}

.svg-wrapper {
    line-height: 50px;
    height: 50px;
}

.active {
    border: 1px solid red;
}
</style>
