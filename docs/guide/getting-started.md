---
sidebarDepth: 1
---

# Getting Started

:::warning  
Since `4.10.1`, you don't need to import `vuescroll/dist/vuescroll.css` any more,
:::

## Installation

### Vue Compatibility Table

| vue version | vuescroll version |
| ----------- | ----------------- |
| 2.x         | <=4.17.4          |
| 3.x         | >=5.0.0           |

### Module System

#### Installation

```bash
 npm i vuescroll -S
 # or use yarn
 # yarn add vuescroll
```

#### Import

1. import globally

##### For vue 2.x

In your entry file:

```javascript
import Vue from "vue";
import vuescroll from "vuescroll";

// You can set global config here.
Vue.use(vuescroll, {
  ops: {
    // The global config
  },
  name: "myScroll" // customize component name, default -> vueScroll
});

/**
 * or
 */
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: "#000"
  }
};
```

##### For vue 3.x

In your entry file:

```javascript
import { createApp } from "vue";
import vuescroll from "vuescroll";

const app = createApp(App);

// You can set global config here.
app.use(vuescroll, {
  ops: {
    // The global config
  },
  name: "myScroll" // customize component name, default -> vueScroll
});
```

2. import locally

```html
<template>
  <vuescroll> <!-- Your content... --> </vuescroll>
</template>
<script>
  import vuescroll from "vuescroll";

  export default {
    components: {
      vuescroll
    }
  };
</script>
```

#### Only import the mode you need.

**Only import the features of slide mode:**

```javascript
import Vue from "vue";
import vuescroll from "vuescroll/dist/vuescroll-slide";

Vue.use(vuescroll);
```

**Only import the features of native mode:**

```javascript
import Vue from "vue";
import vuescroll from "vuescroll/dist/vuescroll-native";

Vue.use(vuescroll);
```

### Browser Environment

#### Direct import via CDN

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuescroll"></script>
<!-- import vuescroll-slide -->
<script src="https://unpkg.com/vuescroll/dist/vuescroll-slide.js"></script>
<!-- import vuescroll-native -->
<script src="https://unpkg.com/vuescroll/dist/vuescroll-native.js"></script>
```

## Usage

> Put it outside the `child element`, inside the `parent element`. Just so easy.

::: warning
If you don't see scrollbar showing up, please open `dev-tool` to checkout whether your child's size is greater than parent's. The condition for the scrollbar to appear is the same as the native scrollbar, that is, **the size of the child element exceeds the parent element**.

:::

```html
<template>
  <div class="parent-element">
    <!-- bind your configurations -->
    <vue-scroll :ops="ops"> <div class="child-element"></div> </vue-scroll>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ops: {
          vuescroll: {},
          scrollPanel: {},
          rail: {},
          bar: {}
        }
      };
    }
  };
</script>
```

::: tip
If you have an emergency, you can call the `refresh` function.
:::
