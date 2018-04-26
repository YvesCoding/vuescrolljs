<template>
  <div class="child" :style="style">
    {{index}}. {{style.backgroundColor}}
  </div>
</template>

<script>

function getRandom() {
    let str = "#";
    for(let i = 0; i < 6; i++) {
        str += Math.floor(Math.random() * 16).toString(16);
    }
    return str;
}

export default {
   props: {
       backgroundColor: String,
       width: String,
       index: Number
   },
   data() {
       return {
           style: {}
       }
   },
   created() {
    this.style.width = this.width || '400px';
    this.style.backgroundColor = this.backgroundColor || getRandom();
   }
}
</script>

<style>

</style>
