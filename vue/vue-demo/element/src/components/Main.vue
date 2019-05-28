<template>
  <div class="main-content">
    <Header></Header>
    <Slide></Slide>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Slide from '@/components/common/Slide'
export default {
  name:'mainContent',
  data () {
    return {
      msg:'Hello World'
    }
  },
  components:{
    Header,
    Slide
  }
}
</script>