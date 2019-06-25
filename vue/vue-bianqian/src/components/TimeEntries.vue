<template>
  <div>
    <router-link v-if="$route.path !== '/time-entries/logtime'"
      to="/time-entries/logtime"
      class="btn btn-primary">
      创建
    </router-link>
    <div v-if="$route.path === '/time-entries/logtime'">
      <h3>创建</h3>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
