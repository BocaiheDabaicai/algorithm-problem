# Vue 前端企业级项目实战

---

## Vue.js 3 非编译场景与 Vue.js 的 JSX 写法有什么联系吗？

非编译场景更关注实现的过程，需要准备必要的数据、函数，再创建结点、绑定内容，可以控制更全面的结点生成过程

JSX写法更关注结点的声明，通过更简洁、易读的方式，来创建结点并实现响应式

JSX是一种语法糖，最终会通过编译工具“babel”转化为“非编译模式”的代码

## 前端开发组件经常会遇到组件的“递归使用”，也就是组件内部也循环使用了组件自己，那么，如何用模板语法和 JSX 语法处理组件的“自我递归使用”呢？

模板语法实现

```js
<template v-for="item in array" :key="item">
    <component :is="item"/>
</template>
<script>
import A1 from "./A1.vue"
import A2 from "./A2.vue"
import A3 from "./A3.vue"
import {reactive,markRaw} from "vue"

let array = reactive([
    markRaw(A1),
    markRaw(A2),
    markRaw(A3),
])
</script>
```

`JSX`语法实现

```js
// 预先用jsx语法实现了A组件,假设用text接收参数、onOk接收点击事件的回调函数
// 创建组件后返回onClose方法
<script>
import {createA} from "./A.jsx"

let A1 = createA({
  text:'123456',
  onOk:() => {
      A1.onClose()  
  }  
})
</script>

// ---------------
// 实现JSX的循环调用
<script>
import {createA} from "./A.jsx"
import {reactive} from "vue"

let array = reactive(['123','456','789'])
array.forEach(item => 
    let temp = createA(
        text:item,
        onOk:() => temp.onClose()
    )
)
</script>
```
