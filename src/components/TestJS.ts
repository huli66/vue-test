import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const change = () => {
      count.value++
    }
    return {
      count,
      change
    }
  },
  template: `
    <button @click="change">已经点击来 {{ count }} 次</button>
  `
}
