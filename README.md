GraphQL一种用为你 API 而生的查询语言，2018已经到来，PWA还没有大量投入生产应用之中就已经火起来了，GraphQL的应用或许也不会太远了。前端的发展的最大一个特点就是变化快，有时候应对各种需求场景的变化，不得不去对接口开发很多版本或者修改。各种业务依赖强大的基础数据平台快速生长，如何高效地为各种业务提供数据支持，是所有人关心的问题。而且现在前端的解决方案是将视图组件化，各个业务线既可以是组件的使用者，也可以是组件的生产者，如果能够将其中通用的内容抽取出来提供给各个业务方反复使用，必然能够节省宝贵的开发时间和开发人力。那么问题来了，前端通过组件实现了跨业务的复用，后端接口如何相应地提高开发效率呢？GraphQL，就是应对复杂场景的一种新思路。

官方解释：

>GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。 GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。

下面介绍一下GraphQL的有哪些好处：

* 请求你所要的数据不多不少

* 获取多个资源只用一个请求

* 自定义接口数据的字段

* 强大的开发者工具

* API 演进无需划分版本


本篇文章中将搭配koa实现一个GraphQL查询的例子，逐步从简单kao服务到mongodb的数据插入查询再到GraphQL的使用，
让大家快速看到：

* 搭建koa搭建一个后台项目
* 后台路由简单处理方式
* 利用mongoose简单操作mongodb
* 掌握GraphQL的入门姿势

项目如下图所示

1、搭建GraphQL工具查询界面。

![](https://user-gold-cdn.xitu.io/2018/1/2/160b58e712e0db1a?w=1173&h=855&f=gif&s=1376761)

2、前端用jq发送ajax的使用方式

![](https://user-gold-cdn.xitu.io/2018/1/2/160b5927554c21cc?w=962&h=716&f=gif&s=2278918)


node start
1. 查询
```
{
  infos {
    _id
    height
    weight
    hobby
    meta {
      createdAt
      updatedAt
    }
  }
}
```


2. 变量 --- 单一查询
QUERY
```
query myinfo($id: ID!){
  info(id: $id) {
    _id
    height
    weight
    hobby
    meta {
      createdAt
      updatedAt
    }
  }
}
```

GRAPHQL VARIABLES -- JSON
```
{
  "id": "5eb5249692a5436629baaef5"
}
```
