# react-app-webpack-env

With `react-app-webpack-env` you can force the Webpack config environment of `react-scripts` to `development`. This means that you will be able to deploy an unminified version of your `react-app` to your cloud application platform of choice e.g. Heroku or Netlify. This is useful for development purposes.

## Usage

This package usually goes with `react-app-rewired`, so you would need to install a couple of things:

    $ yarn add react-app-rewired react-app-webpack-env

Then when defining the `config-overrides` file (if you're unfamiliar with this file, please see [reference](https://github.com/timarney/react-app-rewired#readme)), add the following code:

```js
import reactAppWebpackEnv from 'react-app-webpack-env';

reactAppWebpackEnv('development');

module.exports = () => {
  // Your overrides...
};
```

## LICENSE

MIT
