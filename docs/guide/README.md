# Introduction

Vuescroll is a virtual scrollbar based on [vue.js](https://github.com/vuejs/vue) 2.X. In addition to the features of native scrollbar, vuescroll has many more fueatures than native, such as toggle among multi modes, smooth-scroll, auto-detect size changes, paging, snapping etc.

## Why Vuescroll?

Many people asked me **Why not use native** , **Why not keep native?** and so on. Now, let me introduce the difference and sameness between vuescroll and native scroll. And using or not using it depends on yourself.
### 1.Basic scroll
#### Vuescroll and native both support basic scroll behaviors.

<ClientOnly>
<Guide-Inroduction-OrdinaryScroll />
</ClientOnly>

### 2.Customize position.

#### Vuescroll supports setting the positions of the scrollbar and rail or keep show while native doesn't.

<ClientOnly>
<Guide-Inroduction-SetPositionAndKeepShow />
</ClientOnly>

### 3.Detect size changes
#### Vuescroll supports detecting the size changes of content.
::: tip
    You can open browser's dev-tool to adjust content's size and see the effect.
:::
<ClientOnly>
<Guide-Inroduction-DetectSizeChange />
</ClientOnly>

### 4.Slide and pull-refresh or push-load.
#### Vuescroll supports pull-refresh and push-load.

<ClientOnly>
<Guide-Inroduction-PullRefreshOrPushLoad />
</ClientOnly>

### 5.Paging.
#### Vuescroll supports paging-mode.

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

> This is the core futures of vuescroll, more detailed configurations you can checkout the [Configuration](Configuration.html) section.

