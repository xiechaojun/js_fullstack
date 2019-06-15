<template>
  <div>
    Clicked:{{$store.state.count}} times,count is 
    <button @click="increment">+</button>
  </div>
</template>

<script>
// 让store里的改变状态的方法，mapActions 映射？
import {mapActions} from 'vuex';
export default {
  // 自身的状态
  props:['count'],
  data(){
    return {
    }
  },
  methods:mapActions([
    'increment'
  ])
}
</script>

<style>

</style>
