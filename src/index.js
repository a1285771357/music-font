import dva from 'dva';
import './index.css';
import {hashHistory} from 'dva/router';

// 1. Initialize创建应用，返回dva实例
//const app = dva();
const  app = dva({
  history:hashHistory,
})
// 2. Plugins 配置hooks或者注册插件（加载redux中间件）
// app.use({});

// 3. Model 用来接收你发送的action
/*
* namespace:model的命名空间，同时也是他在全局state上的属性，只能用字符串
* state：初始值，低于dva()的initialState
* reducers处理同步操作，可以修改state的地方。由action触发
* effects：处理异步操作和业务逻辑，不直接修改state。由action触发，可以和服务器交互，可以获取全局state的数据
* subscriptions:订阅数据源
*/
app.model(require('./models/indexPage').default);
// app.model(require('./models/products').default);

// 4. Router 页面初始化路由设置
app.router(require('./router').default);

// 5. Start
app.start('#root');
