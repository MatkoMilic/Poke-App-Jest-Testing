module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
  ],
};
