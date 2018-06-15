---
home: true
heroImage: /logo.png
actionText: 开始上手 →
actionLink: /zh/guide/
features:
- title: 简单
  details: 非常简单就能上手
- title: 全面的配置
  details: 有很全面的配置能够满足你的各项需求
footer: MIT Licensed | Copyright © 2018-present Yi(Yves) Wang
---

## 一个简单的例子

```vue
<template>
  <div class="demo-container">
      <vue-scroll :ops="ops">
        <div class="demo-content">
          <span class="demo-content-text">Hello World</span>
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

<style lang="stylus">
  .demo-container
    width 100%
    height 100px
  .demo-content
    position relative
    width 100%
    height 500px
    background: linear-gradient(0deg,#fff,#d5ffc1);
  .demo-content-text
    display block
    position absolute
    width 100%
    bottom 0
    text-align center
    color #2c3e50;
    font-weight 300
</style>
```

## 预览

<ClientOnly>
<IndexDemo />
</ClientOnly>

## 微信交流群

<p align="center">
  <img src="https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/wx.png?raw=true" width="400">
</p>
