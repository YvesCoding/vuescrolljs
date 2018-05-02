# Advance Demo

## CustomizeContentnTag

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

## WIP

WIP....