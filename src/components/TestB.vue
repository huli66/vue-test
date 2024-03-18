<template>
  <div @click="num++">TestB</div>
  <h2>{{ num }}</h2>
  <h2>hhh{{ ba }}</h2>
</template>
<script>
import { ref, onMounted, onUpdated } from 'vue'
export default {
  setup() {
    const num = ref(0)

    onMounted(() => {
      console.log('onMountedB')
    })

    onUpdated(() => {
      console.log('onUpdatedB')
    })

    return {
      num
    }
  },

  mounted() {
    console.log('mountedB')
  },
  updated() {
    console.log('updatedB')
  }
}
</script>
