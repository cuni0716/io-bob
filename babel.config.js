module.exports = {
  plugins: [['module-resolver', {
    alias: {
      routes: './src/server/routes/',
      models: './src/server/models/',
      reducers: './src/app/reducers/',
      constants: './src/app/constants/',
    },
  }]],
  presets: ['@babel/env', '@babel/preset-react'],
};
