# Advance Demo

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
  <div class="parent" ref="parentElm">
      <vue-scroll :ops="ops" ref="vs" @handle-scroll-complete="scrollComplete">
      <template
      v-for="(item, index) in _items"
      >
      <BaseChild
      :key="index"
      :width="width"
      :index="index"
      :useBgImage="true"
      :backgroundColor="item.url"
      />
      </template>
      </vue-scroll>
  </div>  
</template>

<script>
export default {
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      _items() {
        const _items = this.items.map((item, index) => {
           item.index = index;
           return item;
        });
        if(_items.length > 1) {
          _items.push(_items[0]);
          _items.unshift(_items[_items.length - 2]);
        }
        return _items; 
      }
    },
    data() {
        return {
          width: '',
          ops: {
            bar: {
                vBar: { opacity: 0},
                hBar: { opacity: 0}
            },
            vuescroll: {
              mode: 'slide',
              paging: true,
              scroller: {
                bouncing: false
              }
            },
            scrollPanel: {
              scrollingY: false
            }
          }
        }
    },
    mounted() {
        this.width = this.$refs['parentElm'].clientWidth + 'px';
        setTimeout(() => {
          if(this._items.length > 1) {
            this.$refs['vs'].scrollTo({
              x: (1 / this._items.length) * 100  + '%'
            }, false)
          }
        }, 0);
    },
    methods: {
      scrollComplete(v, h) {
        if(this._items.length > 1) {
          if(Math.abs(h.process) < 0.001) {
            this.$refs['vs'].scrollBy({
              dx: (1 / this._items.length) * 100 * (this._items.length - 2)  + '%'
            }, false)
          }
          if(Math.abs(h.process - 1) < 0.001) {
            this.$refs['vs'].scrollTo({
              x: (1 / this._items.length) * 100  + '%'
            }, false)
          }
        }
      }
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
</style>
```
2. Preview

<ClientOnly>
<Demo-Advance-MakeACarousel />
</ClientOnly>

## MakeATimePicker

WIP...