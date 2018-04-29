---
home: true
heroImage: /logo.png
actionText: 开始上手 →
actionLink: /zh/guide/
features:
- title: 多种模式
  details: 有nativ模式和slide模式可供你选择, 你甚至可以在运行期间切换这两种模式.
- title: Vue-驱动
  details: 享受Vue开发的体验.当你改变Vuescroll的一个选项时, 你能够立马看到变化.
- title: 强大的配置
  details: Vuescroll有很多配置， 以至于你可以定制属于你自己的滚动条!
footer: MIT Licensed | Copyright © 2018-present wangyi7099 | Made by vuepress
---

## 一个简单的滚动的例子

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
    }
  }
}
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