<template>
  <v-scroll
    ref="suggest"
    class="suggest"
    :data="result"
    :pullup="pullup"
    :beforeScroll="beforeScroll"
    @scrollToEnd="searchMore"
    @beforeScroll="listScroll"
  >
    <ul class="suggest-list">
      <li
        @click="selectItem(item)"
        class="suggest-item"
        v-for="(item, index) in result"
        :key="index"
      >
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
      <!-- <loading v-show="hasMore" class="loading-wraper"></loading> -->
    </ul>
    <div v-show="!hasMore && !result.length" class="no-result-wrapper">
      <span>抱歉，暂无搜索结果</span>
    </div>
  </v-scroll>
</template>

<script>
import scroll from "@/components/scroll";
export default {
  name:'suggest',
  props:{
    query:{
      type:string,
      default:''
    }
  },
  data () {
    return {
      page:1,
      pullup:true,
      beforeScroll:true,
      hasMore:true,
      result:[]
    }
  },
  components: {
    "v-scroll": scroll
  }
};
</script>

<style>
</style>
