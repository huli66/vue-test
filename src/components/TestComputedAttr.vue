<template>
  <div>
    <h2>计算属性</h2>
    <div>
      <button @click="addBook">添加书本</button>
      <div>{{ publishedMsg }}</div>
      <li v-for="item in author.books" :key="item">{{ item }}</li>
      <button @click="changemsg">直接修改</button>
    </div>
    <div>
      <h3>绑定类和样式</h3>
      <button @click="changeActive">改变对象</button>
      <div :class="{ active: isActive, 'text-danger': true }" class="active">绑定对象</div>
      <button @click="changeClassArr">改变数组</button>
      <div :class="[actCls, errCls, { name: 'hello' }, 12]">绑定数组</div>
      <div>绑定内联样式</div>
      <div :style="styleObj">对象</div>
      <div :style="styleArr">数组</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
const author = reactive({
  name: 'John',
  books: ['vue 2', 'vue 3', 'vu3 4']
})

const addBook = () => {
  console.log(author.books)
  console.log()
  author.books.push(`vue-${new Date().getSeconds()}`)
}
const changemsg = () => {
  publishedMsg.value = 'hhh'
}

const publishedMsg = computed(() => {
  return author.books.length > 5 ? 'YES' : 'NO'
})

const isActive = ref(true)
const changeActive = () => {
  isActive.value = !isActive.value
}

const actCls = ref(true)
const errCls = ref(true)
const changeClassArr = () => {
  errCls.value = 'hello'
}

const styleObj = reactive({
  'font-size': '18px',
  color: 'red'
})

const styleArr = reactive([
  {
    color: 'yellow',
    background: '#008c8c'
  },
  {
    color: 'blue',
    border: '1px solid red'
  }
])
</script>
