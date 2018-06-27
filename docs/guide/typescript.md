# Typescript

## Introduction

Vuescrol has added support for `typescript` in the `4.6.11` version. You can quickly input the Api of Vuescroll with the help of the `typscript` type inference.

## Usage

1.  Install Vuescroll.

2.  `import` Vuescroll in the single file component where you use Vuescroll, like so:

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

3.  Inference of `Config`

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
