//index.js
//获取应用实例
const app = getApp()
const GameManager = require('./game_manager.js')

Page({
  data: {
    grids:[]
  },
  gameManager:null,
  touchStartClientX:0,  //开始时候的坐标
  touchStartClientY:0,
  // 结束时候的坐标
  touchEndClientX:0,
  touchEndClientY:0,
  onLoad: function () {
    this.gameManager = new GameManager(4);
    const grids = this.gameManager.setup();
    this.setData({
      grids
    })
  },
  touchStart(event){
    // console.log('touchStart');
    //触点 
    const touch = event.touches[0];
    this.touchStartClientX = touch.clientX;
    this.touchStartClientY = touch.clientY;
  },
  touchMove(event){
    const touch = event.touches[0];
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
    // console.log('touchMove');
  },
  touchEnd(event){;
    console.log(event)
    const touch = event.changedTouches[0];
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
    // console.log('touchEnd');
    const dx = this.touchEndClientX - this.touchStartClientX;
    const dy = this.touchEndClientY - this.touchStartClientY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (Math.max(absDx,absDy) > 10){
      console.log('滑动了');
      // 方向 0上滑 2下 1右 3左
      const direction = absDx > absDy ? (dx>0?1:3) : (dy > 0 ? 2 : 0);
      this.gameManager.move(direction);
    }
  }
})
