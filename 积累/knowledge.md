# Vue 前端企业级项目实战

---

#### Webpack 从诞生到现在这么久，核心也迭代了很多大版本，那不同版本在打包构建上有什么差异吗？

Webpack 3 4 5每个版本差异还挺大的，plugin变更，语法变更，对缓存的使用程度，打包构建加速那个版本的方案都不同，版本越高越方便

#### Vue.js 3 非编译场景与 Vue.js 的 JSX 写法有什么联系吗？

非编译场景更关注实现的过程，需要准备必要的数据、函数，再创建结点、绑定内容，可以控制更全面的结点生成过程

JSX写法更关注结点的声明，通过更简洁、易读的方式，来创建结点并实现响应式

JSX是一种语法糖，最终会通过编译工具“babel”转化为“非编译模式”的代码

#### 前端开发组件经常会遇到组件的“递归使用”，也就是组件内部也循环使用了组件自己，那么，如何用模板语法和 JSX 语法处理组件的“自我递归使用”呢？

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

#### 我们这节课内容都是基于组合式 API（Composition API）的开发方式来进行响应式操作，那么如果换成选项式 API（Options API）的开发方式，功能的实现应该怎么操作？

选项式API下的响应式操作

首先，响应式对象会存放在`data`对象下进行使用，然后如果要实现监听响应式的功能，只需要多添加一个选项`watch`，创建以响应式对象命名的函数，函数的参数包括更新前的值、更新后的值，实现数据侦听。
