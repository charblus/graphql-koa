import Koa from 'koa'
import Router from 'koa-router'
import KoaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import {database} from './mongodb' 
const { typeDefs, resolvers } = require('./graphql/schema')

database() // 链接数据库并且初始化数据模型

const app = new Koa()
// const router = new Router();
const port = 4001

app.use(bodyParser());

// var router = require('./router/index.js')()
var router = require('./router')

app.use(KoaStatic(__dirname + '/public'));
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port);

console.log('server listen port: ' + port)
