<template>
    <div class="wrapper">
        <div class="title"> {{config.title}}</div>
        <div class="demo-area">
            <div class="parent">
                <vue-scroll :ops="ops" ref="vs" @refresh-start="rS">
                    <div class="child"></div>
                    <component :is="current" slot="refresh-start" :tip="config.tip" />
                </vue-scroll>
            </div>
            <div class="title second">
                {{config.secondTitle}}
            </div>
            <div class="svgs" @click.stop="current = null">
                <svg1 @click.native.stop="current = 'svg1'" :active="current == 'svg1'" />
                <svg2 @click.native.stop="current = 'svg2'" :active="current == 'svg2'" />
                <svg3 @click.native.stop="current = 'svg3'" :active="current == 'svg3'" />
                <svg4 @click.native.stop="current = 'svg4'" :active="current == 'svg4'" />
                <svg5 @click.native.stop="current = 'svg5'" :active="current == 'svg5'" />
            </div>
        </div>
    </div>
</template>

<script>
import svg1 from './svg-animate1';
import svg2 from './svg-animate2';
import svg3 from './svg-animate3';
import svg4 from './svg-animate4';
import svg5 from './svg-animate5';

export default {
  props: {
    lang: {
      tyoe: String,
      default: 'en'
    }
  },
  components: {
    svg1,
    svg2,
    svg3,
    svg4,
    svg5
  },
  computed: {
    config() {
      return this.i18n[this.lang];
    }
  },
  data() {
    return {
      current: '',
      ops: {
        vuescroll: {
          mode: 'slide',
          pullRefresh: {
            enable: true
          }
        }
      },
      i18n: {
        zh: {
          title: '自定义不同的加载动画',
          tip: '刷新中...',
          secondTitle: '选择一个动画'
        },
        en: {
          title: 'Customize different load animations.',
          tip: 'Refreshing...',
          secondTitle: 'Choose an animation...'
        }
      }
    };
  },
  methods: {
    rS(_, __, done) {
      //   setTimeout(() => {
      //     done();
      //   }, 112000);
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
    margin-top: 20px;
    width: 100%;
    background-color: #e2e1dd;
    padding: 10px;

    .title {
        height: 4rem;
        line-height: 4rem;
        text-align: center;
        font-size: 1rem;
        background-color: #fbabbd;

        &.second {
            background-color: #cecece;
        }
    }

    .demo-area {
        width: 100%;
        margin: auto;
        margin-top: 1rem;

        .parent {
            width: 100%;
            height: 12rem;
            border: 1px solid rgb(3, 185, 118);

            /deep/ .child {
                width: 100%;
                height: 1000px;
                background: linear-gradient(45deg, rgb(0, 159, 255), rgb(236, 47, 75));
            }
        }
    }

    .svgs {
        display: flex;
        justify-content: space-around;
        padding: 10px 5px;

        /deep/ svg {
            max-height: 35px;
        }
    }
}
</style>
