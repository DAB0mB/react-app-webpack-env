const webpackConfigFile = require.resolve('react-scripts/config/webpack.config', { paths: [process.cwd()] });
const pathsFile = require.resolve('react-scripts/config/paths', { paths: [process.cwd()] });

const reactAppWebpackEnv = (env) => {
  const { cache } = require;
  Object.setPrototypeOf(cache, Object.prototype);

  cache.__defineSetter__(webpackConfigFile, (module) => {
    cache.__defineGetter__(webpackConfigFile, () => {
      return module;
    });

    module.__defineSetter__('exports', (base) => {
      const createWebpackConfig = (defaultEnv) => {
        // Requiring here, after react-scripts initialized all env vars
        const paths = require(pathsFile);
        // Force env if given so
        const config = base(env || defaultEnv);

        // If 'yarn build'
        if (process.env.NODE_ENV === 'production') {
          config.output.path = paths.appBuild;
        }

        return config;
      };

      module.__defineGetter__('exports', () => {
        return createWebpackConfig;
      });

      return createWebpackConfig;
    });
  });
};

module.exports = reactAppWebpackEnv;
