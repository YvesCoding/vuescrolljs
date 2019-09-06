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

Refresh the state of the specified vuescroll or all vuescrolls.

::: tip
It can be used when the scroll bar of your vuescroll does not appear.
You had better call it in setTimeout after mutating the data.
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

### getScrollProcess

#### Introduction

Get the current scroll process under a range of [0, 1].


#### Usage

```html
<vue-scroll ref="vs" :ops="ops">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
</vue-scroll> 
```

```javascript
const {v, h} = this.$refs['vs'].getScrollProcess();

console.loo(v,h)
```

## Api for slide mode

### goToPage(page[, animate])

#### Arguments

- `page (Object)`

  - `x (number)`
  - `y (number)`

- `animate (boolean)`

#### Example

```javascript
this.$refs['vs'].goToPage(
  {
    x: 1,
    y: 2
  },
  true
);
```

### getCurrentPage（）

#### Introduction

Get the current page number. Work only under `slide mode`and `paging` boot.

#### Example

```javascript
const pageInfo = this.$refs['vs'].getCurrentPage();
console.log(pageInfo);
```

### triggerRefreshOrLoad(type)

### Arguments

- `type ('refresh' | 'load')`

#### Introduction

Directly trigger refresh or load.

#### Example

```javascript
this.$refs['vs'].triggerRefreshOrLoad('load');
```
