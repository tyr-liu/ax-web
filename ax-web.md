#	ax-web

## why？
the problem：如何在web前端开发中，保持一致性和灵活性的平衡？这很难。

我们即想要一个模板式的快速开发方式，可重用的代码；又想要快速应对不同的需求搞一些“定制化”。幸好，Facebook用React给出了他们的方案：组件化。

## what？
ax-web是基于React实现的一套开发模式，以组件化开发的方式，提高代码的可维护性，和快速定制化能力。

ax-web是一套模式，框架本身由Layout决定，你可以替换不同的Layout。这里只介绍针对安心云的Layout。

###	requirement
使用ax-web之前你需要了解如下内容：

-	[React](http://facebook.github.io/react/)
-	[Redux](http://redux.js.org/)
-	[node & npm](https://nodejs.org/en/)
-	[es6 & babel](https://babeljs.io/)
-	[webpack](https://webpack.github.io/)
-	[material-ui](http://www.material-ui.com/)(暂定)

follow this(╯‵□′)╯ [react-howto](https://github.com/petehunt/react-howto), maybe helpful. 

### modules
ax-web 包含如下几个模块：

-	1.Layout
-	2.Sections
-	3.Components

从分工的角度看：

平台组负责Layout和Components
产品组负责Sections和组装它

#### Layout
web app的骨架。

Layout本身只关注提供服务：路由，Store，页面框架；而不关心web app究竟包含哪些内容，所以一个web app的代码也许是这样：
``` javascript
'use strict';

import React from 'react';

class App extends React.Component {
	...
	render() {
		return <Layout sections={[section1, section2...]}>
	}
}
```

####Sections
web app的内容。

section的开发和api，包括以下部分：

-	interface
``` javascript
export default {
	name: '', // 名称，用于Layout中的菜单展示
	icon: '', // 图标，用于Layout中的菜单展示，参见：https://www.google.com/design/icons/
	reducers: {}, // 向Layout中的store注入的reducers，参见：redux
	routes: [] // 向Layout中的router注入的routes，参见下一节
}
```
-	routes
route对象数组

	type：
	- inner: 在页面框架内呈现
	- outer: 在页面框架外呈现
	- home: 框架主页，一般只有一个  

	route：
	- name：名称，用于Layout中的菜单展示
	- icon：图标，同section的icon
	- path: 路由路径
	- component: 路由对应的组件
	- childRoutes: 自路由，包含一个route对象
	
	example：
	``` javascript
	export default [
	    {type: 'inner', route: {path:"org", component: Organization, name:"组织管理", icon:"group"
		    , childRoutes:[
		        {path: "base", component: OrganizationBase},
		        {path: "role", component: OrganizationRole}
	    ] }},
	    {type: 'inner', route: {path:"user", component: User, name:"用户管理", icon:"person" }},
	    {type: 'outer', route: {path:"login", component: Login }}
];
	```

#### Components
用于表现内容的傀儡。

基于material-ui（或其他）构建的一系列可重用的组件。这些组件与业务无关。

#### Store
提供全局的状态管理。

使用react-redux的connect引入store，并可以在组件中注入自生注册的reducers或其他sections的reducers。

example:
```javascript
'use strict';

import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
    render() {
        return <h1>Welcome to {this.props.title}</h1>
    }
}

export default {
    reducers: {},
    routes: [{
        type: 'home', route: {
            component: connect(state=> ({
                title: state.Global.title
            }))(Home)
        }
    }]
};
```

## usage

### start up your App！
index.js
```	javascript
'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './app';

render((
    <App />
), document.getElementById('App'));
```

app.js
``` javascript
'use strict';

import React from 'react';

import Layout from './components/layout/index';
import AuthSection from './sections/auth';// example
import HomeSection from './sections/home';// example
//... import your customized sections

class App extends React.Component {
    render() {
        let sections = [
            AuthSection,
            HomeSection,
            //...
        ];

		// use a layout, inject the sections, that's all!
        return (
            <Layout 
	            title='your system name or any string' 
	            sections={sections} />
        );
    }
}

export default App;

```

### customized section

see "ax-web alpha" demo:
[https://10.8.30.22/svn/FS-SSMC/trunk/3.00.10/code/web/fs-npm/client/fs-app/src/sections](https://10.8.30.22/svn/FS-SSMC/trunk/3.00.10/code/web/fs-npm/client/fs-app/src/sections)


