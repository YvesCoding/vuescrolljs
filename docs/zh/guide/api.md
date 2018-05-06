---
sidebarDepth: 2
---
# Api
## scrollTo
### 介绍
滚动到一个地方, 类似于原生的`scrollTo`。
### 详细参数
参数|描述
------------|----
`{x: 10, y: '10%' }, true`|第一个参数是一个坐标， 可以是一个数字， 也可以是个一个百分比坐标。 第二个参数参数决定是否用动画.默认是true. 用 [scrollPanel](scrollPanel.html) 配置项 `speed` 和 `easing` 会有一个更好的滚动体验。
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
[在Codepen上尝试scrollTo](https://codepen.io/wangyi7099/pen/MVEdWb)

## scrollBy
### 介绍
每次滚动一段距离, 类似于原生的 `scrollBy`
### 详细参数
参数|描述
------------|----
`{dx: 10, dy: '10%' }, true`|第一个参数是一个递增量， 可以是一个数字， 也可以是个一个百分比。 第二个参数参数决定是否用动画.默认是true. 用 [scrollPanel](scrollPanel.html) 配置项 `speed` 和 `easing` 会有一个更好的滚动体验。
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
[在codePen上尝试scrollTo](https://codepen.io/wangyi7099/pen/yjaPYG)

## goToPage
### 介绍
跳转到被给的页码。只在`slide模式` 和 `paging` 启动下工作。

### 详细参数
参数|描述
------------|----
`{x: 1, y: 1 }, true`|第一个参数是页面的页码， 你想跳转的`x, y` . 第二个参数参数决定是否用动画.默认是true. 用 [scrollPanel](scrollPanel.html) 配置项 `speed` 和 `easing` 会有一个更好的滚动体验。
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
参数|描述
------------|----
无 | 返回一个对象包含`x`和`y`的页面信息。
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
获取当前你能在vuescroll里面看到的Dom元素。
### 详细参数
参数|描述
------------|----
None | 返回一个数组包含当前视图下的元素。
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
[在Codepen上尝试getCurrentviewDom](https://codepen.io/wangyi7099/pen/LmzJrv)