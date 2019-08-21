---
sidebarDepth: 2
---

# Configuration

Vuescroll's options are composed of five parts, they are `vuescroll`, `scrollPanel`, `bar`, `rail`, `scrollButton` respectively.

## vuescroll

### Overview

```javascript
  vuescroll: {
    mode: 'native',
    sizeStrategy: 'percent',
    detectResize: true
  }
```

### mode

- Type: `native|slide`

* Default: `native`

Choose a mode of vuescroll, **native** or **slide**。

### sizeStrategy

- Type: `number|percent`

* Default: `percent`

If the parent container is not at a fixed height, set it to `number`, or keep the default `percent`.

### detectResize

- Type: `boolean`

* Default: `true`

Whether to detect dom resize or not

### Have a try

<Guide-BaseConfig />

## scrollPanel

::: tip Introduction
scrollPanel is a wrap of content. We just change scrollPanel's scrollTop or scrollLeft to make content moved.
:::

### Overview

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

- Type: `number|string||false`

- Default: `false`

The distance that will scroll as soon as the component mounts .e.g.**100** or **10%**

### scrollingX/scrollingY

- Type: `blloeane`

- Default: `true`

Whether to enable scrolling in the X or Y direction

### speed

- Type: `number`

- Default: `300`

The time required to complete the scroll,the smaller the value, the faster the speed

### easing

- Type: `string|undefined`

- Default: `undefined`

Scrolling animations. All the animations are as follows:

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

- Type: `right|left`

- Default: `right`

The ntive vertical scrollbar position.

### Have a try

<Guide-ScrollPanel />

## rail

### Overview

::: tip Introduction
The place where srollbar moves.
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

- Type: `string`

- Default: `#a5d6a7`

Rail's background

### size

- Type: `string`

- Default: `6px`

Rail's size.

### opacity

- Type: `number`

- Default: `0`

Rail's opacity

### specifyBorderRadius

- Type: `false|string`

- Default: `false`

Specify rail's border-radius, or the border-radius of rail will be set automatically.

### gutterOfEnds

- Type: `string`

- Default: `2px`

The distance from the two ends of the X axis and Y axis.

### gutterOfSide

- Type: `string`

- Default: `2px`

The distance from the side of container.

### keepShow

- Type: `boolean`

- Default: `false`

Whether to keep showing rail even there is no bar.

### border

- Type: `string`

- Default: `none`

Rail's border.

### Have a try!

<Guide-Rail />

## bar

::: tip Introduction
Scrollbar, like native scrollbar.
:::

::: warning
vRail, hRail, vBar, hBar, pos have been deprecated, use rail, bar instead。 set rail，bar will work for both vertical and horizontal.
:::

### Overview

```javascript
  bar: {
    showDelay: 500,
    onlyShowBarOnScroll: true,
    keepShow: false,
    background: '#c1c1c1',
    opacity: 1,
    hoverStyle: false，
    specifyBorderRadius: false,
    minSize: 0,
    size: '6px',
    disable: false
  }
```

### onlyShowBarOnScroll

- Type: `boolean`

- Default: `true`

Whether to only show bar while scrolling,

### showDelay

- Type: `number`

- Default: `500`

How long to hide bar after mouseleave,

### background

- Type: `string`

- Default: `#4caf50`

Bar's background.

### keepShow

- Type: `boolean`

- Default: `false`

Whether to keep showing or not,

### opacity

- Type: `number`

- Default: `1`

Bar's opacity,

### specifyBorderRadius

- Type: `false|string`

- Default: `false`

Specify bar's border radius, or it will be consistent with rail's.

### minSize

- Type: `number`

- Default: `0`

Set a min size for bar, from 0 to 1. Like 0.3, represents 30%.

### disable

- Type: `boolean`

- Default: `false`

Whether to disable bar.

### size

- Type: `string`

- Default: `6px`

Bar's width or size.

### Have a try!

<Guide-Bar />

## scrollButton

### Overview

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

- Type: `blloean`

- Default: `false`

Whether to enable scrollButton.

### background

- Type: `string`

- Default: `rgb(3, 185, 118)`

scrollButton's background.

### opacity

- Type: `number`

- Default: `1`

scrollButton's opacity.

### step

- Type: `number`

- Default: `180`

The distance to scroll each time you click the scrollButton.

### mousedownStep

- Type: `number`

- Default: `30`

The distance to scroll when you hold pressing the scrollButton.

### Have a try!

<Guide-ScrollButton />

## vuescroll(native mode)

### OverView

```javascript
vuescroll: {
  wheelScrollDuration: 0,
  wheelDirectionReverse: false
}
```

### wheelScrollDuration

- Type: `number`
- Default: `0`

The time it takes for the mouse wheel to scroll for a certain distance.

### wheelDirectionReverse

- Type: `boolean`
- Default: `false`

Whether to make wheel scrolling's direction reverse.

## vuescroll(Slide mode)

### OverView

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

- Type: `Object`

- Default:

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

- Type: `Object`

- Default:

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

- Type: `boolean`
- Default: `false`

Whether the load is triggered automatically.

### pushLoad.autoLoadDistance

- Type: `number`
- Default: `0`

The distance from the bottom to trigger the automatic loading.

### Have a try

[A small example](https://vuescroll-issue-list-demo-qlrlyskaji.now.sh//)

You can alse set different refreh/load animations via [slot](slot.html).
