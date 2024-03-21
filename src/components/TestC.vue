<template>
  <div>
    <h2>测试 v-if v-else v-show</h2>
    <div>
      <button @click="changeActive">change</button>
      <div v-if="isActive">hello</div>
      <div v-else-if="isError">world</div>
      <div v-else>vue3</div>
    </div>
    <div>
      <button>修改v-show</button>
      <h3 v-show="isActive">Hello World</h3>
    </div>
    <div>
      <button @click="changeArr">v-for 测试</button>
      <button @click="tihuan">替换数组</button>
      <ul>
        <li v-for="(item, index) in arr" :key="index">
          {{ index }}
          --
          <template v-for="(v, k, i) of item" :key="v">
            <button v-if="!!i">
              {{ v }}
              --
              {{ k }}
              --
              {{ i }}
            </button>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref<boolean>(true)
const isError = ref(false)
const changeActive = () => {
  isActive.value = !isActive.value
}

const arr = ref([
  { message: 'Foo', name: 1 },
  { name: 2, message: 'bar' }
])
const changeArr = () => {
  arr.value.push({ message: new Date().toDateString(), name: 3 })
}
const tihuan = () => {
  arr.value = [{ message: 'Foo', name: 1 }]
}
</script>
