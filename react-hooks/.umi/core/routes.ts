import { ApplyPluginsType } from '/usr/local/lib/node_modules/umi/node_modules/_@umijs_runtime@3.0.12@@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/class",
    "exact": true,
    "component": require('@/pages/class.js').default
  },
  {
    "path": "/hooks",
    "exact": true,
    "component": require('@/pages/hooks.js').default
  },
  {
    "path": "/hooksAllApi",
    "exact": true,
    "component": require('@/pages/hooksAllApi.js').default
  },
  {
    "path": "/hooksTwo",
    "exact": true,
    "component": require('@/pages/hooksTwo.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
