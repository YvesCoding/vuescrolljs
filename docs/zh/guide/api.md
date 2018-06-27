---
sidebarDepth: 2
---

# Api

## scrollTo

### 介绍

滚动到一个地方, 类似于原生的`scrollTo`。

### 详细参数

| 参数                       | 描述                                                                                                                                                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{x: 10, y: '10%' }, true` | 第一个参数是一个坐标， 可以是一个数字， 也可以是个一个百分比坐标。 第二个参数参数决定是否用动画.默认是 true. 用 [scrollPanel](configuration.md#scrollpanel) 配置项 `speed` 和 `easing` 会有一个更好的滚动体验。 |

### 用法

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

[在 Codepen 上尝试 scrollTo](https://codepen.io/wangyi7099/pen/MVEdWb)

## scrollBy

### 介绍

每次滚动一段距离, 类似于原生的 `scrollBy`

### 详细参数

| 参数                         | 描述                                                                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{dx: 10, dy: '10%' }, true` | 第一个参数是一个递增量， 可以是一个数字， 也可以是个一个百分比。 第二个参数参数决定是否用动画.默认是 true. 用 [scrollPanel](configuration.md#scrollpanel) 配置项 `speed` 和 `easing` 会有一个更好的滚动体验。 |

### 用法

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

[在 codePen 上尝试 scrollTo](https://codepen.io/wangyi7099/pen/yjaPYG)

## goToPage

### 介绍

跳转到被给的页码。只在`slide模式` 和 `paging` 启动下工作。

### 详细参数

| 参数                  | 描述                                                                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{x: 1, y: 1 }, true` | 第一个参数是页面的页码， 你想跳转的`x, y` . 第二个参数参数决定是否用动画.默认是 true. 用 [scrollPanel](configuration.md#scrollpanel) 配置项 `speed` 和 `easing` 会有一个更好的滚动体验。 |

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

### 介绍

获取当前的页码。只在`slide模式` 和 `paging` 启动下工作。

### 详细参数

| 参数 | 描述                                 |
| ---- | ------------------------------------ |
| 无   | 返回一个对象包含`x`和`y`的页面信息。 |

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

### 介绍

获取当前你能在 vuescroll 里面看到的 Dom 元素。

### 详细参数

| 参数 | 描述                               |
| ---- | ---------------------------------- |
| None | 返回一个数组包含当前视图下的元素。 |

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

[在 Codepen 上尝试 getCurrentviewDom](https://codepen.io/wangyi7099/pen/LmzJrv)

## scrollIntoView(4.5.17)

### 介绍

把 Vuescroll 内的子元素滚动到当前视图内。

### 详细参数

| 参数                 | 描述                            |
| -------------------- | ------------------------------- |
| `String|HTMLElement` | 一个 String 或者是一个 dom 元素 |

### 用法

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

[在 codePen 上尝试 scrollIntoView](https://codepen.io/wangyi7099/pen/dewQbM)

## triggerRefreshOrLoad(4.5.32)

### 介绍

直接激活刷新或者加载

### 详细参数

| 参数           | 描述           |
| -------------- | -------------- |
| `refresh|load` | 刷新或者是加载 |

### 用法

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

[在 codePen 上尝试 triggerRefreshOrLoad](https://codepen.io/wangyi7099/pen/VdLPgz)

## refresh/refreshAll(4.6.4)

### 介绍

刷新制定 vuescroll 的状态或者所有 vuescroll 的状态。

::: tip 提示
在你的 vuescroll 的滚动条不出现的时候可以用到。
:::

### 用法

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
    // 如果你是模块系统的话，如果在浏览器直接使用vuescroll即可。
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

[在 codePen 上尝试 refresh/refreshAll](https://codepen.io/wangyi7099/pen/OEXdQa)
