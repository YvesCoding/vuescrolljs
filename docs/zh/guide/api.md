---
sidebarDepth: 2
---
# api
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

## scrollTo
### Introduction
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

