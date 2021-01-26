module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'transform-inline-environment-variables',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            "animations": ["./src/animations"],
            "components": ["./src/components"],
            "interfaces": ["./src/interfaces"],
            "store": ["./src/store"],
            "styles": ["./src/styles"],
            "template": ["./src/template"],
            "screens": ["./src/screens"],
            "router": ["./src/router"],
            "network": ["./src/network"],
            "locales": ["./src/locales"],
            "useAction": ["./src/hooks/useAction.tsx"],
            "i18n": ["./src/i18n.tsx"]
          },
        },
      ],
    ],
  };
};
