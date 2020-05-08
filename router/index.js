'use strict'

import Router from 'koa-router'
import {addOne, getAllList, editOne, tickOne, delOne, handleGraphql} from '../controllers/list' 
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'

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
      // .post('/graphql', handleGraphql)
      .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
      })
  


return router

}