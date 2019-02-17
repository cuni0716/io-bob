module.exports = {
  plugins: [['module-resolver', {
    alias: {
      routes: './src/server/routes/',
      middlewares: './src/server/middlewares/',
      models: './src/server/models/',
      reducers: './src/app/reducers/',
      constants: './src/app/constants/',
    },
  }]],
  presets: ['@babel/env', '@babel/preset-react'],
};
