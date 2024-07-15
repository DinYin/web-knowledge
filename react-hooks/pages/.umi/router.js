import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/class',
    exact: true,
    component: require('../class.js').default,
  },
  {
    path: '/hooks',
    exact: true,
    component: require('../hooks.js').default,
  },
  {
    path: '/hooksAllApi',
    exact: true,
    component: require('../hooksAllApi.js').default,
  },
  {
    path: '/hooksOrigin',
    exact: true,
    component: require('../hooksOrigin.js').default,
  },
  {
    path: '/hooksTwo',
    exact: true,
    component: require('../hooksTwo.js').default,
  },
  {
    path: '/',
    exact: true,
    component: require('../index.js').default,
  },
  {
    path: '/onMouseEnter',
    exact: true,
    component: require('../onMouseEnter.js').default,
  },
  {
    path: '/useLayoutEffect',
    exact: true,
    component: require('../useLayoutEffect.js').default,
  },
  {
    path: '/useState',
    exact: true,
    component: require('../useState.js').default,
  },
  {
    component: () =>
      React.createElement(
        require('/usr/local/lib/node_modules/umi/node_modules/_umi-build-dev@1.16.6@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
