<template>
    <div :class="{active}" class="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105" fill="#fff">
            <circle cx="12.5" cy="12.5" r="12.5">
                <animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
                <animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="52.5" cy="12.5" r="12.5">
                <animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="52.5" cy="52.5" r="12.5">
                <animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="92.5" cy="12.5" r="12.5">
                <animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="92.5" cy="52.5" r="12.5">
                <animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="12.5" cy="92.5" r="12.5">
                <animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="52.5" cy="92.5" r="12.5">
                <animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="92.5" cy="92.5" r="12.5">
                <animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
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
    vertical-align: middle;

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
