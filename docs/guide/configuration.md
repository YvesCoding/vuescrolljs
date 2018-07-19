---
sidebarDepth: 2
---

# Configuration

Vuescroll's options are composed of five parts, they are `vuescroll`, `scrollPanel`, `scrollContent`, `bar`, `rail` in turn, each of parts has its own options.

## vuescroll

::: tip Introduction
Vuescroll here is just an **option** here, not vuescroll component itself. Set the vuescroll option can result in a break change of vuescroll component.
:::

### Detailed Options

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

### Explanation

| option       | default   | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode         | `native`  | Choose a mode of vuescroll, **native** or **slide** or **pure-native**(new in 4.5.0). See more, please checkout [Features](http://vuescrolljs.yvescoding.org/guide/#features)                                                                                                                                                                                                                                                                                                                      |
| sizeStrategy | `percent` | Set the type of the size of `vuescroll`. The optional configs are `percent`, `number`.When set to `percent`, vuescroll's height will be `100%` and width will be `100%`, and set to `number`, vuescroll will calculate its parent dom's size automatically, and set `height` and `width` to the corresponding values. A small tip: If parent dom's size is a percent value, I suggest you to set to `number`， and if parent dom's size is a fixed `px` value， I suggest you to set to `percent`. |
| scroller     | `{}`      | Some options that only belong to scroller.                                                                                                                                                                                                                                                                                                                                                                                                                                                         | pullRefresh | `{}` | Set the options about the refresh. |
| detectResize | `true`    | Whether to detect dom resize or not                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| pushLoad     | `{}`      | Set the options about the load.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| paging       | `false`   | Enable Paging or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| snapping     | `{}`      | Set the options about the snapping.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### pullRefresh

| option | default | description                                        |
| ------ | ------- | -------------------------------------------------- |
| enable | `false` | Whether enable pull-refresh or not.                |
| tips   | `{}`    | Set the tips about the pull-refresh in each stage. |

##### pull-refresh Tips

| option         | default                 | description              |
| -------------- | ----------------------- | ------------------------ |
| deactive       | `Pull to Refresh`       | In deactive stage.       |
| active         | `Release to Refresh`    | In active stage.         |
| start          | `Refreshing...`         | In start stage.          |
| beforeDeactive | `Refresh Successfully!` | In beforeDeactive stage. |

#### push-load

| option | default | description                                     |
| ------ | ------- | ----------------------------------------------- |
| enable | `false` | If enable push-load.                            |
| tips   | `{}`    | Set the tips about the push-load in each stage. |

##### push-load tips

| option         | default              | description                     |
| -------------- | -------------------- | ------------------------------- |
| active         | `Release to Load`    | Tips in `active` stage.         |
| start          | `Loading...`         | Tips in `start` stage.          |
| beforeDeactive | `Load Successfully!` | Tips in `beforeDeactive` stage. |
| deactive       | `Push to Load`       | Tips in `deactive` stage.       |

[A small example](http://vs-issue-list-demo.yvescoding.org/)

## scrollPanel

::: tip Introduction
scrollPanel is a wrap of content. We just change scrollPanel's scrollTop or scrollLeft to make content moved.
:::

### Detailed Options

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
    easing: undefined
  }
```

### Explanation

| option         | default | description                                                                                                                                                 |
| -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initialScrollY | `false` | The vertical distance that will scroll while component has mounted.e.g.**100** or **10%**                                                                   |
| initialScrollX | `false` | The horizontal distance that will scroll while component has mounted.e.g.**100** or **10%**                                                                 |
| speed          | `300`   | The time that scrollPanel scrolls completely.                                                                                                               |
| easing         | `null`  | The scrolling animation,[see detail](https://github.com/wangyi7099/vuescroll/blob/55599a607793549109f098125e225b0f51d7d745/src/easingPattern/index.js#L19). |

[Try scrollPanel options on Codepen](https://codepen.io/wangyi7099/pen/mxBdER)

## scrollContent

::: tip Introduction
scrollContent is a warp of the content you want to scroll. vuescroll uses it to calculate the height or the width of the content.
:::

### Detailed Options

```javascript
scrollContent: {
  padding: true;
}
```

### Explanation

| option  | defaultValue | description                                                                              |
| ------- | ------------ | ---------------------------------------------------------------------------------------- |
| padding | `true`       | Set a padding of scrollContent. Prevent the rail or bar from blocking a part of content. |

::: warning
`Tag` and `Props` have been **deprecated**, if you want to custimze scrollContent, please consider use [slot](slot.md)
:::

## rail

::: tip Introduction
The place where srollbar moves.
:::

### Detailed Options

```javascript
  rail: {  
    background: '#01a99a',
    opacity: 0,
    /** Rail's size(Height/Width) , default -> 6px */
    size: '6px'
  }
```

### Explanation

| rail       | defaultValue | description                            |
| ---------- | ------------ | -------------------------------------- |
| background | `#a5d6a7`    | Set the rail's background              |
| size       | `6px`        | Set the scrollbar and the rail's width |
| opacity    | 0            | Set the rail's opacity                 |

[Try rail option on Codepen](https://codepen.io/wangyi7099/pen/BrwBGp)

## bar

::: tip Introduction
Scrollbar, like native scrollbar.
:::

::: warning
vRail, hRail, vBar, hBar, pos have been deprecated, use rail, bar instead。 set rail，bar will work for both vertical and horizontal.
:::

### Detailed Options

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

### Explanation

| bar                 | defaultValue | description                                                                               |
| ------------------- | ------------ | ----------------------------------------------------------------------------------------- |
| showDelay           | 500          | Control how long the scroll bar is displayed every time and then disappear automatically. |
| onlyShowBarOnScroll | true         | Only show bar when scrolling                                                              |
| background          | `#4caf50`    | Set the scrollbar's background                                                            |
| keepShow            | false        | Set whether the scrollbars will keep showing or not.                                      |
| opacity             | 1            | Set the opacity of scrollbar.                                                             |
| hoverStyle          | false        | Styles when you hover scrollbar, it will merge into the current style                     |

[Try bar option on Codepen](https://codepen.io/wangyi7099/pen/GxMLjd)

## Global Config

> To set styles for all vuescroll components in the page, you can set `Vue.prototype.$vuescrollConfig`. e.g.

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
