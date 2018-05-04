# Advanced Demo

## Customize ContentnTag

#### Intrudoction

You can customize the tag of the content by setting  `tag` property of `scrollContent`. Here, we set the tag to `transition-group` to show the usage.

#### Coding

1. Let's write our options:

```javascript
// ...
ops: {
  scrollContent: {
    tag: 'transition-group', // content tag is transition-group
    // because transition-group is a component, we pass props to it
    props:{
        tag: 'div',
        name: 'group-animate'
    }
  }
}
// ...
```

2. We write the template

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

3. Write some animation styles about `transition-group`
```stylus
.group-animate-enter 
  transform: translateX(-400px)
.group-animate-leave-to 
  transform: translateX(400px)
.child
  display block
  transition: all 2s;
```

4. That's all, let's look at the preview

<ClientOnly>
<Demo-Advance-CustimizeContentnTag />
</ClientOnly>

::: tip
  That is just a demo, you can integrate **this** with `push-load` and `tansition-group` in `slide` mode.
:::

For a full source code, please visit [demo address](https://github.com/wangyi7099/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/CustimizeContentnTag.vue).

## Make A Carousel

#### Intrudoction

You can make a carousel by using `paging` option. Each page size should be equal to parent dom's height or width.

#### Coding
1. Write `base carousel`, to make  `carousel item` end to end, we should clone the first and the last one.
```vue
<template>
<!-- something else... -->
<vue-scroll :ops="ops" ref="vs" @handle-resize="handleResize" @handle-scroll-complete="scrollComplete">
      <template
      v-for="(item, index) in result"
      >
      <BaseChild
      :key="index"
      :width="width"
      :index="item.index"
      :useBgImage="true"
      :backgroundColor="item.url"
      />
      </template>
      </vue-scroll>
      <div class="dot-group">
        <a href="javascript:void(0)"
        v-for="(item, index) in items"
        :key="index"
        :class="{active: currentIndex == index}"
        >
          <i class="dot-item"></i>
        </a>
      </div> 
</template>
<script>
export default {
// ... something else
  scrollComplete(v, h) {
    const { x } = this.$refs['vs'].getCurrentPage();
    if(this.result.length > 1) {
      if(x == 1) {
        this.$refs['vs'].goToPage({
          x: this.result.length - 1
        }, false)
      }
      else if(x == this.result.length) {
        this.$refs['vs'].goToPage({
          x: 2
        }, false)
      }
    }
    const dom = this.$refs['vs'].getCurrentviewDom();
    this.currentIndex = dom[0].__vue__.index;
  },
  setItems() {
    const vm = this;
    this.items.forEach((item, index) => {
        item.index = index;
        vm.result.push(item);
    });
    if(vm.result.length > 1) { // meke items end to end
      vm.result.push(this.result[0]);
      vm.result.unshift(this.result[this.result.length - 2]);
    }
  }
}

</script>
```
2. Preview

<ClientOnly>
<Demo-Advance-MakeACarousel />
</ClientOnly>

For a full source code, please visit [demo address](https://github.com/wangyi7099/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeACarousel.vue).

## Make A TimePicker

WIP...