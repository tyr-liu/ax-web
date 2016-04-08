#	ax-web

## why？
the problem：如何在web前端开发中，保持一致性和灵活性的平衡？这很难。

我们即想要一个模板式的快速开发方式，可重用的代码；又想要快速应对不同的需求搞一些“定制化”。幸好，Facebook用React给出了他们的方案：组件化。

## what？
ax-web是基于React实现的一套开发模式，以组件化开发的方式，提高代码的可维护性，和快速定制化能力。

ax-web是一套模式，框架本身由Layout决定，你可以替换不同的Layout。这里只介绍针对安心云的Layout。

##	使用准备
使用ax-web之前你需要了解如下内容：

-	[React](http://facebook.github.io/react/)
-	[Redux](http://redux.js.org/)
-	[node & npm](https://nodejs.org/en/)
-	[es6 & babel](https://babeljs.io/)
-	[webpack](https://webpack.github.io/)
-	[ant-design](http://ant.design/)
-	[jest](http://facebook.github.io/jest/index.html)

如果你对React并不了解，可以通过[react-step-by-step](react-step-by-step)系列了解更多 or follow this(╯‵□′)╯ [react-howto](https://github.com/petehunt/react-howto).

##	代码结构
```
app
|-assets
|	|-images
|-build
|-jest
|	|-preprocessor.js
|-src
|	|-components
|	|-layout
|	|-sections
|	|-utils
|	|-app.js
|	|-index.js
|-.babelrc
|-index.html
|-package.json
|-webpack.config.js
```

###	外部结构说明
####	assets
用于存放app需要用到的静态资源，如：图片，文档等。

####	build
用于存放构建打包后的js文件。

####	jest
只包含jest单元测试所需的预处理脚本。

####	src
用于存放开发的js文件，下一节会重点详细说明其结构。

####	.babelrc
babel配置文件

####	index.html
单页html容器，通过`<script>`引入build目录中的构建结果。

####	package.json
项目信息描述文件，其中包含了需要使用到的npm库的描述。以及以下几个脚本：
```
"test": "jest", // 执行单元测试
"start": "set NODE_ENV=development && webpack-dev-server --hot --port 5000",// 启动调试
"build:dev": "set NODE_ENV=development && webpack-dev-server --hot",// 开发构建
"build": "set NODE_ENV=production && webpack"// 发布构建
```

####	webpack.config.js
webpack打包构建配置文件

###	src代码结构
```
|-src
|	|-components
|	|-layout
|	|-sections
|	|-utils
|	|-app.js
|	|-index.js
```

####	components
用于存放业务无关的通用`呈现组件`,例如：折线图组件。
```
|-src
|	|-components
|	|	|-example
|	|	|	|-__tests__
|	|	|	|-index.js
|	|	|	|-style.css
|	|	|-...
|	|-...
|-..
```
-	`__tests__`:单元测试代码
-	`index.js`:组件代码
-	`style.css`:样式代码,也可以使用less或sass

####	layout
整个app的根组件，也是整个框架的外部容器。app的store和Router都在layout中维护。内容模块通过section属性注入，如：
```
let sections = [
            Struct,
            Alarm,
            Profile,
            Management,
            Auth
        ];

return <Layout sections={sections}/>
```
代码结构如下：
```
|-src
|	|-layout
|	|	|-__tests__
|	|	|-actions
|	|	|-components
|	|	|-containsers
|	|	|-reducers
|	|	|-store
|	|	|-index.js
|	|-...
|-...
```
-	`__tests__`:单元测试代码
-	`actions`：actionCreator
-	`components`:带有一定业务相关的非通用`呈现组件`。组件的文件组织方式和src中的components相同
-	`containers`:外部框架的`容器组件`
-	`reducers`:全局对action的处理reducer或layout内部的reducer
-	`store`:全局唯一的store
-	`index.js`：layout入口代码,组装sections和app的store及路由

####	sections
app的内容模块，用于插入组装到app的layout中，每个section的输出对象，必须含有以下属性：
```
import routes from './routes';
import reducers from './reducers';
import actions from './actions';

export default {
    name: '',// 模块名称，用于导航展示，如果不填写则不在导航中展示
    icon: '',// 模块图标(ant-design的icon type名称), 用于导航展示
    reducers: reducers,// 模块内的reducers,用于插入到layout维护的根部store,类型为对象
    routes: routes,// 模块内的路由,类型为数组
    actions: actions// 模块内的actionCreators,用于根部调用,类型为对象
};
```
路由配置为一个对象数组，每个对象包含以下属性：
-	type：inner,outer,home的枚举，分别表示：框架内嵌套路由，框架外路由和框架主页
-	name: 路由名称，用于导航展示，可以不填，不填则不在导航展示
-	icon: 路由图标，用于导航展示，可以不填
-	route: 路由对象，和react-router路由对象匹配，可以包含`path`,`component`,`indexRoute`,`childRoutes`等属性

举个例子：
```
export default [
    {type: 'outer', route: {path:"login", component: Login }},
    {type: 'inner', name:'角色管理', icon: 'team', route: {path: 'role', component: Role}},
    {type: 'inner', name:'权限分配', icon: 'solution', route: {path: 'privilege', component: Privilege}},
    {type: 'inner', name:'用户管理', icon: 'user', route: {path: 'user', component: User}}
];
```

每个section的代码结构：
```
|-src
|	|-sections
|	|	|-example
|	|	|	|-__tests__
|	|	|	|-actions
|	|	|	|-components
|	|	|	|-containers
|	|	|	|-reducers
|	|	|	|-index.js
|	|	|	|-routes.js
|	|	|-...
|	|-...
|-...
```
包含的结构和layout相似，只是不在模块内容维护store，而是暴露reducers由layout组装。

####	utils
用于存放帮助类或函数

####	app.js
组合layout和sections的脚本

####	index.js
启动app组件的脚本
