'use strict'

import Router from 'koa-router'
import {addOne, getAllList, editOne, tickOne, delOne} from '../controllers/list' 

module.exports = function() {
  var router = new Router({
    prefix: '/api'
  })

  router.get('/hello', (ctx, next) => {
    ctx.body="hello world"
  });

  // 把对请求的处理交给处理器。
router.post('/addOne', addOne)
      .post('/editOne', editOne)
      .post('/tickOne', tickOne)
      .post('/delOne', delOne)
      .get('/getAllList', getAllList)
  


return router

}