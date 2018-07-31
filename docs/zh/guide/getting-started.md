# 开始上手

## 快速开始

### 引入(模块系统)

在你的入口文件处：

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

### 分开地引入 vuescroll

#### 如果你只想要 slide 模式，而不想要 native 模式，可以这么引用（不用在配置里面设置 mode，你的配置应该只在 slide 模式下工作）：

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-slide';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

#### 如果你只想要 native 模式，而不想要 slide 模式，可以这么引用（不用在配置里面设置 mode，你的配置应该只在 native 模式下工作）：

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-native';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

### 引入(浏览器环境)

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuescroll"></script>
<!-- 引入vuescroll-slide -->
<script src="https://unpkg.com/vuescroll/dist/vuescroll-slide.js"></script>
<!-- 引入vuescroll-native -->
<script src="https://unpkg.com/vuescroll/dist/vuescroll-native.js"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/vuescroll/dist/vuescroll.css" />
```

### 用法

把你需要滚动的内容用`vuescroll`包裹起来

```html
  <template>
    <div class='your-container'>
        <!-- bind your configurations -->
        <vue-scroll :ops="ops">
            <div class='your-content'>
            </div>
        </vue-scroll>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          ops: {
            vuescroll: {},
            scrollPanel: {},
            scrollContent: {}, // only for native-mode
            rail: {}
            bar: {}
          }
        }
      }
    }
  </script>
```
