# Getting Started

## Quick Start

### Import(Module System)

In your entry file:

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

### Import vuescroll separately

#### If you only want slide mode, and you don't want native mode, you can import this way (You don't need to set mode in option, your option should only work in slide mode):

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-slide';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

#### If you only want native mode, and you don't want slide mode, you can import this way (You don't need to set mode in option, your option should only work in native mode):

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-native';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

### Import(Browser Environment)

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuescroll"></script>
<!-- import vuescroll-slide -->
<script src="https://unpkg.com/vuescroll/dist/vuescroll-slide.js"></script>
<!-- import vuescroll-native -->
<script src="https://unpkg.com/vuescroll/dist/vuescroll-native.js"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/vuescroll/dist/vuescroll.css" />
```

### Usage

Wrap the content you need to scroll by `vuescroll`

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
