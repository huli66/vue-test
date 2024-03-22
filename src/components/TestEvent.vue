<template>
  <div>测试事件</div>
  <button @click.once="handler">click.once</button>
  <button @keydown.h="handler">keydown.h</button>
  <button @keydown.k.ctrl="handler">k.ctrl</button>
  <button @click.middle="handler">click.middle</button>
  <button @click.shift="handler">click.shift</button>
  <button @click.alt="handler">click.alt</button>
  <button @keydown.enter="handler('keydown.enter')">keydown.enter</button>
  <button @keydown.delete="handler('delete')">keydown.delete</button>
  <button @keydown.up="handler('up')">keydown.up</button>
  <button @keyup.up="handler('keyup.up')">keyup.up</button>
  <button @keydown.tab="handler('tab')">keydown.tab</button>
  <div>TEST FORM</div>
  <div>
    <h3>手动实现</h3>
    <!-- <input :value="text" @input="(event) => (text = event.target.value)" /> -->
    <input v-model="text" />
  </div>
  <textarea v-model="text"></textarea>
  <div>
    <h3 @click="changeBool">单选</h3>
    <input type="checkbox" v-model="bool" />
    <input type="checkbox" v-model="bool" />
    <input type="radio" id="false" value="false" v-model="bool" />
    <label for="false">false</label>
    <input type="radio" id="true" value="true" v-model="bool" />
    <label for="true">true</label>
  </div>
  <div>
    <h3>多选</h3>
    <div>{{ arr }}</div>
    <input type="checkbox" value="1" v-model="arr" />
    <input type="checkbox" value="2" v-model="arr" />
    <input type="checkbox" value="3" v-model="arr" />
    <input type="checkbox" value="4" v-model="arr" />
  </div>
  <div>
    <h3>select</h3>
    <div>{{ selected }}</div>
    <select name="" id="" v-model="selected">
      <option value="A">A</option>
      <option value="B">BB</option>
      <option value="C">CC</option>
    </select>
  </div>
  <div>
    <h3>select数组</h3>
    <div>{{ selectedArr }}</div>
    <select name="" id="" multiple v-model="selectedArr">
      <option value="A">A</option>
      <option value="B">BB</option>
      <option value="C">CC</option>
    </select>
  </div>
  <div>
    <div>{{ checked }}</div>
    <input type="checkbox" v-model="checked" true-value="yes" false-value="no" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const handler = (e: any, name?: string) => {
  console.log('success', name, e)
}
const text = ref('text')
const bool = ref(true)
const changeBool = () => (bool.value = !bool.value)
const arr = ref(['1', '2', '3'])
const selected = ref('A')
const selectedArr = ref([])
const checked = ref(false)
</script>
<style scope>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
