# 介绍

Vuescroll是一个基于[vue.js](https://github.com/vuejs/vue) 2.X的虚拟滚动条插件. 除了拥有原生的滚动条的特点, 比起原生的，vuescroll还有更多的特点, 比如在多种模式下切换, 平滑地滚动, 自动检测内容尺寸发生变化, 分页模式, 快照模式等等.

## 为啥用vuescroll?

很多人问我  **为啥不用原生的** , **保持原生的多好** 等等诸如此类的. 好吧， 现在让我给你介绍vuescroll和原生的相同与不同之处. 然后用不用全看你自己的选择喽。
### 1.基础滚动
#### Vuescroll 和 native 都支持基础的滚动行为。

<ClientOnly>
<Guide-Inroduction-OrdinaryScroll />
</ClientOnly>

### 2.自定义滚动条位置.

#### vuescroll可以设置滚动条的位置， 是否保持显示， 而原生的不能。

<ClientOnly>
<Guide-Inroduction-SetPositionAndKeepShow />
</ClientOnly>

### 3.检测内容发生变动
#### Vuescroll 支持检测内容的尺寸是否发生了变动
::: tip 提示
    你可以自己打开dev-tool然后调节元素的样式再查看效果。
:::
<ClientOnly>
<Guide-Inroduction-DetectSizeChange />
</ClientOnly>

### 4.滑动和下拉舒心或上推加载
#### Vuescroll 支持下来刷新和上推加载.

<ClientOnly>
<Guide-Inroduction-PullRefreshOrPushLoad />
</ClientOnly>

### 5.Paging.
#### Vuescroll 支持分页模式

<ClientOnly>
<Guide-Inroduction-Paging />
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
:::

> 这是vuescroll的核心特点, 更多的细节可以查看 [配置项](Configuration.html)一节。

