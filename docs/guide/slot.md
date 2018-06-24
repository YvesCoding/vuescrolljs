# Slot

## pull-refresh/push-load

In the case of mode for `slide` and when pull-refresh/push-load is enabled, a different slot can be sent to Vuescroll as a hint for different stages of pull-refresh/push-load.**Make sure thatthe position of your slot DOM is absolute, or may cause some bugs.**

### Refresh

| slot name              | Corresponding stage | Description                                       |
| ---------------------- | ------------------- | ------------------------------------------------- |
| refresh-deactive       | deactive            | The hint of the deactive stage display DOM        |
| refresh-beforeDeactive | beforeDeactive      | The hint of the before deactive stage display DOM |
| refresh-start          | start               | The hint of the start stage display DOM           |
| refresh-active         | active              | The hint of the active stage display DOM          |

#### Usage

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

### Load

| slot name           | Corresponding stage | Description                                       |
| ------------------- | ------------------- | ------------------------------------------------- |
| load-deactive       | deactive            | The hint of the deactive stage display DOM        |
| load-beforeDeactive | beforeDeactive      | The hint of the before deactive stage display DOM |
| load-start          | start               | The hint of the start stage display DOM           |
| load-active         | active              | The hint of the active stage display DOM          |

#### Usage

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

[Try slot refresh/load on codepen](https://codepen.io/wangyi7099/pen/vrYmVx)

## Customize Container/Panel/Content

### Usage

```vue
 <template>
    <div calss="parent">
     <vuescroll>

         <!-- Customize container -->
        <test-slot slot="scroll-container" name="container">
        </test-slot>

        <!-- Customize  panel-->
        <test-slot slot="scroll-panel" name="container">
        </test-slot>

        <!-- Customize  content-->
        <test-slot slot="scroll-content" name="container">
        </test-slot>

        <div class="child">
        </div>
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
