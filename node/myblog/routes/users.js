const express = require('express');
const router = express.Router();

router.get('/:name',function(req,res) {
  // res.send('Hello,' + req.params.name);
  res.render('users',{
    name:req.params.name,
    supplies:['狗蛋','小鲤鱼','狗子']
  })
})

module.exports = router;