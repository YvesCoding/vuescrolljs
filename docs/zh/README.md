---
home: true
heroImage: /logo.png
actionText: 开始上手 →
actionLink: /zh/guide/
features:
  - title: 可定制
    details: 完全可定制化， 你可以自定义滚动条、滚动轨道、滚动按钮等
  - title: 上拉-刷新和下拉-加载
    details: 支持上拉-刷新和下拉-加载， 并且你可以定制它们的动画效果！
  - title: 平滑地滚动
    details: Vuescroll 支持平滑地滚动， 你可以在Vue.js上平滑的滚动滚动条！
  - title: 支持轮播图
    details: Vuescroll 支持轮播图，无需复杂的配置，只要把内容包裹起来就能得到你自己的轮播图组件！
footer: MIT Licensed | Copyright © 2018-present Yi(Yves) Wang
---

## 一个简单的例子

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-native';
// 导入css文件
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

```vue
<template>
  <div class="demo-container">
    <vue-scroll :ops="ops">
      <div class="demo-content">
        <span class="demo-content-text">你好 Vuescroll！</span>
      </div>
    </vue-scroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ops: {} // Your options
    };
  }
};
</script>
```

## 预览

 <IndexDemo lang="zh"/>
 
## 微信交流群

<p align="center">
  <img src="https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/wx.png?raw=true" width="400">
</p>
