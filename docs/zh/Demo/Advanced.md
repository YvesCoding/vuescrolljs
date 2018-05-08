# 高级 Demo

## 自定义内容标签

#### 介绍
你可以通过设置`scrollContent`的`tag`属性来自定义内容标签。 这里， 我们把标签设置为`transition-group`来做一个示例。

#### 写代码

1. 让我们先写配置:

```javascript
// ...
ops: {
  scrollContent: {
    tag: 'transition-group', // 内容标签是 transition-group
    // 应为transition-group 是一个组件， 所以我们向它传递一个属性
    props:{
        tag: 'div',
        name: 'group-animate'
    }
  }
}
// ...
```

2. 我们写template

```vue
<div class="parent" ref="parentElm">
  <vue-scroll :ops="ops" ref="vs">
    <template
    v-for= "item in itemArray"
    >
    <BaseChild 
    :key="item"
    :width="width"
    :index="item"
    />
    </template>
  </vue-scroll>
</div>
```

3. 写一些关于 `transition-group` 的动画样式。
```stylus
.group-animate-enter 
  transform: translateX(-400px)
.group-animate-leave-to 
  transform: translateX(400px)
.child
  display block
  transition: all 2s;
```

4.好了， 让我们来看一下预览。

<ClientOnly>
<Demo-Advance-CustimizeContentnTag />
</ClientOnly>

::: tip 提示
 这只是一个demo, 你可以把 **this** 和 `push-load` 和 `tansition-group` 在 `slide` 模式下做一个整合。
:::

[源码](https://github.com/wangyi7099/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/CustimizeContentnTag.vue).

## 做一个轮播图

#### 介绍

你可以通过使用 `paging` 选项来做一个轮播图。每个页面尺寸应该等于父元素的高或者宽。

#### Coding
1. 先写 `base carousel` 组件. 为了使 `每个轮播的项目` 首尾相连, 我们应该克隆第一个和最后一个元素。我们用 `goToPage` api 来到达对应的页面, 并且用 `getCurrentviewDom` 来获得当前页。

2. 预览

<ClientOnly>
<Demo-Advance-MakeACarousel />
</ClientOnly>

[源码](https://github.com/wangyi7099/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeACarousel.vue).

## 做一个时间选择器
1. 你可以设置 `snapping` 为 true 并且 `bouncing` 为 `false`, `scrollingX` 为 false.
```javascript
  ops: {
    vuescroll: {
      mode: 'slide',
      scroller: {
        bouncing: false
      },
      snapping: {
        enable: true,
        height: 50 // snap height
      }
    },
    scrollPanel: {
      scrollingX: false
    },
    bar: { // hide bar
        vBar: { opacity: 0},
        hBar: { opacity: 0}
    }
  }
```
2. 计算 `currentIndex` 在 `handleScroll` 事件里。
```javascript
handleScroll({process}) {
  const children = this.$refs['picker'].children;
  const length = children.length;
  const currentIndex = Math.floor(length * process); 
  for (let index = Math.max(currentIndex - 1, 0); index <= currentIndex + 1; index++) {
    const element = children.item(index);
    const { top } = element.getBoundingClientRect();
    const { top: vsTop } = this.$refs['vs'].$el.getBoundingClientRect();
    if(
      (top - vsTop < 125 && top - vsTop >= 100) 
      ||
      (top - vsTop > 75 && top - vsTop <= 100)
    ) {
      this.currentIndex = element.dataset.index;
      const formatValue = this.currentIndex < 10 ? "0" + this.currentIndex : this.currentIndex;
      this.$emit("update:currentValue", formatValue);
    }
  }
}
```
3. 预览
<ClientOnly>
<Demo-Advance-MakeATimePicker />
</ClientOnly>

[源码](https://github.com/wangyi7099/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeATimePicker.vue).