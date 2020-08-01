---
sidebarDepth: 0
---

# 常见问题

[[toc]]

## IOS slide 模式遇到卡顿怎么办

在`setTimeout`里调用[refresh](./api.md#refresh-refreshall)即可、

```js
{
   handleLoadBeforeDeactivate(vm, loadDom, done) {
      fetchData("remoteurl").then(response => {
        this.data = response.data;
        // 注意：
        // 由于要先让vue渲染完新增的数据
        // 所以要在setTimeout里面调用refersh
        setTimeout(() => {
          this.$refs.vs.refresh();
        }, 100)
      });
    },
}
```

::: tip 提示
如果遇到其他卡顿的情况，也可以调用`refresh`
:::

## 其他问题可以加作者微信或者进微信群交流

![](https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/wx.png?raw=true)
