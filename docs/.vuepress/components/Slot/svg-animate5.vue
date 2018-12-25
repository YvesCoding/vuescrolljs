<template>
    <div :class="{active}" class="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" stroke="#fff">
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="2">
                    <circle cx="18.9445" cy="21.4771" r="5">
                        <animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite" />
                        <animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite" />
                    </circle>
                    <circle cx="40.9445" cy="33.5229" r="5">
                        <animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite" />
                        <animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite" />
                    </circle>
                    <circle cx="21.1109" cy="50" r="5">
                        <animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite" />
                        <animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite" />
                    </circle>
                </g>
            </g>
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
