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

## 简单的滚动

```vue
<template>
  <div class="demo-container">
      <vue-scroll :ops="ops">
        <div class="demo-content"></div>
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
    width 100px
    height 100px
  .demo-content
    width 500px
    height 500px
    background: linear-gradient(red, blue);
</style>
```
## 预览

<ClientOnly>
<IndexDemo />
</ClientOnly>