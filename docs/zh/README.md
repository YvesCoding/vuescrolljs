---
home: true
heroImage: /logo.png
actionText: 开始上手 →
actionLink: /zh/guide/
features:
  - title: 可定制
    details: 完全可定制化， 你可以自定义滚动条、滚动轨道、滚动按钮等
  - title: 方便
    details: 只需要把你的内容用<vue-scroll>包裹起来，就能得到你自己定制的滚动条
  - title: 功能强大
    details: 不仅仅可以自定义滚动条，还可以用它实现上推-加载，下拉-刷新等
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

<ClientOnly>
<IndexDemo />
</ClientOnly>

## 微信交流群

<p align="center">
  <img src="https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/wx.png?raw=true" width="400">
</p>
