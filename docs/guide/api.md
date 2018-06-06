---
sidebarDepth: 2
---

# Api

## scrollTo

### Introduction

Scroll to a place, like native `scrollTo`

### Detailed params

| params                     | description                                                                                                                                                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{x: 10, y: '10%' }, true` | First param is a coordinate, can be a number or a percent number. Second params decides use animation or not. Defaults to true. Use with [scrollPanel](scrollPanel.html) options `speed` and `easing` to have a better experience. |

### Usage

```html
    <vue-scroll
    ref="vs"
    >
    </vue-scroll>
```

```javascript
    // ...
    {
        methods: {
            scrollTo() {
                this.$refs['vs'].scrollTo({
                    x: 10,
                    y: '10%'
                })
            }
        }
    }
```

[Try scrollTo api on Codepen](https://codepen.io/wangyi7099/pen/MVEdWb)

## scrollBy

### Introduction

Scroll a delta each time, like native `scrollBy`

### Detailed params

| params                       | description                                                                                                                                                                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{dx: 10, dy: '10%' }, true` | First param is a delta, can be a number or a percent number. Second params decides use animation or not. Defaults to true. Use with [scrollPanel](scrollPanel.html) options `speed` and `easing` to have a better experience. |

### Usage

```html
    <vue-scroll
    ref="vs"
    >
    </vue-scroll>
```

```javascript
    // ...
    {
        methods: {
            scrollBy() {
                this.$refs['vs'].scrollBy({
                    dx: 10,
                    dy: '10%'
                })
            }
        }
    }
```

[Try scrollBy api on Codepen](https://codepen.io/wangyi7099/pen/yjaPYG)

## goToPage

### Introduction

Go to a given page number. Only work in `slide mode` and `paging` is enabled.

### Detailed params

| params                | description                                                                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{x: 1, y: 1 }, true` | First param is page index `x, y` you want to go to. Second params decides use animation or not. Defaults to true. Use with [scrollPanel](scrollPanel.html) options `speed` and `easing` to have a better experience. |

### Usage

```html
    <vue-scroll
    ref="vs"
    >
    <!-- Your content -->
    </vue-scroll>
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

## getCurrentPage

### Introduction

Get the current page. Only work in `slide mode` and `paging` is enabled.

### Detailed params

| params | description                                       |
| ------ | ------------------------------------------------- |
| None   | Return a object that contains x and y pages info. |

### Usage

```html
    <vue-scroll
    ref="vs"
    >
    <!-- Your content -->
    </vue-scroll>
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

## getCurrentviewDom

### Introduction

Get the doms you can currently see in the vuescroll.

### Detailed params

| params | description                                         |
| ------ | --------------------------------------------------- |
| None   | Return an array that contains the currentview doms. |

### Usage

```html
    <vue-scroll
    ref="vs"
    >
    <!-- Your content -->
    </vue-scroll>
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
            getCurrentviewDom() {
                const doms = this.$refs['vs'].getCurrentviewDom();
                console.log(doms); // log currentview doms.
            }
        }
    }
```

[Try getCurrentviewDom api on Codepen](https://codepen.io/wangyi7099/pen/LmzJrv)

## scrollIntoView(4.5.17)

### Introduction

Scroll the child elements in the Vuescroll to the current view.

### Detailed params

| params               | description                |
| -------------------- | -------------------------- |
| `String|HTMLElement` | A string or a dom element. |

### Usage

```html
    <vue-scroll
    ref="vs"
    >
    <div
    v-for="i in 3"
    :key="i"
    :id="'d' + i"
    >
    </div>
    </vue-scroll>
```

```javascript
    // ...
    {
        methods: {
            scrollBy() {
                this.$refs['vs'].scrollIntoView('#d3')
            }
        }
    }
```

[Try crollIntoView on Codepen](https://codepen.io/wangyi7099/pen/dewQbM)

## triggerRefreshOrLoad(4.5.32)

### Introduction

Activate pull to refresh or push to load directly,

### Detailed params

| params         | description     |
| -------------- | --------------- |
| `refresh|load` | load or refresh |

### Usage

```html
    <vue-scroll
    ref="vs"
    :ops="ops"
    >
    <div
    v-for="i in 3"
    :key="i"
    :id="'d' + i"
    >
    </div>
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

[Try triggerRefreshOrLoad on codePen](https://codepen.io/wangyi7099/pen/VdLPgz)

## refresh/refreshAll(4.6.4)

### Introduction

Refresh the state of vuescroll or the state of all vuescroll instances.

### Usage

```html
    <vue-scroll
    ref="vs"
    :ops="ops"
    >
    <div
    v-for="i in 3"
    :key="i"
    :id="'d' + i"
    >
    </div>
    </vue-scroll>
    <vue-scroll
    ref="vs1"
    :ops="ops"
    >
    <div
    v-for="i in 3"
    :key="i"
    :id="'d' + i"
    >
    </div>
    </vue-scroll>
```

```javascript
    // If you are in the module system, you should import it first and then use, and you can use `vuescroll` directly in the browser.
    import vuescroll from 'vuescroll';

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
            refresh() {
                this.$refs['vs'].refresh();
            },
            refreshAll(){
                vuescroll.refreshAll();
            }
        }
    }
```

[Try refresh/refreshAll on codePen](https://codepen.io/wangyi7099/pen/OEXdQa)
