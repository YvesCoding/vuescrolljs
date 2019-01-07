---
sidebarDepth: 3
---

# Api

## 通用 Api

### scrollTo

#### 介绍

滚动到一个地方, 类似于原生的`scrollTo`。

#### 详细参数

| 参数                       | 描述                                                                                                                                                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{x: 10, y: '10%' }, true` | 第一个参数是一个坐标， 可以是一个数字， 也可以是个一个百分比坐标。 第二个参数参数决定是否用动画.默认是 true. 用 [scrollPanel](configuration.md#scrollpanel) 配置项 `speed` 和 `easing` 会有一个更好的滚动体验。 |

#### 用法

```html
<vue-scroll ref="vs"> </vue-scroll>
```

```javascript
    // ...
    {
        methods: {
            scrollTo() {
                this.$refs['vs'].scrollTo({
                    x: 10,
                    y: '10%'
                }, true)
            }
        }
    }
```

#### 尝试一下

<Api-ScrollTo lang="zh"/>

### scrollBy

#### 介绍

每次滚动一段距离, 类似于原生的 `scrollBy`

#### 详细参数

| 参数                         | 描述                                                                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{dx: 10, dy: '10%' }, true` | 第一个参数是一个递增量， 可以是一个数字， 也可以是个一个百分比。 第二个参数参数决定是否用动画.默认是 true. 用 [scrollPanel](configuration.md#scrollpanel) 配置项 `speed` 和 `easing` 会有一个更好的滚动体验。 |

#### 用法

```html
<vue-scroll ref="vs"> </vue-scroll>
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

#### H 尝试一下

<Api-ScrollBy lang="zh"/>

### getCurrentviewDom

#### 介绍

获取当前你能在 vuescroll 里面看到的 Dom 元素。

#### 详细参数

| 参数 | 描述                               |
| ---- | ---------------------------------- |
| None | 返回一个数组包含当前视图下的元素。 |

#### 用法

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
            getCurrentviewDom() {
                const doms = this.$refs['vs'].getCurrentviewDom();
                console.log(doms); // log currentview doms.
            }
        }
    }
```

#### H 尝试一下

<Api-GetCurrentviewDom lang="zh"/>

### scrollIntoView(4.5.17)

#### 介绍

把 Vuescroll 内的子元素滚动到当前视图内。

#### 详细参数

| 参数                 | 描述                            |
| -------------------- | ------------------------------- |
| `String|HTMLElement` | 一个 String 或者是一个 dom 元素 |

#### 用法

```html
<vue-scroll ref="vs">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
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

#### H 尝试一下

<Api-ScrollIntoView lang="zh"/>

### refresh/refreshAll(4.6.4)

#### 介绍

刷新制定 vuescroll 的状态或者所有 vuescroll 的状态。

::: tip 提示
在你的 vuescroll 的滚动条不出现的时候可以用到。
:::

#### 用法

```html
<vue-scroll ref="vs" :ops="ops">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
</vue-scroll>
<vue-scroll ref="vs1" :ops="ops">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
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

## Slide 模式的 Api

### goToPage

#### 介绍

跳转到被给的页码。只在`slide模式` 和 `paging` 启动下工作。

#### 详细参数

| 参数                  | 描述                                                                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{x: 1, y: 1 }, true` | 第一个参数是页面的页码， 你想跳转的`x, y` . 第二个参数参数决定是否用动画.默认是 true. 用 [scrollPanel](configuration.md#scrollpanel) 配置项 `speed` 和 `easing` 会有一个更好的滚动体验。 |

#### 用法

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

#### 介绍

获取当前的页码。只在`slide模式` 和 `paging` 启动下工作。

#### 详细参数

| 参数 | 描述                                 |
| ---- | ------------------------------------ |
| 无   | 返回一个对象包含`x`和`y`的页面信息。 |

#### 用法

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

#### 介绍

直接激活刷新或者加载

#### 详细参数

| 参数           | 描述           |
| -------------- | -------------- |
| `refresh|load` | 刷新或者是加载 |

#### 用法

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

## 公共 API

公共 API 有点类似于一个类里面的`静态方法`。

### refreshAll

#### 介绍

刷新当前页面所有 vuescroll 组件。

#### 详细参数

| 参数 | 描述                              |
| ---- | --------------------------------- |
| 无   | 刷新当前页面所有 vuescroll 组件。 |

#### 用法

> 浏览器环境，直接调用`refrehAll`.

```javascript
vuescroll.refreshAll();
```

> nodejs 环境下， 先引入`vuescroll`, 然后调用即可。

```javascript
import vuescroll from 'vuescroll';

vuescroll.refreshAll();
```

### scrollTo

#### 介绍

使一个元素平滑滚动到一个位置。<Badge text="4.9.0-bate.1+" type="tip"/>

#### 函数定义

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

#### 详细参数

| 参数              | 描述                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| elm               | 你要滚动的元素                                                                                                                             |
| x                 | 一个 x 轴数字坐标或者百分比                                                                                                                |
| y                 | 一个 y 轴数字坐标或者百分比                                                                                                                |
| speed             | 多长时间内滚动完毕                                                                                                                         |
| easing            | 滚动动画，所有的 easing 请参考[demo](http://vuescrolljs.yvescoding.org/zh/demo/#_2-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%BB%9A%E5%8A%A8%E6%9D%A1) |
| animate           | 是否平滑滚动，默认为`true`                                                                                                                 |
| scrollingComplete | 滚动完成之后的回调函数                                                                                                                     |

#### 用法

> 浏览器环境，直接调用`refrehAll`.

```javascript
vuescroll.scrollTo(document, 100, 100, 300 /*...*/);
```

> nodejs 环境下， 先引入`vuescroll`, 然后调用即可。

```javascript
import vuescroll from 'vuescroll';

vuescroll.scrollTo(document, 100, 100, 300 /*...*/);
```
