---
sidebarDepth: 2
---
# 事件

Vuescroll 有一些事件可以在特定场合下触发。

## handle-resize

### 介绍
当内容尺寸发生变化时触发
### 事件详情
参数|描述
------------|----
`vertical, horizontal, nativeEvent`|给你传递3个参数, `vertical` 和 `horizontal` 告诉你管你垂直和水平滚动条的信息。第三个参数是触发滚动的原生事件。
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
::: tip 提示
   你可以在**浏览器 dev-tool**下调节内容尺寸  然后查看结果。
:::
[在Codepen上尝试handle-resize](https://codepen.io/wangyi7099/pen/JLrVON)

## handle-scroll
### 介绍
当内容滚动的回收触发。
### 事件详情
参数|描述
------------|----
`vertical, horizontal, nativeEvent`|给你传递3个参数, `vertical` 和 `horizontal` 告诉你管你垂直和水平滚动条的信息。第三个参数是触发滚动的原生事件。

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
[在Codepen上尝试handle-scroll](https://codepen.io/wangyi7099/pen/geGydZ)
## refresh/load

### 介绍
对应下拉刷新的每个阶段. 从开始到结束分别是 `refresh-activate`, `refresh-start`,  `refresh-before-deactive`, `refresh-deactivate` .

### 事件详情
#### refresh-activate, refresh-deactivate
参数|描述
------------|----
`vm, refreshDom`|`vm` 是当前vuescroll 实例, `refreshDom` 是提示的那个dom。

#### refresh-start
参数|描述
------------|----
`vm, refreshDom, done`|`vm` 是当前vuescroll 实例, `refreshDom` 是提示的那个dom。`done` 是完成函数, 这个阶段你适合去抓取数据, 然后调用 `done()` 并且进入下一个阶段。

#### refresh-before-deactive
参数|描述
------------|----
`vm, refreshDom, done`|`vm` 是当前vuescroll 实例, `refreshDom` 是提示的那个dom。`done` 是完成函数, 这个阶段你适合去给出提示(比如**加载成功！**或**加载失败！**), 然后调用 `done()` 并且进入下一个阶段。

### Usage
```html
    <vue-scroll
    @refresh-activate="handleActivate"
    @refresh-start="handleStart"
    @refresh-before-deactivate="handleBeforeDeactive"
    @refresh-deactivate="handleDeactive"
    >
    </vue-scroll>
```
```javascript
    // ...
    {
        methods: {
            handleActive(vm, refreshDom) {
                console.log(vm, refreshDom, 'handleActive');
            },
            handleStart(vm, refreshDom, done) {
                console.log(vm, refreshDom, 'handleStart');
                seTimeout(() => {
                    done(); // load finished
                }, 2000)
            },
            handleBeforeDeactive(vm, refreshDom, done) {
                console.log(vm, refreshDom, 'handleDeactive');
                done();
            },
            handleDeactive(vm, refreshDom) {
                console.log(vm, refreshDom, 'handleDeactive');
            }
        }
    }
```
**Load是一样的，换汤不换药，请在demo你查看详情**

[在Codepen上尝试](https://codepen.io/wangyi7099/pen/pLXyOQ)

## handle-scroll-complete

### 介绍
当滚动结束的时候触发
### 事件详情
参数|描述
------------|----
`vertical, horizontal`|给你传递2个参数, `vertical` 和 `horizontal` 告诉你管你垂直和水平滚动条的信息。
### 用法
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
::: tip 提示
   需要打开dev-tool查看结果。
:::
[在Codepen上尝试handle-scroll-complete](https://codepen.io/wangyi7099/pen/YLVBNe)
