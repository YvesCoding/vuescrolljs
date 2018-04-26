---
sidebarDepth: 2
---
# api
## scrollTo
### Introduction
Scroll to a place, like native `scrollTo`
### Detailed params
params|description
------------|----
`{x: 10, y: '10%' }, true`|First pararm is a coordinate, can be a number or a percent number. Second params decides use animation or not. Defaults to true. Use with [scrollPanel](scrollPanel.html) options `speed` and `easing` to have a better experience.
### Usage
```html
    <vue-scroll
    ref="vs"
    >
    </vue-scroll>
```
```javascript
    // ...
    {
        methods: {
            scrollTo() {
                this.$refs['vs'].scrollTo({
                    x: 10,
                    y: '10%'
                })
            }
        }
    }
```
[Try scrollTo api on Codepen](https://codepen.io/wangyi7099/pen/MVEdWb)

## scrollBy
### Introduction
Scroll a delta each time, like native `scrollBy`
### Detailed params
params|description
------------|----
`{dx: 10, dy: '10%' }, true`|First pararm is a delta, can be a number or a percent number. Second params decides use animation or not. Defaults to true. Use with [scrollPanel](scrollPanel.html) options `speed` and `easing` to have a better experience.
### Usage
```html
    <vue-scroll
    ref="vs"
    >
    </vue-scroll>
```
```javascript
    // ...
    {
        methods: {
            scrollBy() {
                this.$refs['vs'].scrollBy({
                    dx: 10,
                    dy: '10%'
                })
            }
        }
    }
```
[Try scrollBy api on Codepen](https://codepen.io/wangyi7099/pen/yjaPYG)

