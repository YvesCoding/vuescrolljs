---
sidebarDepth: 2
---

# 配置项

Vuescroll 的配置项是由 5 部分组成的, 它们是 `vuescroll`, `scrollPanel`, `scrollContent`, `bar`, `rail` 每个部分都有相应的配置项。

## vuescroll

::: tip 介绍
这里的 vuescroll 仅仅是一个**配置项**, 而不是 vuescroll 组件本身. 设置 vuescroll 的配置项会导致决定性的变动。
:::

### 详细配置

```javascript
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
      }
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
      /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
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
      preventDefault: true
    }
  }
```

### 解释

| 配置项       | 默认      | 描述                                                                                                                                                                                                                                                                                                                                              |
| ------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode         | `native`  | 选择 vuescroll 一个模式, **native** 或者 **slide** 或者 **pure-native**(在 4.5.0 里面新增的！). 获取更多信息, 请查看[特点](http://vuescrolljs.yvescoding.org/zh/guide/#features)                                                                                                                                                                  |
| sizeStrategy | `percent` | 设置 `vuescroll`的大小类型， 可选的有`percent`, `number`. 设置为`percent`会把 vuescroll 的 height 和 width 设置成`100%`,设置成`number`的话 vuescroll 会自动计算父元素的大小，并将`height`和`width`设置成对应的数值。提示， 如果父元素的尺寸为百分比大小时建议设置成`number`， 如果父元素大小为一个固定的`px`的值， 那么设置为百分比比较合适一些。 |
| scroller     | `{}`      | 一些只属于 scroller 的配置。                                                                                                                                                                                                                                                                                                                      |
| pullRefresh  | `{}`      | 设置刷新相关的配置项.                                                                                                                                                                                                                                                                                                                             |
| pushLoad     | `{}`      | 设置加载相关的配置项.                                                                                                                                                                                                                                                                                                                             |
| paging       | `false`   | 是否启用 paging.                                                                                                                                                                                                                                                                                                                                  |
| snapping     | `{}`      | 设置快照相关的配置项.                                                                                                                                                                                                                                                                                                                             |
| detectResize | `true`    | 是否开启监听 dom resize                                                                                                                                                                                                                                                                                                                           |

#### pullRefresh

| 配置项 | 默认    | 描述                        |
| ------ | ------- | --------------------------- |
| enable | `false` | 是否启用下拉刷新.           |
| tips   | `{}`    | 设置每个阶段下拉刷新的提示. |

##### 下拉刷新的提示

| 配置项         | 默认                    | 描述                          |
| -------------- | ----------------------- | ----------------------------- |
| active         | `Release to Refresh`    | 在`active`阶段的提示 .        |
| start          | `Refreshing...`         | 在`start`阶段的提示.          |
| beforeDeactive | `Refresh Successfully!` | 在`beforeDeactive`阶段的提示. |
| deactive       | `Pull to Refresh`       | 在`deactive`阶段的提示.       |

#### push-load

| 配置项 | 默认    | 描述                        |
| ------ | ------- | --------------------------- |
| enable | `false` | 是否启动上推加载.           |
| tips   | `{}`    | 设置每个上推加载阶段的提示. |

##### 上推加载的提示

| 配置项         | 默认                 | 描述                            |
| -------------- | -------------------- | ------------------------------- |
| active         | `Release to Load`    | 在 `active` 阶段的提示.         |
| start          | `Loading...`         | 在 `start` 阶段的提示.          |
| beforeDeactive | `Load Successfully!` | 在 `beforeDeactive` 阶段的提示. |
| deactive       | `Push to Load`       | 在 `deactive` 阶段的提示.       |

[一个小例子](http://vuescroll-demo.yvescoding.org:8080/)

## scrollPanel

::: tip 介绍
scrollPanel 内容的包装. 我们通过改变 scrollPanel 的 scrollLeft 和 scrollTop 来使内容移动。
:::

### 详细配置

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
    easing: undefined
  }
```

### 解释

| 配置项         | 默认    | 描述                                                                                                                                              |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| initialScrollY | `false` | 垂直方向上的滚动距离在组件加载完以后.比如.**100** 或 **10%**                                                                                      |
| initialScrollX | `false` | 水平方向上的滚动距离在组件加载完以后.比如.**100** 或 **10%**                                                                                      |
| speed          | `300`   | 滚动的事件。                                                                                                                                      |
| easing         | `null`  | 滚动的动画，[详细的在这里](https://github.com/wangyi7099/vuescroll/blob/55599a607793549109f098125e225b0f51d7d745/src/easingPattern/index.js#L19). |

[在 codePen 上尝试 scrollPanel](https://codepen.io/wangyi7099/pen/mxBdER)

## scrollContent

::: tip 介绍
scrollContent 是滚动的内容的包装。vuescroll 通过 scrollContent 来计算滚动内容的大小。
:::

### 详细配置

```javascript
scrollContent: {
  // 自定义scrollContent的标签
  padding: true;
}
```

### 解释

| 配置项  | 默认值 | 描述                                                       |
| ------- | ------ | ---------------------------------------------------------- |
| padding | `true` | 设置是否启用 padding。可以用来阻止内容被滚动条遮住一部分。 |

::: warning 警告
`Tag` 和 `Props` 已经 **过期了**, 如果你想自定义 scrollContent, 请考虑 [slot](slot.md)
:::

## rail

::: tip 介绍
滚动条滚动的地方.
:::

### 详细配置

```javascript
  rail: {
    rail: {
      background: '#01a99a',
      opacity: 0,
      /** Rail's size(Height/Width) , default -> 6px */
      size: '6px'
    }
  }
```

### 解释

| rail       | 默认      | 描述                 |
| ---------- | --------- | -------------------- |
| background | `#01a99a` | 设置滚动轨道背景色。 |
| size       | `5px`     | 设置轨道的尺寸       |
| opacity    | 0         | s 设置轨道的透明度。 |

[在 Codepen 上尝试](https://codepen.io/wangyi7099/pen/BrwBGp)

## bar

::: tip 介绍
滚动条，类似于原生的滚动条。
:::

::: warning 警告
vRail, hRail, vBar, hBar, pos 都已经失效了。 请用 rail, bar 来代替。 设置 rail，bar 将会对垂直，水平滚动条同时生效。
:::

### 详细配置

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
    hoverStyle: false
  }
```

### 解释

| bar                 | 默认值    | 描述                                               |
| ------------------- | --------- | -------------------------------------------------- |
| onlyShowBarOnScroll | true      | 是否只在滚动下显示滚动条                           |
| showDelay           | 500       | 控制滚动条每次显示多长时间然后自动消失             |
| background          | `#4caf50` | 设置滚动条背景色                                   |
| keepShow            | false     | 设置滚动条是否保持显示                             |
| opacity             | 1         | 设置滚动条透明度                                   |
| hoverStyle          | false     | 只在 PC 上有效，当鼠标指针移上去的时候显示的颜色。 |

[在 Codepen 上尝试](https://codepen.io/wangyi7099/pen/GxMLjd)

## 全局配置

> 全局属性也是完整的配置项属性，想要设置统一的样式在 vuescroll 里面, 你可以修改`Vue.prototype.$vuescrollConfig`. 例如：

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll';

Vue.use(vuescroll); // install the vuescroll first
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#000'
  }
};
```

完整的全局配置：

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
      }
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
      /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
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
      preventDefault: true
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
    easing: undefined
  },
  //
  scrollContent: {
    padding: false
  },
  //
  rail: {
    background: '#01a99a',
    opacity: 0,
    /** Rail's size(Height/Width) , default -> 6px */
    size: '6px'
  },
  bar: {
    /** How long to hide bar after mouseleave, default -> 500 */
    showDelay: 500,
    /** Whether to show bar on scrolling, default -> true */
    onlyShowBarOnScroll: true,
    /** Whether to keep show or not, default -> false */
    keepShow: false,
    /** Bar's background , default -> #00a650 */
    background: '#c1c1c1',
    /** Bar's opacity, default -> 1  */
    opacity: 1,
    /** Styles when you hover scrollbar, it will merge into the current style */
    hoverStyle: false
  }
};
```
