module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "babel"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "babel/quotes": 1,
    semi: ["error", "never"],
  },
}
