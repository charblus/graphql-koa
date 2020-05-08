'use strict'

import Router from 'koa-router'
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'

import { addOne, getAllList, editOne, tickOne, delOne } from '../controllers/list'
import { saveInfo, fetchInfo } from '../controllers/info' // 引入info controller
import { saveStudent, fetchStudent, fetchStudentDetail } from '../controllers/student' // 引入 student controller


module.exports = function () {
  var router = new Router({
    prefix: '/api'
  })

  router.get('/hello', (ctx, next) => {
    ctx.body = "hello world"
  });


  // 设置每一个路由对应的相对的控制器
  router.post('/saveinfo', saveInfo)
        .get('/info', fetchInfo)

  router.post('/savestudent', saveStudent)
        .get('/student', fetchStudent)
        .get('/studentDetail', fetchStudentDetail)

  // 把对请求的处理交给处理器。
  router.post('/addOne', addOne)
    .post('/editOne', editOne)
    .post('/tickOne', tickOne)
    .post('/delOne', delOne)
    .get('/getAllList', getAllList)
    .get('/graphiql', async (ctx, next) => {
      await graphiqlKoa({ endpointURL: '/graphql' })(ctx, next)
    })



  return router

}