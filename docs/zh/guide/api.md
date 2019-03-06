---
sidebarDepth: 3
---

# Api

## 通用 Api

<!-- ### scrollTo -->

### scrollTo(position[,speed ][, easing])

#### 参数

- `position (Object)`

  - `x (string | number)`
  - `y (string | number)`

- `speed (number)`
- `easing (string)`

#### 介绍

滚动到某一个位置，可以只指定`x` 或 `y`。 `easing`参数可以参考[easing](configuration.html#easing)

#### 例子

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

#### 尝试一下

<Api-ScrollTo lang="zh"/>

### scrollBy(position[,speed ][, easing])

#### 参数

- `position (Object)`

  - `dx (string | number)`
  - `dy (string | number)`

- `speed (number)`
- `easing (string)`

#### 介绍

以当前位置为起点，滚动一段距离，`dx` 或 `dy`。 `easing`参数可以参考[easing](configuration.html#easing)

#### 例子

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

#### 尝试一下

<Api-ScrollBy lang="zh"/>

### getCurrentviewDom()

#### 介绍

获取你能看到的 vuescroll 的**直接子元素**.

#### 例子

```javascript
this.$refs['vs'].getCurrentviewDom();
```

#### H 尝试一下

<Api-GetCurrentviewDom lang="zh"/>

### scrollIntoView(selector[ , speed])

#### 参数

- `selector (string)`

- `speed (number)`

#### 介绍

当前窗口滚动至`vuescroll`的一个**直接子元素**。

#### 例子

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

#### H 尝试一下

<Api-ScrollIntoView lang="zh"/>

### refresh()/refreshAll()

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

this.$refs['vs'].refresh();

vuescroll.refreshAll();
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
