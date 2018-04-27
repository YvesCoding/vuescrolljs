<template functional>
  <div class="child" :style="{width: props.width || '400px', background: props.backgroundColor || (_bg = parent.getRandomColor()) }">
    {{props.index}}. {{props.backgroundColor ||  _bg}}
  </div>
</template>

<script>

export default {
   props: {
       backgroundColor: String,
       width: String,
       index: Number
   }
}
</script>
