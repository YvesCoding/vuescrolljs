---
home: true
heroImage: /logo.png
actionText: Get Started →
actionLink: /guide/
features:
- title: Options based
  details: As long as we simply modify the configuration, we can produce a lot of results.
- title: Simple and Easy
  details: Very simple and easy to get started
- title: Rich configuration
  details: Has a rich configuration to meet your all needs
footer: MIT Licensed | Copyright © 2018-present Yi(Yves) Wang
---

## A simple example

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll';
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
