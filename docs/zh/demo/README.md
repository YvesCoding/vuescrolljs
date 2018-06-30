---
  sidebarDepth: 3
---

# Demo

## 基础 Demo

### 1.基础滚动

#### Vuescroll 和 native 都支持基础的滚动行为。 但是 vuescroll 滚动的更加平滑，并且外观更漂亮。

<ClientOnly>
<Demo-Basic-OrdinaryScroll />
</ClientOnly>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/OrdinaryScroll.vue)

### 2.自定义滚动条位置.

#### vuescroll 可以设置滚动条的位置， 是否保持显示， 而原生的不能。

<ClientOnly>
<Demo-Basic-SetPositionAndKeepShow />
</ClientOnly>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/SetPositionAndKeepShow.vue)

### 3.检测内容发生变动

#### Vuescroll 支持检测内容的尺寸是否发生了变动, 它受了 [element-resize-detector](https://github.com/wnr/element-resize-detector)的启发。

::: tip 提示
你可以自己打开 dev-tool 然后调节元素的样式再查看效果。
:::
<ClientOnly>
<Demo-Basic-DetectSizeChange />
</ClientOnly>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/DetectSizeChange.vue)

### 4.滑动和下拉舒心或上推加载

#### Vuescroll 支持下来刷新和上推加载. 在你想展示一个列表的数据的时候很有用。

<ClientOnly>
<Demo-Basic-PullRefreshOrPushLoad />
</ClientOnly>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/PullRefreshOrPushLoad.vue)

### 5.Paging.

#### Vuescroll 支持分页模式， 当你想要展示一个像[这样](http://element-cn.eleme.io/#/zh-CN/component/carousel)一个轮播图的时候游泳。

<ClientOnly>
<Demo-Basic-Paging />
</ClientOnly>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/Paging.vue)

::: tip
如果要禁止 X 或 Y 方向上的滚动， 你可以设置 scrollPanel 的 scrollingY 为 false， X 是同理的。

```javascript
ops: {
  scrollPanel: {
    scrollingY: false; // or scrollingX: false
  }
}
```

你最好设置每个分页的尺寸等同于你的父 dom 的大小， 这样你才不会在一个页面中看到另一个页面的内容在当前视图下， 也就是说，确保每次只显示一个页面。
:::

### 6. Snapping

Vuescroll 支持 snapping 但是原生的不支持. Snapping 有点像`Paging`, 但是也有一些不同指出: **Paging 每次滑动一整页, 但是 snapping 每次滑动一个用户指定的距离**.

<ClientOnly>
<Demo-Basic-Snapping />
</ClientOnly>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/Snapping.vue)

### 7.在不同模式之间切换

#### 你甚至能在运行期间改变模式， 并且滚动的位置不会变。

<ClientOnly>
<Demo-Basic-SwitchMode />
</ClientOnly>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/SwitchMode.vue)

::: warning 警告
可能在移动端效果不太好， 因为移动端原生的滑动模式的滚动条是一样的
:::

## 进阶 Demo

### 1.轮播图

#### 你可以通过使用 `paging` 选项来做一个轮播图。每个页面尺寸应该等于父元素的高或者宽。

<ClientOnly>
<Demo-Advance-MakeACarousel />
</ClientOnly>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeACarousel.vue)

### 2.时间选择器

#### 你可以通过设置 `snapping` 为 true 并且 `bouncing` 为 `false`, `scrollingX` 为 false 来做一个时间选择器。

<ClientOnly>
<Demo-Advance-MakeATimePicker />
</ClientOnly>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeATimePicker.vue)
