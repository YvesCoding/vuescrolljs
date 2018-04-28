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
## Preview

<ClientOnly>
<IndexDemo />
</ClientOnly>