---
sidebarDepth: 1
---

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

### 为了去掉不会用到的部分，可以分开地引入 vuescroll

#### 只引入 slide 模式的特性：

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-slide';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

#### 只引入 native 模式的特性：

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
            rail: {}
            bar: {}
          }
        }
      }
    }
  </script>
```
