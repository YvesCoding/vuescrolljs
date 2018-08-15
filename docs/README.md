---
home: true
heroImage: /logo.png
actionText: Get Started →
actionLink: /guide/
features:
  - title: Restful Api
    details: There are many apis that you can use them to do a lot of work.
  - title: Option-based system
    details: Just changing the configuration can achieve many functions.
   - title: Full customizable
    details: You can customize scroll container, scroll panel, scroll content, scrollbar...
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
