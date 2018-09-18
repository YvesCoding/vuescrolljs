# Optimizing Performance

You can do the following to optimize scrolling performance and fluency.

## Import different modes file according to your needs

If you only want **custom scrollbars** and don't need `pull-refreh`, `push-load` , etc. `slide` mode features, you can just `import` the files like this that only contain `native` mode features, such as:

```javascript
import vuescroll from 'vuescroll/dist/vuescroll-native';
// .... css file
```

Or you just want the features of the `slide` mode, such as`pull-refreh`, and`push-load`, rather than the features of the`native` mode, you can just `import` the files only contains the`slide` mode features , such as:

```javascript
import vuescroll from 'vuescroll/dist/vuescroll-slide';
// .... css file
```

## Manually disable `detectResize` options

To detect changes in element sizes, vuescroll injects an `object` element into the rendered component DOM to detect changes in content by listening its`resize` event, and you can set the`detectResize` option to `false` like this

```javascript
data() {
    return {
        ops: {
          vuescroll: {
            detectResize: false
          }
        }
    }
}
```

This way vuescroll won't inject `object`, but it also loses the ability to detect changes in content.
