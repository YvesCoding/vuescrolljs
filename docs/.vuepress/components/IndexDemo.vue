<template>
  <!-- Home page demo -->
  <div class="demo-container">
    <vue-scroll :ops="ops">
      <div class="demo-content">
        <span class="demo-content-text">{{config.title}}</span>
      </div>
    </vue-scroll>
  </div>
</template>
<script>
export default {
  props: {
    lang: {
      default: 'en'
    }
  },
  computed: {
    config() {
      return this.i18n[this.lang];
    }
  },
  data() {
    return {
      ops: {
        scrollPanel: {
          scrollingX: false
        }
      },
      i18n: {
        en: {
          title: "Hello Vuescroll! You're at the bottom."
        },
        zh: {
          title: '你好 Vuescroll! 你已经到达底部了。'
        }
      }
    };
  }
};
</script>

<style lang="stylus">
.demo-container {
  width: 100%;
  height: 100px;

  .vuescroll-content {
    width: 100% !important;
  }
}

.demo-content {
  position: relative;
  width: 100%;
  height: 500px;
  background: linear-gradient(0deg, #fff, #d5ffc1);
}

.demo-content-text {
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
}
</style>