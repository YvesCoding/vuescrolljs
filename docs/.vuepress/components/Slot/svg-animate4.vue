<template>
    <div :class="{active}" class="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="135" height="140" viewBox="0 0 135 140" fill="#fff">
            <rect y="24.289" width="15" height="91.422" rx="6">
                <animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
                <animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
            </rect>
            <rect x="30" y="15.0711" width="15" height="109.858" rx="6">
                <animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
                <animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
            </rect>
            <rect x="60" width="15" height="84.8578" rx="6" y="27.5711">
                <animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
                <animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
            </rect>
            <rect x="90" y="15.0711" width="15" height="109.858" rx="6">
                <animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
                <animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
            </rect>
            <rect x="120" y="24.289" width="15" height="91.422" rx="6">
                <animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
                <animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
            </rect>
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
