<template>
  <div>
    <h1>test watch</h1>
    <button @click="changeMsg">change msg</button>
    <div :class="msg" ref="dom">{{ msg }}</div>
    <div :ref="(el) => console.log('el', el)">{{ msg }}</div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect, watchSyncEffect, watchPostEffect } from 'vue'

const msg = ref('hello')
const dom = ref(null)

const changeMsg = () => {
  msg.value = new Date().toLocaleString()
}

watch(
  msg,
  () => {
    console.log('watch')
    console.log(dom.value)
  },
  {
    flush: 'sync'
  }
)
// watchSyncEffect(() => {
//   console.log('sync', dom.value)
// })
</script>
