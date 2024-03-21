<template>
  <h2>组件基础</h2>
  <div>
    <h3>{{ blogTitle }}</h3>
    <slot></slot>
    <DIV>{{ updateTime }}</DIV>

    <button @click="$emit('update')">update</button>
    <button @click="refresh">refresh</button>
  </div>
  <div>
    <button @click="changeTab(0)">tab1</button>
    <button @click="changeTab(1)">tab2</button>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TestA from './TestA.vue'
import TestB from './TestB.vue'

const props = defineProps(['blogTitle', 'updateTime'])
const emit = defineEmits(['update', 'refreshNow'])

const refresh = () => {
  console.log(props.blogTitle)
  emit('refreshNow')
}
const currentTab = ref(0)
const changeTab = (num: number) => {
  currentTab.value = num
}
const tabs = ref([TestA, TestB])
</script>
