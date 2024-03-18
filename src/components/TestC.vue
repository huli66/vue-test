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
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref<boolean>(true)
const isError = ref(false)
const changeActive = () => {
  isActive.value = !isActive.value
}
</script>
