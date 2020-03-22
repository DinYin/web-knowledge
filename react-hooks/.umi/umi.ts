import './core/polyfill';

import { plugin } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType } from '/usr/local/lib/node_modules/umi/node_modules/_@umijs_runtime@3.0.12@@umijs/runtime/dist/index.js';
import { renderClient } from '/usr/local/lib/node_modules/umi/node_modules/_@umijs_renderer-react@3.0.12@@umijs/renderer-react/dist/index.js';




const getClientRender = (args: { hot?: boolean } = {}) => plugin.applyPlugins({
  key: 'render',
  type: ApplyPluginsType.compose,
  initialValue: () => {
    return renderClient({
      // @ts-ignore
      routes: require('./core/routes').routes,
      plugin,
      history: createHistory(args.hot),
      rootElement: 'root',
      defaultTitle: '',
    });
  },
  args,
});

const clientRender = getClientRender();
export default clientRender();


    window.g_umi = {
      version: '3.0.12',
    };
  

// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/routes', () => {
    getClientRender({ hot: true })();
  });
}
