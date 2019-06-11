<template>
  <div class="container">
    {{msg}}
    <child @wn='getWn'></child>
  </div>
</template>

<script>
import child from "./child";
export default {
  name: "demoChild2",
  data() {
    return {
      
    };
  },
  components: {
    child
  },
  methods: {
    getWn (data) {
      console.log(data)
      this.msg = data
    }
  },
};
</script>
