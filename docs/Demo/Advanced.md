# Advanced Demo

## Customize Content Tag

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

[source code](https://github.com/wangyi7099/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/CustimizeContentnTag.vue).

## Make A Carousel

#### Intrudoction

You can make a carousel by using `paging` option. Each page size should be equal to parent dom's height or width.

#### Coding
1. Write `base carousel` component. To make  `carousel item` end to end, we should clone the first and the last one. We use `goToPage` api to go to the corresponding page, and `getCurrentviewDom` to get the current view page.

2. Preview

<ClientOnly>
<Demo-Advance-MakeACarousel />
</ClientOnly>

[source code](https://github.com/wangyi7099/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeACarousel.vue).

## Make A TimePicker
1. You can set `snapping` to true and `bouncing` to `false`, `scrollingX` to false.
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
2. Calculate `currentIndex` in `handleScroll` event.
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
3. Preview
<ClientOnly>
<Demo-Advance-MakeATimePicker />
</ClientOnly>

[source code](https://github.com/wangyi7099/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeATimePicker.vue).