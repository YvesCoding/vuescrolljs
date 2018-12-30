# Slot

## 下拉刷新/上推加载动画

在 mode 为`slide`的情况下并且 pull-refresh/push-load 启用的情况下，可以给 Vuescroll 传入不同的 slot 来当作 pull-refresh/push-load 的不同阶段的提示。**请确保你 slot 的 dom 的 position 是 absolute，所有可能会引起一些 bug。。。**

### 刷新

| slot 名称              | 对应显示阶段   | 描述                              |
| ---------------------- | -------------- | --------------------------------- |
| refresh-deactive       | deactive       | deactive 阶段显示的提示 dom       |
| refresh-beforeDeactive | beforeDeactive | beforeDeactive 阶段显示的提示 dom |
| refresh-start          | start          | start 阶段显示的提示 dom          |
| refresh-active         | active         | active 阶段显示的提示 dom         |

#### 用法

```vue
<div calss="parent">
     <vuescroll>
        <!-- Refresh-slot -->
        <div class="slot-refresh" slot="refresh-start"></div>
        <div class="child">
        </div>
     </vuescroll>
    </div>
```

### 加载

| slot 名称           | 对应显示阶段   | 描述                              |
| ------------------- | -------------- | --------------------------------- |
| load-deactive       | deactive       | deactive 阶段显示的提示 dom       |
| load-beforeDeactive | beforeDeactive | beforeDeactive 阶段显示的提示 dom |
| load-start          | start          | start 阶段显示的提示 dom          |
| load-active         | active         | active 阶段显示的提示 dom         |

#### 用法

```vue
<div calss="parent">
     <vuescroll>
        <!-- Load-slot -->
        <div class="slot-load" slot="load-start"></div>
        <div class="child">
        </div>
     </vuescroll>
    </div>
```

<Slot-PullRefresh lang="zh"></Slot-PullRefresh>

[源码](https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Slot/PullRefresh.vue).

## 自定义 Container/Panel/Content

### 用法

```vue
<template>
  <div calss="parent">
    <vuescroll>
      <!-- Customize container -->
      <test-slot slot="scroll-container" name="container"> </test-slot>
      <!-- Customize  panel-->
      <test-slot slot="scroll-panel" name="container"> </test-slot>
      <!-- Customize  content-->
      <test-slot slot="scroll-content" name="container"> </test-slot>
      <div class="child"></div>
    </vuescroll>
  </div>
</template>
<script>
Vue.component('test-slot', {
  template: '<div :data-id="name"><slot></slot></div>',
  props: ['name']
});
</script>
```
