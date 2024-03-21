<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TestA from './components/TestA.vue'
import TestB from './components/TestB.vue'
import TestC from './components/TestC.vue'
import TestComputedAttr from './components/TestComputedAttr.vue'
import TestJS from './components/TestJS'
import TestComponent from './components/TestComponent.vue'
import TestEvent from './components/TestEvent.vue'
import { ref } from 'vue'

const title = ref('hello')
const updateTime = ref(new Date().toLocaleString())

const update = () => {
  updateTime.value = new Date().toLocaleString()
}
</script>

<template>
  <TestEvent></TestEvent>
  <!-- <TestComponent
    @refresh-now="update"
    @update="update"
    :blogTitle="title"
    :update-time="updateTime"
  >
    slot message
  </TestComponent> -->

  <!-- <TestA></TestA>
  <TestB></TestB>
  <TestComputedAttr></TestComputedAttr>
  <TestC></TestC>
  --- 测试直接使用 ts 文件 ---
  <TestJS></TestJS> -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
