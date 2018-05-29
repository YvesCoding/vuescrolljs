# Slot

## pull-refresh/push-load

In the case of mode for `slide` and when pull-refresh/push-load is enabled, a different slot can be sent to Vuescroll as a hint for different stages of pull-refresh/push-load.

### Refresh

| slotname | Corresponding display stage     | Description       |
| ---- | -------- | ---------- |
| refresh-deactive | deactive | The hint of the deactive stage display DOM
| refresh-beforeDeactive | beforeDeactive | The hint of the before deactive stage display DOM
| refresh-start | start | The hint of the start stage display DOM
| refresh-active | active | The hint of the active stage display DOM

### Load

| slotname | Corresponding display stage     | Description       |
| ---- | -------- | ---------- |
| load-deactive | deactive | The hint of the deactive stage display DOM
| load-beforeDeactive | beforeDeactive | The hint of the before deactive stage display DOM
| load-start | start | The hint of the start stage display DOM
| load-active | active | The hint of the active stage display DOM