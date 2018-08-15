---
home: true
heroImage: /logo.png
actionText: 开始上手 →
actionLink: /zh/guide/
features:
  - title: 丰富的Api
    details: 有很多Api你可以用他们做很多事
  - title: 基于配置的系统
    details: 只是改改配置就能实现很多功能
   - title: 完全可定制
    details: 你可以定制滚动容器、滚动面板、滚动内容、滚动条。。。
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
