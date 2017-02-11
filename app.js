/* @flow */

const loadContext = (callback: (context: Object) => void) => {
  // $FlowFixMe
  let context = require.context('./pages', true);
  if (module.hot) {
    (module: any).hot.accept(context.id, () => {
      // $FlowFixMe
      context = require.context('./pages', true);
      callback(context);
    });
  }

  callback(context);
};

export { loadContext };
