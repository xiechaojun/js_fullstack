<template>
  <div class="container">
    <button @click="sendMsg">ok</button>
  </div>
</template>

<script>
import Child from './child'
export default {
  name:'demoChild2',
  data() {
    return {
      message:'akf'
    }
  },
  methods: {
    sendMsg(){
      this.$emit('wn',message)
    }
  },
};
</script>
