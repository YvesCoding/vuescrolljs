---
sidebarDepth: 2
---

# 配置项

Vuescroll 的配置项由 5 部分组成, 它们分别是`vuescroll`, `scrollPanel`, `bar`, `rail`, `scrollButton`.

## vuescroll

### 概览

```javascript
  vuescroll: {
    mode: 'native',
    sizeStrategy: 'percent',
    detectResize: true
  }
```

### mode

- 类型: `native|slide`

* 默认值: `native`

选择一个模式, **native** 或者 **slide**.

### sizeStrategy

- 类型: `number|percent`

* 默认值: `percent`

如果父容器不是固定高度，请设置为 `number` , 否则保持默认的`percent`即可。

### detectResize

- 类型: `boolean`

* 默认值: `true`

是否检测内容尺寸发生变化。

### 尝试一下

<Guide-BaseConfig />

## scrollPanel

::: tip 介绍
scrollPanel 内容的包装. 我们通过改变 scrollPanel 的 scrollLeft 和 scrollTop 来使内容移动。
:::

### 概览

```javascript
  scrollPanel: {
    initialScrollY: false,
    initialScrollX: false,
    scrollingX: true,
    scrollingY: true,
    speed: 300,
    easing: undefined,
    verticalNativeBarPos: 'right'
  }
```

### initialScrollY/initialScrollX

- 类型: `number|string||false`

- 默认值: `false`

只要组件`mounted`之后自动滚动的距离。 例如 **100** or **10%**

### scrollingX/scrollingY

- 类型: `blloeane`

- 默认值: `true`

是否启用 x 或者 y 方向上的滚动。

### speed

- 类型: `number`

- 默认值: `300`

多长时间内完成一次滚动。 数值越小滚动的速度越快。

### easing

- 类型: `string|undefined`

- 默认值: `undefined`

滚动动画， 所有的动画如下：

- `easeInQuad`
- `easeOutQuad`
- `easeInOutQuad`
- `easeInCubic`
- `easeOutCubic`
- `easeInOutCubic`
- `easeInQuart`
- `easeOutQuart`
- `easeInOutQuart`
- `easeInQuint`
- `easeOutQuint`
- `easeInOutQuint`

### verticalNativeBarPos

- 类型: `right|left`

- 默认值: `right`

原生滚动条的位置。

### 尝试一下

<Guide-ScrollPanel />

## rail

### 概览

::: tip 介绍
滚动条移动所在位置。
:::

```javascript
  rail: {
    background: '#01a99a',
    opacity: 0,
    size: '6px',
    specifyBorderRadius: false,
    gutterOfEnds: null,
     gutterOfSide: '2px',
    keepShow: false
  }
```

### background

- 类型: `string`

- 默认值: `#a5d6a7`

轨道的背景色。

### size

- 类型: `string`

- 默认值: `6px`

轨道的尺寸。

### opacity

- 类型: `number`

- 默认值: `0`

轨道的透明度。

### specifyBorderRadius

- 类型: `false|string`

- 默认值: `false`

是否指定轨道的 borderRadius， 如果不那么将会自动设置。

### gutterOfEnds

- 类型: `string`

- 默认值: `2px`

轨道距 x 和 y 轴两端的距离。

### gutterOfSide

- 类型: `string`

- 默认值: `2px`

距离容器的距离。

### keepShow

- 类型: `boolean`

- 默认值: `false`

是否即使 bar 不存在的情况下也保持显示。

### border

- 类型: `string`

- 默认值: `none`

轨道的边框。

### 尝试一下!

<Guide-Rail />

## bar

::: tip 介绍
滚动条，类似于原生的滚动条。
:::

::: warning 警告
vRail, hRail, vBar, hBar, pos 都已经失效了。 请用 rail, bar 来代替。 设置 rail，bar 将会对垂直，水平滚动条同时生效。
:::

### 概览

```javascript
  bar: {
    showDelay: 500,
    onlyShowBarOnScroll: true,
    keepShow: false,
    background: '#c1c1c1',
    opacity: 1,
    hoverStyle: false，
    specifyBorderRadius: false,
    minSize: false,
    size: '6px',
    disable: false,
  }
```

### onlyShowBarOnScroll

- 类型: `boolean`

- 默认值: `true`

是否只在滚动时显示 bar。

### showDelay

- 类型: `number`

- 默认值: `500`

在鼠标离开容器后多长时间隐藏滚动条。

### background

- 类型: `string`

- 默认值: `#4caf50`

滚动条背景色。

### keepShow

- 类型: `boolean`

- 默认值: `false`

滚动条是否保持显示。

### opacity

- 类型: `number`

- 默认值: `1`

滚动条透明度。

### specifyBorderRadius

- 类型: `false|string`

- 默认值: `false`

是否指定滚动条的 borderRadius， 如果不那么和轨道的保持一致。

### minSize

- 类型: `number`

- 默认值: `0`

为 bar 设置一个最小尺寸, 从 0 到 1. 如 0.3, 代表 30%.

### size

- 类型: `string`

- 默认值: `6px`

bar 的尺寸。

### disable

- 类型: `boolean`

- 默认值: `false`

是否禁用滚动条。

### 尝试一下!

<Guide-Bar />

## scrollButton

### 概览

```javascript
  scrollButton: {
    enable: false,
    background: 'rgb(3, 185, 118)',
    opacity: 1,
    step: 180,
    mousedownStep: 30
  }
```

### enable

- 类型: `blloean`

- 默认值: `false`

是否启用 scrollButton.

### background

- 类型: `string`

- 默认值: `rgb(3, 185, 118)`

scrollButton 的背景色.

### opacity

- 类型: `number`

- 默认值: `1`

scrollButton 的透明度。

### step

- 类型: `number`

- 默认值: `180`

每次当你点击 scrollButton 所滚动的距离。

### mousedownStep

- 类型: `number`

- 默认值: `30`

每次当你按住 scrollButton 所滚动的距离。

### 尝试一下!

<Guide-ScrollButton />

## vuescroll(native 模式)

### 概览

```javascript
vuescroll: {
  wheelScrollDuration: 0;
}
```

### wheelScrollDuration

- 类型: `number`
- 默认值: `0`

滚轮滚动一段距离所需时间。

## vuescroll(Slide 模式)

### 概览

```javascript
  vuescroll: {
    pullRefresh: {
      enable: false,
      tips: {
        deactive: 'Pull to Refresh',
        active: 'Release to Refresh',
        start: 'Refreshing...',
        beforeDeactive: 'Refresh Successfully!'
      }
    },
    pushLoad: {
      enable: false,
      tips: {
        deactive: 'Push to Load',
        active: 'Release to Load',
        start: 'Loading...',
        beforeDeactive: 'Load Successfully!'
      },
      auto: false,
      autoLoadDistance: 0
    },
    paging: false,
    zooming: true,
    snapping: {
      enable: false,
      width: 100,
      height: 100
    },
     scroller: {
      /*
        Allow to scroll out of boundaries
        true or false or an array specify which direction can be
        bounced. The options can be:
        ['top','bottom','left','right']
      */
      bouncing: {
        top: 100,
        bottom: 100,
        left: 100,
        right: 100
      },
      /** Enable locking to the main axis if user moves only slightly on one of them at start */
      locking: true,
      /** Minimum zoom level */
      minZoom: 0.5,
      /** Maximum zoom level */
      maxZoom: 3,
      /** Multiply or decrease scrolling speed **/
      speedMultiplier: 1,
      /** This configures the amount of change applied to deceleration when reaching boundaries  **/
      penetrationDeceleration: 0.03,
      /** This configures the amount of change applied to acceleration when reaching boundaries  **/
      penetrationAcceleration: 0.08,
      /** Whether call e.preventDefault event when sliding the content or not */
      preventDefault: true,
      /** Whether call preventDefault when (mouse/touch)move*/
      preventDefaultOnMove: true,
      // whether to  disable scroller or not.
      disable: false
    }
  }
```

### pullRefresh

- 类型: `Object`

- 默认值:

```javascript
{
  enable: false,
  tips: {
    deactive: 'Pull to Refresh',
    active: 'Release to Refresh',
    start: 'Refreshing...',
    beforeDeactive: 'Refresh Successfully!'
  }
},
```

### pushLoad

- 类型: `Object`

- 默认值:

```javascript
{
  enable: false,
  tips: {
    deactive: 'Push to Load',
    active: 'Release to Load',
    start: 'Loading...',
    beforeDeactive: 'Load Successfully!'
  },
  auto: false,
  autoLoadDistance: 0
}
```

### pushLoad.auto

- 类型: `boolean`
- 默认值: `false`

是否自动触发加载。

### pushLoad.autoLoadDistance

- 类型: `number`
- 默认值: `0`

距离底部触发自动加载的距离。

### 尝试一下

[一个小例子](https://vuescroll-issue-list-demo-qlrlyskaji.now.sh//)

你也可以通过 [slot](slot.html) 来设置不同的加载/刷新动画.
