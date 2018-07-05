---
sidebarDepth: 2
---

# Event

Vuescroll has some events that will trigger in the specific circumstances.

## handle-resize

### Introduction

Trigger when content's size changed.

### Event Detail

| params                              | description                                                                                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `vertical, horizontal, nativeEvent` | Pass 3 params to you, `vertical` and `horizontal` tell you the information about vertical bar and horizontal bar, the thrid param is the native event. |

### Usage

```html
    <vue-scroll
    @handle-resize="handleResize"
    >
    </vue-scroll>
```

```javascript
    // ...
    {
        methods: {
            handleResize() {
                console.log('content has resized!')
            }
        }
    }
```

::: tip
You can try to adjust the size of content in the **browser dev-tool** and see the result.
:::
[Try handle-resize on Codepen](https://codepen.io/wangyi7099/pen/JLrVON)

## handle-scroll

### Introduction

Trigger when content is scrolling.

### Event Detail

| params                              | description                                                                                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `vertical, horizontal, nativeEvent` | Pass 3 params to you, `vertical` and `horizontal` tell you the information about vertical bar and horizontal bar, the thrid param is the native event. |

### Usage

```html
    <vue-scroll
    @handle-scroll="handleScroll"
    >
    </vue-scroll>
```

```javascript
    // ...
    {
        methods: {
            handleScroll(vertical, horizontal, nativeEvent) {
                console.log(vertical, horizontal, nativeEvent)
            }
        }
    }
```

[Try handle-scroll on Codepen](https://codepen.io/wangyi7099/pen/geGydZ)

## refresh/load

### Introduction

corresponding to each stage of pull-refresh. From start to end are `refresh-activate`, `refresh-start`, `refresh-before-deactivate`, `refresh-deactivate` .

### Events Detail

#### refresh-activate, refresh-deactivate

| params           | description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| `vm, refreshDom` | `vm` is the current vuescroll instance, `refreshDom` is a dom that will show as a tip. |

#### refresh-start

| params                 | description                                                                                                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vm, refreshDom, done` | `vm` is the current vuescroll instance, `refreshDom` is a dom that will show as a tip.`done` is the finish-function, it is a proper stage that you fetch data, and call the `done()` to go to next stage. |

#### refresh-before-deactive

| params                 | description                                                                                                                                                                                                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vm, refreshDom, done` | `vm` is the current vuescroll instance, `refreshDom` is a dom that will show as a tip.`done` is the finish-function, it is a proper stage that you show the tip to user(such as `load successfully` or `load error` and so on), and call the `done()` to go to next stage. |

### Usage

```html
    <vue-scroll
    @refresh-activate="handleActivate"
    @refresh-start="handleStart"
    @refresh-before-deactivate="handleBeforeDeactivate"
    @refresh-deactivate="handleDeactivate"
    >
    </vue-scroll>
```

```javascript
    // ...
    {
        methods: {
            handleActivate(vm, refreshDom) {
                console.log(vm, refreshDom, 'handleActivate');
            },
            handleStart(vm, refreshDom, done) {
                console.log(vm, refreshDom, 'handleStart');
                seTimeout(() => {
                    done(); // load finished
                }, 2000)
            },
            handleBeforeDeactivate(vm, refreshDom, done) {
                console.log(vm, refreshDom, 'handleBeforeDeactivate');
                done();
            },
            handleDeactivate(vm, refreshDom) {
                console.log(vm, refreshDom, 'handleDeactivate');
            }
        }
    }
```

**Load is the same as reresh, please view it in demo**

[Try refresh and load event on Codepen](https://codepen.io/wangyi7099/pen/pLXyOQ)

## handle-scroll-complete

### Introduction

Trigger when scroll complete

### Event Detail

| params                 | description                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `vertical, horizontal` | Pass 2 params to you, `vertical` and `horizontal` tell you the information about vertical bar and horizontal bar. |

### Usage

```html
    <vue-scroll
    @handle-scroll-complete="handleComplete"
    >
    </vue-scroll>
```

```javascript
    // ...
    {
        methods: {
            handleComplete() {
                console.log('scroll complete！')
            }
        }
    }
```

::: tip
Need to open dev-tool to see the result
:::
[Try handle-scroll-complete on codepen](https://codepen.io/wangyi7099/pen/YLVBNe)
