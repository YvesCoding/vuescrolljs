---
home: true
heroImage: /logo.png
actionText: 开始上手 →
actionLink: /zh/guide/
features:
- title: 基于配置的
  details: 只需要简单改改配置就能产生很多效果
- title: 简单
  details: 非常简单就能上手
- title: 全面的配置
  details: 有很全面的配置能够满足你的各项需求
footer: MIT Licensed | Copyright © 2018-present Yi(Yves) Wang
---

## 一个简单的例子

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll';
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
