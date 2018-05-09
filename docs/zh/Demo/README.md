---
  sidebarDepth: 2
---
# 基本 Demo
## 1.基础滚动
#### Vuescroll 和 native 都支持基础的滚动行为。 但是vuescroll滚动的更加平滑，并且外观更漂亮。

<ClientOnly>
<Demo-Basic-OrdinaryScroll />
</ClientOnly>

## 2.自定义滚动条位置.

#### vuescroll可以设置滚动条的位置， 是否保持显示， 而原生的不能。

<ClientOnly>
<Demo-Basic-SetPositionAndKeepShow />
</ClientOnly>

## 3.检测内容发生变动
#### Vuescroll 支持检测内容的尺寸是否发生了变动, 它受了 [element-resize-detector](https://github.com/wnr/element-resize-detector)的启发。
::: tip 提示
    你可以自己打开dev-tool然后调节元素的样式再查看效果。
:::
<ClientOnly>
<Demo-Basic-DetectSizeChange />
</ClientOnly>

## 4.滑动和下拉舒心或上推加载
#### Vuescroll 支持下来刷新和上推加载. 在你想展示一个列表的数据的时候很有用。

<ClientOnly>
<Demo-Basic-PullRefreshOrPushLoad />
</ClientOnly>

## 5.Paging.
#### Vuescroll 支持分页模式， 当你想要展示一个像[这样](http://element-cn.eleme.io/#/zh-CN/component/carousel)一个轮播图的时候游泳。

<ClientOnly>
<Demo-Basic-Paging />
</ClientOnly>

::: tip
如果要禁止X或Y方向上的滚动， 你可以设置scrollPanel的scrollingY为false， X是同理的。
```javascript
  ops: {
    scrollPanel: {
      scrollingY: false // or scrollingX: false
    }
  }
```
你最好设置每个分页的尺寸等同于你的父dom的大小， 这样你才不会在一个页面中看到另一个页面的内容在当前视图下， 也就是说，确保每次只显示一个页面。
:::

## 6. Snapping
Vuescroll 支持snapping但是原生的不支持. Snapping有点像`Paging`, 但是也有一些不同指出: **Paging 每次滑动一整页, 但是snapping每次滑动一个用户指定的距离**. 

<ClientOnly>
<Demo-Basic-Snapping />
</ClientOnly>

## 7.在不同模式之间切换
#### 你甚至能在运行期间改变模式， 并且滚动的位置不会变。
<ClientOnly>
<Demo-Basic-SwitchMode />
</ClientOnly>

::: warning 警告
  可能在移动端效果不太好， 因为移动端原生的滑动模式的滚动条是一样的
:::