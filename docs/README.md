---
home: true
heroImage: /logo.png
actionText: Get Started →
actionLink: /guide/
features:
  - title: Customizable
    details: Full customizable, you can customizable scrollbar, rail, scroll button and so on
  - title: Pull-to-refresh and push-to-load
    details: Support pull-to-refresh and push-to-load and you can also customize their animations.
  - title: Smooth-scroll
    details: Vuescroll supports smooth-scroll, you can scroll smoothly on Vue.js!
  - title: Carousel supported
    details: Vuescroll supports carousel, no complex option, just wrap the content and you can have your own carousel component!

footer: MIT Licensed | Copyright © 2018-present Yi(Yves) Wang
---

## A simple example

```javascript
import Vue from "vue";
import vuescroll from "vuescroll/dist/vuescroll-native";
// import the css file 
import "vuescroll/dist/vuescroll.css";

Vue.use(vuescroll);
```

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
```

## Preview

 <IndexDemo />
