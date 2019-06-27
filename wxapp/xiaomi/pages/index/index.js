//index.js
//获取应用实例
import showDetail from "../../modules/showDetail";
import showcDetail from "../../modules/showcDetail";
const app = getApp()

Page({
  data: {
    index_slides:[],
    indicator_dots:true,
    autoplay:true,
    interval:2000,
    duration:1000,
    nav_data:[],
    index_activity:[],
    index_block:[],
    isTap:false,
    isLoading:false
  },
  onLoad: function () {
    
  },
