# Slot

## 下拉刷新/上推加载

在 mode 为`slide`的情况下并且 pull-refresh/push-load 启用的情况下，可以给 Vuescroll 传入不同的 slot 来当作 pull-refresh/push-load 的不同阶段的提示。**请确保你slot的dom的position是absolute，所有可能会引起一些bug。。。**

### 刷新

| slot名称 | 对应显示阶段     | 描述       |
| ---- | -------- | ---------- |
| refresh-deactive | deactive | deactive阶段显示的提示dom
| refresh-beforeDeactive | beforeDeactive | beforeDeactive阶段显示的提示dom
| refresh-start | start | start阶段显示的提示dom
| refresh-active | active | active阶段显示的提示dom

### 加载

| slot名称 | 对应显示阶段     | 描述       |
| ---- | -------- | ---------- |
| load-deactive | deactive | deactive阶段显示的提示dom
| load-beforeDeactive | beforeDeactive | beforeDeactive阶段显示的提示dom
| load-start | start | start阶段显示的提示dom
| load-active | active | active阶段显示的提示dom

[在codePen上爽一把slot dom](https://codepen.io/wangyi7099/pen/vrYmVx)