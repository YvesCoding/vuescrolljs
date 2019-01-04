---
sidebarDepth: 2
---

# 配置项

Vuescroll 的配置项是由 5 部分组成的, 它们分别是 `vuescroll`、 `scrollPanel`、 `bar`、 `rail`、 `scrollButton`。

## 完整的配置预览

```javascript
export default {
  // vuescroll
  vuescroll: {
    mode: 'native',
    // vuescroll's size(height/width) should be a percent(100%)
    // or be a number that is equal to its parentNode's width or
    // height ?
    sizeStrategy: 'percent',
    /** Whether to detect dom resize or not */
    detectResize: true,
    // pullRefresh or pushLoad is only for the slide mode...
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
    /* shipped scroll options */
    scroller: {
      /*
        允许滚动出边界
        true 或者 false 或者一个数组指定哪个方向可以超出边界，可选项分别是：
        ['top','bottom','left','right']
      */
      bouncing: true,
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
      preventDefaultOnMove: true
    }
  },
  scrollPanel: {
    // when component mounted.. it will automatically scrolls.
    initialScrollY: false,
    initialScrollX: false,
    // feat: #11
    scrollingX: true,
    scrollingY: true,
    speed: 300,
    easing: undefined,
    // Sometimes, the nativebar maybe on the left,
    // See https://github.com/YvesCoding/vuescroll/issues/64
    verticalNativeBarPos: 'right'
  },
  //
  rail: {
    background: '#01a99a',
    opacity: 0,
    border: 'none',
    /** Rail's size(Height/Width) , default -> 6px */
    size: '6px',
    /** Specify rail's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false **/
    specifyBorderRadius: false,
    /** Rail the distance from the two ends of the X axis and Y axis. **/
    gutterOfEnds: null,
    /** Rail the distance from the side of container. **/
    gutterOfSide: '2px',
    /** Whether to keep rail show or not, default -> false, event content height is not enough */
    keepShow: false
  },
  bar: {
    /** How long to hide bar after mouseleave, default -> 500 */
    showDelay: 500,
    /** Specify bar's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false **/
    specifyBorderRadius: false,
    /** Whether to show bar on scrolling, default -> true */
    onlyShowBarOnScroll: true,
    /** Whether to keep show or not, default -> false */
    keepShow: false,
    /** Bar's background , default -> #00a650 */
    background: 'rgb(3, 185, 118)',
    /** Bar's opacity, default -> 1  */
    opacity: 1,
    /** Styles when you hover scrollbar, it will merge into the current style */
    hoverStyle: false,
    // Should be false or a number in a range of (0, 1),
    // such as 0.5, means 50%. 0.3 means 30%.
    minSize: false,
    /** bar's size(Height/Width) , default -> 6px */
    size: '6px'
  },
  scrollButton: {
    enable: false,
    background: 'rgb(3, 185, 118)',
    opacity: 1,
    step: 180,
    mousedownStep: 30
  }
};
```

## 基础的配置

### vuescroll

::: tip 介绍
这里的 vuescroll 仅仅是一个**配置项**, 而不是 vuescroll 组件本身. 设置 vuescroll 的配置项会导致决定性的变动。
:::

#### 详细配置

```javascript
  vuescroll: {
    mode: 'native',
    // vuescroll's size(height/width) should be a percent(100%)
    // or be a number that is equal to its parentNode's width or
    // height ?
    sizeStrategy: 'percent',
    /** Whether to detect dom resize or not */
    detectResize: true
  }
```

#### 解释

| 配置项       | 默认      | 描述                                                                                                                                                                                                                                                                                                                                              |
| ------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode         | `native`  | 选择 vuescroll 一个模式, **native** 或者 **slide** 或者 **pure-native**(在 4.5.0 里面新增的！). 获取更多信息, 请查看[特点](http://vuescrolljs.yvescoding.org/zh/guide/#features)                                                                                                                                                                  |
| sizeStrategy | `percent` | 设置 `vuescroll`的大小类型， 可选的有`percent`, `number`. 设置为`percent`会把 vuescroll 的 height 和 width 设置成`100%`,设置成`number`的话 vuescroll 会自动计算父元素的大小，并将`height`和`width`设置成对应的数值。提示， 如果父元素的尺寸为百分比大小时建议设置成`number`， 如果父元素大小为一个固定的`px`的值， 那么设置为百分比比较合适一些。 |
| detectResize | `true`    | 是否开启监听 dom resize                                                                                                                                                                                                                                                                                                                           |

#### 尝试一下

<Guide-BaseConfig lang="zh"/>

### scrollPanel

::: tip 介绍
scrollPanel 内容的包装. 我们通过改变 scrollPanel 的 scrollLeft 和 scrollTop 来使内容移动。
:::

#### 详细配置

```javascript
  scrollPanel: {
    // 当组件mounted了以后，自动滚动到一个坐标
    initialScrollY: false,
    initialScrollX: false,
    // 是否禁止x或y方向上的滚动
    scrollingX: true,
    scrollingY: true,
    // 滚动的速度。在你点击滚动轨道或者调用scrollTo或者scrollBy的时候
    // 起作用。
    speed: 300,
    // 滚动动画
    easing: undefined,
    // 有时候原声滚动条可能在左侧,
    // 请查看 https://github.com/YvesCoding/vuescroll/issues/64
    verticalNativeBarPos: 'right'
  }
```

#### 解释

| 配置项         | 默认    | 描述                                                                                                                                                           |
| -------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initialScrollY | `false` | 垂直方向上的滚动距离在组件加载完以后.比如.**100** 或 **10%**                                                                                                   |
| initialScrollX | `false` | 水平方向上的滚动距离在组件加载完以后.比如.**100** 或 **10%**                                                                                                   |
| speed          | `300`   | 滚动的完成所需的时间。                                                                                                                                         |
| easing         | `null`  | 滚动的动画，你可以查看这个[demo](http://vuescrolljs.yvescoding.org/zh/demo/#_2-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%BB%9A%E5%8A%A8%E6%9D%A1)来浏览所有可得到的动画。 |

| verticalNativeBarPos <Badge text="4.8.2+" type="tip"/> | `right` | `right` 或者 `left` |

#### 尝试一下!

<Guide-ScrollPanel lang="zh"/>

### rail

::: tip 介绍
滚动条滚动的地方.
:::

#### 详细配置

```javascript
    rail: {
      background: '#01a99a',
      opacity: 0,
      /** Rail's size(Height/Width) , default -> 6px */
      size: '6px',
      /** Specify rail and bar's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false **/
      specifyBorderRadius: false,
      /** Rail the distance from the two ends of the X axis and Y axis. **/
      gutterOfEnds: '2px',
      /** Rail the distance from the side of container. **/
      gutterOfSide: '2px',
      /** Whether to keep rail show or not, default -> false, event content height is not enough */
      keepShow: false,
      border: 'none',
    }
```

#### 解释

| rail                                                  | 默认      | 描述                                                                     |
| ----------------------------------------------------- | --------- | ------------------------------------------------------------------------ |
| background                                            | `#01a99a` | 设置滚动轨道背景色。                                                     |
| size                                                  | `5px`     | 设置轨道的尺寸                                                           |
| opacity                                               | 0         | 设置轨道的透明度。                                                       |
| specifyBorderRadius <Badge text="4.8.0+" type="tip"/> | `false`   | 制定 rail 和 bar 的`boder-radius`,默认为不指定，即自适应于 rail 的大小。 |
| gutterOfEnds <Badge text="4.8.1+" type="tip"/>        | `2px`     | 设置轨道距离 X 轴和 Y 轴的间距                                           |
| gutterOfSide <Badge text="4.8.1+" type="tip"/>        | `2px`     | 设置轨道距离容器侧边的间距                                               |
| keepShow <Badge text="4.8.2+" type="tip"/>            | `false`   | 设置是否即使在高度不够的情况下也显示 rail                                |
| border <Badge text="4.9.0-beta.13+" type="tip"/>      | `none`    | Rail 的边框.                                                             |

#### 尝试一下！

<Guide-Rail lang="zh" />

### bar

::: tip 介绍
滚动条，类似于原生的滚动条。
:::

::: warning 警告
vRail, hRail, vBar, hBar, pos 都已经失效了。 请用 rail, bar 来代替。 设置 rail，bar 将会对垂直，水平滚动条同时生效。
:::

#### 详细配置

```javascript
  bar: {
   /** 当不做任何操作时滚动条自动消失的时间 */
    showDelay: 500,
    /** 是否只在滚动的时候现实滚动条 */
    onlyShowBarOnScroll: true,
    /** 是否保持显示*/
    keepShow: false,
    /** 背景色*/
    background: '#c1c1c1',
    /**  透明度  */
    opacity: 1,
    /** 当你鼠标移动到滚动条的时候滚动条的样式， 返回一个style对象， 和现在的对象融合*/
    hoverStyle: false,
    /** 是否保持rail显示即使内容高度不足的情况下。 */
    keepShow: false,
    /** Specify bar's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false **/
    specifyBorderRadius: false,
    // Should be false or a number in a range of (0, 1),
    // such as 0.5, means 50%. 0.3 means 30%.
    minSize:  false,
     /** bar's size(Height/Width) , default -> 6px */
    size: '6px'
  }
```

#### 解释

| bar                                                           | 默认值    | 描述                                                                         |
| ------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------- |
| onlyShowBarOnScroll                                           | true      | 是否只在滚动下显示滚动条                                                     |
| showDelay                                                     | 500       | 控制滚动条每次显示多长时间然后自动消失                                       |
| background                                                    | `#4caf50` | 设置滚动条背景色                                                             |
| keepShow                                                      | false     | 设置滚动条是否保持显示                                                       |
| opacity                                                       | 1         | 设置滚动条透明度                                                             |
| hoverStyle                                                    | false     | 只在 PC 上有效，当鼠标指针移上去的时候显示的颜色。                           |
| specifyBorderRadius <Badge text="4.9.0-beta.13+" type="tip"/> | false     | 指定 bar 的 border-radius。                                                  |
| minSize <Badge text="4.9.0-beta.16+" type="tip"/>             | false     | 可以是 false 或一个在(0, 1)之间的一个数组，如 0.25 代表 25%， 0.5 代表 50%。 |
| size <Badge text="4.9.0-beta.18+" type="tip"/>                | 6px       | bar 的尺寸，默认为 6px。                                                     |

#### 尝试一下！

<Guide-Bar lang="zh" />

### scrollButton

#### 详细配置

```javascript
  scrollButton: {
    enable: false,
    background: 'rgb(3, 185, 118)',
    opacity: 1,
    step: 180,
    mousedownStep: 30
  }
```

#### 解释

| scrollButton  | 默认值             | 描述                             |
| ------------- | ------------------ | -------------------------------- |
| enable        | `false`            | 是否启用 scrollButton.           |
| background    | `rgb(3, 185, 118)` | scrollButton 背景色              |
| opacity       | `1`                | scrollButton 透明度              |
| step          | `180`              | 每次点击 scrollButton 滚动的距离 |
| mousedownStep | `30`               | 持续按 scrollButton 时滚动的距离 |

::: tip 注意！
scrollButton 的大小和 rail 的大小有关！
:::

#### 尝试一下！

<Guide-ScrollButton lang="zh" />

## 适用于 slide 模式定制的配置

### vuescroll

#### 详细配置

```javascript
  vuescroll: {
    // pullRefresh or pushLoad is only for the slide mode...
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
    /* shipped scroll options */
    scroller: {
      /*
        允许滚动出边界
        true 或者 false 或者一个数组指定哪个方向可以超出边界，可选项分别是：
        ['top','bottom','left','right']
      */
      bouncing: true,
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
      preventDefaultOnMove: true
    }
  }
```

#### 解释

| 配置项      | 默认    | 描述                         |
| ----------- | ------- | ---------------------------- |
| scroller    | `{}`    | 一些只属于 scroller 的配置。 |
| pullRefresh | `{}`    | 设置刷新相关的配置项.        |
| pushLoad    | `{}`    | 设置加载相关的配置项.        |
| paging      | `false` | 是否启用 paging.             |
| snapping    | `{}`    | 设置快照相关的配置项.        |

##### 下拉刷新

| 配置项 | 默认    | 描述                        |
| ------ | ------- | --------------------------- |
| enable | `false` | 是否启用下拉刷新.           |
| tips   | `{}`    | 设置每个阶段下拉刷新的提示. |

###### 下拉刷新的提示

| 配置项         | 默认                    | 描述                          |
| -------------- | ----------------------- | ----------------------------- |
| active         | `Release to Refresh`    | 在`active`阶段的提示 .        |
| start          | `Refreshing...`         | 在`start`阶段的提示.          |
| beforeDeactive | `Refresh Successfully!` | 在`beforeDeactive`阶段的提示. |
| deactive       | `Pull to Refresh`       | 在`deactive`阶段的提示.       |

##### 上推加载

| 配置项           | 默认    | 描述                        |
| ---------------- | ------- | --------------------------- |
| enable           | `false` | 是否启动上推加载.           |
| tips             | `{}`    | 设置每个上推加载阶段的提示. |
| auto             | `false` | 是否启动自动加载。          |
| autoLoadDistance | `10`    | 最小能激活自动加载的距离。  |

###### 上推加载的提示

| 配置项         | 默认                 | 描述                            |
| -------------- | -------------------- | ------------------------------- |
| active         | `Release to Load`    | 在 `active` 阶段的提示.         |
| start          | `Loading...`         | 在 `start` 阶段的提示.          |
| beforeDeactive | `Load Successfully!` | 在 `beforeDeactive` 阶段的提示. |
| deactive       | `Push to Load`       | 在 `deactive` 阶段的提示.       |

[一个小例子](https://vuescroll-issue-list-demo-qlrlyskaji.now.sh//)

你可以通过[slot](slot.html)来设置不同的加载/刷新动画。
