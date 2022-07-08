---
sidebarDepth: 1
---

# 开始上手

:::warning 提示
自从`4.10.1`版本以后， 你无需再引入 `vuescroll/dist/vuescroll.css` 文件了。
:::

## 安装

### Vue 兼容性表格

| vue 版本 | vuescroll 版本 |
| -------- | -------------- |
| 2.x      | <=4.17.4       |
| 3.x      | >=5.0.0        |

### 模块系统

#### 安装

```bash
  npm i -S
  # 或者通过yarn
  yarn add vuescroll
  # 或者通过cnpm
  cnpm i -S
```

#### 引入

1. 全局引入

##### 对于 vue 2.x 版本

在你的入口文件:

```javascript
import Vue from "vue";
import vuescroll from "vuescroll";

// 你可以在这里设置全局配置.
Vue.use(vuescroll, {
  ops: {
    // 设置默认的全局配置
  },
  name: "myScroll" // 自定义组件名称， 默认是vueScroll
});

/**
 * 或者
 */
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: "#000"
  }
};
```

##### 对于 vue 3.x 版本

在你的入口文件:

```javascript
import { createApp } from "vue";
import vuescroll from "vuescroll";

const app = createApp(App);

// 你可以在这里设置全局配置
app.use(vuescroll, {
  ops: {
    // 设置默认的全局配置
  },
  name: "myScroll" // 自定义组件名称， 默认是vueScroll
});
```

2. 局部引入

```html
<template>
  <vuescroll> <!-- 你的内容... --> </vuescroll>
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

#### 只引入需要的模式

**只引入 slide 模式的特性：**

```javascript
import Vue from "vue";
import vuescroll from "vuescroll/dist/vuescroll-slide";

Vue.use(vuescroll);
```

**只引入 native 模式的特性：**

```javascript
import Vue from "vue";
import vuescroll from "vuescroll/dist/vuescroll-native";

Vue.use(vuescroll);
```

### 浏览器环境

**直接通过 CDN 方式引入**

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuescroll"></script>
<!-- 引入vuescroll-slide -->
<script src="https://unpkg.com/vuescroll/dist/vuescroll-slide.js"></script>
<!-- 引入vuescroll-native -->
<script src="https://unpkg.com/vuescroll/dist/vuescroll-native.js"></script>
```

## 用法

> 把 vuescroll 放在`parent-dom`里面，`child-dom`外面即可。 就是这么简单。

::: warning 警告
如果你看不到滚动条， 请打开`dev-tool`是否你的子元素尺寸超过了你的父元素尺寸。 出现滚动条的条件与原生滚动条的相同， 即： **子元素的尺寸超出了父元素**。
:::

```html
<template>
  <div class="parent-dom">
    <!-- bind your configurations -->
    <vue-scroll :ops="ops"> <div class="child-dom"></div> </vue-scroll>
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

::: tip 提示
如果你有紧急情况， 可以调用 `refresh` 函数。
:::
