---
sidebarDepth: 1
---

# 开始上手

## 快速开始

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

在你的入口文件处：

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

2. 局部引入

```html
<template>
  <vue-scroll> <!-- 你的内容... --> </vue-scroll>
</template>
<script>
  import vuescroll from 'vuescroll';
  import 'vuescroll/dist/vuescroll.css';

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
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-slide';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

**只引入 native 模式的特性：**

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-native';
import 'vuescroll/dist/vuescroll.css';

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
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/vuescroll/dist/vuescroll.css"
/>
```

### 用法

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
          rail: {}
          bar: {}
        }
      }
    }
  }
</script>
```

::: tip 提示
如果你有紧急情况， 可以调用 `refresh` 函数。
:::
