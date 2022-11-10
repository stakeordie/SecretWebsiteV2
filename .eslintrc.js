module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    "vue/require-prop-type-constructor": "off",
    "vue/no-side-effects-in-computed-properties": "warn",
    indent: [
      "error",
      2,
      { SwitchCase: 1, ignoredNodes: ["ConditionalExpression"] },
    ],
  },
};
