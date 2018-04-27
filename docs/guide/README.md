# Introduction

Vuescroll is a virtual scrollbar based on [Vue.js](https://github.com/vuejs/vue) 2.X. In addition to the features of native scrollbar, vuescroll has many more fueatures than native, such as toggle among multi modes, smooth-scroll, auto-detect size changes, paging, snapping etc.

## Why Vuescroll?

Many people asked me **Why not use native** , **Why not keep native?** and so on. Now, let me introduce the difference between vuescroll and native scroll. 
### 1.Basic scroll
#### Vuescroll and native both support basic scroll behaviors. But vuescroll scrolls more smoothly and have a pretty surface.

<ClientOnly>
<Guide-Inroduction-OrdinaryScroll />
</ClientOnly>

### 2.Customize position

#### Vuescroll supports setting the positions of the scrollbar and rail or keep show while native doesn't.

<ClientOnly>
<Guide-Inroduction-SetPositionAndKeepShow />
</ClientOnly>

### 3.Detect size changes
#### Vuescroll supports detecting the size changes of content and native doesn't. It is inpired by [element-resize-detector](https://github.com/wnr/element-resize-detector).
::: tip
    You can open browser's dev-tool to adjust content's size and see the effect.
:::
<ClientOnly>
<Guide-Inroduction-DetectSizeChange />
</ClientOnly>

### 4.Pull-refresh or push-load supported
#### Vuescroll supports pull-refresh and push-load. It's uesful when you want to display a list of datas.

<ClientOnly>
<Guide-Inroduction-PullRefreshOrPushLoad />
</ClientOnly>

### 5.Paging
#### Vuescroll supports paging-mode. Well, It's userful when you want to show a carousel like [this](http://element-cn.eleme.io/#/zh-CN/component/carousel). 

<ClientOnly>
<Guide-Inroduction-Paging />
</ClientOnly>

::: tip
To disable X or Y paging, just set scrollingY or X to false.
```javascript
  ops: {
    scrollPanel: {
      scrollingY: false // or scrollingX: false
    }
  }
```
:::

### 6.Toggle between modes
#### You can even changes modes in runtime, and the postions won't be changed.
<ClientOnly>
<Guide-Inroduction-SwitchMode />
</ClientOnly>

::: warning
  Perhaps not works well in mobile, becase slide and native are the same in mobile. 
:::

> This is the core futures of vuescroll, more detailed configurations you can checkout the [Configuration](Configuration.html) section.

