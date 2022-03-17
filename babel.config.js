module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: [
          'ios.ts',
          'android.ts',
          '.ts',
          'ios.tsx',
          'android.tsx',
          '.tsx',
          'jsx',
          '.js',
          '.json',
        ],
        alias: {
          assets: './src/assets',
          components: './src/components',
          navigations: './src/navigations',
          providers: './src/providers',
          utils: './src/utils',
          models: './src/models',
          config: './src/config',
        },
      },
    ],
  ],

};
