# 介绍

Vuescroll是一个基于[Vue.js](https://github.com/vuejs/vue) 2.X的虚拟滚动条插件. 除了拥有原生的滚动条的特点, 比起原生的，vuescroll还有更多的特点, 比如在多种模式下切换, 平滑地滚动, 自动检测内容尺寸发生变化, 分页模式, 快照模式等等.

## 为什么是Vuescroll
很多人问我  **为什么不用原生的滚动条？** 。 这里我列出了一些vuescroll和其他滚动条库的比较。
### 原生滚动条
好吧， 我认为原生的太丑了，滚动条太宽， 给用户不好的体验。而Vuescroll除了能有原生的滚动行为外，还增加了很多的特点， 如： 监听内容发生变化， 上推加载下拉刷新， 分页， 快照。 
### iscroll, better-scroll, scroller
iscroll scroller 和 better-scroll 做的都很好， 都能给用户带来不错的体验，但是vuescroll有以下几点不同：
* 专注于Vue，为Vue量身打造的一个虚拟滚动条， 有Vue响应式的特点。
* 多种模式并存， 即拥有原生的模式和滑动模式等， 灵活切换。