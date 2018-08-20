---
sidebarDepth: 2
---

# Configuration & Analysis of various parts

Vuescroll's options are composed of four parts, they are `vuescroll`, `scrollPanel`, `bar`, `rail` in turn, each of parts has its own options.**All default configurations can be omitted.**

One of Vuescroll's criteria for determining whether a scrollbar should appear is whether the content height is greater than the container height. The following are analyzed separately.

- Vuescroll: class name: `__vuescroll`. Vuescroll core configuration and outermost container configuration.

- ScrollPanel: class name: `__panel`. Vuescroll includes scrolling related configurations, such as initialization scrolling, scroll animation, etc. In slide mode and native mode, they play different roles respectively.

  - Slide mode: wrapping the contents that we want to scroll. Scroll the content by changing its `tansform:translate` attribute. The height of the content is also calculated by obtaining its `scrollHeight`.
  - Naitve mode: the parent element of the `__view`. By adding `overflow: scroll`to it to produce a native scroll, Vuescroll changes the position of the scrollbar by listening for the native scroll. The height of the content can be calculated by obtaining its `scrollHeight`.How to hide the native scrollbar? Simply put, get the size of the scrollbar first, and then hide the native scrollbar by adding a style.
    1.  First, get the size of the native browser scrollbar. Each browser's scrollbar size is different, some are 0, some are 15, some are 17, we first add a `overflow: scroll`style to the dom, and then calculate the size of the native scrollbar by calculating the`offset Height - client Height' of the dom, see [Get the width of the native scrollbar](https://github.com/YvesCoding/vuescroll/blob/10190631490a726ec6dd5d505415b575ca6e8702/src/shared/util.js#L69).
    2.  Then assume that both horizontal and vertical scroll bars appear, and the size of the scroll bar is `gutter`. The way we hide the horizontal scroll bar is to add a style `calc (100% plus gutterpx)`, Calc is compatible with [ie9](https://developer.mozilla.org/en-US/docs/Web/CSS/calc#Browser_compatibility). The way to hide horizontal scrollbar is to add a `margin-right: -gutterpx`to hide the native scrollbars.

## Basic Configurations

### vuescroll

::: tip Introduction
Vuescroll here is just an **option** here, not vuescroll component itself. Set the vuescroll option can result in a break change of vuescroll component.
:::

#### Detailed Options

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

#### Explanation

| option       | default   | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode         | `native`  | Choose a mode of vuescroll, **native** or **slide** or **pure-native**(new in 4.5.0). See more, please checkout [Features](http://vuescrolljs.yvescoding.org/guide/#features)                                                                                                                                                                                                                                                                                                                      |
| sizeStrategy | `percent` | Set the type of the size of `vuescroll`. The optional configs are `percent`, `number`.When set to `percent`, vuescroll's height will be `100%` and width will be `100%`, and set to `number`, vuescroll will calculate its parent dom's size automatically, and set `height` and `width` to the corresponding values. A small tip: If parent dom's size is a percent value, I suggest you to set to `number`， and if parent dom's size is a fixed `px` value， I suggest you to set to `percent`. |
| detectResize | `true`    | Whether to detect dom resize or not                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### scrollPanel

::: tip Introduction
scrollPanel is a wrap of content. We just change scrollPanel's scrollTop or scrollLeft to make content moved.
:::

#### Detailed Options

```javascript
  scrollPanel: {
    // when component mounted.It will automatically scroll to the given position.
    initialScrollY: false,
    initialScrollX: false,
    // feat: #11. Whether enable scrollingX , scrollingY or not.
    scrollingX: true,
    scrollingY: true,
    // scroll speed, it works when you click the rail or use
    // scrollTo api.
    speed: 300,
    // scroll animation
    easing: undefined,
    // Whether there is a padding or not, its size should be
    // equal to rail/bar's size.
    padding: true
  }
```

#### Explanation

| option         | default | description                                                                                                                                                                            |
| -------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initialScrollY | `false` | The vertical distance that will scroll while component has mounted.e.g.**100** or **10%**                                                                                              |
| initialScrollX | `false` | The horizontal distance that will scroll while component has mounted.e.g.**100** or **10%**                                                                                            |
| speed          | `300`   | The time that scrollPanel scrolls completely.                                                                                                                                          |
| easing         | `null`  | The scrolling animation,You can checkout this [demo](http://vuescrolljs.yvescoding.org/demo/#vuescroll-supports-setting-keep-show-or-not-and-background) for all available animations. |
| padding        | `true`  | Set a padding of panel. Prevent the rail or bar from blocking a part of content.                                                                                                       |

[Try scrollPanel options on Codepen](https://codepen.io/wangyi7099/pen/mxBdER)

### rail

::: tip Introduction
The place where srollbar moves.
:::

#### Detailed Options

```javascript
  rail: {
    background: '#01a99a',
    opacity: 0,
    /** Rail's size(Height/Width) , default -> 6px */
    size: '6px'
  }
```

#### Explanation

| rail       | defaultValue | description                            |
| ---------- | ------------ | -------------------------------------- |
| background | `#a5d6a7`    | Set the rail's background              |
| size       | `6px`        | Set the scrollbar and the rail's width |
| opacity    | 0            | Set the rail's opacity                 |

[Try rail option on Codepen](https://codepen.io/wangyi7099/pen/BrwBGp)

### bar

::: tip Introduction
Scrollbar, like native scrollbar.
:::

::: warning
vRail, hRail, vBar, hBar, pos have been deprecated, use rail, bar instead。 set rail，bar will work for both vertical and horizontal.
:::

#### Detailed Options

```javascript
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
```

#### Explanation

| bar                 | defaultValue | description                                                                              |
| ------------------- | ------------ | ---------------------------------------------------------------------------------------- |
| showDelay           | 500          | Control how long the scrollbar is displayed every time and then disappear automatically. |
| onlyShowBarOnScroll | true         | Only show bar when scrolling                                                             |
| background          | `#4caf50`    | Set the scrollbar's background                                                           |
| keepShow            | false        | Set whether the scrollbars will keep showing or not.                                     |
| opacity             | 1            | Set the opacity of scrollbar.                                                            |
| hoverStyle          | false        | Styles when you hover scrollbar, it will merge into the current style                    |

[Try bar option on Codepen](https://codepen.io/wangyi7099/pen/GxMLjd)

## Configurations are only for slide mode

### vuescroll

#### Detailed Options

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

#### Explanation

| option       | default | description                                |
| ------------ | ------- | ------------------------------------------ |
| scroller     | `{}`    | Some options that only belong to scroller. | pullRefresh | `{}` | Set the options about the refresh. |
| detectResize | `true`  | Whether to detect dom resize or not        |
| pushLoad     | `{}`    | Set the options about the load.            |
| paging       | `false` | Enable Paging or not.                      |
| snapping     | `{}`    | Set the options about the snapping.        |

##### pullRefresh

| option | default | description                                        |
| ------ | ------- | -------------------------------------------------- |
| enable | `false` | Whether enable pull-refresh or not.                |
| tips   | `{}`    | Set the tips about the pull-refresh in each stage. |

###### pull-refresh Tips

| option         | default                 | description              |
| -------------- | ----------------------- | ------------------------ |
| deactive       | `Pull to Refresh`       | In deactive stage.       |
| active         | `Release to Refresh`    | In active stage.         |
| start          | `Refreshing...`         | In start stage.          |
| beforeDeactive | `Refresh Successfully!` | In beforeDeactive stage. |

##### push-load

| option | default | description                                     |
| ------ | ------- | ----------------------------------------------- |
| enable | `false` | If enable push-load.                            |
| tips   | `{}`    | Set the tips about the push-load in each stage. |

###### push-load tips

| option         | default              | description                     |
| -------------- | -------------------- | ------------------------------- |
| active         | `Release to Load`    | Tips in `active` stage.         |
| start          | `Loading...`         | Tips in `start` stage.          |
| beforeDeactive | `Load Successfully!` | Tips in `beforeDeactive` stage. |
| deactive       | `Push to Load`       | Tips in `deactive` stage.       |

[A small example](https://vuescroll-issue-list-demo-zdizhghthq.now.sh/)

## Global & full Config

> To set styles for all vuescroll components in the page, you can set `Vue.prototype.$vuescrollConfig`, or via `Vue.use` to pass a **global default** config e.g.

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll';

Vue.use(vuescroll); // install the vuescroll first
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#000'
  }
};

/**
 * or
 */
Vue.use(vuescroll, {
  ops: {
    // Pass global default config
  },
  name: 'myScroll' // customize component name, default -> vueScroll
});
```

And the complete global config is

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
    easing: undefined,
    // Setting padding to true can give a padding-right to panel which size is equal
    // to rail/bar's size.
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
