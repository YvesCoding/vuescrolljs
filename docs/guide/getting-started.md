# Getting Started

## Installation & Usage

#### You can directly download or use CDN in browser environment.

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuescroll"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/vuescroll/dist/vuescroll.css" />
```

#### Or use npm or yarn to install in the module system.

```bash
npm install vuescroll -S
# yarn add vuescroll
```

#### In the module system, you need to install the plugin. (You can skip this step in browser environment.)

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll';
// Note: from 4.6.6, you need to import the .css file
import 'vuescroll/dist/vuescroll.css';
Vue.use(vuescroll);
```

#### And in the html or template, wrap the content by vuescroll.

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

#### Write your own options and that's all!

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
