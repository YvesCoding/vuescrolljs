---
sidebarDepth: 1
---

# Demo 页面

## 完全可定制

 <Demo-Basic-SetPositionAndKeepShow />
 
[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/SetPositionAndKeepShow.vue)

## 下拉刷新和上推加载

 <Demo-Basic-PullRefreshOrPushLoad />
 
[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/PullRefreshOrPushLoad.vue)

## 轮播图

这两个轮播图是用官方的 vuescroll 插件 - [`vuescroll-carousel`](https://github.com/YvesCoding/vuescroll-carousel)制作成的。

 <Demo-Advance-MakeACarousel />

<br><br>

 <Demo-Advance-MakeACarousel type="v"/>
 
<br>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeACarousel.vue)

[vuescroll-carousel](https://github.com/YvesCoding/vuescroll-carousel)

## 时间选择器

### 你可以通过设置 `snapping` 为 true 并且 `bouncing` 为 `false`, `scrollingX` 为 false 来做一个时间选择器。

<ClientOnly>
<Demo-Advance-MakeATimePicker />
</ClientOnly>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeATimePicker.vue)

## SSR(服务端渲染) Demo

这里有两个不同环境下的`vuescroll` `ssr` demo， 如果你 ssr 方面有什么问题，可以参考下：

### Node 环境

Node 环境下的 [Demo](https://github.com/YvesCoding/vuescroll-ssr-node)

### PHP 环境

Php 环境下的 [Demo](https://github.com/YvesCoding/vuescroll-ssr-php)

### Nuxt 环境

Nuxt 环境下的 [Demo](https://github.com/YvesCoding/vuescroll-nuxt-demo)
