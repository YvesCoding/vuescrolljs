---
home: true
heroImage: /logo.png
actionText: Get Started →
actionLink: /guide/
features:
- title: Muilty Modes
  details: There are two modes you can choose, native mode and slide mode, you can even switch them in the runtime.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue. When you change a option of Vuescroll, you can see the effect immediately.
- title: Powerful Configuration
  details: Vuescroll has a lot of configurations so that you can customize your own scrollbar!
footer: MIT Licensed | Copyright © 2018-present wangyi7099 | Made by vuepress
---

## A simple scroll example

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
## Preview

<ClientOnly>
<IndexDemo />
</ClientOnly>