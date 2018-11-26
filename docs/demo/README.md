---
sidebarDepth: 1
---

# Demo Page

## Customize Scrollbar

### Vuescroll supports setting keep show or not and background.

<ClientOnly>
<Demo-Basic-SetPositionAndKeepShow />
</ClientOnly>

[source code](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/SetPositionAndKeepShow.vue)

## Detect size changes

### Vuescroll supports detecting the size changes of content and native doesn't. It is inpired by [element-resize-detector](https://github.com/wnr/element-resize-detector).

::: tip
You can open browser's dev-tool to adjust content's size and see the effect.
:::

<ClientOnly>
<Demo-Basic-DetectSizeChange />
</ClientOnly>

[source code](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/DetectSizeChange.vue)

## Pull-refresh or push-load

### Vuescroll supports pull-refresh and push-load. It's uesful when you want to display a list of datas.

<ClientOnly>
<Demo-Basic-PullRefreshOrPushLoad />
</ClientOnly>

[source code](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/PullRefreshOrPushLoad.vue)

## Paging Mode

### Vuescroll supports paging-mode. Well, It's userful when you want to show a carousel like [this](http://element-cn.eleme.io/#/zh-CN/component/carousel).

<ClientOnly>
<Demo-Basic-Paging />
</ClientOnly>

[source code](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/Paging.vue)

::: tip
To disable X or Y paging, just set scrollingY or X to false.

```javascript
ops: {
  scrollPanel: {
    scrollingY: false; // or scrollingX: false
  }
}
```

You had better to set your size of your each page to be equal to the size of the its parent dom, so that you won't see the content of another page in current view, that is to say , pnly show one page each time.
:::

## Snapping Mode

Vuescroll supports snapping while native doesn't. Snapping is similar to `Paging`, but there are alao a few difference: **Paging slides a full page each time, but snapping slides a user-defined distance each time**.

<ClientOnly>
<Demo-Basic-Snapping />
</ClientOnly>

[source code](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/Snapping.vue)

## Toggle between modes

### You can even changes modes in runtime, and the postions won't be changed.

<ClientOnly>
<Demo-Basic-SwitchMode />
</ClientOnly>

[source code](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/SwitchMode.vue)

::: warning
Perhaps not works well in mobile, becase slide and native are the same in mobile.
:::

## Carousel

### You can make a carousel by using `paging` option. Each page size should be equal to parent dom's height or width.

<ClientOnly>
<Demo-Advance-MakeACarousel />
</ClientOnly>

[source code](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeACarousel.vue)

## Time Picker

### You can make a time-picker by setting `snapping` to true and `bouncing` to `false`, `scrollingX` to false.

<ClientOnly>
<Demo-Advance-MakeATimePicker />
</ClientOnly>

[source code](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeATimePicker.vue)

## SSR(Server-Side Rendering) Demo

There are two different environments for `vuescroll` `ssr` demo. If you have any problems with ssr, you can refer to the following:

### Node Env

[Demo](https://github.com/YvesCoding/vuescroll-ssr-node) in Node environment

### PHP Env

[Demo](https://github.com/YvesCoding/vuescroll-ssr-php) in Php environment
