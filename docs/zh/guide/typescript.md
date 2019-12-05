# Typescript

## 介绍

Vuescroll 在 `4.6.11` 版本中新增了对`typescript`的支持， 你可以借助`typscript`的类型推导功能来快捷输入 Vuescroll 的 Api。

## 用法

1.  安装 Vuescroll.

2.  在你使用到 Vuescroll 的单文件组件里面 `import` Vuescroll, 如下所示：

```vue
<template>
  <div class="home">
    <vue-scroll ref="vs">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </vue-scroll>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import vuescroll from 'vuescroll';
export default Vue.extend({
  name: 'home',
  data() {},
  created() {
    // The as symbol is used to tell the compiler that this is vuescroll
    const vs = this.$refs['vs'] as vuescroll;
  }
});
</script>
```

3.  推导`Config`

```vue
<template>
  <div class="home">
    <vue-scroll :ops="ops">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </vue-scroll>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Config } from 'vuescroll';

const ops: Config = {
  // Your own options
};

export default Vue.extend({
  name: 'home',
  data() {
    return {
      ops: ops
    };
  }
});
</script>
```
