# Vue Common Form

**功能**

- 通过 form-item 数组配置需要表单的元素
- 如果结构单一可以直接通过指定 el 属性，比如 el-input
- 可以通过 insertText 把额外的内容插入到这个 el 的子元素尾部
- 可以通过 appendText 将额外的内容作为兄弟元素插入
- 如果 el 属性已经不满足需求，可以使用 render 函数传入自定义的 form-item 内容
- 如果在 template 中使用 Common-Form 可以使用具名插槽 v-slot:name 指定内容
- 提供 input、change 事件，传递的参数是当前 item，通知外部正在修改的 item，这个的好处就是可以减少使用 watch，不必去监听 formData
- 条件显示 showCondition, 可以根据条件是否显示当前 item，TODO: 可以修改为异步逻辑，async
- 额外的属性通过 props 属性传递，会被直接渲染为 DOM property，这个属性十分关键

# Vue Promise dialog

**功能**

- 不用管理 visible 变量，而且可以把每个 dialog 拆成独立的组件，直接通过 invoke 方法呼出一个对话框，当需要关闭的是可以使用 hide 回调或者 this.\$dialog.hide(name)关闭整个例子
- invoke 返回一个 promise，可以主动 resolve 这个 promise，有以下两种方式
  1. 使用 confirm 回调中的第二个参数 resolve
  2. 使用 this.\$dialog.next(name, payload)
- 通过 name 维护各自的 dialog 实例，invoke 相同 name 的 dialog 实际上只是在替换里面的内容，关闭的时候也要指定关闭对话框的 name

> 为什么会返回一个 promise，主要是有些业务场景在一个对话框关闭的时候需要弹出下个对话框，而且他们的数据是关联，比如上个对话框请求回来的数据需要在下个对话框中渲染

hahah
