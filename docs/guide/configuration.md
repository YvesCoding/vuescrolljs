---
sidebarDepth: 2
---

# Configuration

Vuescroll's options are composed of five parts, they are `vuescroll`, `scrollPanel`, `bar`, `rail`, `scrollButton` respectively.

## Full Config Preview

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
        Allow to scroll out of boundaries
        true or false or an array specify which direction can be
        bounced. The options can be:
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

## Common Config

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

#### Have a try !

<Guide-BaseConfig />

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
    // Sometimes, the nativebar maybe on the left,
    // See https://github.com/YvesCoding/vuescroll/issues/64
    verticalNativeBarPos: 'right'
  }
```

#### Explanation

| option                                                 | default | description                                                                                                                                                                            |
| ------------------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initialScrollY                                         | `false` | The vertical distance that will scroll while component has mounted.e.g.**100** or **10%**                                                                                              |
| initialScrollX                                         | `false` | The horizontal distance that will scroll while component has mounted.e.g.**100** or **10%**                                                                                            |
| speed                                                  | `300`   | The time that scrollPanel scrolls completely.                                                                                                                                          |
| easing                                                 | `null`  | The scrolling animation,You can checkout this [demo](http://vuescrolljs.yvescoding.org/demo/#vuescroll-supports-setting-keep-show-or-not-and-background) for all available animations. |
| verticalNativeBarPos <Badge text="4.8.2+" type="tip"/> | `right` | Sometimes, the nativebar maybe on the left . `right` or `left`.                                                                                                                        |

#### Have a try !

<Guide-ScrollPanel />

### rail

::: tip Introduction
The place where srollbar moves.
:::

#### Detailed Options

```javascript
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
  }
```

#### Explanation

| rail                                                  | defaultValue | description                                                                                                                   |
| ----------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| background                                            | `#a5d6a7`    | Set the rail's background                                                                                                     |
| size                                                  | `6px`        | Set the scrollbar and the rail's width                                                                                        |
| opacity                                               | `0`          | Set the rail's opacity                                                                                                        |
| specifyBorderRadius <Badge text="4.8.0+" type="tip"/> | `false`      | Specify rail and bar's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false |
| gutterOfEnds <Badge text="4.8.1+" type="tip"/>        | `2px`        | Rail the distance from the two ends of the X axis and Y axis.                                                                 |
| gutterOfSide <Badge text="4.8.1+" type="tip"/>        | `2px`        | Rail the distance from the side of container.                                                                                 |
| keepShow <Badge text="4.8.2+" type="tip"/>            | `false`      | Whether to keep rail show or not.                                                                                             |
| border <Badge text="4.9.0-beta.13+" type="tip"/>      | `none`       | Rail's border.                                                                                                                |

#### Have a try!

<Guide-Rail />

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
    hoverStyle: false，
    /** Specify bar's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false **/
    specifyBorderRadius: false,
    // Should be false or a number in a range of (0, 1),
    // such as 0.5, means 50%. 0.3 means 30%.
    minSize: false,
    /** bar's size(Height/Width) , default -> 6px */
    size: '6px'
  }
```

#### Explanation

| bar                                                           | defaultValue | description                                                                              |
| ------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------- |
| onlyShowBarOnScroll                                           | true         | Whether to show bar on scrolling, default -> true                                        |
| showDelay                                                     | 500          | How long to hide bar after mouseleave, default -> 500                                    |
| background                                                    | `#4caf50`    | Bar's background , default -> #00a650                                                    |
| keepShow                                                      | false        | Whether to keep show or not, default -> false                                            |
| opacity                                                       | 1            | Bar's opacity, default -> 1                                                              |
| hoverStyle                                                    | false        | Styles when you hover scrollbar, it will merge into the current style                    |
| specifyBorderRadius <Badge text="4.9.0-beta.13+" type="tip"/> | false        | specify bar's border-radius。                                                            |
| minSize <Badge text="4.9.0-beta.16+" type="tip"/>             | false        | Should be false or a number in a range of (0, 1), such as 0.5, means 50%. 0.3 means 30%. |
| size <Badge text="4.9.0-beta.18+" type="tip"/>                | 6px          | Bar size, default to 6px.                                                                |

#### Have a try!

<Guide-Bar />

### scrollButton

#### Detailed Options

```javascript
  scrollButton: {
    enable: false,
    background: 'rgb(3, 185, 118)',
    opacity: 1,
    step: 180,
    mousedownStep: 30
  }
```

#### Explanation

| scrollButton  | defaultValue       | description                                                     |
| ------------- | ------------------ | --------------------------------------------------------------- |
| enable        | `false`            | Whether to enable scrollButton.                                 |
| background    | `rgb(3, 185, 118)` | scrollButton's background.                                      |
| opacity       | `1`                | scrollButton's opacity.                                         |
| step          | `180`              | The distance to scroll each time you click the scrollButton.    |
| mousedownStep | `30`               | The distance to scroll when you hold pressing the scrollButton. |

::: tip Note!
The size of scrollButton depends on the size of rail!
:::

#### Have a try!

<Guide-ScrollButton />

## Config for slide mode

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
        Allow to scroll out of boundaries
        true or false or an array specify which direction can be
        bounced. The options can be:
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

| option           | default | description                                     |
| ---------------- | ------- | ----------------------------------------------- |
| enable           | `false` | If enable push-load.                            |
| tips             | `{}`    | Set the tips about the push-load in each stage. |
| auto             | `false` | Whether enable auto-load or not.                |
| autoLoadDistance | `10`    | The min distance of activating load.            |

###### push-load tips

| option         | default              | description                     |
| -------------- | -------------------- | ------------------------------- |
| active         | `Release to Load`    | Tips in `active` stage.         |
| start          | `Loading...`         | Tips in `start` stage.          |
| beforeDeactive | `Load Successfully!` | Tips in `beforeDeactive` stage. |
| deactive       | `Push to Load`       | Tips in `deactive` stage.       |

[A small example](https://vuescroll-issue-list-demo-qlrlyskaji.now.sh//)

You can set different refreh/load animations via [slot](slot.html).
