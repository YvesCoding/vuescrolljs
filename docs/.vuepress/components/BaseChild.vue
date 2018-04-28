<template>
  <div class="child" :style="{width: width, height: height,  background: backgroundColor || (_bg = getRandomColor()) }">
    <span class="content-text">{{index}}</span>
  </div>
</template>

<script>

export default {
   props: {
       backgroundColor: String,
       width: { 
         default: '25rem',
         type: String
       },
       height: {
         default: '25rem',
         type: String
       },
       index: Number
   }
}
</script>
