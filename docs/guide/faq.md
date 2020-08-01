---
sidebarDepth: 0
---

# FAQ

[[toc]]

## What should I do if I encounter a freeze in IOS slide mode

Call [refresh](./api.md#refresh-refreshall) in `setTimeout`,

```js
{
   handleLoadBeforeDeactivate(vm, loadDom, done) {
      fetchData("remoteurl").then(response => {
        this.data = response.data;
        // Note:
        // Because we have to let vue render the new data first
        // So call refersh in setTimeout
        setTimeout(() => {
          this.$refs.vs.refresh();
        }, 100)
      });
    },
}
```

::: tip
If you encounter other stuck situations, you can also call `refresh`
:::
