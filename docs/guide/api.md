---
sidebarDepth: 2
---

# Api

## Common apis

### scrollTo(position[,speed ][, easing])

#### Arguments

- `position (Object)`

  - `x (string | number)`
  - `y (string | number)`

- `speed (number)`
- `easing (string)`

#### Introduction

To scroll to a certain location, you can specify only `x` or`y`. `easing`parameter can be referred to [easing](configuration.html#easing)

#### Example

```javascript
this.$refs['vs'].scrollTo(
  {
    x: '50%'
  },
  500
);

this.$refs['vs'].scrollTo(
  {
    y: 200
  },
  500,
  'easeInQuad'
);
```

##### Have a try

<Api-ScrollTo />

### scrollBy(position[,speed ][, easing])

#### Arguments

- `position (Object)`

  - `dx (string | number)`
  - `dy (string | number)`

- `speed (number)`
- `easing (string)`

#### Introduction

Take the current position as the starting point, scroll for a distance, `dx` or `dy`. `easing`parameter can be referred to [easing](configuration.html#easing)

#### Example

```javascript
this.$refs['vs'].scrollBy(
  {
    dx: '50%'
  },
  500
);

this.$refs['vs'].scrollBy(
  {
    dy: -200
  },
  500,
  'easeInQuad'
);
```

#### Have a try

<Api-ScrollBy />

### getCurrentviewDom()

#### Introduction

Get the **direct subelement** of vuescroll as you can see.

#### Example

```javascript
this.$refs['vs'].getCurrentviewDom();
```

#### Have a try

<Api-GetCurrentviewDom lang="zh"/>

### scrollIntoView(selector[ , speed])

#### Arguments

- `selector (string)`

- `speed (number)`

#### Introduction

The current window scrolls to a **direct child element** of `vuescroll`.

#### Example

```html
<vue-scroll ref="vs">
  <div id="d1"></div>
  <div id="d2"></div>
  <div id="d3"></div>
</vue-scroll>
```

```javascript
this.$refs['vs'].scrollIntoView('#d3', 500);
```

#### Have a try

<Api-ScrollIntoView lang="zh"/>

### refresh()/refreshAll()

#### Introduction

刷新制定 vuescroll 的状态或者所有 vuescroll 的状态。

::: tip 提示
在你的 vuescroll 的滚动条不出现的时候可以用到。
:::

#### Usage

```html
<vue-scroll ref="vs" :ops="ops">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
</vue-scroll>
<vue-scroll ref="vs1" :ops="ops">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
</vue-scroll>
```

```javascript
// If you are a modular system, you can use vuescroll directly in the browser.

import vuescroll from 'vuescroll';

this.$refs['vs'].refresh();

vuescroll.refreshAll();
```

## Api for slide mode

### goToPage

#### Introduction

Go to a given page number. Only work in `slide mode` and `paging` is enabled.

#### Detailed params

| params                | description                                                                                                                                                                                                                      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{x: 1, y: 1 }, true` | First param is page index `x, y` you want to go to. Second params decides use animation or not. Defaults to true. Use with [scrollPanel](configuration.md#scrollpanel) options `speed` and `easing` to have a better experience. |

#### Usage

```html
<vue-scroll ref="vs"> <!-- Your content --> </vue-scroll>
```

```javascript
    // ...
    {
        data: {
            ops: {
                mode: 'slide',
                paging: true
            }
        },
        methods: {
            goToPage() {
                this.$refs['vs'].goToPage({
                    x: 1,
                    y: 2
                }, true)
            }
        }
    }
```

### getCurrentPage

#### Introduction

Get the current page. Only work in `slide mode` and `paging` is enabled.

#### Detailed params

| params | description                                       |
| ------ | ------------------------------------------------- |
| None   | Return a object that contains x and y pages info. |

#### Usage

```html
<vue-scroll ref="vs"> <!-- Your content --> </vue-scroll>
```

```javascript
    // ...
    {
        data: {
            ops: {
                mode: 'slide',
                paging: true
            }
        },
        methods: {
            getCurrentPage() {
                const pageInfo = this.$refs['vs'].getCurrentPage();
                // pageinfo => {x: 1, y: 1}
            }
        }
    }
```

### triggerRefreshOrLoad(4.5.32)

#### Introduction

Activate pull to refresh or push to load directly,

#### Detailed params

| params         | description     |
| -------------- | --------------- |
| `refresh|load` | load or refresh |

#### Usage

```html
<vue-scroll ref="vs" :ops="ops">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
</vue-scroll>
```

```javascript
    // ...
    {
        ops: {
            vuescroll: {
                mode: 'slide',
                pullRefresh: {
                    enable: true
                }
            }
        },
        methods: {
            triggerRefreshOrLoad() {
                this.$refs['vs'].triggerRefreshOrLoad('load')
            }
        }
    }
```

## Public API

The public api is just like the `static method` in a class.

### refreshAll

#### Introduction

Refresh all vuescroll components in the current page.

#### Detailed Params

| Param | Description                                           |
| ----- | ----------------------------------------------------- |
| None  | Refresh all vuescroll components in the current page. |

#### Usage

> In browser environment, just call `refrehAll` directly.

```javascript
vuescroll.refreshAll();
```

> In nodejs environment, import `vuescroll` first, and then you can call it.

```javascript
import vuescroll from 'vuescroll';

vuescroll.refreshAll();
```

### scrollTo

#### Introduction

Scroll an element smoothly to a location. <Badge text="4.9.0-bate.1+" type="tip"/>

#### Function definition

```typescript
  scrollTo(
    elm: Document | Element,
    x: string | number,
    y: string | number,
    speed?: number = 300,
    easing?: easing,
    animate? = true,
    scrollingComplete?: (x, y) => void
  ): void;
```

#### Detailed Params

| Params            | Description                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| elm               | The elements you want to scroll                                                                                    |
| x                 | A X axis digital coordinate or percentage                                                                          |
| y                 | A Y axis digital coordinate or percentage                                                                          |
| speed             | The time it takes to finish scrolling                                                                              |
| easing            | Scroll animation, please refer to all easing[demo](http://vuescrolljs.yvescoding.org/demo/#_2-customize-scrollbar) |
| animate           | Whether smooth scrolling, default to `true`                                                                        |
| scrollingComplete | Callback function after scroll completion                                                                          |

#### Usage

> In browser environment, just call `refrehAll` directly.

```javascript
vuescroll.scrollTo(document, 100, 100, 300 /*...*/);
```

> In nodejs environment, import `vuescroll` first, and then you can call it.

```javascript
import vuescroll from 'vuescroll';

vuescroll.scrollTo(document, 100, 100, 300 /*...*/);
```
