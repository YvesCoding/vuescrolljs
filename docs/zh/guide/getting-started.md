# 开始上手

## 安装 & 用法

#### 在浏览器环境下，你可以直接下载或用 CDN。

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuescroll"></script>
<script src="https://unpkg.com/vuescroll/dist/vuescroll.css"></script>
```

#### 或者在模块系统中用 npm 或 yarn 来安装。

```bash
npm install vuescroll -S
# yarn add vuescroll
```

#### 在模块系统中，你需要手动安装插件。 (你可以跳过这步在浏览器环境中)

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll';
// 注意： 从4.6.6开始， 你需要引入 .css 文件了
import 'vuescroll/dist/vuescroll.css';
Vue.use(vuescroll);
```

#### 在 html 或 template 里面，把要滚动的内容用 vuescroll 包裹起来。

```html
<div id="app" >
    <!-- bind your own options in data -->
    <vue-scroll :ops="ops">
        <!-- the content you want to scroll -->
        <div
        class="content"
        v-for= "item in 100"
        :key="item"
        >
        <span>{{item}}</span>
        </div>
    </vue-scroll>
</div>
```

#### 写你自己的配置然后就大功告成了！

```javascript
var vm = new Vue({
  el: '#app',
  data: {
    ops: {
      // write your own options
      vuescroll: {
        mode: 'native'
      },
      scrollPanel: {},
      scrollContent: {},
      vRail: {}
      // ...
    }
  }
});
```
