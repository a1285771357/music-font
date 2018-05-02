import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import WrappedIndexPage from './routes/IndexPage';
import Products from './routes/Products';
// import dynamic from 'dva/dynamic'

function RouterConfig({ history,app }) {
  // const WrappedIndexPage = dynamic({
  //   app,
  //   models:['indexPage'],
  //   component: () => import('./routes/IndexPage')
  // })
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={WrappedIndexPage} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>

  );

}

export default RouterConfig;
