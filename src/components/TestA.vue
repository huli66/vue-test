<template>
  <button @click="handle">hello</button>
  <h2 :class="message">测试不使用 ref</h2>
  <div>{{ message }}</div>
  <h2 @click="handleRef">测试ref</h2>
  <div>{{ msg }}</div>
  <h2 @click="num++">直接在模板中操作 ref</h2>
  <div>{{ num }}</div>

  <div>
    <h3 v-on:click="changeArr">数组的深层响应</h3>
    <button @click="changeArr2">解构ref</button>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
  </div>

  <div>
    <h3>reactive 的使用</h3>
    <button v-on:click="reactHandle1">改变某一个属性</button>
    <button v-on:click="reactHandle">替换对象</button>
    <button v-on:click="reactHandle3">更新对象</button>
    <button v-on:click="reactHandle4">解构对象</button>
    <div>
      <li v-for="([key, value], idx) in Object.entries(proxyObj)" :key="key" :idx="idx">
        {{ value }}
      </li>
    </div>
  </div>

  <div>
    <h3 @click="handle5">解构为顶级属性</h3>
    <div>{{ id }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import type { Ref } from 'vue'
let message = 'hello'
const handle = () => {
  message = 'ballo'
  // 这里每次都会输出新的message，但是页面绑定的message值还是第一个，不会触发页面更新
  console.log('message', message)
}
const msg: Ref<string | number> = ref('ref-message')
const num: Ref<number> = ref(1)
const handleRef = () => {
  msg.value = 'new-ref-message' + new Date().getSeconds()
  console.log(msg, msg.value)
}

// 对象和数组的深层响应性
const arr: Ref<Array<string | number>> = ref(['x', 'y'])
const changeArr = () => {
  arr.value.push(new Date().getSeconds())
}

const changeArr2 = () => {
  let [xx] = arr.value
  console.log(xx)
  xx = 'new'
}

onMounted(() => {
  console.log('onMounted A')
})

// reactive
const obj = {
  name: 'hu',
  age: 18,
  habit: ['h1', 'b2'],
  sister: {
    name: 'hua',
    age: 13
  }
}
const obj2 = {
  name: 'li',
  age: 20,
  habit: ['h1', 'b2'],
  sister: {
    name: 'jie',
    age: 25
  }
}
let proxyObj = reactive(obj)
const reactHandle1 = () => {
  proxyObj.age++
  console.log(proxyObj.age)
}
const reactHandle = () => {
  proxyObj = reactive(obj2)
  console.log(proxyObj.name)
}

const reactHandle3 = () => {
  proxyObj.habit = ['c', 'd']
}

const reactHandle4 = () => {
  let { name, habit } = proxyObj
  name = 'newName'
  habit.push('new')
  console.log(habit)
}

console.log(obj === proxyObj)
console.log(reactive(obj) === proxyObj)
console.log(reactive(proxyObj) === proxyObj)
console.log(proxyObj, proxyObj.name)

// 解构为顶级属性
const object = { id: ref(1) }
const { id } = object
const handle5 = () => {
  id.value++
  console.log(object.id.value)
  console.log(id.value)
}

// 解包
const count = ref(0)
const state = reactive({
  count: count
})
console.log('1--', state.count)
state.count = 1
console.log('2--', state.count, count.value)

const ref0 = ref(0)
const state2 = reactive({
  count: ref0
})
console.log('3---', state2.count)
const state3 = reactive([ref0])
console.log('4---', state3[0], state3[0].value)
</script>
