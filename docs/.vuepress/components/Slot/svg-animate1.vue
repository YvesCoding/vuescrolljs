<template>
    <div :class="{active}" class="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="80" viewBox="0 0 55 80" fill="#FFF">
            <g transform="matrix(1 0 0 -1 0 80)">
                <rect width="10" height="54.7046" rx="3">
                    <animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite" />
                </rect>
                <rect x="15" width="10" height="68.5032" rx="3">
                    <animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite" />
                </rect>
                <rect x="30" width="10" height="66.6333" rx="3">
                    <animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite" />
                </rect>
                <rect x="45" width="10" height="36.8981" rx="3">
                    <animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite" />
                </rect>
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
    margin-right: 0 !important;

    rect {
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
