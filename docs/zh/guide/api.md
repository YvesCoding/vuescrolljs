---
sidebarDepth: 3
---

# Api

## 通用 Api

<!-- ### scrollTo -->

### scrollTo(position[,speed ][, easing])

#### 参数

- `position (Object)`

  - `x (string | number)`
  - `y (string | number)`

- `speed (number)`
- `easing (string)`

#### 介绍

滚动到某一个位置，可以只指定`x` 或 `y`。 `easing`参数可以参考[easing](configuration.html#easing)

#### 例子

```javascript
this.$refs["vs"].scrollTo(
  {
    x: "50%"
  },
  500
);

this.$refs["vs"].scrollTo(
  {
    y: 200
  },
  500,
  "easeInQuad"
);
```

#### 尝试一下

<Api-ScrollTo lang="zh"/>

### scrollBy(position[,speed ][, easing])

#### 参数

- `position (Object)`

  - `dx (string | number)`
  - `dy (string | number)`

- `speed (number)`
- `easing (string)`

#### 介绍

以当前位置为起点，滚动一段距离，`dx` 或 `dy`。 `easing`参数可以参考[easing](configuration.html#easing)

#### 例子

```javascript
this.$refs["vs"].scrollBy(
  {
    dx: "50%"
  },
  500
);

this.$refs["vs"].scrollBy(
  {
    dy: -200
  },
  500,
  "easeInQuad"
);
```

#### 尝试一下

<Api-ScrollBy lang="zh"/>

### getCurrentviewDom()

#### 介绍

获取你能看到的 vuescroll 的**直接子元素**.

#### 例子

```javascript
this.$refs["vs"].getCurrentviewDom();
```

#### H 尝试一下

<Api-GetCurrentviewDom lang="zh"/>

### scrollIntoView(selector[ , speed])

#### 参数

- `selector (string)`

- `speed (number)`

#### 介绍

当前窗口滚动至`vuescroll`的一个**直接子元素**。

#### 例子

```html
<vue-scroll ref="vs">
  <div id="d1"></div>
  <div id="d2"></div>
  <div id="d3"></div>
</vue-scroll>
```

```javascript
this.$refs["vs"].scrollIntoView("#d3", 500);
```

#### H 尝试一下

<Api-ScrollIntoView lang="zh"/>

### refresh()/refreshAll()

#### 介绍

刷新制定 vuescroll 的状态或者所有 vuescroll 的状态。

::: tip 提示
在你的 vuescroll 的滚动条不出现的时候可以用到。
:::

#### 用法

```html
<vue-scroll ref="vs" :ops="ops">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
</vue-scroll>
<vue-scroll ref="vs1" :ops="ops">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
</vue-scroll>
```

```javascript
// 如果你是模块系统的话，如果在浏览器直接使用vuescroll即可。
import vuescroll from "vuescroll";

this.$refs["vs"].refresh();

vuescroll.refreshAll();
```

### getScrollProcess

#### 简介

获取当前的滚动进程，范围是[0,1]

#### 用法

```html
<vue-scroll ref="vs" :ops="ops">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
</vue-scroll>
```

```javascript
const { v, h } = this.$refs["vs"].getScrollProcess();

console.loo(v, h);
```

### getPosition

#### 简介

获取当前的滚动条的 scrollTop.scrollLeft

#### 用法

```html
<vue-scroll ref="vs" :ops="ops">
  <div v-for="i in 3" :key="i" :id="'d' + i"></div>
</vue-scroll>
```

```javascript
const { scrollTop, scrollLeft } = this.$refs["vs"].getPosition();

console.loo(scrollTop, scrollLeft);
```

## Native 模式的 Api

### stop()/pause()/continue()

#### 介绍

立刻停止/暂停/继续滚动

#### 例子

```javascript
this.$refs["vs"].stop();
this.$refs["vs"].pause();
this.$refs["vs"].continue();
```

#### 尝试一下

<Api-Stop lang="zh"/>

## Slide 模式的 Api

### goToPage(page[, animate])

#### 参数

- `page (Object)`

  - `x (number)`
  - `y (number)`

- `animate (boolean)`

#### 例子

```javascript
this.$refs["vs"].goToPage(
  {
    x: 1,
    y: 2
  },
  true
);
```

### getCurrentPage（）

#### 介绍

获取当前的页码。只在`slide模式` 和 `paging` 启动下工作。

#### 例子

```javascript
const pageInfo = this.$refs["vs"].getCurrentPage();
console.log(pageInfo);
```

### triggerRefreshOrLoad(type)

### 参数

- `type ('refresh' | 'load')`

#### 介绍

直接触发刷新或者加载

#### 用法

```javascript
this.$refs["vs"].triggerRefreshOrLoad("load");
```
