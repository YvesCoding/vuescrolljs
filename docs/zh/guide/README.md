# 介绍

Vuescroll 一个简单上手，有充足配置的滚动小管家。

它是基于 Vue.js 的一个插件，它的原理是创建 div 用于包裹要滚动的内容，充当滚动条，然后通过操作 div 的 `scrollTop`，`scrollLeft` 来完成滚动。

设计它的目的是用来美化和增强你的滚动条。

你可以通过更改配置来选择不同的模式:

* `native` 模式: 类似于原生的滚动条，但是可以自定义滚动条样式，使用于 PC 端用户。
* `slide` 模式: 允许你用手指或鼠标滑动内容， 可以滑动超出边界范围，适用于移动端端用户。
* `pure-native`模式: 滚动条使用原生的滚动条，适用于喜欢原生滚动条的用户。

你也可以通过更改配置滚动条的样式，包括：

* `透明度`
* `高度/宽度`
* `位置`
* `背景色`
* `是否保持显示`

> 想了解更多请访问官方网站[指南页面](http://vuescrolljs.yvescoding.org/zh/)

> 如果你不满足上述特性，想要扩展特性的话，请考虑[贡献代码](#贡献)。

总的来说，Vuescroll 不仅仅只一个滚动条， 你可以用它制作一个轮播图、时间选择器、能够自动侦测内容发生变化的一个插件等等。下面是部分预览效果。

![](https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/p1.gif?raw=true)
![](https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/p2.gif?raw=true)
![](https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/p3.gif?raw=true)

## 特点

* 独创虚拟滚动条+滑动滚动，可以同时适配 PC 端和手机端！
* 拥有多个模式随时切换，每个模式都有不同的特点:
  * `native` 模式: 类似于原生的滚动条，但是可以自定义滚动条样式，使用于 PC 端用户。
  * `slide` 模式: 允许你用手指或鼠标滑动内容， 可以滑动超出边界范围，适用于移动端端用户。
  * `pure-native`模式: 滚动条使用原生的滚动条，适用于喜欢原生滚动条的用户。
* 检测滚动内容发生尺寸变化并自动更新滚动条。
* 通过使用 [不同的滚动动画](http://vuescrolljs.yvescoding.org/zh/guide/Configuration.html#scrollpanel)来平滑滚动。
* 下拉-刷新 (拉倒顶部并拉出边界开始刷新列表)
* 上推-加载 (推到底部并且退出边界开始加载列表)
* 能够放大或者缩小滚动的内容.
* 分页 (每次滑动整个页面)
* 截断 (每次滑动一个用户定义的距离)
* 能够禁止 X 或 Y 方向上的滚动。
* 能够设置滚动条是否保持显示。
* 能够设置滚动条，轨道的颜色和透明度。
* 能够设置滚动条，轨道的位置。
* 能够自定义内容的标签 (也就是说你能够设置内容的标签为一个组件)

## 和其他滚动库比较

### 原生

原生滚动条拥有很多功能，比如可以滚动内容，可以点击滚动轨道并跳转，可以拖动滚动条啊， 等等。 但是 vuescroll 可以说是实现了所有的功能，并且有所加强。 比如点击滚动轨道可以直接将内容跳到轨道对应的位置，等等。

### iscroll, better-scroll, scroller

`iscroll` `scroller` 和 `better-scroll` 都是很好的滚动库，但是 vuescroll 有以下几点不同：

1.  专注于 Vue，为 Vue 量身打造的一个虚拟滚动条。

2.  拥有多种模式，适合不同平台。
