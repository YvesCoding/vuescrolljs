---
home: true
heroImage: /logo.png
actionText: Get Started →
actionLink: /guide/
features:
  - title: Customizable
    details: Full customizable, you can customizable scrollbar, rail, scroll button and so on
  - title: Convenient
    details: Just warp the content by <vue-scroll>, and you can have your own custom scrollbar
  - title: Powerful
    details: Not only customize scrollbar, you can also use it to implement push-to-refresh, push-to-load and so on
footer: MIT Licensed | Copyright © 2018-present Yi(Yves) Wang
---

## A simple example

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-native';
// import the css file
import 'vuescroll/dist/vuescroll.css';

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

<ClientOnly>
<IndexDemo />
</ClientOnly>
