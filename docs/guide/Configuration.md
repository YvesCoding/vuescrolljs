---
sidebarDepth: 2
---
# Configuration

Vuescroll options is composed of five parts, they are `vuescroll`, `scrollPanel`, `scrollContent`, `bar`, `rail` in turn, each of parts has its own options. 

## vuescroll
::: tip Introduction
Vuescroll here is just an **option** here, not vuescroll component itself. Set the vuescroll option can result in a break change of vuescroll component.
:::
### Detailed Options
```javascript
  // vuescroll
  vuescroll: {
    mode: "native",
    // pullRefresh and pushLoad are only for the slide mode...
    pullRefresh: {
      enable: false,
      tips: {
        deactive: "Pull to Refresh",
        active: "Release to Refresh",
        start: "Refreshing...",
        beforeDeactive: "Refresh Successfully!"
      }
    },
    pushLoad: {
      enable: false,
      tips: {
        deactive: "Push to Load",
        active: "Release to Load",
        start: "Loading...",
        beforeDeactive: "Load Successfully!"
      }
    },
    // enable paging? Only for slide mode
    paging: false,
    // enable snapping? Only for slide mode
    snapping: {
      enable: false,
      width: 100,
      height: 100
    }
  }
```
### Explanation
option|default|description
-----|------------|----
mode|`native`| Choose a mode of vuescroll, **native** or **slide** or **pure-native**(new in 4.5.0).
pullRefresh|`{}`| Set the options about the refresh.
pushLoad|`{}`| Set the options about the load.
paging|`false`| Enable Paging or not.
snapping|`{}`| Set the options about the snapping.
#### pullRefresh
option|default|description
-----|------------|----
enable|`false`| Whether enable pull-refresh or not.
tips|`{}`| Set the tips about the pull-refresh in each stage.

##### pull-refresh Tips
option|default|description
-----|------------|----
deactive|`Pull to Refresh`| In deactive stage.
active|`Release to Refresh`| In active stage.
start|`Refreshing...`| In start stage.
beforeDeactive|`Refresh Successfully!`| In beforeDeactive stage.

#### push-load
option|default|description
-----|------------|----
enable|`false`| If enable push-load.
tips|`{}`| Set the tips about the push-load in each stage.

##### push-load tips
option|default|description
-----|------------|----
active|`Release to Load`| Tips in `active` stage.
start|`Loading...`| Tips in `start` stage.
beforeDeactive|`Load Successfully!`| Tips in `beforeDeactive` stage.
deactive|`Push to Load`| Tips in `deactive` stage.

[Try on CodePen](https://codepen.io/wangyi7099/pen/xjKORx)

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

option|default|description
-----|------------|----
initialScrollY|`false`|The vertical distance  that will scroll while component has mounted.e.g.**100** or **10%**
initialScrollX|`false`|The horizontal distance  that will scroll while component has mounted.e.g.**100** or **10%**
speed|`300`|The time that scrollPanel scrolls completely.
easing|`null`|The scrolling animation,[see detail](https://github.com/wangyi7099/vuescroll/blob/5f81713b5a741684cdaded0e647390d61a14fa46/src/util/index.js#L182).

[Try scrollPanel options on Codepen](https://codepen.io/wangyi7099/pen/mxBdER)

## scrollContent

::: tip Introduction
scrollContent is a warp of the content you want to scroll. vuescroll uses it to calculate the height or the width of the content.
:::

### Detailed Options
```javascript
  scrollContent: {
    // customize tag of scrollContent
    tag: "div",
    padding: true,
    props: {
    },
    attrs: {
    }
  }
```
### Explanation

option|defaultValue|description
-----|------------|----
padding|`true`|Set a padding of scrollContent. Prevent the rail or bar from blocking a part of content. 
tag|`div`| Customize the tag.
props|`{}`|If tag represents a component, you can pass the `props`. 
attrs|`{}`|If tag represents a component, you can pass the `attrs`.[Reference](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth) 

[Try scrollContent options on Codepen](https://codepen.io/wangyi7099/pen/GxMYpa)

## rail

::: tip Introduction
   The place where srollbar moves.
:::

### Detailed Options
```javascript
  rail: {
    vRail: {
      width: "5px",
      pos: "right",
      background: "#a5d6a7",
      opacity: 0 //'0.5'
    },
    // 
    hRail: {
      height: "5px",
      pos: "bottom",
      background: "#a5d6a7",
      opacity: 0 //'0.5'
    }
  }
```
### Explanation

vRail/hRail|defaultValue|description
-----|------------|-
background|`#a5d6a7`|Set the rail's background
width/height|`5px`|Set the scrollbar and the rail's width
pos|`right(vBar,vRail)/bottom/(hBar, hRail)`|Set the position of rail and
bar.
opacity|0|Set the rail's  opacity 
[Try rail option on Codepen](https://codepen.io/wangyi7099/pen/BrwBGp)

## bar
::: tip Introduction
  Scrollbar, like native scrollbar.
:::

::: warning
  You can't set the `pos` or `width` in `bar` option. All these should  be set in `rail` option.
:::
### Detailed Options
```javascript
  bar: {
    // 
    vBar: {
      background: "#4caf50",
      deltaY: 100,
      keepShow: false,
      opacity: 1,
      hover: false
    },
    // 
    hBar: {
      background: "#4caf50",
      keepShow: false,
      opacity: 1,
      hover: false
    } 
  }
```
### Explanation

vBar/hBar|defaultValue|description
-----|------------|----
background|`#4caf50`| Set the scrollbar's background
keepShow|false|Set whether the scrollbars will keep showing or not.
opacity|1|Set the opacity of scrollbar.
hover|false|Only for PC, the background color when mouse pointer hovers.

[Try bar option on Codepen](https://codepen.io/wangyi7099/pen/GxMLjd)

## Global Config

> To set styles for all vuescroll components in the page, you can set `Vue.prototype.$vuescrollConfig`. e.g.
```javascript
  import Vue from 'vue'
  import vuescroll from 'vuescroll'

  Vue.use(vuescroll); // install the vuescroll first
  Vue.prototype.$vuescrollConfig = {
    bar: {
      vBar: {
        background: '#000'
      }
    }
  }
```

And the complete global config is
```javascript
export default {
  // vuescroll
  vuescroll: {
    mode: "native",
    // pullRefresh or pushLoad is only for the slide mode...
    pullRefresh: {
      enable: false,
      tips: {
        deactive: "Pull to Refresh",
        active: "Release to Refresh",
        start: "Refreshing...",
        beforeDeactive: "Refresh Successfully!"
      }
    },
    pushLoad: {
      enable: false,
      tips: {
        deactive: "Push to Load",
        active: "Release to Load",
        start: "Loading...",
        beforeDeactive: "Load Successfully!"
      }
    },
    paging: false,
    snapping: {
      enable: false,
      width: 100,
      height: 100
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
    // customize tag of scrollContent
    tag: "div",
    padding: true,
    props: {
    },
    attrs: {
    }
  },
  //
  rail: {
    vRail: {
      width: "5px",
      pos: "right",
      background: "#a5d6a7",
      opacity: 0, //'0.5'
      disabled: false
    },
    // 
    hRail: {
      height: "5px",
      pos: "bottom",
      background: "#a5d6a7",
      opacity: 0, //'0.5'
      disabled: false
    }
  }, 
  bar: {
    // 
    vBar: {
      width: "5px",
      pos: "right",
      background: "#4caf50",
      deltaY: 100,
      keepShow: false,
      opacity: 1,
      hover: false,
      disabled: false
    },
    // 
    hBar: {
      height: "5px",
      pos: "bottom",
      background: "#4caf50",
      keepShow: false,
      opacity: 1,
      hover: false,
      disabled: false
    } 
  }
};
```