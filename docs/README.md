---
home: true
heroImage: /logo.png
actionText: Get Started →
actionLink: /guide/
features:
- title: Multi-Modes
  details: There are thress modes you can choose, native mode and slide mode and pure-native mode.Each mode is suitable for the people have diffrent hobbies, you can even toggle them in runtime.
- title: Vue-Powered
  details: Vuescroll is reactive, and under the help of Vue,  when you change a option of Vuescroll, you can see the effect immediately.
- title: Powerful Configuration
  details: Vuescroll has a lot of configurations so that you can customize your own scrollbar!
footer: MIT Licensed | Copyright © 2018-present wangyi7099 | Made by vuepress
---

## A simple getting-start

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

## Preview

<ClientOnly>
<IndexDemo />
</ClientOnly>
