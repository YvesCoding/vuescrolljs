# 优化性能

可以做下列几点来优化滚动的性能，流畅度。

## 根据你的需求倒入不同模式的文件

如果你只想要**自定义滚动条**, 而不需要`pull-refreh`, `push-load`等`slide`模式的特性, 你可以像这样只引入包含`native`模式特性的文件, 例如：

```javascript
import vuescroll from 'vuescroll/dist/vuescroll-native';
// .... css file
```

或者说你只想要`slide`模式的特性, 如 `pull-refreh`, `push-load` 而不想要`native`模式的特性， 你可以只因乳包含`slide`模式的特性的文件。例如：

```javascript
import vuescroll from 'vuescroll/dist/vuescroll-slide';
// .... css file
```

## 手动地禁掉 `detectResize` 选项

为了检测到元素尺寸发生变化， vuescroll 向渲染过后的组件 dom 里注入了一个`object`元素， 通过监测它的`resize`事件来获取内容是否发生了变化， 你可以像这样将`detectResize` 选项设置为`false`

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

这样 vuescroll 也不会注入`object`了， 但同时也失去了**检测内容发生变化的能力**。
